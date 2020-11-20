
<template>
  <div class="home">
    <b-container-fluid>
      <b-row>
        <b-col class="text-left" sm="auto" md="6" lg="6" xl="6" >
          <p>Learning languages gives you a freedom to travel unexpected roads without fear. </p>
          <p>Learning with <span class="brand">Oui to it</span> gives you a chance to acquire self-confidence in speaking all dialects of JavaScript.</p>
        </b-col>
        <b-row>
                  <b-col sm="12" md="6" lg="3" xl="3" >
                    Discover theory and use what you learn
                  </b-col>
                  <b-col sm="12" md="6" lg="3" xl="3" >
                    Remeber everything and back to review whenerver you want
                  </b-col>
                  <b-col sm="12" md="6" lg="3" xl="3" >
                    Use social media for improving your skills
                  </b-col>
                  <b-col sm="12" md="3" lg="3" xl="3" >
                    Learn easy as a child!
                  </b-col>
        </b-row>
      </b-row>
    </b-container-fluid>
    <img alt="Vue logo" src="../assets/card-croissant.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }

  }
}
</script>

<style scoped lang="scss">
.home {
  background: url("../assets/home-page.jpeg");
  opacity: 0.9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  p {
    color: black;
    font-family: Alice;
    font-size: 2rem;
  }
    .brand {
    font-family: Sacramento;
    font-size: 2.3rem;
    color: black;
    }

  #home-card {
    background-color: orange;
    opacity: 0.7;
    max-height: 480px;
  .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffd736' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }
  }

}

</style>
