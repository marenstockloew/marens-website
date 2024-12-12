<template>
  <the-header></the-header>
  <div class="content"><router-view></router-view></div>
</template>

<script setup>

import TheHeader from './components/TheHeader.vue';

components: TheHeader;

</script>