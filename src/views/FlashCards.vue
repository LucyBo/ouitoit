<template>
  <div>
    <CardCollection/>
    <CategoriesBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardCollection from '@/components/CardCollection.vue'
import CategoriesBar from '../components/CategoriesBar.vue'

export default {
  name: 'FlashCards',
  components: {
    CardCollection,
    CategoriesBar
  }
}
</script>
