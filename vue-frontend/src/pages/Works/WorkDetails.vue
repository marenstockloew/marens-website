<template>
  <div class="content">
    <h2>A single work</h2>
    <div class="text"></div>
  </div>
</template>

<script setup>

const props = defineProps(["slug"]);
const currentSlug = props.slug;
console.log("Slug: " + currentSlug);
</script>

<style scoped>
.p5canvas {
  display: none !important;
}
</style>
