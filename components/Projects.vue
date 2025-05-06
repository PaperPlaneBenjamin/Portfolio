<template>
  <section id="projects">
    <h2>Mon portfolio</h2>
    <Caroussel />
  </section>
</template>

<script setup>
import Caroussel from "./Caroussel.vue";
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #001e3e;
  padding: 0;
  h2 {
    color: #0ac37f;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
}
</style>
