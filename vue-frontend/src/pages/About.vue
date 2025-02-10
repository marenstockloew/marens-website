<template>
  <div v-if="result" class="content text about-section">
    <h2>{{ result.entries[0].title }}</h2>
    <div v-html="result.entries[0].aboutDescription"></div>
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { ABOUT_FIELDS_QUERY } from "@/queries/about_query";

const { result } = useQuery(ABOUT_FIELDS_QUERY);
</script>

<style scoped>
.p5canvas {
  display: none !important;
}
</style>
