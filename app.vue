<template>
  <header>
    <Home />
  </header>
  <main>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <NavigationBar />
    <CursorGlow />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import CursorGlow from "./components/CursorGlow.vue";
useSeoMeta({
  title: "Benjamin Coquet – Développeur Web",
  description: "Portfolio de Benjamin Coquet, développeur web",
  ogTitle: "Portfolio - Benjamin",
  ogDescription: "Développeur web junior",
  ogImage: "/images/preview.jpg",
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace, sans-serif;
  box-sizing: border-box;
  background-color: #001e3e;
}
section {
  padding: 0px 15px;
  box-sizing: border-box;
}
input:-webkit-autofill,
textarea:-webkit-autofill {
  box-shadow: 0 0 0 1000px #001e3e inset !important;
  -webkit-text-fill-color: #0ac37f !important;
}
</style>
