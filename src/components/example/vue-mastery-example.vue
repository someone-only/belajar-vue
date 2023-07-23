<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import reviewForm from "./reviewForm.vue"
import reviewList from "./reviewList.vue";
import reviewListVue from "./reviewList.vue";
const premium = defineProps(["premium"])
defineEmits(["add-to-cart"])
const product = ref("Sepatu");
const selectedModel = ref(0);
const reviews = reactive([])
const details = reactive([
  "Merk: Kol",
  "Model: grey air",
  "Warna: abu-abu",
  "Ukuran: 42",
  "Bahan: Kulit sintetis dan kain mesh",
  "Jenis: Sneakers",
  "Harga: Rp 1.500.000",
]);
const models = reactive([
  {
    id: 2201,
    brand: "like",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    stock: 80,
  },
  {
    id: 2202,
    brand: "lucky",
    color: "grey",
    image:
      "https://images.unsplash.com/photo-1547053295-bb530ab5af2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    stock: 66,
  },
]);
function updateModel(index) {
  selectedModel.value = index;
}
function addReview(review){
reviews.push(review)
}
const image = computed(() => {
  return models[selectedModel.value].image;
});
const stock = computed(() => {
  return models[selectedModel.value].stock;
});
const title = computed(() => {
  return product.value + " " + models[selectedModel.value].brand;
});
const shipping = computed(() => {
  if(premium){
    return "free"
  } else{
    return "Rp. 15.000"
  }
})
</script>

<template>
  <div class="container d-flex flex-column">
    <div class="card mt-3" style="width: 100%">
      <img :src="image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text" v-if="stock > 10">stock tersisa: {{ stock }}</p>
        <p v-else-if="stock < 10 && stock > 0">stock hampir habis</p>
        <p v-else>stock habis</p>
        <p>ongkir: {{ shipping }}</p>
        <ul class="mb-3 text-start">
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div class="d-flex row justify-content-center">
          <div
            v-for="(model, index) in models"
            class="mb-3 color-circle"
            :key="model.id"
            @click="updateModel(index)"
            :style="{ backgroundColor: model.color }"
          ></div>
        </div>
        <button class="btn btn-primary" @click='$emit("add-to-cart", models[selectedModel].id)'>add to cart</button>
      </div>
    </div>
    <reviewList class="my-3" v-if="reviews.length" :reviews="reviews"/>
    <reviewForm class="mt-3" @review-submit="addReview" />
  </div>
</template>

<style scoped>
.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}
</style>
