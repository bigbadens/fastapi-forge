<template>
  <button @click="isDark = !isDark">
    {{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
  </button>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/darkmode/DarkMode'
const { isDark } = useDarkMode()
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: var(--color-bg-default);
  color: var(--color-text-default);
}
</style>
