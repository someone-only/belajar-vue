<script setup lang="ts">
import { reactive, ref } from "vue";
import vueMasteryExample from "./components/example/vue-mastery-example.vue";
const cart = reactive([]);
const premium = ref(true)
function addToCart(id) {
  cart.push(id)
}
</script>

<template>
  <nav class="nav sticky-top navbar bg-body-tertiary bg-primary">
    <div class="container-fluid d-flex justify-content-between">
      <span class="navbar-brand mb-0 h1">Navbar</span>
      <li class="nav-item border border-primary">
        <a class="nav-link" href="#">Cart({{ cart.length }})</a>
      </li>
    </div>
  </nav>

  <div class="container d-flex flex-wrap justify-content-center align-items-center">
    <vueMasteryExample :premium="premium" @add-to-cart="addToCart"/>
    <vueMasteryExample :premium="premium" @add-to-cart="addToCart"/>
    <vueMasteryExample :premium="premium" @add-to-cart="addToCart"/>
  </div>
</template>

<style scoped></style>
