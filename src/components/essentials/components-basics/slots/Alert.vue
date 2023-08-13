<template>
  <!-- distribusi konten menggunakan slot -->
  <div class="alert-box">
    <strong>Ini template error text</strong>
    <!-- element slot akan diganti dengan isi yang dimasukan ke component ini -->
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  background-color: #333;
  padding: 16px;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.alert-box strong {
  color: red;
}
</style>
