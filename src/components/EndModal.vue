<template>
    <div class="container w-1/2 p-6 z-10 flex items-center justify-center flex-col space-y-4">
        <div v-if="!result" class="flex items-center justify-center flex-col space-y-4">
            <img src="@/assets/loser.png" alt="">
            <h2 class="text-3xl text-center">Hasło <b>{{haslo}}</b></h2>
            <h3 class="text-red-500 text-2xl text-center">Przegrałeś..:(</h3>
            <button @click="restart" class="my-4  justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-700 mx-auto ">Spróbuj ponownie</button>
        </div>
        <div class="flex items-center justify-center flex-col space-y-4" v-else>
                        <h2 class="text-3xl text-center">Hasło <b>{{haslo}}</b></h2>
            <img src="@/assets/winner.png" alt="">
            <h3 class="text-green-500 text-2xl text-center">Grrratulacje :)))</h3>
            <button @click="restart" class="my-4  justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-700 mx-auto ">Spróbuj ponownie</button>
        </div>
    </div>
</template>

<script>
    export default {
        props:["result","haslo"],
        methods: {
            restart(){
                this.$emit('restart');
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