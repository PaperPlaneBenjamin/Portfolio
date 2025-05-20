export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/image"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      title: "Benjamin Coquet – Développeur Web",
      meta: [
        {
          name: "description",
          content: "Portfolio de Benjamin Coquet, développeur web",
        },
        { property: "og:title", content: "Portfolio - Benjamin" },
        { property: "og:description", content: "Développeur web junior" },
        { property: "og:image", content: "/images/preview.jpg" },
        { property: "og:locale", content: "fr_FR" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },
  hooks: {
    "vite:extendConfig"(config) {
      if (!config.server) config.server = {};
      (config.server as any).host = true;
    },
  },
});
