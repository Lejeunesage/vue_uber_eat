<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
    

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/restaurant">Restaurant</RouterLink>
      </nav>
    </div>
  </header> -->
  

  <RouterView />
</template>

<style >

::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-thumb{
  background-color: #47b275;
  border-radius: 50px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
