<template>
  <div id="admin-flashcard" class="container">
    <div id="flashcard-list">
      <b-table striped hover :items="flashcards" :fields="fields">
        <template #cell(details)="row">
          <b-button variant="primary" size="sm" @click="row.toggleDetails" class="mr-2">
            Edit
          </b-button>
        </template>
        <template #cell(delete)="row">
          <b-button variant="danger" size="sm" @click="row.toggleDetails; deleteFlashcard()" class="mr-2">
            Delete
          </b-button>
        </template>
        <template #row-details="row">
        <b-card>
          <b-form>
            <b-form-group
              label="Id:"
              label-cols="3" label-cols-lg="2"
            >
            <b-form-input :value="row.item.id" readonly></b-form-input>
            </b-form-group>

             <b-form-group
              label="Created:"
              label-cols="3" label-cols-lg="2"
            ><b-form-input :value="row.item.createdAdd"></b-form-input></b-form-group>

            <b-form-group
              label="Category:"
              label-cols="3" label-cols-lg="2"><b-form-input :value="row.item.category"></b-form-input></b-form-group>

            <b-form-group
              label="Style:"
              label-cols="3" label-cols-lg="2">
            <b-form-input :value="row.item.style"></b-form-input></b-form-group>

            <b-form-group
              label="Question:"
              label-cols="3" label-cols-lg="2">
            <b-form-textarea :value="row.item.question"></b-form-textarea></b-form-group>

            <b-form-group
              label="Answer:"
              label-cols="3" label-cols-lg="2">
            <b-form-textarea :value="row.item.answer"></b-form-textarea></b-form-group>

          <b-button size="sm" @click="row.toggleDetails; updateFlashcard()">Save</b-button>
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
      id: '',
      category: '',
      fields: ['id', 'category', 'question', 'answer', 'details', 'delete']
    }
  },
  methods: {
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
    },
    updateFlashcard () {
      console.log('Flashcard edited!')
      fetch('/api/flashcard/:id', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          // authorization: Bearer Code
        }
      })
        .then(response => response.json())
        .catch(err => console.log(err))
        // przeładowuje komponent
        // .then(this.$router.go(0))
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
  padding-bottom: 4rem;
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

</style>
