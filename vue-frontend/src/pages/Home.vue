<template>

  <home-sketch></home-sketch>

  <div class="home-imagewrapper">
    <img
      src="../assets/background.jpg"
      class="home-bgimg"
      alt="Background image of a very pixelated sky"
    />
  </div>

  <div v-if="result" class="home-container">
    <div v-html="result.entries[0].homeText" class="home-text"></div>
    <div class="home-highlighted" @click="scrollToTop">
      {{ result.entries[0].homeHighlighted }}
    </div>
  </div>
  <div v-else>Maren Stocklöw</div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import HomeSketch from "@/components/HomeSketch.vue";

const { result } = useQuery(gql`
  query home {
    entries(section: "home") {
      id
      title
      url
      ... on home_Entry {
        homeText
        homeHighlighted
      }
    }
  }
`);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped>
.home-container {
  width: 80vw;
  position: fixed;
  right: 0;
  bottom: 2rem;
  z-index: 10;
}
.home-text * {
  color: var(--hell);
  font-size: 1.25rem;
  font-family: var(--home-font), sans-serif;
}
.home-highlighted {
  color: var(--roetlich);
  cursor: pointer;
  font-size: 1.25rem;
  font-family: var(--home-font), sans-serif;
}
.home-imagewrapper {
  background-color: white;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 0;
}
.home-bgimg {
  width: 100%;
  object-fit: cover;
  opacity: .85;
}
</style>
