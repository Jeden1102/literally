<template>
  <div id="nav" class="flex items-center justify-center space-x-8">
    <router-link class="flex items-center justify-center" to="/">WordFinder <img src="@/assets/logo2.png" class="h-8 w-8 mx-1" alt=""></router-link>
    <router-link to="/about">About</router-link>
  </div>
  <Tips v-if="!showTips" v-on:hide-tips="showTips = false"/>
  <router-view class="w-3/4 mx-auto p-8 box"/>
  <notifications group="foo" />
</template>
<script>
import Tips from '@/components/Tips.vue';
export default {
  data() {
    return {
      showTips:true,
    }
  },
  components:{
    Tips,
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
.box{
  -webkit-box-shadow: 0px 0px 21px -14px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 0px 21px -14px rgba(66, 68, 90, 1);
box-shadow: 0px 0px 21px -14px rgba(66, 68, 90, 1);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
