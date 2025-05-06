<template>
  <section id="skills">
    <h2>Mes compétences</h2>
    <h3>Développement web</h3>
    <SliderLogo :items="skills.devWeb" :speed="0.7" ref="sliderRef" />
    <h3>Mes outils</h3>
    <SliderLogo :items="skills.workflow" :speed="0.7" ref="sliderRef" />
  </section>
</template>

<script setup>
import SliderLogo from "./SliderLogo.vue";

const skills = {
  devWeb: [
    { name: "HTML", icon: "/icons/web/html.svg" },
    { name: "CSS", icon: "/icons/web/css.svg" },
    { name: "JavaScript", icon: "/icons/web/javascript.svg" },
    { name: "Vue.js", icon: "/icons/web/vuejs.svg" },
    { name: "Nuxt 3", icon: "/icons/web/nuxt.svg" },
    { name: "Wordpress", icon: "/icons/web/wordpress.svg" },
    { name: "Vuetify", icon: "/icons/web/vuetify.svg" },
    { name: "React", icon: "/icons/web/react.svg" },
    { name: "Sass", icon: "/icons/web/sass.svg" },
    { name: "MongoDB", icon: "/icons/web/mongodb.svg" },
    { name: "Node.js", icon: "/icons/web/nodejs.svg" },
  ],
  workflow: [
    { name: "Git", icon: "/icons/workflow/git.svg" },
    { name: "GitHub", icon: "/icons/workflow/github.svg" },
    { name: "Docker", icon: "/icons/workflow/docker.svg" },
    { name: "VSCode", icon: "/icons/workflow/vscode.svg" },
    { name: "Postman", icon: "/icons/workflow/postman.svg" },
    { name: "Notion", icon: "/icons/workflow/notion.svg" },
    { name: "Gitkraken", icon: "/icons/workflow/gitkraken.svg" },
    { name: "Gitlab", icon: "/icons/workflow/gitlab.svg" },
    { name: "Copilot", icon: "/icons/workflow/copilot.svg" },
  ],
};
</script>

<style lang="scss" scoped>
#skills {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #001e3e;
  padding: 2rem;
  h2 {
    color: #0ac37f;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  h3 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
}

.category-select {
  margin-bottom: 1.5rem;
}

button {
  background: transparent;
  border: 1px solid #ccc;
  margin-right: 8px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  color: white;
  transition: background-color 0.2s ease, color 0.2s ease;
}

button.active {
  background-color: #007acc;
  color: white;
  border-color: #007acc;
}

button:hover:not(.active) {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
