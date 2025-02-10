<template>
  <div>
    <h3 v-if="additionalTextTitle">{{ additionalTextTitle }}</h3>
    <p>{{ additionalTextDescription }}</p>
  </div>
</template>

<script setup>
defineProps({
  additionalTextTitle: String,
  additionalTextDescription: String,
});
</script>

<style scoped>
div {
    margin: 2rem 0;
}
</style>