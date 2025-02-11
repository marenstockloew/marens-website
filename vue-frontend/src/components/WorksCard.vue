<template>
  <div>
    <img
      :src="worksMainImageUrl"
      :alt="worksMainImageTitle"
      class="mainImage"
    />
    <h2>
      {{ worksTitle }}
    </h2>
    <p>{{ worksDescription }}</p>
  </div>
</template>

<script setup>
defineProps({
  worksMainImageUrl: String,
  worksMainImageTitle: String,
  worksTitle: String,
  worksDescription: String,
});
</script>

<style scoped>
div {
  padding-bottom: 10rem;
  -webkit-transition: background-color 0.2s ease-in-out;
  -moz-transition: background-color 0.2s ease-in-out;
  -o-transition: background-color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
}
div:hover {
    background-color: var(--color-works-hover-card);
}
.mainImage {
  width: 100%;
  aspect-ratio: 7/5;
  object-fit: cover;
}
h2,
p {
  padding: 0 2rem;
}
h2 {
  margin: 1rem 0;
  letter-spacing: 0.75rem;
  font-family: var(--text-header-font);
}
div:hover > h2 {
  text-decoration: none;
}
</style>
