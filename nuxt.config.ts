// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-swiper", "@nuxtjs/i18n", 
    // "nuxt-vite",
     "nuxt-primevue", "nuxt-aos" , 'nuxt-lazy-load' , '@nuxt/image' , '@nuxtjs/critters' , 'nuxt-purgecss'],
  plugins: [],
  render: {
    // Minify HTML, including inline JavaScript
    html: {
      minify: {
        removeRedundantAttributes: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        minifyCSS: true,
        minifyJS: true,
      },
    },
  },
  aos: {
    // Initialize AOS
      once: true, // Animation happens only once
  },
  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,
    
    // Default image must be in the public folder
    defaultImage: '/favicon.png',
  
    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    
    observerConfig: {
      // See IntersectionObserver documentation
    }
  },
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
  vite:{
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        output: {
          comments: false, // Remove comments
        },
    }
  }
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
          rel:"stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        {
          rel:"stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          async:true,
          src: "/js/bootstrap.bundle.min.js",
        },
        {
          async:true,
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTLN8V8W');
        `,
        },
        {
          async:true,
          innerHTML: `
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTLN8V8W"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        `,
          body: true,
        },
      ],
    },
  },

  // "primevue/resources/themes/lara-dark-green/theme.css",
  // "~/assets/bootstrap/css/bootstrap.css",
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/style.css",
  ],
  build: {
    extractCSS: true,
    transpile: ["vuetify", "vue-toastification"],
  },
});
