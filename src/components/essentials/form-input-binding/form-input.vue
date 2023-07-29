<script setup lang="ts">
import { ref } from "vue";
const name = ref("");
const comment = ref("contoh comment");
const checkbox = ref(false);
const checkedNames = ref([]);
const picked = ref();
const selected = ref("");
const selecteds = ref([])
</script>

<template>
  <!-- ketika berurusan dengan form kita bisa menggunakan v-model untuk melakukan two-way binding  -->
  <h1>nama saya: {{ name }}</h1>
  <input type="text" v-model="name" />
  <!-- seperti contoh diatas, v-model menggunakan value dari nama dan jika nama dirubah maka value di inputnya juga berubah -->
  <!-- bisa digunakan di textarea -->
  <h1 style="white-space: pre-line">{{ comment }}</h1>
  <textarea
    name="comment"
    id="comment"
    cols="30"
    rows="10"
    v-model="comment"
  ></textarea>
  <!-- bisa digunakan di checkbox -->
  <div>
    <input type="checkbox" id="checkbox" v-model="checkbox" />
    <label for="checkbox">{{ checkbox }}</label>
  </div>
  <!-- bisa menggunakan multiple checkbox -->
  <div>
    <div>{{ checkedNames }}</div>
    <input type="checkbox" id="agus" value="agus" v-model="checkedNames" />
    <label for="agus">agus</label>

    <input type="checkbox" id="asel" value="asep" v-model="checkedNames" />
    <label for="asep">asep</label>

    <input type="checkbox" id="yanto" value="yanto" v-model="checkedNames" />
    <label for="yanto">yanto</label>
  </div>
  <!-- bisa menggunakan radio button -->
  <div>
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
  </div>
  <!-- bisa menggunakan select -->
  <div>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">pilih salah satu</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
  <!-- bisa menggunakan multiple select -->
  <div>
    <div>Selected: {{ selecteds }}</div>
    <select v-model="selecteds" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>
