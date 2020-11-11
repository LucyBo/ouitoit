<template>
  <div id="card">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      background="#ababab"
      img-width="480"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <div class="image-overlay"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
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
  img {
  //   background: repeating-linear-gradient(
  //   0deg,
  //   transparent,
  //   transparent 40px,
  //   #fff 40px,
  //   #fff 80px
  // ),
  // linear-gradient(
  //   to bottom,
  //   #F66928,
  //   #F6812C
  // )
  background-color: orange;
  border: 1px solid orange;

  }
  h3 {
    font-family: "Rumble-Brave", Helvetica, Arial;
    color: black;
    font-size: 3rem;
    text-shadow: none;
  }
  p {
    color: black;
    text-shadow: none;
  }
}

</style>
