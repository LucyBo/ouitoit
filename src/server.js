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
        ]
      })
    },

    routes () {
      this.namespace = 'api'

      this.get('/flashcards', schema => {
        const headers = {}
        return new Response(200, headers, flashcards)
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
