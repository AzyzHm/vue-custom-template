import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCounterStore } from '@/stores/counter.store'

describe('counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('defaults count to 0', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
    expect(store.doubleCount).toBe(0)
  })

  it('increments count and derives doubleCount', () => {
    const store = useCounterStore()

    store.increment()
    store.increment()

    expect(store.count).toBe(2)
    expect(store.doubleCount).toBe(4)
  })

  it('resets count back to 0', () => {
    const store = useCounterStore()
    store.increment()

    store.reset()

    expect(store.count).toBe(0)
  })
})
