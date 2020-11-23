
<template>
<section>
  <div class="home">
    <b-container>
      <b-row>
        <b-col class="text-left" sm="auto" md="6" lg="6" xl="6" >
          <p>Learning languages gives you a freedom to travel unexpected roads without fear.
          </p>
          <p>Learning with <span class="brand">Si to it </span> gives you a chance to acquire self-confidence in speaking all dialects of JavaScript.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <b-container>
  <div class="steps">
    <b-row class="text-center align-items-center">
          <b-col class="deko" sm="auto" md="6" lg="3" xl="3" >
            Discover theory and use what you learn
          </b-col>
          <b-col class="deko" sm="auto" md="6" lg="3" xl="3" >
            Remeber everything and back to review whenerver you want
          </b-col>
          <b-col class="deko" sm="auto" md="6" lg="3" xl="3" >
            Use social media for improving your skills
          </b-col>
          <b-col class="deko" sm="auto" md="3" lg="3" xl="3" >
            Learn easy as a child at any time!
          </b-col>
        </b-row>
  </div>
  </b-container>
</section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped lang="scss">
.home {
  background: url("../assets/pex.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-weight: 700;
  .row {
    padding: 8rem 0;
    font-family: Lato;
    color: white;
    font-weight: 700;
    .text-left {
      margin-left: 0rem;
    }
  }
  p {
    margin-top: 3rem;
    color: white;
    font-family: Lato;
    font-size: 2rem;
  }
    .brand {
    font-family: Sacramento;
    font-size: 2.3rem;
    color: #FFEB5A;
    }
}

  .steps {

    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 6rem 0;
    font-size: 1.2rem;
    .deko {
    background: url("../assets/deko.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    }
  }

 @media (min-width: 992px) and (max-width: 1199.98px) {
}

  @media (min-width: 768px) and (max-width: 991.98px) {
}

  @media (min-width: 576px) and (max-width: 767.98px) {

}

  @media (max-width: 575.98px) {

 }

</style>
