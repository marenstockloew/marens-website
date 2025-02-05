<template>
  <div :style="worksColorIndex % 2 ? `background-color: var(${bgColor})` : `background-color: var(--color-background)`">
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
  bgColor: {
    type: String,
    default: "--color-background",
  },
  worksMainImageUrl: String,
  worksMainImageTitle: String,
  worksTitle: String,
  worksDescription: String,
  worksColorIndex: Number,
});
</script>

<style scoped>
div {
  padding-bottom: 10rem;
}
.mainImage {
  width: 100%;
  aspect-ratio: 7/5;
  object-fit: cover;
  opacity: 0.9;
}
h2,
p {
  padding-left: 2rem;
}
h2 {
  margin: 1rem 0;
  letter-spacing: 0.75rem;
  font-family: var(--text-header-font);
  -webkit-transition: letter-spacing 1s ease-in-out;
  -moz-transition: letter-spacing 1s ease-in-out;
  -o-transition: letter-spacing 1s ease-in-out;
  -ms-transition: letter-spacing 1s ease-in-out;
  transition: letter-spacing 1s ease-in-out;
}
h2:hover {
  text-decoration: none;
  letter-spacing: 1.5rem;
}
</style>
