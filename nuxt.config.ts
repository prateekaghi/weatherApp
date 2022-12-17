// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
    preference: "light",
  },
});
