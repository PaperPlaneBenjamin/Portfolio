<template>
  <ul>
    <li
      v-for="(project, i) in projects"
      :style="`background-image: url(${project.backgroundUrl});`"
      :aria-label="'voir le projet ' + project.label"
      :class="active === i ? 'active' : ''"
      @click="active = i"
    >
      <NuxtImg
        v-if="active !== i"
        :src="project.logo"
        :alt="project.alt"
        class="tech-logo"
        format="webp"
        loading="lazy"
      />
      <CirclePlus
        v-if="active == i"
        size="35"
        color="#0ac37f"
        fill="transparent"
        class="info-card"
        @click.stop="modalOpen = true"
      />
    </li>
  </ul>
  <Modale
    v-if="modalOpen"
    :title="projects[active].name"
    :description="projects[active].description"
    :problem="projects[active].problem"
    :techs="projects[active].techs"
    @close="modalOpen = false"
  />
</template>

<script setup>
import { CirclePlus } from "lucide-vue-next";
import Modale from "./Modale.vue";
import portfolio from "../data/portfolio.json";

const projects = ref(portfolio);
const active = ref(0);
const modalOpen = ref(false);
</script>

<style lang="scss" scoped>
body {
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
  line-height: 24px;
  font-size: 16px;
}

ul {
  display: flex;
  max-height: 400px;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
}

li {
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  object-fit: contain;
  overflow: hidden;
  .tech-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 500;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    opacity: 0.9 !important;
  }
  @media screen and (max-width: 768px) {
    li {
      flex: 4;
      .tech-logo {
        width: 50px;
        height: 50px;
      }
    }
  }
  .info-card {
    position: absolute;
    top: 1%;
    right: 1%;
    cursor: pointer;
    z-index: 10;
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(2, 27, 80, 0.85);
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  &.active::before {
    opacity: 0;
  }
  @media screen and (max-width: 768px) {
    .tech-logo {
      width: 50px;
      height: 50px;
    }
    .active {
      min-height: 150px !important;
    }
  }

  &.active {
    flex: 4;
    cursor: default;
    opacity: 0.8;
  }
}

li.active {
  filter: none;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

li.active .info-card {
  animation: pulse 1s infinite;
}
</style>
