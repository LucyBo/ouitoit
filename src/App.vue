<template>
  <div id="app">
    <Navbar/>
    <!-- <CallToAction/> -->
    <router-view/>
    <div id="app">
    </div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
// import CallToAction from '@/components/CallToAction.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
    // CallToAction
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;&family=Sacramento&display=swap');

$body-font-family: 'Lato';

#app {
  font-family: $body-font-family, sans-serif !important;
  font-weight: 100 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
  font-family: "Sacramento";
  src: local("Sacramento"),
   url(./fonts/Sacramento.ttf) format("truetypefont");
}

@font-face {
  font-family: "Lato";
  src: local("Lato"),
   url(./fonts/Lato-Thin.ttf) format("truetypefont");
}
</style>
