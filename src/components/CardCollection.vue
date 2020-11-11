<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col sm="12" md="6" lg="4"><Card/></b-col>
      <b-col sm="12" md="6" lg="4"><Card/></b-col>
      <b-col sm="12" md="6" lg="4"><Card/></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'CardCollection',
  components: {
    Card
  }
}
</script>

<style lang="scss">
</style>
