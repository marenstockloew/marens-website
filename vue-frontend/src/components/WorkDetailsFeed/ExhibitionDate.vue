<template>
  <div>
    <h3>{{ workDetailsTitle }}</h3>
    <datetime>{{ workDetailsDate }}</datetime>
    <p>{{ workDetailsDateDescription }}</p>
    <p v-for="link in workDetailsDateLinks">
      <a :href="link.externalLink" target="_blank">{{ link.title }}</a>
    </p>
  </div>
</template>

<script setup>
defineProps({
  workDetailsTitle: String,
  workDetailsDate: Date,
  workDetailsDateDescription: String,
  workDetailsDateLinks: Array,
});
</script>

<style scoped>
datetime {
  text-decoration: underline;
}
div {
  font-size: 90%;
  margin: 2rem 0;
}
</style>
