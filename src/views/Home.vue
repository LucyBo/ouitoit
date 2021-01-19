
<template>
<section>
  <div class="home" alt="Picture by Andrea Piacquadio from Pexels">
    <b-container>
      <b-row>
        <b-col class="text-left" sm="auto" md="6" lg="6" xl="6" >
          <p>Learning languages gives you a freedom to travel unexpected roads without fear.
          </p>
          <p>Learning with <span class="brand">Si to it </span> gives you a chance to acquire self-confidence in speaking all dialects of JavaScript.
          </p>
        </b-col>
        <b-col class="girl-img">
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
          <b-col class="deko" sm="auto" md="6" lg="3" xl="3" >
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
  background: url("../assets/andrea.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
  background-color: black;
  .row {
    padding: 8rem 0;
    color: white;
    .text-left {
      margin-left: 0rem;
      margin-top: 4rem;
      margin-bottom: 14rem;
    }
  }
  p {
    margin-top: 3rem;
    color: black;
    font-size: 2rem;
  }
    .brand {
    font-family: Sacramento;
    font-size: 2rem;
    color: black;
    }
}

  .steps {
    padding: 3rem 0rem;
    font-size: 1.2rem;
    .deko {
    background: url("../assets/deko.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 2rem 0;
    }
  }

 @media (min-width: 992px) and (max-width: 1199.98px) {
  .home {
    background-position: center;
    .row{
    .text-left{
      margin-top: 3rem;
      margin-bottom: 6rem;
    }
    }
      .steps {
      padding: 1rem 0rem;
      font-size: 1.2rem;
      .deko {
      padding: 3rem 1rem;
      width: 100%;
      background-size: 90%;
      }
    }
  }
}

  @media (min-width: 768px) and (max-width: 991.98px) {
    .home {
      background-position: center;
      .row{
      .text-left{
        margin-top: 3rem;
        margin-bottom: 6rem;
      }
    }
  }
}

  @media (min-width: 576px) and (max-width: 767.98px) {
    .home {
      background-position: center;
      .steps {
      padding: 3rem 0rem;
      font-size: 1.2rem;
      .deko {
      padding: 4rem 0;
      width: 100%;
      }
    }
  }
}

  @media (max-width: 575.98px) {
  .home {
      background-position: center;
      .row {
      padding: 8rem 0;
      color: white;
      .text-left {
        margin-left: 0rem;
        margin-top: 4rem;
        margin-bottom: 4rem;
      }
    }
    p {
      margin-top: 3rem;
      font-size: 1.2rem;
    }
      .brand {
      font-family: Sacramento;
      font-size: 1.8rem;
      }
  }

      .steps {
      padding: 4rem 1rem;
      font-size: 1.1rem;
      .deko {
      padding: 3rem 0;
      }
    }
  }

</style>
