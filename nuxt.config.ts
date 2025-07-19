// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  app: {
    head: {
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/icon', 'nuxt-swiper', '@nuxtjs/i18n'],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700] // Pilih bobot sesuai kebutuhan
    },
    display: 'swap'
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "in-ID",
        iso: "in-ID",
        name: "Indonesia",
        file: "in-ID.json",
      },
    ],
    defaultLocale: "en-US",
    vueI18n: './i18n.config.ts'
  },
})