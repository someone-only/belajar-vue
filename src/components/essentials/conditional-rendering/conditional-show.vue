<script setup lang="ts">
import { ref } from "vue";
const ok = ref(true);
</script>

<template>
  <!-- conditional menggunakan v-show -->
  <!-- jika menggunakan v-show elementet akan tetap terender tapi memiliki style display: none; -->
  <h1 v-show="ok">Ini tampil jika true dan tidak tampil jika false</h1>
</template>
