// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-swiper", "@nuxtjs/i18n", "nuxt-primevue", "nuxt-aos"],
  plugins: [],
  i18n: {
    // lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        name: "english",
        file: "en.json",
      },
      {
        code: "ar",
        iso: "ar",
        dir: "rtl",
        name: "عربي",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      script: [
        {
          src: "/js/bootstrap.bundle.min.js",
        },
        {
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTLN8V8W');
        `,
        },
        {
          innerHTML: `
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTLN8V8W"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        `,
          body: true
        },
      ],
    },
  },
  
  css: [
    // "primevue/resources/themes/lara-dark-green/theme.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/bootstrap/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  build: {
    transpile: ["vuetify" , 'vue-toastification'],
  },
});
