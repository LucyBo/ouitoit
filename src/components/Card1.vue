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
      <b-carousel-slide caption="What are the six primitive JavaScript data types?" img-blank img-alt="Blank image">
        <div class="image-overlay"></div>
      </b-carousel-slide>

        <b-carousel-slide caption="JavaScript has six primitive types:" img-blank img-alt="Blank image">
          <p>number</p>
          <p>string</p>
          <p>boolean</p>
          <p>null</p>
          <p>undeifned</p>
          <p>symbol</p>
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
  }
}
</script>

<style lang="scss">

#card {
  font-family: Lato;
  .carousel{
  -webkit-box-shadow: 0px 0px 10px 5px rgba(242,242,242,0.9);
  box-shadow: 0px 0px 10px 5px rgba(242,242,242,0.9);
  }

  img {
  background-color: #fff;
  }

  .carousel-caption {
    top: 0;
    bottom: auto;
    color: black;
    text-shadow: none;
  }
  h3 {
    font-family: Lato, Helvetica, Arial;
    color: black;
    font-size: 1.5rem;
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
