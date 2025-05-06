<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <CircleX
        color="#0ac37f"
        size="28"
        @click="$emit('close')"
        class="close-icon"
      />
      <h2>{{ title }}</h2>
      <p class="description">
        <strong>Description : </strong>{{ description }}
      </p>
      <p class="problem"><strong>Problématique :</strong> {{ problem }}</p>
      <p class="tech">
        <strong>Compétences développées : </strong> {{ techs.join(" - ") }}
      </p>
      <a
        href="https://github.com/PaperPlaneBenjamin"
        target="_blank"
        class="github-link"
      >
        <img
          src="/icons/workflow/github.svg"
          alt="logo gihtub"
          class="logo-github"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { CircleX } from "lucide-vue-next";

defineProps({
  title: String,
  description: String,
  problem: String,
  techs: Array,
});

defineEmits(["close"]);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 10, 30, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.modal-content {
  background: #01142a;
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 0 30px #0ac37f;
  position: relative;
  animation: fadeIn 0.3s ease;
}

.close-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}

h2 {
  margin-bottom: 1rem;
  font-size: 24px;
  color: #0ac37f;
  text-transform: uppercase;
  text-align: center;
}

.description,
.problem,
.tech {
  margin-bottom: 1rem;
  font-size: 16px;
  line-height: 1.6;
}
.description strong,
.problem strong,
.tech strong {
  color: #0ac37f;
}
.logo-github {
  width: 24px;
  height: 24px;
}

.github-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: #0ac37f;
  border-radius: 50%;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .modal-content {
    padding: 1rem;
    width: 90%;
    margin: 9%;
    height: 90%;
    overflow-y: auto;
  }
  h2 {
    font-size: 20px;
  }
  .description,
  .problem,
  .tech {
    font-size: 14px;
  }
}
.github-link {
  width: 24px;
  height: 24px;
}
.logo-github {
  width: 20px;
  height: 20px;
}
</style>
