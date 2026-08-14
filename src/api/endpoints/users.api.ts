import { apiClient } from '@/api/client'
import type { User } from '@/types'

/**
 * The "repository" layer for the Users resource: the only place that knows
 * about HTTP/endpoint details. Composables and components call these
 * functions instead of touching axios directly.
 */
export const usersApi = {
  async list(): Promise<User[]> {
    const { data } = await apiClient.get<User[]>('/users')
    return data
  },

  async getById(id: number): Promise<User> {
    const { data } = await apiClient.get<User>(`/users/${id}`)
    return data
  },
}
