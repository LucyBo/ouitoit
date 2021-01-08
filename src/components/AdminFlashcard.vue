<template>
  <div id="admin-flashcard" >
      <b-table striped hover :items="flashcards" :fields="fields">
        <template #cell(show_details)="row">
          <b-button variant="primary" size="sm" @click="row.toggleDetails" class="mr-2">
            Edit
          </b-button>
        </template>
        <template #cell(delete)="row">
          <b-button variant="danger" size="sm" @click="row.toggleDetails" class="mr-2">
            Delete
          </b-button>
        </template>
        <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Id:</b></b-col>
            <b-col>{{ row.item.id }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Created Add:</b></b-col>
            <b-col>{{ row.item.createdAdd }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Category:</b></b-col>
            <b-col>{{ row.item.category }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Style:</b></b-col>
            <b-col>{{ row.item.style }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Question:</b></b-col>
            <b-col>{{ row.item.question }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Answer:</b></b-col>
            <b-col>{{ row.item.answer }}</b-col>
          </b-row>
          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
      </b-table>

        <!-- <b-list-group horizontal
          v-for="flashcard in flashcards"
          v-bind:flashcard = "flashcard"
          v-bind:key= "flashcard.id">
          <b-list-group-item>{{flashcard.id}}</b-list-group-item>
          <b-list-group-item id="question">{{flashcard.question}}</b-list-group-item>
          <b-list-group-item id="answer">{{flashcard.answer}}</b-list-group-item>
          <b-list-group-item id="edit">
            <div>
              <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Edit</b-button>
              <b-modal id="bv-modal-example" hide-footer>
                <template #modal-title>
                  Using <code>$bvModal</code> Methods
                </template>
                <div class="d-block text-center">
                  <h3>Hello From This Modal!</h3>
                </div>
                <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
              </b-modal>
            </div>
          </b-list-group-item>
          <b-list-group-item id="delete"><button @click="deleteFlashcard()" class="btn btn-danger">Delete</button></b-list-group-item>
        </b-list-group> -->
    </div>
</template>

<script>

export default {
  name: 'AdminFlashcard',
  data () {
    return {
      flashcards: [],
      fields: ['id', 'category', 'question', 'answer', 'show_details', 'delete']
    }
  },
  methods: {
    deleteFlashcard () {
      console.log('już mnie nie ma')
    },
    update () {
      console.log('Flashcard edited!')
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
  .flashcard-list {
    max-height: 600px;
    overflow: scroll;
  }
}

</style>
