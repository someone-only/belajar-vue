<script setup lang="ts">
import { ref } from "vue";
const awesome = ref(true);
</script>

<template>
  <!-- kita bisa menggunakan if, else if dan else menggunakan v-if v-else-if v-else -->
  <h1 v-if="awesome">kamu keren!</h1>
  <h1 v-else></h1>
  <!-- kita juga bisa menggunakan if statmen di dalam template -->
</template>
