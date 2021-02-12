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

export default {
  name: 'CategoriesBar',
  components: {
    Category
  },
  data () {
    return {
      flashcards: []
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
  },
  created () {
    fetch('http://ec2-3-231-156-48.compute-1.amazonaws.com/flashcard')
      .then(response => response.json())
      .then(data => {
        this.flashcards = data
      })
  }
}
</script>

<style scoped lang="scss">
#categories {
  padding-top: 0rem;
}

</style>
