<template>
  <div v-if="result" class="content">
    <ul v-if="result && result.entries">
      <li v-for="(entry,index) of result.entries" :key="entry.id">
        <router-link
          :to="{ name: 'WorkDetails', params: { slug: entry.slug } }"
          class="work-link"
        >
          <works-card
            bgColor="--color-works-bg-alternating"
            :worksMainImageUrl="entry.mainImage[0].url"
            :worksMainImageTitle="entry.mainImage[0].title"
            :worksTitle="entry.title"
            :worksDescription="entry.description"
            :worksColorIndex = "index"
          >
          </works-card>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import WorksCard from "@/components/WorksCard.vue";
import { useQuery } from "@vue/apollo-composable";
import { WORKS_OVERVIEW_QUERY } from "@/queries/works_overview_query";
const { result } = useQuery(WORKS_OVERVIEW_QUERY);
</script>

<style scoped>
canvas {
  display: none !important;
}
ul {
  list-style-position: inside;
  list-style-type: none;
  padding-left: 0;
}
.work-link {
  text-decoration: none;
}
</style>
