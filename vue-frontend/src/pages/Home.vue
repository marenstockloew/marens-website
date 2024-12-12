<template>
  <div v-if="result" class="home-container">
    <div v-html="result.entries[0].homeText" class="home-text"></div>
    <div class="home-highlighted">{{result.entries[0].homeHighlighted}}</div>
  </div>
  <div v-else>Maren Stocklöw</div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const { result } = useQuery(gql`
query home {
  entries(section: "home") {
    id
    title
    url
    ... on home_Entry{
    homeText,
      homeHighlighted
    }
  }
}
`);
</script>

<style scoped>
.home-container {
  width: 60vw;
  position: absolute;
  right: 0;
  bottom: 2rem;
}
.home-text * {
  color: var(--hell);
}
.home-highlighted {
  color: var(--roetlich);
}
</style>