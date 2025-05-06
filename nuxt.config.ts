export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

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
