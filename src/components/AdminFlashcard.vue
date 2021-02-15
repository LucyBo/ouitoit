<template>
  <div id="admin-flashcard" class="container">
    <div
      v-for="(flashcard, index) in flashcards"
      v-bind:flashcard = "flashcard"
      v-bind:key= "flashcard.id">
      <div class="row">
      <div class="col">{{index}}</div>
      <div class="col">{{flashcard.id}}</div>
      <div class="col">{{flashcard.style}}</div>
      <div class="col" id="question">{{flashcard.question}}</div>
      <div class="col" id="answer">{{flashcard.answer}}</div>
      <div class="col" id="edit">
        <button @click="showEditSection(flashcard.id)" class="btn btn-primary">Edit</button>
      </div>
      <div id="delete">
        <button @click="deleteFlashcard(flashcard.id)" class="btn btn-danger">Delete</button></div>
      </div>
      <div
      class="edit-window row text-center" v-if="isEditing === flashcard.id">
        <button class="btn btn-info" id="resetEdition" @click="resetEditSection">Close edition</button>
        <div id="admin-edit-flashcard" class="container">
          <b-row >
            <b-col>
              <b-card class="question mx-auto" >
                <b-card-text v-model="editedQuestion">
                  <div v-html="compiledQuestion"></div>
                </b-card-text>
              </b-card>
              <b-card class="answer mx-auto">
                <b-card-text  v-model="editedAnswer">
                  <div v-html="compiledAnswer"></div>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col>
                <b-form v-bind:flashcard = "flashcard">
                  <b-form-group
                    label="Category:"
                    label-cols="3" label-cols-lg="2"><b-form-input v-model="editedCategory">
                    </b-form-input></b-form-group>

                  <b-form-group
                    label="Style:"
                    label-cols="3" label-cols-lg="2">
                  <b-form-input v-model="editedStyle"></b-form-input></b-form-group>

                  <b-form-group
                    label="Question:"
                    label-cols="3" label-cols-lg="2">
                  <textarea v-model="editedQuestion" @input="update" ></textarea ></b-form-group>

                  <b-form-group
                    label="Answer:"
                    label-cols="3" label-cols-lg="2">
                  <textarea v-model="editedAnswer"></textarea></b-form-group>

                <b-button variant="success" size="sm" @click="submitForm(flashcard.id)">Submit</b-button>
                </b-form>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import _ from 'lodash'

export default {
  name: 'AdminFlashcard',
  data () {
    return {
      flashcards: [],
      isEditing: '',
      editedCategory: '',
      editedStyle: '',
      editedQuestion: '',
      editedAnswer: '',
      editedId: '',
      input: '# question'
    }
  },
  methods: {
    showEditSection (id) {
      this.isEditing = id
      console.log(this.isEditing)
    },
    resetEditSection () {
      this.isEditing = ''
    },
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300),
    submitForm (id) {
      console.log(id)
      axios({
        url: 'http://ec2-3-231-156-48.compute-1.amazonaws.com/flashcard/' + id,
        method: 'PUT',
        data: {
          id: id,
          category: this.editedCategory,
          style: this.editedStyle,
          question: this.editedQuestion,
          answer: this.editedAnswer
        }
      })
        // .then(this.$router.go(0))
        .catch(error => {
          console.log(error)
          this.error = 'Sth went wrong. Please, try again later'
        })
    },
    deleteFlashcard (id) {
      axios({
        url: 'http://ec2-3-231-156-48.compute-1.amazonaws.com/flashcard/' + id,
        method: 'DELETE'
      })
        // .then(this.$router.go(0))
        .catch(error => {
          console.log(error)
          this.error = 'Sth went wrong. Please, try again later'
        })
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.input)
    },
    compiledQuestion () {
      return marked(this.editedQuestion)
    },
    compiledAnswer () {
      return marked(this.editedAnswer)
    }
  },
  created () {
    axios({ url: 'http://ec2-3-231-156-48.compute-1.amazonaws.com/flashcard', method: 'GET' })
      .then(resp => resp.data)
      .then(data => {
        this.flashcards = data
      })
  }
}

</script>

<style lang="scss">
#admin-flashcard {
  padding: 0rem 0 4rem 0rem;
  .flashcard-list{
  border: 1px solid lightgray;
  border-radius: 5px;
  }

  .edit-window {
          background-color: rgb(255, 255, 197);
    #resetEdition {
      margin: 2rem auto;
    }
  #admin-edit-flashcard {
  margin: 0 auto;

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
}
}

   @media (min-width: 768px) and (max-width: 991.98px) {
     .container {
       min-width: 95%;
       overflow-y: scroll
     }
}

  @media (min-width: 576px) and (max-width: 767.98px) {
    .container {
       min-width: 95%;
       overflow-y: scroll;
       .card {
         width: 90%
       }
     }

}

  @media (max-width: 575.98px) {
    .container {
       min-width: 95%;
       overflow-y: scroll;
       .card {
         width: 70%
       }
     }

}

</style>
