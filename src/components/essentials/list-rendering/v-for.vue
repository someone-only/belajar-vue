<script setup lang="ts">
import { reactive, ref } from "vue";
const items = reactive([
  { message: "message1" },
  { message: "message2" },
  { message: "message3" },
]);
const myObject = reactive({
  title: "title",
  author: "orang",
  publish: "2000",
});
const parent = ref("parent");
</script>

<template>
  <ul>
    <!-- jika kita ingin melakukan looping kita bisa menggunakan v-for -->
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>
  <ul>
    <!-- kita juga bisa menangkap index hasil looping -->
    <li v-for="(item, index) in items">
      {{ parent }} - {{ index }} - {{ item.message }}
    </li>
  </ul>
  <ul>
    <!-- kita juga bisa menggunakan destructuring object -->
    <li v-for="({ message }, index) in items">{{ index }} - {{ message }}</li>
  </ul>
  <ul>
    <li v-for="(key, value) in myObject">{{ key }} - {{ value }}</li>
  </ul>
</template>
