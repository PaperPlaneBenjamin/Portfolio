<template>
  <div class="scroll-container" ref="container">
    <div
      class="scroll-track"
      ref="track"
      :style="{ transform: `translateX(${position}px)` }"
    >
      <div v-for="n in 2" :key="n" class="loop">
        <div v-for="item in items" :key="item.name + n" class="card">
          <NuxtImg
            v-if="item.icon"
            :src="item.icon"
            :alt="'Logo de ' + item.name"
            loading="lazy"
          />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  speed: {
    type: Number,
    default: 0.5,
  },
});

const container = ref(null);
const track = ref(null);
let animationFrame;
let position = ref(0);
let trackWidth = 0;

const animate = () => {
  position.value -= props.speed;
  if (Math.abs(position.value) >= trackWidth / 2) {
    position.value = 0;
  }
  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  requestAnimationFrame(() => {
    if (track.value) {
      trackWidth = track.value.scrollWidth;
      animate();
    }
  });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<style scoped lang="scss">
.scroll-container {
  overflow: hidden;
  width: 100%;
}

.scroll-track {
  display: flex;
  will-change: transform;
}

.loop {
  display: flex;
}

.card {
  min-width: 120px;
  height: 120px;
  margin-right: 1rem;
  background: #022c43;
  border-radius: 1rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  transition: transform 0.2s;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
}

@media (min-width: 640px) {
  .card {
    min-width: 140px;
    height: 140px;

    img {
      width: 48px;
      height: 48px;
    }
  }
}
</style>
