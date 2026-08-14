import { http, HttpResponse } from 'msw'

const API_BASE_URL = 'http://localhost:8000/api'

/**
 * Default request handlers shared by unit/integration tests and, if the app
 * grows a browser-based mock mode, local development too.
 */
export const handlers = [
  http.get(`${API_BASE_URL}/users`, () => {
    return HttpResponse.json([
      { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
      { id: 2, name: 'Alan Turing', email: 'alan@example.com' },
    ])
  }),

  http.get(`${API_BASE_URL}/users/:id`, ({ params }) => {
    return HttpResponse.json({
      id: Number(params.id),
      name: 'Ada Lovelace',
      email: 'ada@example.com',
    })
  }),
]
