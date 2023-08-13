<script setup lang="ts">
import { ref } from "vue";
// untuk membuat component yang dinamic kita bisa menggunakan cara seperti di bawah ini
import Home from "./Home.vue";
import About from "./About.vue";
import Blog from "./Blog.vue";

const currentComponent = ref("Home");

const components = ref({
  Home,
  About,
  Blog,
});
</script>

<template>
  <div>
    <button
      v-for="(_, component) in components"
      :key="component"
      @click="currentComponent = component"
    >
      {{ component }}
    </button>
    <!-- kita bisa menggunakalement component dengan atribute :is untuk mengganti componentnya -->
    <component :is="components[currentComponent]"></component>
  </div>
</template>
