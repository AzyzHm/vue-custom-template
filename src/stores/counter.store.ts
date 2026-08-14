import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * Example Pinia store using the Composition API (setup) syntax.
 * Replace with real, feature-specific stores as the app grows —
 * one store per domain concept, not one giant global store.
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, reset }
})
