<template>
  <header>
    <ul class="header-list">
      <li class="big"><router-link :to="{ name: 'Works' }" @click="removeCanvas">works</router-link></li>
      <li class="center"><router-link :to="{ name: 'Home' }">&#9926;</router-link></li> <!--  Blatt: &#x1f343 -->
      <li class="big right"><router-link :to="{ name: 'About' }" @click="removeCanvas">about</router-link></li>
    </ul>
  </header>
</template>

<script setup>
const removeCanvas = () =>{
  document.querySelectorAll('canvas').forEach(e => e.remove());
}
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
    padding: .5rem 2rem;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
}
.header-list a {
  color: var(--color-header-text);
}
.header-list li {
 width: 20vw;
 display: flex;
 flex-direction: row;
}
.header-list a:hover {
  text-decoration: none;
  font-family: var(--header-hover), sans-serif;
}
a.router-link-exact-active {
  font-family: var(--header-hover), sans-serif;
  color: var(--color-header-active);
}
.big {
  font-size: 2.5rem;
}
.center {
  justify-content: center;
}
.center:hover {
  font-size: 80%;
}
.right {
  justify-content: right;
}
</style>