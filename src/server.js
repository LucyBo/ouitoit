import { Server, Response } from 'miragejs'
import flashcards from './data/flashcards'
var jwt = require('jsonwebtoken')

export function makeServer ({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    seeds (server) {
      server.db.loadData({
        users: [
          {
            id: 1,
            email: 'lucybo@gmail.com',
            name: 'Lucyna Borkowska',
            isAdmin: true
          }
        ],
        flashcards: flashcards
      })
    },

    routes () {
      this.namespace = 'api'

      this.post('/flashcard/', (schema, request) => {
        const id = request.params.id
        return new Response(
          200,
          {},
          schema.db.flashcards.findBy({ id: id })
        )
      })

      this.get('/flashcard/:id', (schema, request) => {
        const id = request.params.id
        return new Response(
          200,
          {},
          schema.db.flashcards.findBy({ id: id })
        )
      })

      this.put('/flashcard/:id', (schema, request) => {
        const id = request.params.id
        // TODO: Update flashcards by ID from schema.db.flashcards
        // const flashcard = schema.db.flashcards.findBy({ id: id })
        const data = JSON.parse(request.requestBody)

        schema.db.flashcards[id] = {
          ...schema.db.flashcards[id],
          ...data
        }

        return new Response(
          200,
          {},
          data
        )
      })

      this.delete('/flashcard/:id', (schema, request) => {
        // TODO: Remove flashcards by ID from schema.db.flashcards
        // const id = request.params.id

        // schema.db.flashcards[id] =

        return new Response(
          200,
          {},
          {}
        )
      })

      this.get('/flashcards', schema => {
        const headers = {}
        return new Response(200, headers, schema.db.flashcards)
      })

      this.post('/login', (schema, request) => {
        const credentials = JSON.parse(request.requestBody)
        const headers = {}
        if (credentials.email === 'lucybo@gmail.com') {
          const token = jwt.sign({ id: schema.db.users[0].id }, 'secret', { expiresIn: 86400 })
          return new Response(
            200,
            headers,
            {
              token,
              user: schema.db.users[0]
            }
          )
        } else {
          return new Response(
            400,
            headers,
            { message: 'Invalid credentials' }
          )
        }
      }, { timing: 200 })
    }
  })
  return server
}
