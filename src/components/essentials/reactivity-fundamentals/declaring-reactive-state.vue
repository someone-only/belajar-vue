<script setup lang="ts">
import { ref, reactive, nextTick } from "vue";

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
// untuk menggunakan tipe data array atau object lebih baik menggunakan reactive
const obj = reactive({
  nested: { count: 1 },
  arr: [1, 2, 3, 4],
});
function change() {
obj.nested.count += 2
obj.arr.push(obj.arr.length + 1)
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
