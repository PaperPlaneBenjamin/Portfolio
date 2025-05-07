<template>
  <div class="card">
    <NuxtImg
      v-if="icon"
      :src="icon"
      :alt="name"
      class="picture-degree"
      loading="lazy"
    />
    <div class="text-degree">
      <p class="certification">{{ certification }}</p>
      <p>{{ mention }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  mention: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  min-width: 120px;
  height: 120px;
  margin-right: 1rem;
  background: #022c43;
  border-radius: 1rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 8px #0ac37f;
  color: white;
  text-align: center;
  transition: transform 0.2s;
  padding: 10px;
  gap: 10px;
  p {
    color: white;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  .certification {
    color: #0ac37f;
  }
  .picture-degree {
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
  }
  .text-degree {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
