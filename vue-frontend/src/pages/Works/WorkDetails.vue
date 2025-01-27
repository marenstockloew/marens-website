<template>
  <div v-if="result" class="content">
    <h2>{{ result.entries[0].title }}</h2>
    <div class="text">
      <img :src="result.entries[0].mainImage[0].url" class="mainImage" />
      <p>{{ result.entries[0].description }}</p>
    </div>
  </div>
  <div v-else class="content"> Could not find this artwork. <router-link :to="{name: 'Works'}">Go back to overview</router-link>.</div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const props = defineProps(["slug"]);
const currentSlug = props.slug;
console.log("Slug: " + currentSlug);

const { result } = useQuery(gql`
  query works {
    entries(section: "works", slug: "bedeckt-oder-betrübt") {
      id
      title
      slug
      ... on works_Entry {
        description
        mainImage {
          url
        }
      }
    }
  }
`);
</script>

<style scoped>
.mainImage {
  width: 100%;
  aspect-ratio: 7/5;
  object-fit: cover;
  border-radius: 0.15rem;
  opacity: 0.9;
}
.p5canvas {
  display: none !important;
}
</style>
