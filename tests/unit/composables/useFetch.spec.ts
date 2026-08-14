import { describe, expect, it, vi } from 'vitest'
import { useFetch } from '@/composables/useFetch'

describe('useFetch', () => {
  it('starts with no data and not loading', () => {
    const { data, isLoading, error } = useFetch(() => Promise.resolve('ok'))

    expect(data.value).toBeNull()
    expect(isLoading.value).toBe(false)
    expect(error.value).toBeNull()
  })

  it('populates data after a successful execute()', async () => {
    const fetcher = vi.fn().mockResolvedValue({ id: 1 })
    const { data, execute, isLoading } = useFetch(fetcher)

    await execute()

    expect(fetcher).toHaveBeenCalledOnce()
    expect(data.value).toEqual({ id: 1 })
    expect(isLoading.value).toBe(false)
  })

  it('captures a message when the fetcher rejects', async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error('network down'))
    const { data, error, execute } = useFetch(fetcher)

    await execute()

    expect(data.value).toBeNull()
    expect(error.value).toBe('network down')
  })
})
