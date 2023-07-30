<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
// Setiap instance komponen Vue melewati serangkaian langkah inisialisasi saat dibuat - misalnya, perlu menyiapkan observasi data, mengompilasi template, memasang instance ke DOM, dan memperbarui DOM saat data berubah. Sepanjang jalan, itu juga menjalankan fungsi yang disebut lifecycle, memberi pengguna kesempatan untuk menambahkan kode mereka sendiri pada tahap tertentu.

// onMounted adalah hook yang digunakan untuk menjalankan kode setelah komponen telah siap dan membuat node DOM
let intervalId;
onMounted(() => {
  intervalId = setInterval(() => {
    alert("komponent sudah di mount");
  }, 10000);
});
// digunakan untuk menjalankan kode setelah komponent telah diupdate
onUpdated(() => {
  alert("komponen sudah di update");
});
// digunakan untuk menjalankan kode setelah komponent diunMount
onUnmounted(() => {
  clearInterval(intervalId);
});

const title = ref("lifecycle hooks");
</script>

<template>
  <h1>{{ title }}</h1>
  <input type="text" v-model="title" />
</template>
