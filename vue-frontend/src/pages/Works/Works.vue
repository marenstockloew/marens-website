<template>
  <div v-if="result" class="content">
    <ul v-if="result && result.entries">
      <li v-for="entry of result.entries" :key="entry.id">
        <RouterLink
          :to="{ name: 'WorkDetails', params: { slug: entry.slug } }"
          class="work-link"
        >
          <img
            :src="entry.mainImage[0].url"
            :alt="entry.mainImage[0].title"
            class="mainImage"
          />
        </RouterLink>
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
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

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
          title
        }
      }
    }
  }
`);
</script>

<style scoped>
ul {
  list-style-position: inside;
  list-style-type: none;
  padding-left: 0;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 7.5rem 0;
  padding: 0;
  width: 100%;
}
.mainImage {
  width: 100%;
  aspect-ratio: 7/5;
  object-fit: cover;
  border-radius: 0.15rem;
  opacity: 0.9;
}
canvas {
  display: none !important;
}
.work-link:hover {
  text-decoration: none;
  letter-spacing: 1.5rem;
  /* font-weight: bold; */
}
.work-link {
  -webkit-transition: letter-spacing 1s ease-in-out;
 -moz-transition: letter-spacing 1s ease-in-out;
 -o-transition: letter-spacing 1s ease-in-out;
 -ms-transition:letter-spacing 1s ease-in-out;
 transition: letter-spacing 1s ease-in-out;
}
p {
  padding-left: 2rem;
}
h2 {
  padding-left: 2rem;
}
</style>
