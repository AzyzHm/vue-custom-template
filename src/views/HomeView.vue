<script setup lang="ts">
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter.store'
import { useUsers } from '@/composables/useUsers'
import BaseButton from '@/components/common/BaseButton.vue'

const counter = useCounterStore()
const { users, error, isLoading, fetchUsers } = useUsers()

onMounted(fetchUsers)
</script>

<template>
  <section class="space-y-8">
    <div class="rounded-lg border border-slate-200 bg-white p-6">
      <h1 class="text-xl font-semibold">Vue Custom Template</h1>
      <p class="mt-1 text-sm text-slate-600">
        A conventional starting point for Vue 3 + TypeScript applications.
      </p>
    </div>

    <div class="rounded-lg border border-slate-200 bg-white p-6">
      <h2 class="text-sm font-medium text-slate-500">Pinia store example</h2>
      <p class="mt-2 text-2xl font-semibold">{{ counter.count }}</p>
      <p class="text-sm text-slate-500">Double: {{ counter.doubleCount }}</p>
      <BaseButton class="mt-4" @click="counter.increment">Increment</BaseButton>
    </div>

    <div class="rounded-lg border border-slate-200 bg-white p-6">
      <h2 class="text-sm font-medium text-slate-500">API layer example</h2>
      <p v-if="isLoading" class="mt-2 text-sm text-slate-500">Loading users…</p>
      <p v-else-if="error" class="mt-2 text-sm text-red-600">{{ error }}</p>
      <ul v-else class="mt-2 space-y-1">
        <li v-for="user in users" :key="user.id" class="text-sm">
          {{ user.name }} — {{ user.email }}
        </li>
      </ul>
    </div>
  </section>
</template>
