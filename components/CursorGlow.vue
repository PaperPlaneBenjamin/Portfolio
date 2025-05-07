<template>
  <div v-if="isDesktop" ref="cursor" class="cursor-glow" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const cursor = ref(null);
const isDesktop = ref(false);

const moveCursor = (e) => {
  if (cursor.value) {
    cursor.value.style.left = `${e.clientX}px`;
    cursor.value.style.top = `${e.clientY}px`;
  }
};

let mediaQuery;

onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 1024px)");

  const update = () => {
    isDesktop.value = mediaQuery.matches;
    if (mediaQuery.matches) {
      window.addEventListener("mousemove", moveCursor);
    } else {
      window.removeEventListener("mousemove", moveCursor);
    }
  };

  // Initial check + listener
  update();
  mediaQuery.addEventListener("change", update);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", moveCursor);
  if (mediaQuery) {
    mediaQuery.removeEventListener("change", update);
  }
});
</script>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle,
    rgba(0, 255, 153, 0.4) 0%,
    rgba(0, 255, 153, 0) 80%
  );
  transform: translate(-50%, -50%);
  filter: blur(8px);
  z-index: 9999;
}
</style>
