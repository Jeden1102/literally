<template>
    <div class="w-1/2 p-6 container relative">
    <img @click="hideTips" src="@/assets/close.png" class="w-8 h-8 absolute right-2 top-2 cursor-pointer" alt="">
    <p>Odgadnij słowo w 6 próbach</p>
    <p>Każda próba to pięcioliterowe słowo znajdujęce się w słowniku języka polskiego. Kliknij "enter" aby zatwierdzić próbę.</p>
    <p>Po każdej próbie kolor kafelka zdradzi, czy zbliżyłeś się do odgadnięcia hasła.</p>
    <hr>
    <div class="flex flex-col justify-center items-center space-y-6 p-6">
    <p class="font-bold">Przykłady</p>
    <div class="flex space-x-2">
        <div class="flex items-center border border-gray-600 justify-center p-4 bg-dark-green w-20 h-20 text-white text-2xl">
            S
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            K
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            L
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            E
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            P
        </div>
    </div>
    <p>Litera <span class="font-bold">S</span> znajduje się w odgadywanym słowie na właściwym miejscu.</p>

    <div class="flex space-x-2">
        <div class="flex items-center border border-gray-600 justify-center p-4 bg-gray-100 w-20 h-20 text-black text-2xl">
            B
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            Ł
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-dark-yellow text-white  w-20 h-20 text-2xl">
            O
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            T
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            O
        </div>
    </div>
    <p>Litera <span class="font-bold">O</span> znajduje się w odgadywanym słowie, ale na innym miejscu.</p>


    <div class="flex space-x-2">
        <div class="flex items-center border border-gray-600 justify-center p-4 bg-gray-100 w-20 h-20 text-black text-2xl">
            S
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            P
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            O
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-400 text-black  w-20 h-20 text-2xl">
            R
        </div>
        <div class="flex items-center justify-center border border-gray-600  p-4 bg-gray-100 text-black  w-20 h-20 text-2xl">
            O
        </div>
    </div>
    <p>Litera <span class="font-bold">R</span> nie występuje w szukanym słowie.</p>

    </div>
    <h2>Powodzenia </h2>
    <img src="@/assets/clover.png" class="w-8 h-8 mx-auto" alt="">
<button @click="hideTips" class="my-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-700">Graj</button>
    </div>
</template>

<script>
    export default {
        methods: {
            hideTips(){
                this.$emit('hide-tips');
            }
        },
    }   
</script>

<style  scoped>
.container{
    background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.27 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
position: fixed;
left:50%;
top:50%;
transform: translate(-50%,-50%);
}
</style>