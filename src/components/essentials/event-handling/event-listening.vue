<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
function greet() {
  alert("hello world");
}
</script>

<template>
  <!-- untuk melakukan event listener kita bisa menggunakan v-on:{event} atau menggunakan shortcut @{event} -->
  <button @click="count++">tambah 1</button>
  <p>count: {{ count }}</p>
  <!-- kita bisa meggunakan inline handler seperti contoh diatas atau menggubakan method handler kita membuat methos terlebih dahulu -->
  <button @click="greet">greet</button>
  <!-- kita juga bisa menggunakan event modifiers dengan menambahkan @{event}.{modifiers} modifiers juga bisa di chaining -->
  <div @click.stop.prevent="greet">hai</div>
</template>
