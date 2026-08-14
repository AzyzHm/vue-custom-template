import { setupServer } from 'msw/node'
import { handlers } from './handlers'

/**
 * Node-side MSW server used by Vitest (unit + integration projects) to
 * intercept axios/fetch requests without hitting a real backend.
 */
export const server = setupServer(...handlers)
