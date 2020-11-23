<template>
  <div id="card-collection" class="container-fluid">
    <b-row>
        <Card2
          v-for="flashcard in flashcards"
          v-bind:flashcard = "flashcard"
          v-bind:key= "flashcard.id">
        </Card2>
    </b-row>
  </div>
</template>

<script>
import Card2 from '@/components/Card2.vue'
import flashcards from '../assets/flashccards.js'

export default {
  name: 'CardCollection',
  components: {
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
