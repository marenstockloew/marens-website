<template>
  <div class="exhibition-info">
    <datetime>{{ workDetailsDate }}</datetime>
    <p>{{ workDetailsDateDescription }}</p>
    <p v-for="link in workDetailsDateLinks">
      <a :href="link.externalLink" target="_blank">{{ link.title }}</a>
    </p>
  </div>
</template>

<script setup>
defineProps({
  workDetailsDate: Date,
  workDetailsDateDescription: String,
  workDetailsDateLinks: Array,
});
</script>

<style scoped>
datetime {
  text-decoration: underline;
}
.exhibition-info {
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
</style>
