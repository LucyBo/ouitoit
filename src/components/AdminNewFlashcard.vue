<template>
  <div id="admin-new-flashcard" class="container">
    <b-button variant="warning" size="sm" @click="formToggle()">{{showForm ? 'Close' : 'Add New Flashcard' }}</b-button>
    <b-row v-if="showForm">
      <b-col>
        <b-card class="question mx-auto" >
          <b-card-text v-model="newQuestion">
            <div v-html="compiledQuestion"></div>
          </b-card-text>
        </b-card>
        <b-card class="answer mx-auto">
          <b-card-text  v-model="newAnswer">
            <div v-html="compiledAnswer"></div>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col>
          <b-form>
            <b-form-group
              label="Category:"
              label-cols="3" label-cols-lg="2"><b-form-input v-model="newCategory"></b-form-input></b-form-group>

            <b-form-group
              label="Style:"
              label-cols="3" label-cols-lg="2">
            <b-form-input v-model="newStyle"></b-form-input></b-form-group>

            <b-form-group
              label="Question:"
              label-cols="3" label-cols-lg="2">
            <textarea v-model="newQuestion"></textarea ></b-form-group>

            <b-form-group
              label="Answer:"
              label-cols="3" label-cols-lg="2">
            <textarea v-model="newAnswer"></textarea></b-form-group>

          <b-button variant="success" size="sm" @click="submitForm()">Submit</b-button>
          </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import _ from 'lodash'
import marked from 'marked'
import axios from 'axios'

export default {
  name: 'AdminNewFlashcard',
  data () {
    return {
      newCategory: '',
      newStyle: '',
      newQuestion: '',
      newAnswer: '',
      showForm: false,
      input: '# question'
    }
  },
  methods: {
    submitForm () {
      console.log('submit clicked!')
      axios({
        url: 'http://ec2-3-231-156-48.compute-1.amazonaws.com/flashcard',
        data: {
          category: this.newCategory,
          style: this.newStyle,
          question: this.newQuestion,
          answer: this.newAnswer
        },
        method: 'POST'
      })
        // .then(this.$router.go(0))
        .then(console.log(this.newId))
        .catch(error => {
          console.log(error)
          this.error = 'Sth went wrong. Please, try again later'
        })
    },
    formToggle () {
      this.showForm = !this.showForm
    },
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  },
  computed: {
    compiledMarkdown () {
      return marked(this.input)
    },
    compiledQuestion () {
      return marked(this.newQuestion)
    },
    compiledAnswer () {
      return marked(this.newAnswer)
    }
  }
}
</script>

<style scoped lang="scss">
#admin-new-flashcard {
  padding: 3rem 0;
  .row {
    padding: 2rem 0;
    textarea {
      min-height: 135px;
      width: 100%;
      border: 1px solid #ced4da;
      border-radius: 5px;
    }
  }
  .question {
    background: url("../assets/questionmark.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 250px;
    width: 250px;
    margin-bottom: 1rem;
  }
  .answer {
    background: url("../assets/answermark.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 250px;
    width: 250px;
  }
}
</style>
