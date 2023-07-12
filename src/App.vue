<script setup lang="ts">
import textInterpolation from "./components/text-interpolation.vue";
import rawHtml from "./components/raw-html.vue"
import attributeBinding from "./components/attribute-binding.vue"
import jsExpression from "./components/js-expression.vue"
import directive from "./components/directive.vue";
</script>

<template>
  <div>
    <h1>App Component</h1>
    <textInterpolation />
    <rawHtml />
    <attributeBinding />
    <jsExpression />
    <directive />
  </div>
</template>

<style scoped></style>
