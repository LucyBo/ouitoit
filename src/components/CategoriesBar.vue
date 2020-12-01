<template>
  <ul id="categories">
  <Category
    v-for="category in uniqueCategories(flashcards)"
    v-bind:category= "category.value"
    v-bind:key= "category.key"
    >
  </Category>
  </ul>
</template>

<script>

import Category from '@/components/Category.vue'
import flashcards from '../assets/flashccards.js'

export default {
  name: 'CategoriesBar',
  components: {
    Category
  },
  data () {
    return {
      flashcards: flashcards
    }
  },
  methods: {
    uniqueCategories (flashcards) {
      const categories = flashcards.map(flashcard => flashcard.category)
      const setCtg = new Set(categories)
      const uniqValuesSet = [...setCtg]
      return uniqValuesSet.map((value, idx) => {
        return {
          key: idx,
          value: value
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
#categories {
  padding-top: 0rem;
}

</style>
