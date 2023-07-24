<script setup lang="ts">
import { computed, reactive } from "vue";
// membuat sebuah object berisi nama dan buku
const penulisBuku = reactive({
  nama: "Tere Liye",
  buku: [
    "bumi",
    "hafalan sholat delisa",
    "negeri para bedebah",
    "daun yang jatuh tak pernah membenci angin",
  ],
});
// computed property adalah sebuah data yang nilainya bergantung pada data lain
// untuk melakukan computed kita perlu menggunakan computed()
const buku = computed(() => {
  return penulisBuku.buku.length > 1 ? penulisBuku.buku : "tidak punya karya";
});
</script>

<template>
  <h2>{{ penulisBuku.nama }}</h2>
  <p>karya yang dibuat: {{ buku }}</p>
</template>
