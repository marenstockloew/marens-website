<!-- HEADER: Links to the three pages WORKS, HOME and ABOUT -->

<template>
  <header>
    <ul class="header-list">
      <li class="big">
        <router-link :to="{ name: 'Works' }" @click="removeCanvas"
          >works</router-link
        >
      </li>
      <li class="center">
        <router-link :to="{ name: 'Home' }" >&#127811;</router-link>
      </li>
      <li class="big right">
        <router-link :to="{ name: 'About' }" @click="removeCanvas"
          >about</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script setup>
const removeCanvas = () => {
  document.querySelectorAll("canvas").forEach((e) => e.remove());
};
</script>

<style scoped>
header {
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  font-family: var(--header-font), sans-serif;
  margin-bottom: 5rem;
}
.header-list {
  padding: 0.5rem 2rem;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
}
.header-list a {
  color: var(--color-header-text);
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.header-list li {
  width: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header-list a:hover {
  text-decoration: none;
  font-size: 97%;
}
.header-list a.router-link-exact-active {
  font-family: var(--header-hover), sans-serif;
  color: var(--color-header-active);
}
.big {
  font-size: 4rem;
}
.center {
  justify-content: center;
}
.right {
  justify-content: right;
}
@media (max-width: 600px) {
  .header-list {
    font-size: 1rem
  }
  .big {
    font-size: 2rem;
  }
}
@media (max-width: 900px) {
  .header-list {
    font-size: 1.5rem
  }
  .big {
    font-size: 3rem;
  }
}
</style>
