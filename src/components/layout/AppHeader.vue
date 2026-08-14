<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="border-b border-slate-200 bg-white">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
      <RouterLink to="/" class="text-lg font-semibold text-slate-900">
        Vue Custom Template
      </RouterLink>
    </nav>
  </header>
</template>
