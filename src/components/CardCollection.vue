<template>
  <div id="card-collection" class="container-fluid">
    <b-row>
      <b-col class="card" sm="12" md="6" lg="4"><Card/></b-col>
      <b-col class="card" sm="12" md="6" lg="4"><Card/></b-col>
      <b-col class="card" sm="12" md="6" lg="4"><Card1/></b-col>
    </b-row>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Card1 from '@/components/Card1.vue'
export default {
  name: 'CardCollection',
  components: {
    Card,
    Card1
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
