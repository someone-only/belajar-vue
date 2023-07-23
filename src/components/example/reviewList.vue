<script setup lang="ts">
defineProps(["reviews"]);
</script>

<template>
  <div class="container">
    <h1>Review:</h1>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(review, index) in reviews"
        :key="index"
      >
        {{ review.name }} gave this {{ review.rating }} stars
        <br />
        "{{ review.review }}"
      </li>
    </ul>
  </div>
</template>
