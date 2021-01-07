import { Server, Response } from 'miragejs'
import flashcards from './data/flashcards'

export function makeServer ({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    routes () {
      this.namespace = 'api'

      this.get('/flashcards', schema => {
        return new Response(200, {}, flashcards)
      })

      this.post('/login', (schema, request) => {
        let headers = {}
        const credentials = JSON.parse(request.requestBody)
        console.log(credentials)
        if (credentials.username === 'admin') {
          headers = { authentication: 'Bearer YWxhZGRpbjpvcGVuc2VzYW1l' }
          return new Response(
            200,
            headers,
            { message: 'Successfully logged in' }
          )
        } else {
          return new Response(
            400,
            headers,
            { errorMessage: 'Invalid credentials' }
          )
        }
      }, { timing: 2000 })

      this.post('/logout', (schema, request) => {
        const headers = {}
        return new Response(
          200,
          headers,
          { message: 'Successfully logged out' }
        )
      }, { timing: 2000 })
    }
  })
  return server
}
