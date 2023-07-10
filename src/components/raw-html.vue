<script setup lang="ts">
const rawHtml: string = `<span style="color: red">text ini seharusny berwarna merah</span>`;
</script>

<template>
  // jika menggunakan text interpolar maka rawHtmlnya itu berupa text plain
  bukan
  <p>menggunakan text interpolar: {{ rawHtml }}</p>
  // jika menggunakan v-html maka elemen yang menggunakan v-html ini akan di
  ganti dengan elemene yang ada di rawHtml
  <p>menggunakan v-html: <span v-html="rawHtml"></span></p>
</template>
