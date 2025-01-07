<template>
  <header>
    <ul>
      <li><router-link to="/works" @click="removeCanvas">works</router-link></li>
      <li><a href="/">&#x1f343</a></li>
      <li><router-link to="/about" @click="removeCanvas">about</router-link></li>
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
  height: 2.5rem;
  font-family: var(--header-font), sans-serif;
}
ul {
    margin-bottom: 5rem;
    padding: .5rem 2rem;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2.5rem;
}
ul a{
  color: var(--hell);
}
</style>