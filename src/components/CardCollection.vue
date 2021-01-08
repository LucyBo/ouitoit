<template>
  <div id="card-collection" class="container-fluid">
    <b-row>
        <Card2
          v-for="(flashcard) in flashcards"
          v-bind:flashcard = "flashcard"
          v-bind:key= "flashcard.id"
          :items="flashcard"
          :per-page="perPage"
          :current-page="currentPage">
        </Card2>
    </b-row>
      <!-- <div class="mt-3">
      <b-pagination v-model="currentPage" :total-rows="rows" align="center" :per-page="perPage"></b-pagination>
    </div> -->
  </div>
</template>

<script>
import Card2 from '@/components/Card2.vue'

export default {
  name: 'CardCollection',
  components: {
    Card2
  },
  data () {
    return {
      flashcards: [],
      perPage: 3,
      currentPage: 1
      // items: flashcards
    }
  },
  computed: {
    rows () {
      return this.flashcards.length
    }
  },
  created () {
    fetch('/api/flashcards')
      .then(response => response.json())
      .then(data => {
        this.flashcards = data
      })
  }
}

</script>

<style scoped lang="scss">
#card-collection {
  width: 80vw;
  padding: 6rem 0;
  .card {
    padding: 1rem 1rem;
    border: none;
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
