<template>
  <header>
    <ul>
      <li><router-link to="/works" @click="removeCanvas">works</router-link></li>
      <li><router-link to="/">&#x1f343</router-link></li>
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
}
ul {
    margin-bottom: 5rem;
    padding: .5rem 2rem;
    list-style-type: none;
    background-color: var(--dunkel-opacity);
    color: var(--hellblau);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
ul a{
  color: var(--hellblau);
}
</style>