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
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Question" img-blank img-alt="Blank image">
        <div class="image-overlay"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

        <b-carousel-slide caption="Answer" img-blank img-alt="Blank image">
        <pre><code class="text-left">body {
background-color: lightblue;
}
h1 {
color: white;
text-align: center;
}
p {
font-family: verdana;
font-size: 20px;
}
        </code></pre>
      </b-carousel-slide>
    </b-carousel>
    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
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
    color: black;
    font-size: 2rem;
    margin-top: 0;
  }
  p {
    color: black;
  }
   pre code {
      font-family: Courier;
      color: black;
      display: block;
      margin-top: 0;
    }

  .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFEB5A' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFEB5A' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }
}

</style>
