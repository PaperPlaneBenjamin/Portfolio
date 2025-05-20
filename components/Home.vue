<template>
  <section id="home">
    <h1>
      Hello!
      <span class="line">
        {{ firstText }}
        <span v-if="firstTyping" class="cursor">|</span>
      </span>
      <span class="line">
        {{ secondText }}
        <span v-if="secondTyping" class="cursor">|</span>
      </span>
    </h1>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const fullFirst = "Je suis Benjamin Coquet";
const fullSecond = "Développeur web";

const firstText = ref("");
const secondText = ref("");
const firstTyping = ref(false);
const secondTyping = ref(false);

function typeText(fullText, refText, cursorFlag, callback) {
  let i = 0;
  cursorFlag.value = true;
  const interval = setInterval(() => {
    refText.value += fullText[i];
    i++;
    if (i === fullText.length) {
      clearInterval(interval);
      cursorFlag.value = false;
      if (callback) callback();
    }
  }, 150);
}

onMounted(() => {
  typeText(fullFirst, firstText, firstTyping, () => {
    setTimeout(() => {
      typeText(fullSecond, secondText, secondTyping);
    }, 500);
  });
});
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  background-size: 100% 100%;
  background-position: 0px 0px, 0px 0px;
  background-image: radial-gradient(
      126% 30% at 52% 5%,
      #0ac37f 1%,
      #ff000000 99%
    ),
    linear-gradient(0deg, #001e3e 0%, #073affff 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 90px;
    font-weight: bold;
    color: #0ac37f;
    min-height: 3em;
  }

  .line {
    display: block;
    font-size: 45px;
    white-space: nowrap;
    overflow: hidden;
    min-height: 1em;
    line-height: 1.2em;
  }

  .cursor {
    display: inline-block;
    width: 1ch;
    color: #0ac37f;
    animation: blink 0.6s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
}
@media (max-width: 768px) {
  #home {
    h1 {
      font-size: 50px;
    }
    .line {
      font-size: 24px;
    }
  }
}
</style>
