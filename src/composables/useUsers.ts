import { usersApi } from '@/api/endpoints/users.api'
import { useFetch } from '@/composables/useFetch'
import type { User } from '@/types'

/**
 * Feature composable: the "service" layer between views and the API.
 * Views/components depend on this, never on usersApi or axios directly.
 */
export function useUsers() {
  const { data: users, error, isLoading, execute } = useFetch<User[]>(() => usersApi.list())

  return {
    users,
    error,
    isLoading,
    fetchUsers: execute,
  }
}
