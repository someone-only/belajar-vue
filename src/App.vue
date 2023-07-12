<script setup lang="ts">
import textInterpolation from "./components/essentials/template-syntax/text-interpolation.vue";
import rawHtml from "./components/essentials/template-syntax/raw-html.vue";
import attributeBinding from "./components/essentials/template-syntax/attribute-binding.vue";
import jsExpression from "./components/essentials/template-syntax/js-expression.vue";
import directive from "./components/essentials/template-syntax/directive.vue";
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
