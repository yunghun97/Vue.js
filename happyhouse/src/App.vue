<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
    <footer-menu></footer-menu>
  </div>
</template>
<script>
import NavHeader from "@/components/layout/Header.vue"
import FooterMenu from "@/components/layout/Footer.vue"

export default {
    name: "App",
    components:{
      NavHeader,
      FooterMenu,
    },
}
</script>
<style>
</style>
