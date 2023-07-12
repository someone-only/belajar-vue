<script setup lang="ts">
const num: number = 1;
const ok: boolean = true;
const pesan: string = "ini adalah pesan";
const id: number = 0;
const date = new Date()
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('id', options);
}
</script>

<template>
  <div>{{ num + 1 }}</div>
  <div>{{ ok ? "YES" : "NO" }}</div>
  <div>{{ pesan.toUpperCase() }}</div>
  <div :id="`list-${id}`">id</div>
  <time datetime="date">
          {{ formatDate(date) }}
  </time>
</template>
