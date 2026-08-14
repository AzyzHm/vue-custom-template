<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const route = useRoute()

// Routes can opt into a different layout via `meta.layout`.
// Falling back to DefaultLayout keeps every route wrapped by default.
const layout = computed(() => route.meta.layout ?? DefaultLayout)
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
