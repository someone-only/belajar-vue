<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">kamu memgklik: {{ count }} kali</button>
</template>
