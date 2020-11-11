<template>
  <div>
    <Navbar/>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
      <CardCollection/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardCollection from '@/components/CardCollection.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    CardCollection
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
  font-family: "Rumble-Brave";
  src: local("Rumble-Brave"),
   url(./fonts/Rumble-Brave.otf) format("opentype");
}
</style>
