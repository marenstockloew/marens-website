<template>
  <div v-if="currentWorkDetails" class="content">
    <div class="text">
      <h2>{{ currentWorkDetails.title }}</h2>

      <!-- Loop over all Matrix fields -->
      <div v-for="element of currentWorkDetails.details" :key="element.id">
        <!-- Dates -->
        <exhibition-date
          v-if="element.typeHandle === 'exhibitionDate'"
          :workDetailsTitle="element.title"
          :workDetailsDate="element.date"
          :workDetailsDateDescription="element.description"
          :workDetailsDateLinks="element.externalLinks"
        ></exhibition-date>

        <!-- Descriptions -->
        <additional-text
          v-if="element.typeHandle === 'additionalText'"
          :additionalTextTitle="element.title"
          :additionalTextDescription="element.description"
        ></additional-text>

        <!-- Photos -->
        <photo-documentation
          v-if="element.typeHandle === 'photoDocumentation'"
          :workDetailsTitle="element.title"
          :workDetailsPhotos="element.photos"
        ></photo-documentation>
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
import additionalText from "@/components/WorkDetailsFeed/additionalText.vue";
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
.p5canvas {
  display: none !important;
}
</style>
