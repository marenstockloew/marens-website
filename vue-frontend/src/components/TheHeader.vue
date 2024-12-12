<template>
  <header>
    <ul>
      <li><router-link to="/works">works</router-link></li>
      <li><router-link to="/">&#x1f343</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
ul {
    width: 100vw;
    margin-bottom: 5rem;
    padding: .5rem 2rem;
    position: sticky;
    top: 0;
    list-style-type: none;
    background-color: var(--dunkel);
    color: var(--hellblau);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>