<script setup>
// import { watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const { result } = useQuery(gql`
  query works {
    entries(section: "works") {
      id
      title
      url
      ... on works_Entry {
        description
        mainImage {
          url
        }
      }
    }
  }
`);
// watch(() => {
// console.log(result.value.entries[0].mainImage[0].url);
// });
</script>

<template>
  <div class="content">
    <ul v-if="result && result.entries">
      <li v-for="entry of result.entries" :key="entry.id">
        <h2>{{ entry.title }}</h2>
        <!-- <img src="{{entry.mainImage[url]}}"> -->
        <img :src="entry.mainImage[0].url" style="width: 200px" />
        <p>{{ entry.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
