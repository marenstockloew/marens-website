<template>
  <div v-if="result" class="content">
    <h2>{{ result.entries[0].title }}</h2>
    <div v-html="result.entries[0].aboutDescription" class="text"></div>
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const { result } = useQuery(gql`
  query about {
    entries(section: "maren") {
      id
      title
      url
      ... on marenDescription_Entry {
        aboutDescription
      }
    }
  }
`);
</script>

<style scoped>
canvas {
  display: none;
}
</style>
