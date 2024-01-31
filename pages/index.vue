<template>
  <div style="min-height: 100vh">
    <div class="search-mobile">
      <div class="inputt">
        <input type="text" :placeholder="$t('search')" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.0252 16.1671L19.4689 18.6344C20.1478 19.3199 19.1297 20.3484 18.4508 19.6629L16.0069 17.1954C13.0712 19.6407 8.74031 19.4539 6.01897 16.7055C3.11347 13.771 3.11347 9.01342 6.01897 6.07901C8.92447 3.1446 13.6352 3.1446 16.5407 6.07901C19.2623 8.8277 19.4471 13.2022 17.0252 16.1671ZM15.5225 7.10738C13.1793 4.74092 9.38035 4.74092 7.0372 7.10738C4.69406 9.47384 4.69406 13.3106 7.0372 15.6771C9.38035 18.0436 13.1793 18.0436 15.5225 15.6771C17.8656 13.3106 17.8656 9.47384 15.5225 7.10738Z"
            fill="#90A3BF"
          />
        </svg>
      </div>
      <button>
      <nuxt-link :to="localePath('search')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
        >
          <path
            d="M7.33197 13.5929H1.03125"
            stroke="#DCB63B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.1406 3.90039H16.4413"
            stroke="#DCB63B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.72629 3.84625C5.72629 2.5506 4.66813 1.5 3.36314 1.5C2.05816 1.5 1 2.5506 1 3.84625C1 5.14191 2.05816 6.19251 3.36314 6.19251C4.66813 6.19251 5.72629 5.14191 5.72629 3.84625Z"
            stroke="#DCB63B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.9997 13.5537C16.9997 12.2581 15.9424 11.2075 14.6374 11.2075C13.3316 11.2075 12.2734 12.2581 12.2734 13.5537C12.2734 14.8494 13.3316 15.9 14.6374 15.9C15.9424 15.9 16.9997 14.8494 16.9997 13.5537Z"
            stroke="#DCB63B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </nuxt-link>
      </button>
    </div>
    <div class="hero-section">
      <div class="container">
        <swiper
          :pagination="{
            clickable: true,
          }"
          :effect="'fade'"
          :modules="[SwiperPagination, SwiperPagination]"
          class="mySwiper"
        >
          <swiper-slide
            class="flex-column flex-xl-row flex-lg-row"
          >
            <div data-aos="zoom-in"  class="text">
            <!-- <div class="d-flex flex-column align-items">
            <h1  class="">{{ $t('hero1') }}</h1>
            <h1  class="">{{ $t('and') }}</h1>
            <h1  class="">{{ $t('fin') }}</h1>
            <h1  class="">{{ $t('hero2') }}</h1>
            <h1  class="">{{ $t('hero3') }}</h1>
            </div> -->
              <h1 class="head">
               {{ $t('hero1') }} {{ $t('and') }} <span>{{ $t('fin') }}</span>  {{ $t('hero2') }}  {{ $t('hero3') }}
              </h1>
              <p>
               {{ $t('hero4') }}
              </p>
            </div>

            <div data-aos="zoom-in-up"  class="image">
              <img
                class="img-fluid"
                src="~/assets/images/hero-car.png"
                alt=""
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- <video class="mask" src="~/assets/videos/hero-section-video.mp4"  autoplay loop muted></video> -->
      <!-- <img class="mask" src="~/assets/images/mask-hero.png" alt="" /> -->
      <div class="mask one">
        <client-only>
              <Vue3Lottie :animation-data="hero" :height="750" :width="1300" />
          </client-only>
       <!-- <div id="hero-section-back" class="back" ></div> -->

      </div>
      <div class="mask two">
        <client-only>
              <Vue3Lottie :animation-data="hero" :height="750" :width="1300" />
          </client-only>
       <!-- <div id="hero-section-back" class="back" ></div> -->

      </div>
      <div class="mask three">
        <client-only>
              <Vue3Lottie :animation-data="hero" :height="750" :width="1300" />
          </client-only>
       <!-- <div id="hero-section-back" class="back" ></div> -->

      </div>
    </div>
       <!-- <div id="hero-section-back" style="width: 100vw; height: 100vh;"></div> -->
    <div class="container d-flex align-items-center justify-content-center">
      <div class="search-section">
        <div class="select">
          <span class="type"> {{ $t('kind') }} </span>
          <v-autocomplete
            chips
            :items="carBody"
            item-title="name"
            item-value="value"
            variant="underlined"
            v-model="selectedBody"
            :label="$t('carStat')"
          ></v-autocomplete>
        </div>
        <div class="select">
          <span class="type"> {{ $t('brand') }} </span>
          <v-autocomplete
            clearable
            chips
            v-model="selectedBrand"
            :items="brands"
            item-title="title"
            item-value="id"
            variant="underlined"
            :label="$t('search1')"
          ></v-autocomplete>
        </div>
        <div class="select">
          <span class="type"> {{ $t('model') }} </span>
          <v-autocomplete
            chips
            v-model="selectedmodel"
            :items="selectedBrand ? categArr[0].models : '' "
            item-title="name"
            item-value="id"
            variant="underlined"
            :label="$t('search2')"
          ></v-autocomplete>
        </div>
        <nuxt-link :to="localePath({path:'/cars', query:{type:selectedBody , id:selectedBrand , model: selectedmodel}})">
        <button class="search">{{ $t('searchh') }}</button>
        </nuxt-link>
      </div>
    </div>
   
    <div class="brands">
      <div
        class="text d-flex align-items-center justify-content-center text-center flex-column"
      >
        <h4 class="heading-text">{{ $t('brands') }}</h4>
        <p class="p-text">
          {{ brandsArr.description }}
        </p>
        <!-- <p class="p-text " v-html="brandsArr.description">
        </p> -->
      </div>

      <div class="container">
        <div class="row">
          <div
            v-for="item , index in brandsArr.brands"
            class="col-6 col-xl-2 col-lg-2 col-md-3"
          >
            <nuxt-link class="box"  data-aos="zoom-in-up" :to="localePath({path:'/cars', query:{id:item.id}})">
              <div
                class="image"
                :style="{
                  backgroundImage:
                    'url(' +
                    (item.cover ? item.cover : 'https://placehold.co/600') +
                    ')',
                }"
              >
                <!-- <img src="~/assets/images/brand1.png" alt=""> -->
              </div>
              <span class="name"> {{ item.name }} </span>
              <span class="num"> {{ item.count_cars_count }} {{ $t('car') }} </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="explore">
      <div class="container">
        <div class="text">
          <span data-aos="fade-left"  data-aos-offset="300" data-aos-duration="300">{{ whyCodeCarArr.description }}</span>
          <h3 class="heading-text" data-aos="fade-left"  data-aos-offset="500" data-aos-duration="500" data-aos-delay="300">
           {{ $t('exploree') }}
           </h3>
        </div>
        
        <road />

        <div class="row w-100 align-items-center">
          <div class="col-12 col-xl-4 col-lg-4">
            <div class="box" data-aos="fade-up"  data-aos-anchor-placement="top-center">
              <div class="image">
                <!-- <img src="~/assets/images/explore1.png" alt="" /> -->
                <img :src="whyCodeCarArr.icon_card_1" alt="" />
              </div>
              <span> {{ whyCodeCarArr.why_code_car_label_card_1 }} </span>
              <p>
                {{ whyCodeCarArr.why_code_car_cars_card_1 }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xl-4 col-lg-4 my-3">
            <div class="box" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-delay="200">
              <div class="image">
                <!-- <img src="~/assets/images/explore2.png" alt="" /> -->
                <img :src="whyCodeCarArr.icon_card_2" alt="" />
              </div>
              <span> {{ whyCodeCarArr.why_code_car_label_card_2 }} </span>
              <p>
                {{ whyCodeCarArr.why_code_car_cars_card_2 }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xl-4 col-lg-4 my-3">
            <div class="box adv" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-delay="400">
              <div class="image">
                <!-- <img src="~/assets/images/explore3.png" alt="" /> -->
                <img :src="whyCodeCarArr.icon_card_3" alt="" />
              </div>
              <span> {{ whyCodeCarArr.why_code_car_label_card_3 }} </span>
              <p>
                {{ whyCodeCarArr.why_code_car_cars_card_3 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="our-products">
        <div
          class="header mb-4 d-flex flex-column align-items-center justify-content-center w-100"
        >
          <h3 class="mb-5 heading-text">{{ $t('cars') }}</h3>

          <!-- <v-tabs v-model="tabNav" align-tabs="center">
            <v-tab :value="0" class="head">
              <span class="choose"> الاكثر مبيعا </span>
            </v-tab>
            <v-tab :value="1" class="head">
              <span class="choose"> افضل العروض </span>
            </v-tab>
            <v-tab :value="2" class="head">
              <span class="choose"> كلاسيك </span>
            </v-tab>
            <v-tab :value="3" class="head">
              <span class="choose"> موديل السنة </span>
            </v-tab>
          </v-tabs> -->

          <div class="tabs">
            <div
              @click="(tabNav = 0), (tab = 1), getProducts()"
              :class="{ active: tab == 1 }"
              class="tab"
            >
              <span class="choose"> {{ $t('tab1') }} </span>
              <border />
            </div>
            <div
              @click="(tabNav = 1), (tab = 2), getProducts()"
              :class="{ active: tab == 2 }"
              class="tab"
              

            >
              <span class="choose">{{ $t('tab2') }}</span>
              <border />
            </div>
            <div
              @click="(tabNav = 2), (tab = 3), getProducts()"
              :class="{ active: tab == 3 }"
              class="tab"
            >
              <span class="choose"> {{ $t('tab3') }} </span>
              <border />
            </div>
          </div>
        </div>

        <v-window v-model="tabNav">
          <v-window-item v-for="i in 3">
            <swiper
            :navigation="{
          nextEl: '.slider-product-next',
          prevEl: '.slider-product-prev',
        }"
              :breakpoints="{
                '300': {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
                '768': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                '1024': {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }"
              :autoplay="{
                delay: 4500,
                disableOnInteraction: false,
              }"
              :modules="[SwiperNavigation, SwiperAutoplay]"
            >
              <swiper-slide v-for="item , index in productsTags">
                <car-card :car="item"    />
              </swiper-slide>
            </swiper>

            <div v-if="!spinnerProducts && productsTags.length >= 1" class="icons-arrow">
              <div class="icon slider-product-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  class="arrow-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.29289 1.3384C3.90237 1.72995 3.90237 2.36479 4.29289 2.75634L9.58579 8.06316L4.29289 13.37C3.90237 13.7615 3.90237 14.3964 4.29289 14.7879C4.68342 15.1795 5.31658 15.1795 5.70711 14.7879L11.7071 8.77213C12.0976 8.38058 12.0976 7.74574 11.7071 7.35419L5.70711 1.3384C5.31658 0.946851 4.68342 0.946851 4.29289 1.3384Z"
                    
                  />
                </svg>
              </div>
              <div class="icon slider-product-prev">
                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.3384C12.0976 1.72995 12.0976 2.36479 11.7071 2.75634L6.41421 8.06316L11.7071 13.37C12.0976 13.7615 12.0976 14.3964 11.7071 14.7879C11.3166 15.1795 10.6834 15.1795 10.2929 14.7879L4.29289 8.77213C3.90237 8.38058 3.90237 7.74574 4.29289 7.35419L10.2929 1.3384C10.6834 0.946851 11.3166 0.946851 11.7071 1.3384Z" />
</svg>
              </div>
            </div>
            <!-- <div class="row">
              <div
                v-for="item in productsTags"
                class="col-12  col-xl-3 col-lg-3 col-md-6"
              >
                <car-card :car="item" />
              </div>
            </div> -->
          </v-window-item>
        </v-window>
        <client-only v-if="spinnerProducts">
          <Vue3Lottie :animation-data="loader" :height="100" :width="100" />
        </client-only>
      </div>
    </div>
    <!-- <img :src="financingAdv.icon_card_1" alt=""> -->
    <div class="best-offers">
      <div class="container">
        <div v-if="financingAdv" class="row">
          <div class="col-12 col-xl-5 col-lg-5 " data-aos="fade-right"  data-aos-delay="0">
            <div class="text-container">
              <span class="special"> {{ $t('about1') }}</span>
              <h4>{{ financingAdv.description }}</h4>
              <div class="main-image">
                <div class="main d-flex">
                  <div class="image">
                    <img :src="financingAdv.icon_card_1" alt="" />
                  </div>
                  <div class="choose d-flex flex-column">
                    <h6 class="fw-bold">
                      {{ financingAdv.financing_advantage_label_card_1 }}
                    </h6>
                    <span>
                      {{ financingAdv.financing_advantage_card_1 }}
                    </span>
                  </div>
                </div>
                <div class="main d-flex">
                  <div class="image">
                    <img :src="financingAdv.icon_card_2" alt="" />
                
                  </div>
                  <div class="choose d-flex flex-column">
                    <h6 class="fw-bold">
                      {{ financingAdv.financing_advantage_label_card_2 }}
                    </h6>
                    <span>
                      {{ financingAdv.financing_advantage_card_2 }}
                    </span>
                  </div>
                </div>
              </div>
              <nuxt-link :to="localePath('/finance')">
              <button>{{ $t('finance') }}</button>
              </nuxt-link>
            </div>
          </div>
          <div
            class="col-12 bg-dange theImg col-xl-7 col-lg-7  d-flex justify-content-end"
            data-aos="fade-left"
          >
            <img class="big-img" :src="financingAdv.image" />
          </div>
        </div>
      </div>
    </div>

    <div class="container all-marks">
      <div class="header d-flex align-items-center justify-content-c">
        <div class="text d-flex text-center w-100 align-items-center flex-column">
          <h3 class="heading-text">{{ $t('markss') }}</h3>
          <span class="p-text">{{ financingbodyArr.description }}</span>
        </div>
      </div>
      <div class="row gap- align-items-center">
        <div
          v-for="item , index in financingbodyArr.banks"
          class="col-6 col-xl-2 col-lg-2 col-md-4"
        >
          <div class="box " data-aos="fade-down" data-aos-delay="300">
            <div>
              <img :src="item.image" clss="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { Vue3Lottie } from "vue3-lottie";
import hero from "~/assets/animations/hero.json";
let tab = ref(1);
let tabNav = ref(0);
const localePath = useLocalePath();

let { locale } = useI18n();

let brandsArr = ref([]);
let financingbodyArr = ref([]);
let whyCodeCarArr = ref([]);
let financingAdv = ref();

let carBody = ref([
  {
    name: locale.value == 'ar' ? "مستعمل" : 'used',
    value: 0,
  },
  {
    name: locale.value == 'ar' ? "جديد" : 'new',
    value: 1,
  },
]);


const calculateDelay = (index) => `${index * 300}`;

let selectedBrand = ref();
let selectedmodel = ref();
let selectedBody = ref();
const getBrands = async () => {
  let result = await axios.get(`${getUrl()}/brand`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  // let result1 = await axios.get(`${getUrl()}/categories`, {
  //   headers: {
  //     "Content-Language": `${locale.value}`,
  //   },
  // });

  if (result.status == 200) {
    brandsArr.value = result.data.data;
  }

  // categArr.value = result1.data.data;
};
const getfinancingbody = async () => {
  let result = await axios.get(`${getUrl()}/financing-body`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    financingbodyArr.value = result.data.data;
  }
};
const getfinancingAdv = async () => {
  let result = await axios.get(`${getUrl()}/financing-advantage`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    financingAdv.value = result.data.data;
  }
};

const whyCodeCar = async () => {
  let result = await axios.get(`${getUrl()}/why-code-car`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    whyCodeCarArr.value = result.data.data;
  }
};



let optionsCars = ref([]);
let brands = ref([]);

let bank_offer_id = ref(null);
const getOptions = async () => {
  let result = await axios.get(`${getUrl()}/car-option`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  optionsCars.value = result.data.data;
  brands.value = result.data.data.brands;
};


const categArr = computed(()=>{
  if(optionsCars.value.brands){
    return optionsCars.value.brands.filter((ele)=>{
      return selectedBrand.value == ele.id
    });
  }
});


let spinnerProducts = ref(false);
let productsTags = ref([]);
const getProducts = async () => {
  spinnerProducts.value = true;
  productsTags.value = [];
  let result = await axios.get(`${getUrl()}/filter`, {
    params: {
      tag: tab.value,
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    spinnerProducts.value = false;
  }
  productsTags.value = result.data.data;
};

const customFilter = (itemTitle, queryText, item) => {
  const textOne = item.raw.name.toLowerCase();
  const textTwo = item.raw.abbr.toLowerCase();
  const searchText = queryText.toLowerCase();

  return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1;
};

onMounted(() => {
  getOptions();
  getBrands();
  whyCodeCar();
  getfinancingbody();
  getfinancingAdv();
  getProducts();
  VANTA.WAVES({
  el: "#hero-section-back",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  // minHeight: 100.00,
  // minWidth: 100.00,
  scale: 1.00,
  scaleMobile: 1.00,
  // shininess: 0.00,
  color: 0x1b2126
})
});
</script>

<style lang="scss" scoped></style>
