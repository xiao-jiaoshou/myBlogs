<template>
  <div id="app">
    <div class="nav">
      <Nav></Nav>
    </div>
    <router-view />
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    Nav,
    Footer
  }
}
</script>
