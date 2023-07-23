<script setup lang="ts">
import { ref, reactive } from "vue";
const name = ref("");
const review = ref("");
const rating = ref(null);
const emit = defineEmits(["review-submit"]);
function onSubmit() {
  const productReview = reactive({
    name: name.value,
    review: review.value,
    rating: rating.value,
  });
  if (name.value == "" || review.value == "" || rating.value == null) {
    alert("Review belum selesai, silahkan isi semuanya");
    return;
  }
  emit("review-submit", productReview);
  name.value = "";
  review.value = "";
  rating.value = null;
}
</script>

<template>
  <div class="container">
    <form action="" class="mb-3">
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="mb-3">
        <label for="review" class="form-label">Review</label>
        <textarea
          class="form-control"
          id="review"
          rows="3"
          v-model="review"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="rating" class="form-label">Rating:</label>
        <select
          class="form-select"
          aria-label="Default select example"
          id="rating"
          v-model="rating"
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mb-3" @click="onSubmit">
        Submit
      </button>
    </form>
  </div>
</template>
