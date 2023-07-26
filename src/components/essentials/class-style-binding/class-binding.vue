<script setup lang="ts">
import { reactive } from "vue";
const aktif: boolean = true;
const error: boolean = false;
const successBtn: string = "btn-success";
const errorBtn: string = "btn-danger";
const classObject = reactive({
  active: true,
  "text-danger": false,
});
</script>

<template>
  <!-- class binding -->
  <!-- untuk melakukan data binding pada class kita bisa menggunakan v-bind -->
  <div class="static" v-bind:class="{ success: aktif, danger: error }">
    div ini mempunyai class static dan success
  </div>
  <!-- class binding menggunakan class object -->
  <div v-bind:class="classObject">div ini berupa class object</div>
  <!-- shortcut v-bind adalah : -->
  <!-- class binding menggunakan array  -->
  <div :class="[successBtn, errorBtn]">
    div ini mempunyai class btn-success dan btn-danger
  </div>
</template>
