<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";

// fungsi watch berguna untuk memberikan efek samping atau callback saat reactive berubah
// argumen pertama watch dapat berupa single ref, getter, atau array dari beberapa sumber
const x = ref(0);
const y = ref(0);

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// array dari beberapa sumber
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});

// kamu tidak bisa me watch property reactive object seperti ini
const obj = reactive({ angka: 0 });
/*
watch(obj.angka, (angka) => {
  console.log(`angka: ${angka}`);
});
*/
// tapi seperti ini
watch(
  () => obj.angka,
  (angka) => {
    console.log(`angka: ${angka}`);
  }
);

// contoh watch
const state = reactive({ count: 0 });
watch(
  () => state.count,
  (count, prevCount) => {
    console.log(count, prevCount);
  }
);
// watchEffect() memungkinkan kita watch dependensi reaktif callback secara otomatis
// jika kita menggunakan watch()
const todoId = ref(1);
const data = ref(null);

/*
watch(
  todoId,
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );
    data.value = await response.json();
  },
  { immediate: true }
);
*/

// jika menggunakan watchEffect()
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  data.value = await response.json();
});

function add() {
  state.count += 1;
}
</script>

<template>
  <p>{{ state.count }}</p>
  <button @click="add">tambah 1</button>
  <p>{{data}}</p>
  <button @click="todoId++">todoId</button>
</template>
