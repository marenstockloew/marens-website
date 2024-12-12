<template>
  <div v-if="result" class="home-container">
    <div v-html="result.entries[0].homeText"> </div>
    <div>{{result.entries[0].homeHighlighted}}</div>
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

