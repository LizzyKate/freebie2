<template>
  <div id="app">
    <Nav></Nav>
  <!-- firstly components that are common to every page like the nav and the footer be here in one file -->
  <router-view ></router-view>
  <Footer></Footer>
  </div>
</template>

<script>

import  './assets/css/main.css';
import './assets/css/style.css';
import  './assets/fonts/css/all.css';
import Nav from './components/page 2/nav';
// always use initial caps when dealing with componnets
import Footer from './components/page1/footer'

export default {
  components:{
    // use string only when there is space
    Nav:Nav,
    Footer:Footer
  },
}
</script>

<style>

</style>
