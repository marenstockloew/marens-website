<template>
  <header>
    <ul class="header-list">
      <li class="big"><router-link to="/works" @click="removeCanvas">works</router-link></li>
      <li class="center"><router-link to="/">&#x1f343</router-link></li>
      <li class="big right"><router-link to="/about" @click="removeCanvas">about</router-link></li>
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
}
.header-list {
    margin-bottom: 5rem;
    padding: .5rem 2rem;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
}
.header-list a {
  color: var(--hell);
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
.big {
  font-size: 4.5rem;
}
.center {
  justify-content: center;
}
.center:hover {
  font-size: 120%;
}
.right {
  justify-content: right;
}
</style>