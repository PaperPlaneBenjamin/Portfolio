<template>
  <section id="about">
    <h2>A propos</h2>
    <div class="about-content">
      <Avatar src="/profil.webp" alt="Benjamin Coquet" />
      <p>
        Hello, je suis Benjamin Coquet, j'ai 27 ans. Après un parcours dans
        l'ingénierie mécanique, j'ai pris le chemin en 2024 du développement
        web. Un an plus tard j'obtiens un bac+2 en alternance dans une
        entreprise de développement web E4E5 DEVELOPPEMENT. Mon maître
        d'apprentissage, un développeur full stack sénior m'a appris à
        développer des sites web avec Vuejs et Nuxt. J'ai eu l'occasion de
        travailler sur des projets variés, allant de la création de sites
        vitrines à des applications web plus
      </p>
      <p>
        complexes tel que Sorraremega. Je suis un développeur web passionné par
        la création d'applications performantes et esthétiques. Rigoureux,
        j'aime particulièrement le responsive design. Autonome, j'aime résoudre
        des problématiques et aller chercher l'information. Je suis également un
        développeur agile, j'ai travaillé quotidiennement en sprints et apprécie
        le travail d'équipe. En constante évolution, j'apprends et suis les
        tendances du développement web.
      </p>
    </div>
    <div class="about-degrees">
      <Degree
        icon="/icons/degree/laptop.svg"
        name="ordinateur portable"
        certification="Bac + 2"
        mention="Développeur web"
      />
      <Degree
        icon="/icons/degree/engine.svg"
        name="moteur"
        certification="Bac + 3"
        mention="Génie Mécanique"
      />
      <Degree
        icon="/icons/degree/time.svg"
        name="expérience"
        certification="1 an - Alternance"
        mention="Développeur front end Vuejs"
      />
    </div>
  </section>
</template>

<script setup>
import Avatar from "./Avatar.vue";
import Degree from "./Degree.vue";
</script>

<style lang="scss" scoped>
#about {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #001e3e;
  h2 {
    color: #0ac37f;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .about-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      width: 30%;
      color: white;
      font-size: 1rem;
      line-height: 1.5;
    }
  }
  .about-degrees {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  #about {
    .about-content {
      flex-direction: column;
      align-items: center;
      p {
        width: 100%;
        text-align: center;
      }
    }
    .about-degrees {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 100%;
    }
  }
}
</style>
