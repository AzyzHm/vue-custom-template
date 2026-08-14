import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/vue'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from './mocks/server'

// Environment variable consumed by src/api/client.ts.
import.meta.env.VITE_API_BASE_URL = 'http://localhost:8000/api'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => {
  server.resetHandlers()
  // @testing-library/vue only auto-registers this via global test hooks,
  // which this project doesn't enable (test.globals is false). Without it,
  // each render() in a spec file stays mounted into the shared jsdom
  // document, so later queries in the same file match stale nodes from
  // earlier tests.
  cleanup()
})

afterAll(() => server.close())