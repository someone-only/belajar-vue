<script setup lang="ts">
import { ref, nextTick, shallowRef } from "vue";

// deklarasi reactive state dengan ref()
const count = ref(0);
console.log(count);
// ref perlu menggunakan .value untuk mengakses valuenya
console.log(count.value);
count.value++;
console.log(count.value);
async function increment() {
  count.value++;
  // DOM updating timing
  await nextTick();
}

// nilai ref() dapat berupa nested object dan array tapi akan menghasilkan reactive proxy
// bisa menggunakan shallowref
const obj = shallowRef({
  nested: { count: 1 },
  arr: [1, 2, 3, 4],
});
function change() {
  obj.value = {
    nested: { count: obj.value.nested.count + 1 },
    arr: [...obj.value.arr, obj.value.arr.length + 1],
  };
}
</script>

<template>
  <!-- tidak perlu menggunakan .value di dalam template -->
  <div>{{ count }}</div>
  <button @click="increment">tambah</button>
  <div>{{ obj.nested.count }}</div>
  <div>{{ obj.arr }}</div>
  <button @click="change">ubah</button>
</template>
