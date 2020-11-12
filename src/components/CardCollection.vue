<template>
  <b-container id="card-collection" class="bv-example-row">
    <b-row>
      <b-col class="card" sm="12" md="6" lg="4"><Card/></b-col>
      <b-col class="card" sm="12" md="6" lg="4"><Card/></b-col>
      <b-col class="card" sm="12" md="6" lg="4"><Card/></b-col>
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

<style scoped lang="scss">
#card-collection {
  padding: 3rem 0;
  .card {
    padding: 1rem 1rem;
    border: none;
  }
}
</style>
