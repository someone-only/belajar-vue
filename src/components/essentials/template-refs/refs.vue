<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import Child from "./Child.vue";

// untuk mengakses dom secara langsung kita bisa menggunakan template ref
// di composition api kita bisa menggunakan reactive ref karna mereka sama
const input = ref(null);

const list = ref(["mark", "elon", "bill"]);

const itemRefs = ref([]);

// jika melakukan watch pada perubahan template ref
watchEffect(() => {
  if (input.value) {
    input.value.focus();
  } else {
    console.log(input);
  }
});

const child = ref(null);

onMounted(() => {
  input.value.focus();
  console.log(itemRefs.value);
  console.log(child.value);
});
</script>

<template>
  <input ref="input" />
  <!-- template refs di v-for -->
  <ul>
    <li v-for="(name, i) in list" :key="name" :ref="(el) => (itemRefs[i] = el)">
      {{ name }}
    </li>
  </ul>
  <Child ref="child" />
</template>
