<template>
  <div class="avatar">
    <NuxtImg
      :src="src"
      :alt="alt"
      class="avatar-image"
      format="webp"
      loading="lazy"
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Avatar",
  },
});
</script>

<style scoped>
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #0a1f44;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
