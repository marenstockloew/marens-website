<template>
  <div v-if="currentWorkDetails" class="content">
    <div class="text">
      <h2>{{ currentWorkDetails.title }}</h2>
      <div v-for="element of currentWorkDetails.details" :key="element.id">
        <h3 v-if="element.title">{{ element.title }}</h3>
        <div v-if="element.typeHandle === 'exhibitionDate'" class="exhibition-info">
          <datetime>{{ element.date }}</datetime>
          <p>{{ element.description }}</p>
          <p v-for="link in element.externalLinks">
            <a :href="link.externalLink" target="_blank">{{ link.title }}</a>
          </p>
        </div>
        <p v-if="element.typeHandle === 'additionalText'" class="description">
          {{ element.description }}
        </p>
        <div v-if="element.typeHandle === 'photoDocumentation'">
          <img
            v-for="photo of element.photos"
            :src="photo.url"
            :alt="photo.title"
            class="imageRoll"
          />
        </div>
        <div v-if="element.typeHandle === 'space'" class="space"></div>
      </div>
    </div>
    <!-- <img :src="currentWorkDetails.mainImage[0].url" class="imageRoll" :alt="currentWorkDetails.mainImage[0].title" /> -->
  </div>
  <div v-else class="content">
    Could not find this artwork.
    <router-link :to="{ name: 'Works' }">Go back to overview</router-link>.
  </div>
</template>

<script setup>
// CAREFUL: Craft wants a [String] as variable type
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { SELECTED_WORK_DETAILS_QUERY } from "@/queries/work_details_query";

const props = defineProps(["slug"]);
const currentSlugValue = props.slug;;

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
datetime {
  text-decoration: underline;
}
.exhibition-info {
  margin-top: 1rem;
  font-size: .9rem;
  margin-bottom: 2rem;
}
.space {
  height: 5rem;
}
.imageRoll {
  height: 90vh;
  aspect-ratio: 7/5;
  object-fit: cover;
  border-radius: 0.15rem;
  margin: 3rem 0;
}
.p5canvas {
  display: none !important;
}
</style>
