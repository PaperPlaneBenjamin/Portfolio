<template>
  <footer id="footer">
    <p>© 2025 Benjamin Coquet — Tous droits réservés</p>
    <p class="tech-work">Site réalisé avec NuxtJS 3</p>
  </footer>
</template>

<style lang="scss" scoped>
#footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  background-color: #001e3e;
  padding-bottom: 50px;
  p {
    color: white;
  }
}

@media (max-width: 768px) {
  #footer {
    height: 150px;
    padding-bottom: 20px;
    p {
      text-align: center;
      gap: 10px;
    }
  }
}
</style>
