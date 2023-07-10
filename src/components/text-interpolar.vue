<script setup lang="ts">
// Mendefinisikan variabel msg dengan tipe string dan memberi nilai "Hello world"
const msg: string = "Hello world";
</script>

<template>
    <!-- Menampilkan nilai variabel msg menggunakan text interpolation -->
    <h1>{{ msg }}</h1>
</template>
