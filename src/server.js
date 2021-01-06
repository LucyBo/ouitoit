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
    }
  })
  return server
}
