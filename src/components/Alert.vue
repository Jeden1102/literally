<template>
    <div @click="closeAlert" class="alert-box fixed right-4 bottom-4 bg-dark-green text-white  p-5 rounded w-1/2">
        <h2>ALERT</h2>
        <p><slot></slot></p>
    </div>
</template>

<script>
import { gsap } from "gsap";

    export default {
        mounted() {
            gsap.from(".alert-box", {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.2, 
            stagger: 0.2,
            ease: "elastic", 
            force3D: true
            });
            setTimeout(()=>{
            gsap.to(".alert-box", {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.2, 
            stagger: 0.2,
            ease: "elastic", 
            force3D: true
            });
            this.closeAlert();
            },5000)
        },
        methods: {
            closeAlert(){
            gsap.to(".alert-box", {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.2, 
            stagger: 0.2,
            ease: "elastic", 
            force3D: true
            });
            setTimeout(()=>{
            this.$emit('close-alert');
            },1000)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>