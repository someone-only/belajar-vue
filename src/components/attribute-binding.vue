<script setup lang="ts">
const imgSrc: string = "https://placehold.co/50";
const aktif: boolean = true;
const error: boolean = false;
const successBtn: string = "btn-success";
const errorBtn: string = "btn-danger";
const skyblue: string = "skyblue"
const btn = {
backgroundColor: "#444444",
color: "#fff",
padding: "1rem",
borderRadius: "5px",
border: "none",
width: "10rem"
}
</script>

<template>
  <!-- menggunakan attribute binding -->
  <img v-bind:src="imgSrc" alt="" />
  <!-- shorthand -->
  <img :src="imgSrc" alt="" />
  <!-- class binding -->
  <div class="static" :class="{ success: aktif, danger: error }">div ini mempunyai class static dan success</div>
  <div :class="[successBtn, errorBtn]">div ini mempunyai class btn-success dan btn-danger</div>
  <!-- shorthand -->
  <p :style="{ backgroundColor: skyblue }">background berwarna biru langit</p>
  <button :style="btn">button</button>
</template>
