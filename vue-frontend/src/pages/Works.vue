<template>
  <div class="content">
    <ul v-if="result && result.entries">
      <li v-for="entry of result.entries" :key="entry.id">
        <img :src="entry.mainImage[0].url" class="mainImage" />
        <h2>{{ entry.title }}</h2>
        <p>{{ entry.description }}</p>
      </li>
    </ul>
  </div>
</template>

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
  width: 50%;
  aspect-ratio: 7/5 ;
  object-fit: cover;
  border-radius: .15rem;
  opacity: .9;
}
h2 {
  margin: 2rem;
}
p {
  width: 70ch;
}
.content {
  margin: 7.5rem auto;
}
</style>
