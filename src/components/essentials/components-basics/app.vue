<script setup lang="ts">
// untuk menggunakan component kita perlu mengimport component itu
// untuk composition api, komponen yang diimpor secara otomatis tersedia digunakan menggunakan template
import { ref } from "vue";
import ButtonCounter from "./define-component/ButtonCounter.vue";
import BlogPost from "./passing-props-and-event/BlogPost.vue";
import Alert from "./slots/Alert.vue";
import app from "./dynamic-component/app.vue";

const posts = ref([
  { id: 1, judul: "Hello World" },
  { id: 2, judul: "Tutorial Vue" },
  { id: 3, judul: "Tutorial Component" },
]);

const color = ref("black");
function changeColor() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  color.value = colors[randomIndex];
}
</script>

<template>
  <h1>disini ada banyak component buttonCounter</h1>
  <!-- kita bisa menggunakan component yang sudah diimport sebanyak yang kita mau -->
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />
  <BlogPost judul="Ninja" />
  <div :style="{ backgroundColor: color }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :judul="post.judul"
      @change-color="changeColor"
    />
  </div>
  <Alert>
    <h1>ini contoh alert</h1>
  </Alert>
  <app />
</template>
