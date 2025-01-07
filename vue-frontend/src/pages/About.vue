<template>
  <div class="content">
    <h2>{{ result.entries[0].title }}</h2>
    <p>{{ result.entries[0].aboutDescription }}</p>
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
.content {
  margin: 7.5rem auto;
}
</style>
