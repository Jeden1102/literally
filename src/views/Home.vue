<template>
  <div class="home text-black flex items-center justify-center flex-col">
  <Alert v-on:close-alert="showAlert=false" v-if="showAlert">{{alertText}}</Alert>
  <EndModal v-if="endGame" v-on:restart="restart"  :result="won" :haslo="drawnWord"/>
    <div class="circle text-white">
      {{ drawnWord }}
    </div>
    <div class="flex space-x-2 " v-for="(row,index) in boxes" :key="index">
        <div  v-for="box in row" :id="`boxik-big-${box.id}`" :key="box.id"  class="boxik flex rounded items-center my-1 justify-center border border-gray-300  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl" v-bind:class="{ 'bg-dark-green text-white': box.status == 'direct','bg-dark-yellow text-white': box.status == 'includes', 'bg-gray-400': box.status == 'none'}">
           <p  :id="`boxik-${box.id}`">{{ box.letter }}</p> 
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { gsap } from "gsap";
import Alert from '@/components/Alert.vue';
import EndModal from '@/components/EndModal.vue';
export default {
  name: 'Home',
  components: {
    Alert,
    EndModal
  },
  data() {
    return {
      wordsList:null,
      drawnWord:null,
      boxes:[[],[],[],[],[],[]],
      wordTyped:0,
      letterTyped:0,
      showBoxes:false,
      showAlert:false,
      alertText:'',
      endGame:false,
      won:true,
    }
  },
  methods: {
    restart(){
      this.wordsList=null
      this.drawnWord=null
      this.boxes=[[],[],[],[],[],[]]
      this.wordTyped=0
      this.letterTyped=0
      this.showBoxes=false
      this.endGame=false
      this.won=true
          this.loadBoxes();

    window.addEventListener('keydown', this.registerLetter)
    this.getWordList();
    this.generateBoxesObjects();
    },
    getWordList(){
     fetch('http://localhost:8080/nowe.txt')
    .then(response => response.text())
    .then((data) => {
      this.wordsList = data;
      this.randomWord();
    })
    },
    randomWord(){
      let arr =this.wordsList.split(/\r?\n/);
      let rand = Math.floor(Math.random()*arr.length);
      this.drawnWord = arr[rand];
    },
    generateBoxesObjects(){
      let arr = [];
      for(let i =0;i<30;i++){
        let obj = {
          id:i,
          filled:false,
          letter:'',
          status:null,
        }
        arr.push(obj);
      }
      this.boxes[0] = arr.splice(0,5);
      this.boxes[1] = arr.splice(0,5);
      this.boxes[2] = arr.splice(0,5);
      this.boxes[3] = arr.splice(0,5);
      this.boxes[4] = arr.splice(0,5);
      this.boxes[5] = arr.splice(0,5);
    },
    registerLetter(event){
      let key = event.key;
      if(key.length==1 && this.letterTyped<5){
      let tmp = this.wordTyped+1;
      let tmpLetter = this.letterTyped+1;
      let x =0;
      if(this.wordTyped==0){
        x = (tmp*tmpLetter)-1
      }else{
        x = (((tmp-1)*5)+tmpLetter)-1;
      }
      this.boxes[this.wordTyped][this.letterTyped].letter = key.toUpperCase();
      gsap.from(`#boxik-${x}`, {
      duration: 2,
      scale: 0.5, 
      opacity: 0, 
      stagger: 0.2,
      ease: "elastic", 
      force3D: true
      });
      this.letterTyped++;
      }
      if(key == "Backspace" && this.letterTyped>0){
        this.letterTyped--;
        this.boxes[this.wordTyped][this.letterTyped].letter = '';
      }
      if(key == "Enter"){
        this.wordTyped++;
                let userWord = this.boxes[this.wordTyped-1];
        let userString = `${userWord[0].letter}${userWord[1].letter}${userWord[2].letter}${userWord[3].letter}${userWord[4].letter}`;
        if(this.wordsList.includes(userString.toLowerCase())){


        console.log(userString)
          console.log("ok");
        if(this.letterTyped==5){
      let x =0;
      if(this.wordTyped==0){
        x = 0;
      }else{
        x = this.wordTyped*5;
      }
      for(let i=x;i<x+5;i++){
      gsap.from(`#boxik-big-${i}`, {
      duration: 2,
      scale: 0.5, 
      opacity: 0, 
      stagger: 0.2,
      ease: "elastic", 
      force3D: true
      });
      }
        this.letterTyped =0;
        console.log(userWord);
        let drawnedWord = this.drawnWord.toUpperCase().split("");
        let direct = 0;
        userWord.forEach((element,index) => {
          if(element.letter == drawnedWord[index]){
            element.status = "direct";
            direct++;
          }else if(this.drawnWord.toUpperCase().includes(element.letter)){
            element.status = "includes";
          }else{
            element.status = "none";
          }
        });
        if(direct == 5){
          this.endGame = true;
          this.won = true;
        }
        if(this.wordTyped == 6 && direct!= 5){
          this.endGame = true;
          this.won = false;
        }
        }else{
        this.alertText = "Słowo musi zawierać 5 liter"
        this.showAlert=true;
        this.wordTyped--;
        }
      }else{
        console.log("nie ok");
          this.wordTyped--;
        this.alertText = "Takie słowo nie istnieje :("
        this.showAlert=true;
                if(this.letterTyped==5){
              let x =0;
              if(this.wordTyped==0){
                x = 0;
              }else{
                x = this.wordTyped*5;
              }
              for(let i=x;i<x+5;i++){
              gsap.from(`#boxik-big-${i}`, {
              duration: 1,
              scale: 0.5, 
              opacity: 0, 
              stagger: 0.2,
              ease: "bounce", 
              force3D: true
              });
              }
      }
      }
      }
//TODO : SPRAWDZ CZY SŁOWO JEST W SŁOWNIKU + W PROPSIE DO KONCZEGO DODAĆ INFO JAKIE BYLO DOBRE SŁOWO 

    },
      loadBoxes(){
    setTimeout(()=>{
    gsap.from(".boxik", {
      duration: 2,
      scale: 0.5, 
      opacity: 0, 
      delay: 0.5, 
      stagger: 0.2,
      ease: "elastic", 
      force3D: true
    });
    this.showBoxes=true;
    },1)
      }
  },
  mounted() {
    this.loadBoxes();
    window.addEventListener('keydown', this.registerLetter)
    this.getWordList();
    this.generateBoxesObjects();
  },
}
</script>
