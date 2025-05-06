<template>
  <section class="navigation-bar">
    <nav class="bottom-nav">
      <ul>
        <li>
          <a
            href="#home"
            :class="{ active: active === 'home' }"
            @click.prevent="setActive('home')"
          >
            <Home />
          </a>
        </li>
        <li>
          <a
            href="#about"
            :class="{ active: active === 'about' }"
            @click.prevent="setActive('about')"
          >
            <User />
          </a>
        </li>
        <li>
          <a
            href="#skills"
            :class="{ active: active === 'skills' }"
            @click.prevent="setActive('skills')"
          >
            <Dumbbell />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            :class="{ active: active === 'projects' }"
            @click.prevent="setActive('projects')"
          >
            <GalleryHorizontalEnd />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            :class="{ active: active === 'contact' }"
            @click.prevent="setActive('contact')"
          >
            <Mail />
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Home,
  User,
  Mail,
  Dumbbell,
  GalleryHorizontalEnd,
} from "lucide-vue-next";

const active = ref("home");
const sections = ["home", "about", "skills", "projects", "contact"];
let isScrollingProgrammatically = false;

function setActive(section) {
  active.value = section;
  const el = document.getElementById(section);
  if (el) {
    isScrollingProgrammatically = true;
    el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      isScrollingProgrammatically = false;
      onScroll();
    }, 600);
  }
  history.replaceState(null, "", `#${section}`);
}

function onScroll() {
  if (isScrollingProgrammatically) return;

  const scrollPos = window.scrollY + window.innerHeight / 3;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const el = document.getElementById(section);
    if (el && el.offsetTop <= scrollPos) {
      if (active.value !== section) {
        active.value = section;
        history.replaceState(null, "", `#${section}`);
      }
      break;
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.navigation-bar {
  display: flex;
  justify-content: center;
  padding: 0;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 60%;
  background-color: #0ac37f;
  z-index: 1000;
  border-radius: 10px 10px 0 0;
}

.bottom-nav ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;
}

.bottom-nav a {
  color: #001e3e;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.bottom-nav a:hover {
  color: white;
}

.bottom-nav a.active {
  color: white;
}

@media (max-width: 768px) {
  .bottom-nav {
    width: 100%;
  }
}
</style>
