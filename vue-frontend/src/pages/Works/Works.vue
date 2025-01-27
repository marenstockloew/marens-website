<template>
  <div v-if="result" class="content">
    <ul v-if="result && result.entries">
      <li v-for="entry of result.entries" :key="entry.id">
        <img :src="entry.mainImage[0].url" class="mainImage" />
        <!-- <h2><router-link :to="'/works/'+entry.slug" class="work-link">{{ entry.title }}</router-link></h2> -->
        <h2>
          <router-link
            :to="{ name: 'WorkDetails', params: { slug: entry.slug } }"
            class="work-link"
            >{{ entry.title }}</router-link
          >
        </h2>
        <p>{{ entry.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import { watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import WorkDetails from "./WorkDetails.vue";

const { result } = useQuery(gql`
  query works {
    entries(section: "works") {
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
// watch(() => {
// console.log(result.value.entries[0].mainImage[0].url);
// });
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7.5rem;
}
.mainImage {
  width: 100%;
  aspect-ratio: 7/5;
  object-fit: cover;
  border-radius: 0.15rem;
  opacity: 0.9;
}
h2 {
  margin: 2rem;
}
canvas {
  display: none !important;
}
.work-link:hover {
  text-decoration: none;
  font-weight: bold;
}
</style>
