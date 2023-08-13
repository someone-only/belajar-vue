<script setup lang="ts">
// jika ingin menggunakan props maka perlu di delarasi menggunakan defineProps
defineProps(["judul"]);
defineEmits(["changeColor"]);
</script>

<template>
  <h1>{{ judul }}</h1>
  <button @click="$emit('changeColor')">change color</button>
</template>
