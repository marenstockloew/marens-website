<template>
  <div v-if="currentWorkDetails" class="content">
    <div class="text">
      <h2>{{ currentWorkDetails.title }}</h2>

      <!-- Loop over all Matrix fields -->
      <div v-for="element of currentWorkDetails.details" :key="element.id">
        <!-- Headings -->
        <h3 v-if="element.title">{{ element.title }}</h3>

        <!-- Dates -->
        <exhibition-date
          v-if="element.typeHandle === 'exhibitionDate'"
          :workDetailsDate="element.date"
          :workDetailsDateDescription="element.description"
          :workDetailsDateLinks="element.externalLinks"
        ></exhibition-date>

        <!-- Descriptions -->
        <p v-if="element.typeHandle === 'additionalText'" class="description">
          {{ element.description }}
        </p>

        <!-- Photos -->
        <photo-documentation
          v-if="element.typeHandle === 'photoDocumentation'"
          :workDetailsPhotos="element.photos"
        ></photo-documentation>

        <!-- Extra Space -->
        <div v-if="element.typeHandle === 'space'" class="space"></div>
      </div>
    </div>
  </div>

  <!-- Show an error and a link back if the connection has failed -->
  <div v-else class="content">
    Could not find this artwork.
    <router-link :to="{ name: 'Works' }">Go back to overview</router-link>.
  </div>
</template>

<script setup>
import ExhibitionDate from "@/components/WorkDetailsFeed/ExhibitionDate.vue";
import PhotoDocumentation from "@/components/WorkDetailsFeed/PhotoDocumentation.vue";
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { SELECTED_WORK_DETAILS_QUERY } from "@/queries/work_details_query";

// CAREFUL: Craft wants a [String] as variable type
const props = defineProps(["slug"]);
const currentSlugValue = props.slug;

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
.space {
  height: 5rem;
}
.p5canvas {
  display: none !important;
}
</style>
