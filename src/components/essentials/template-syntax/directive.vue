<script setup lang="ts">
import { ref } from "vue";
import dangerButton from "./slot/danger-button.vue";
import baseLayout from "./slot/base-layout.vue";
const msg = ref("message");
const rawHtml: string = "<span style='color: red'>merah</span>";
let on = ref(true);
const random = Math.random() * 10;
const items: string[] = ["meja", "kursi", "pintu"];
const barang: any[] = [
  { nama: "mouse" },
  { nama: "kursi gaming" },
  { nama: "headset" },
  { nama: "keyboard" },
];
const bind = ref({
  class: "static",
  style: {
    color: "white",
    backgroundColor: "darkgrey",
  },
});
const nama = ref("");
const title = ref("arc duke")
</script>

<template>
  <template v-if="on">
    <!-- v-text sama seperti text interpolar -->
    <div v-text="msg"></div>
    <!-- v-html -->
    <div v-html="rawHtml"></div>
    <!-- v-show -->
    <div v-show="on">jika true maka ini akan tampil</div>
    <!-- v-if -->
    <div v-if="random > 1 && random < 3">
      ini akan tampil jika nilainya lebih besar dari 1 dan lebih kecil dari 3
    </div>
    <!-- v-else-if -->
    <div v-else-if="random > 3 && random < 6">
      ini tidak akan tampil jika nilai lebih kecil dari 3 dan lebih kecil dari 6
    </div>
    <!-- v-else -->
    <div v-else>ini tidak akan tampil jika nilai lebih besar dari 6</div>
    <!-- v-for -->
    <div v-for="item of items">{{ item }}</div>
    <div v-for="{ nama } in barang">nama barang: {{ nama }}</div>
  </template>
  <!-- v-on:[namaEvent] atau shorthand @[namaEvent] -->
  <button @click="on = !on">Toggle</button>
  <!-- v-bind:[namaAttribute] atau shorthand :[namaAttribute] -->
  <div v-bind="bind">ini text</div>
  <!-- v-model -->
  <p>nama: {{ nama }}</p>
  <input v-model="nama" placeholder="masukkan nama" />
  <!-- v-slot -->
  <dangerButton>
    <span style="color: #333">click me</span>
  </dangerButton>
  <!-- v-slot shorthand # -->
  <baseLayout>
    <template #header>
      <h1>Ini header</h1>
    </template>
    <p>ini main</p>
    <template #footer>
      <p>ini footer</p>
    </template>
  </baseLayout>
  <!-- v-pre skip compile dari elemen ini dan children nya -->
  <div v-pre>ini tidak akan menampilkan nilai variable msg {{ msg }}</div>
  <!-- v-once -->
  <div v-once>{{ title }}</div>
  <button @click="title = 'one piece'">ubah</button>
  <!-- v-cloak -->
  <div v-cloak>{{ title }}</div>
</template>

<style scoped>
.static {
  font-size: 2rem;
}
</style>
