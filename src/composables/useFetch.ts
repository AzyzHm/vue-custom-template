import { ref, shallowRef, type Ref } from 'vue'

interface UseFetchResult<T> {
  data: Ref<T | null>
  error: Ref<string | null>
  isLoading: Ref<boolean>
  execute: () => Promise<void>
}

/**
 * Generic wrapper around an async data-fetching function that tracks
 * loading/error/data state. Feature composables (e.g. useUsers) build on
 * top of this instead of re-implementing the same three refs everywhere.
 */
export function useFetch<T>(fetcher: () => Promise<T>): UseFetchResult<T> {
  const data = shallowRef<T | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  async function execute() {
    isLoading.value = true
    error.value = null
    try {
      data.value = await fetcher()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      isLoading.value = false
    }
  }

  return { data, error, isLoading, execute }
}
