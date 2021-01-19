<template>
  <div id="admin-flashcard" class="container">
    <div id="flashcard-list">
      <b-table striped hover :items="flashcards" :fields="fields">
        <template #cell(details)="row">
          <b-button variant="primary" size="sm" @click="row.toggleDetails">
            Edit
          </b-button>
        </template>
        <template #cell(delete)="row">
          <b-button variant="danger" size="sm" @click="row.toggleDetails; deleteFlashcard()">
            Delete
          </b-button>
        </template>
        <template #row-details="row">
        <b-card>
          <b-form>
            <b-form-group
              label="Id:"
              label-cols="2" label-cols-lg="2"
            >
            <b-form-input :placeholder="row.item.id" v-model="flashcardId"></b-form-input>
            </b-form-group>

             <b-form-group
              label="Created:"
              label-cols="2" label-cols-lg="2"
            ><b-form-input :placeholder="row.item.createdAdd" v-model="flashcardCreated"></b-form-input></b-form-group>

            <b-form-group
              label="Category:"
              label-cols="2" label-cols-lg="2">
              <b-form-input :placeholder="row.item.category" v-model="flashcardCategory"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Style:"
              label-cols="2" label-cols-lg="2">
            <b-form-input :placeholder="row.item.style" v-model="flashcardStyle"></b-form-input></b-form-group>

            <b-form-group
              label="Question:"
              label-cols="2" label-cols-lg="2">
            <b-form-textarea :placeholder="row.item.question" v-model="flashcardQuestion"></b-form-textarea ></b-form-group>

            <b-form-group
              label="Answer:"
              label-cols="2" label-cols-lg="2">
            <b-form-textarea :placeholder="row.item.answer" v-model="flashcardAnswer"></b-form-textarea></b-form-group>

          <b-button size="sm" @click="row.toggleDetails; submitForm()">Save</b-button>
          </b-form>
        </b-card>
      </template>
      </b-table>
    </div>
    </div>
</template>

<script>

export default {
  name: 'AdminFlashcard',
  data () {
    return {
      flashcards: [],
      flashcardId: '',
      flashcardCreated: '',
      flashcardCategory: '',
      flashcardStyle: '',
      flashcardQuestion: '',
      flashcardAnswer: '',
      fields: ['id', 'category', 'question', 'answer', 'details', 'delete']
    }
  },
  methods: {
    submitForm () {
      fetch('/api/flashcard/:id', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.flashcardId,
          createdAdd: this.flashcardCreated,
          category: this.flashcardCategory,
          style: this.flashcardStyle,
          question: this.flashcardQuestion,
          answer: this.flashcardAnswer
        })
      })
        .then(this.$router.go(0))
        .catch(error => {
          console.log(error)
          this.error = 'Sth went wrong. Please, try again later'
        })
    },
    deleteFlashcard () {
      console.log('już mnie nie ma')
      fetch('/api/flashcard/:id', {
        method: 'DELETE',
        headers: {
          // authorization: Bearer Code
        }
      })
        .then(response => response.json())
        // .then(this.$router.go(0))
        .catch(err => console.log(err))
    }
  },
  created () {
    fetch('/api/flashcards')
      .then(response => response.json())
      .then(data => {
        this.flashcards = data
      })
  }
}

</script>

<style lang="scss">
#admin-flashcard {
  padding: 0rem 0 4rem 0rem;
  #flashcard-list{
  border: 1px solid lightgray;
  border-radius: 5px;
  }
  b-table{
    border: 1px solid lightgray;
  }
  th:nth-of-type(3) {
    width: 200px;
  }
   th:nth-of-type(5) {
    width: 100px;
  }
   th:nth-of-type(6) {
    width: 100px;
  }
  #flashcard-list {
    max-height: 500px;
    overflow: scroll;
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
