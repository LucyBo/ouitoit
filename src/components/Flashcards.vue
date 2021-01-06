<template>
  <div>
  <h1>letters</h1>
    <ul class="alphabet">
      <li v-for="letter in letters" :key="letter.name">
        <span>{{ letter.name }}</span>
        <div class="tooltip">{{ letter.alt }}</div>
      </li>
    </ul>
    </div>
</template>

<script>
// Importing array from our JSON file
import json from '@/assets/alphabet.json'
export default {
  name: 'Flashcards',
  data: function () {
    return {
      letters: json.alphabet // passing array data into Vue
    }
  },
  computed: {
    lettersAmount: function () {
      return this.letters.length
    }
  },
  mounted () {
    // Checking if everything works, delete this right after you see that everything works
    console.log(this.letters)
  }
}
</script>
