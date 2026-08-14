/**
 * Shared, app-wide TypeScript types.
 * Feature-specific types can live alongside their feature instead of here.
 */
export interface User {
  id: number
  name: string
  email: string
}

export interface ApiError {
  message: string
  status?: number
}
