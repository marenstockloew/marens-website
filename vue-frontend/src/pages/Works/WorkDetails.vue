<template>
  <div v-if="currentWorkDetails" class="content">
    <div class="text">
      <h2>{{ currentWorkDetails.title }}</h2>
      <p>{{ currentWorkDetails.description }}</p>
    </div>
    <img :src="currentWorkDetails.mainImage[0].url" class="imageRoll" :alt="currentWorkDetails.mainImage[0].title" />
    {{ currentWorkDetails.details }}
  </div>
  <div v-else class="content">
    Could not find this artwork.
    <router-link :to="{ name: 'Works' }">Go back to overview</router-link>.
  </div>
</template>

<script setup>
// https://apollo.vuejs.org/guide-composable/query
// CAREFUL: Craft wants a [String] as variable type
// Use computed property for the result
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const props = defineProps(["slug"]);
const currentSlugValue = props.slug;

const SELECTED_WORK_DETAILS_QUERY = gql`
  query workDetails($slug: [String]) {
    entries(slug: $slug) {
      id
      title
      slug
      ... on works_Entry {
        description
        mainImage {
          title
          url
        }
        details {
          ... on exhibitionDate_Entry {
            typeHandle
            title
            date
          }
          ... on additionalText_Entry {
            typeHandle
            title
            description
          }
          ... on photoDocumentation_Entry {
            typeHandle
            title
            photos {
              title
              url
            }
          }
          ... on videoDocumentation_Entry {
            typeHandle
            title
            video {
              url
            }
          }
        }
      }
    }
  }
`;

const { result, variables } = useQuery(SELECTED_WORK_DETAILS_QUERY);

function selectCurrentSlug(slug) {
  variables.value = {
    slug,
  };
}

selectCurrentSlug(currentSlugValue);

const currentWorkDetails = computed(() => result.value?.entries[0] ?? null);

</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imageRoll {
  width: 90vw;
  aspect-ratio: 7/5;
  object-fit: cover;
  border-radius: 0.15rem;
  opacity: 0.9;
  margin: 3rem;
}
.p5canvas {
  display: none !important;
}
</style>
