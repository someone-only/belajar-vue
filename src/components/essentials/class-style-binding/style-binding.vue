<script setup lang="ts">
import { reactive, ref } from "vue";
const redColor = ref("red");
const fontSize = ref(16);
const btn = reactive({
  backgroundColor: "#444444",
  color: "#fff",
  padding: "1rem",
  borderRadius: "5px",
  border: "none",
  width: "10rem",
});
</script>

<template>
  <!-- style binding -->
  <!-- untuk melakukan data binding pada style kita bisa menggunkan v-bind:style atau :style -->
  <div :style="{ color: redColor, fontSize: fontSize + 'px' }">
    ini akan berwarna merah dengan font size 16 px
  </div>
  <!-- bisa juga menggunakan style object -->
  <div :style="btn">button</div>
</template>
