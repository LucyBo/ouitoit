<template>
  <section id="admin">
    <h1> Secret Admin Panel </h1>
    <b-tabs content-class="mt-3" fill>
      <b-tab id="flashcards" title="Flashcards" active><AdminNewFlashcard/><AdminFlashcard/></b-tab>
      <b-tab title="Users"><p><AdminUsers/></p></b-tab>
      <b-tab title="Stats"><p><AdminStats/></p></b-tab>
  </b-tabs>
  </section>
</template>

<script>
import AdminFlashcard from '@/components/AdminFlashcard.vue'
import AdminUsers from '@/components/AdminUsers.vue'
import AdminStats from '@/components/AdminStats.vue'
import AdminNewFlashcard from '@/components/AdminNewFlashcard.vue'
export default {
  name: 'Admin',
  components: {
    AdminFlashcard,
    AdminUsers,
    AdminStats,
    AdminNewFlashcard
  }
}
</script>

<style scoped lang="scss">
#admin {
  padding-top: 8rem;
}
</style>
