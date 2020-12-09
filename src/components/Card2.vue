<template>
<b-col class="card" sm="12" md="6" lg="4">
  <div id="card">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      img-width="480"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="" img-blank img-alt="Blank image">
        <div class="image-overlay"></div>
        <div class="question">
          {{flashcard.question}}
        </div>
      </b-carousel-slide>

      <b-carousel-slide caption="" img-blank img-alt="Blank image">
        <div class="answer">
          {{flashcard.answer}}
        </div>
      </b-carousel-slide>

    </b-carousel>
      <p class="timestamp">
          {{flashcard.createdAdd}}
      </p>
  </div>
  </b-col>
</template>

<script>
export default {
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
  },
  props: ['flashcard']
}
</script>

<style lang="scss">

#card {
  font-family: Lato;
  .carousel{
  -webkit-box-shadow: 0px 0px 10px 5px rgba(242,242,242,0.9);
  box-shadow: 0px 0px 10px 5px rgba(242,242,242,0.9) !important;
  }

  img {
  background-color: #fff;
  }

  .carousel-caption {
    top: 1rem;
    bottom: auto;
    height: 100%;
  }

  h3 {
    font-family: Lato, Helvetica, Arial;
    color: black;
    font-size: 1.8rem;
    text-shadow: none;
    margin-top: 0;
  }
  .question {
    color: black;
    text-shadow: none;
    min-height: 80%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    background: url("../assets/questionmark.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

  }

  .answer{
    color: black;
    text-shadow: none;
    min-height: 80%;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    background: url("../assets/answermark.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
   pre code {
      font-family: Courier;
      color: black;
      text-shadow: none;
      display: block;
      margin-top: 0;
    }
  .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFEB5A' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFEB5A' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }
  .timestamp {
    padding-top: 5px;
    color: grey;
  }
}

 @media (min-width: 992px) and (max-width: 1199.98px) {
}

  @media (min-width: 768px) and (max-width: 991.98px) {
}

  @media (min-width: 576px) and (max-width: 767.98px) {
    #card {
    padding-top: 5rem;
    h3 {
    font-size: 1.5rem;
  }
  }

}

  @media (max-width: 575.98px) {
  #card {
    padding-top: 5rem;
    h3 {
    font-size: 1.3rem;
  }
  }
 }

</style>
