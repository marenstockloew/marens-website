<template>
  <h3 v-if="workDetailsTitle">{{ workDetailsTitle }}</h3>
  <img
    v-for="photo of workDetailsPhotos"
    :src="photo.url"
    :alt="photo.title"
    class="imageRoll"
  />
</template>

<script setup>
defineProps({
  workDetailsTitle: String,
  workDetailsPhotos: Array,
});
</script>

<style scoped>
.imageRoll {
  width: 100%;
  object-fit: cover;
  border-radius: 0.15rem;
  margin: 1rem 0;
}
</style>
