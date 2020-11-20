<template>
  <div id="card">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      img-width="480"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Question" img-blank img-alt="Blank image">
        <div class="image-overlay"></div>
        <p>
          {{flashcard.question}}
        </p>
      </b-carousel-slide>

        <b-carousel-slide caption="Answer" img-blank img-alt="Blank image">
        <p>
          {{flashcard.answer}}
        </p>
        <p>
          {{flashcard.timestamp}}
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
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
    top: 0;
    bottom: auto;
  }

  h3 {
    font-family: Lato, Helvetica, Arial;
    color: black;
    font-size: 2rem;
    text-shadow: none;
    margin-top: 0;
  }
  p {
    color: black;
    text-shadow: none;
  }
   pre code {
      font-family: Courier;
      color: black;
      text-shadow: none;
      display: block;
      margin-top: 0;
    }
  .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234481eb' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234481eb' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }

}

</style>
