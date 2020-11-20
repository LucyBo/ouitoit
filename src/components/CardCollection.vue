<template>
  <div id="card-collection" class="container-fluid">
    <b-row>
      <!-- <b-col class="card" sm="12" md="6" lg="4"><Card/></b-col>
      <b-col class="card" sm="12" md="6" lg="4"><Card/></b-col>
      <b-col class="card" sm="12" md="6" lg="4"><Card1/></b-col> -->
      <!-- <b-col class="card" sm="12" md="6" lg="4"> -->
        <Card2
          v-for="flashcard in flashcards"
          v-bind:flashcard = "flashcard"
          v-bind:key= "flashcard.id">
        </Card2>
      <!-- </b-col> -->
    </b-row>
  </div>
</template>

<script>
// import Card from '@/components/Card.vue'
import Card2 from '@/components/Card2.vue'
import flashcards from '../assets/flashccards.js'

console.log(flashcards.map(e => e.timestamp).map(ts => new Date(ts)))

export default {
  name: 'CardCollection',
  components: {
    // Card,
    // Card1
    Card2
  },
  data () {
    return {
      flashcards: flashcards
    }
  }
}
</script>

<style scoped lang="scss">
#card-collection {
  width: 80vw;
  padding: 3rem 0;
  .card {
    padding: 1rem 1rem;
    border: none;
  }
}
</style>
