<template>
  <div style="min-height: 100vh">
    <div class="search-mobile">
      <div class="inputt">
        <input type="text" v-model="searchValue" @keypress.enter="goCarsFilterByName()" :placeholder="$t('search')" />
        <svg @click="goCarsFilterByName()" loading="lazy" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
          fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M17.0252 16.1671L19.4689 18.6344C20.1478 19.3199 19.1297 20.3484 18.4508 19.6629L16.0069 17.1954C13.0712 19.6407 8.74031 19.4539 6.01897 16.7055C3.11347 13.771 3.11347 9.01342 6.01897 6.07901C8.92447 3.1446 13.6352 3.1446 16.5407 6.07901C19.2623 8.8277 19.4471 13.2022 17.0252 16.1671ZM15.5225 7.10738C13.1793 4.74092 9.38035 4.74092 7.0372 7.10738C4.69406 9.47384 4.69406 13.3106 7.0372 15.6771C9.38035 18.0436 13.1793 18.0436 15.5225 15.6771C17.8656 13.3106 17.8656 9.47384 15.5225 7.10738Z"
            fill="#90A3BF" />
        </svg>
      </div>
      <button id="search-btnn" aria-label="search">
        <nuxt-link :to="localePath('search')">
          <svg loading="lazy" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M7.33197 13.5929H1.03125" stroke="#DCB63B" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M10.1406 3.90039H16.4413" stroke="#DCB63B" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.72629 3.84625C5.72629 2.5506 4.66813 1.5 3.36314 1.5C2.05816 1.5 1 2.5506 1 3.84625C1 5.14191 2.05816 6.19251 3.36314 6.19251C4.66813 6.19251 5.72629 5.14191 5.72629 3.84625Z"
              stroke="#DCB63B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.9997 13.5537C16.9997 12.2581 15.9424 11.2075 14.6374 11.2075C13.3316 11.2075 12.2734 12.2581 12.2734 13.5537C12.2734 14.8494 13.3316 15.9 14.6374 15.9C15.9424 15.9 16.9997 14.8494 16.9997 13.5537Z"
              stroke="#DCB63B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </nuxt-link>
      </button>
    </div>
    <!-- <div class="hero-section">
      <div class="container">
        <swiper :pagination="{
          clickable: true,
        }" :effect="'fade'" :modules="[SwiperPagination, SwiperPagination]" class="mySwiper">
          <swiper-slide class="flex-column flex-xl-row flex-lg-row">
            <div data-aos="zoom-in" class="text">
              <h1 class="head">
                {{ $t('hero1') }} {{ $t('and') }} <span>{{ $t('fin') }}</span> {{ $t('hero2') }} {{ $t('hero3') }}
              </h1>
              <p>
                {{ $t('hero4') }}
              </p>
            </div>

            <div data-aos="zoom-in-up" class="image">
              <NuxtImg class="img-fluid" format="webp" alt="hero-car" src="/images/hero-car.png" quality="80" width="650" height="300" loading="lazy" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="mask one">
        <client-only>
          <Vue3Lottie :animation-data="hero" :height="750" :width="1300" />
        </client-only>

      </div>
      <div class="mask two">
        <client-only>
          <Vue3Lottie :animation-data="hero" :height="750" :width="1300" />
        </client-only>

      </div>
      <div class="mask three">
        <client-only>
          <Vue3Lottie :animation-data="hero" :height="750" :width="1300" />
        </client-only>
      </div>
    </div> -->
    <!-- <slider></slider> -->
    <div style="width:100%; height:100vh;margin-top:-10px;">
     <iframe class="iframeSlider" src="https://control.codecar.com.sa/slider/code-car-ar" width="100%" height="100%" frameborder="0"></iframe>
    </div>

    <!-- <div id="hero-section-back" style="width: 100vw; height: 100vh;"></div> -->
    <div class="container d-flex align-items-center justify-content-center">
      <div class="search-section">
        <div class="select first">
          <span class="type"> {{ $t('kind') }} </span>
          <v-autocomplete clearable chips :items="carBody" item-title="name" item-value="value" variant="underlined"
            v-model="selectedBody" :label="$t('carStat1')"></v-autocomplete>
        </div>
        <div class="select">
          <span class="type"> {{ $t('brand') }} </span>
          <v-autocomplete clearable chips v-model="selectedBrand" :items="brands" item-title="title" item-value="id"
            variant="underlined" :label="$t('search1')"></v-autocomplete>
        </div>
        <div class="select">
          <span class="type"> {{ $t('model') }} </span>
          <v-autocomplete clearable chips v-model="selectedmodel" :items="selectedBrand ? categArr[0].models : ''"
            item-title="name" item-value="id" variant="underlined" :label="$t('search2')"></v-autocomplete>
        </div>
        <nuxt-link
          :to="localePath({ path: '/cars', query: { type: selectedBody, id: selectedBrand, model: selectedmodel } })">
          <button class="search">{{ $t('searchh') }}</button>
        </nuxt-link>
      </div>
    </div>

    <div class="brands">
      <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
        <h1 class="heading-text">{{ $t('brands') }}</h1>
        <p v-if="descBrands" class="p-text">
          {{ descBrands }}
        </p>
        <!-- <p class="p-text " v-html="brandsArr.description">
        </p> -->
      </div>

      <div class="container">
        <div class="row">
          <div v-for="item, index in brandsArr" class="col-6 col-xl-2 col-lg-2 col-md-3">
            <nuxt-link class="box" data-aos="zoom-in-up" :to="localePath({ path: '/cars', query: { id: item.id } })">
              <div loading="lazy" class="image" :style="{
          backgroundImage:
            'url(' +
            (item.cover) +
            ')',
        }">
                <!-- <img src="~/assets/images/brand1.png" alt=""> -->
              </div>
              <span class="name"> {{ item.name }} </span>
              <span class="num"> {{ item.count_cars_count }} {{ $t('car') }} </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center mt-5">
              <v-progress-circular
                  v-if="pending1"
                  indeterminate
                  :size="45"
                  :width="6"
                  color="#dcb63b"
                ></v-progress-circular>
              
              </div>
      <div v-if="page < pageCount" class=" d-flex align-items-center justify-content-center mt-4">
       <button @click="loadMore()" class="load-more-btn">{{ $t('more') }}</button>
      </div>
    </div>

    

    <div class="explore">
      <div class="container">
        <div class="text">
          <span data-aos="fade-left" data-aos-offset="300" data-aos-duration="300">{{ whyCodeCarArr.description
            }}</span>
          <h3 class="heading-text" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500"
            data-aos-delay="300">
            {{ $t('exploree') }}
          </h3>
        </div>

        <road />

        <div class="row w-100 align-items-center">
          <div class="col-12 col-xl-4 col-lg-4">
            <div class="box" data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div class="image">
                <NuxtImg :src="whyCodeCarArr.icon_card_1" format="webp" :alt="whyCodeCarArr.why_code_car_label_card_1" quality="80" width="60" height="60" loading="lazy" />
              </div>
              <span> {{ whyCodeCarArr.why_code_car_label_card_1 }} </span>
              <p>
                {{ whyCodeCarArr.why_code_car_cars_card_1 }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xl-4 col-lg-4 my-3">
            <div class="box" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
              <div class="image">
                <NuxtImg :src="whyCodeCarArr.icon_card_2" format="webp" :alt="whyCodeCarArr.why_code_car_label_card_2" quality="80" width="60" height="60" loading="lazy" />

              </div>
              <span> {{ whyCodeCarArr.why_code_car_label_card_2 }} </span>
              <p>
                {{ whyCodeCarArr.why_code_car_cars_card_2 }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xl-4 col-lg-4 my-3">
            <div class="box adv" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
              <div class="image">
                <NuxtImg :src="whyCodeCarArr.icon_card_3" format="webp" :alt="whyCodeCarArr.why_code_car_label_card_3" quality="80" width="60" height="60" loading="lazy" />

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
        <div class="header mb-4 d-flex flex-column align-items-center justify-content-center w-100">
          <h3 class="mb-5 heading-text">{{ $t('cars') }}</h3>

          <div class="tabs">
            <div v-for="item, index in tags" @click="(tabNav = index), (tab = item.id), getProducts()"
              :class="{ active: tab == item.id }" class="tab">
              <span class="choose"> {{ item.title }} </span>
              <border />
            </div>
          </div>
        </div>

        <client-only v-if="spinnerProducts">
          <Vue3Lottie :animation-data="loaderr" :height="100" :width="100" />
        </client-only>
      <swiper :navigation="{
          nextEl: '.slider-product22-next',
          prevEl: '.slider-product22-prev',
        }" :breakpoints="{
          '300': {
            slidesPerView: 1.3,
            spaceBetween: 30,
          },
          '900': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '1200': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }" :modules="[SwiperNavigation, SwiperAutoplay]">
        <swiper-slide v-for="item, index in productsTags">
          <car-card :car="item" :myFunction="getProducts" />
        </swiper-slide>
        <div class="icons-arrow">
          <div class="slider-product22-next">
            <div v-if="productsTags.length > 4" class="icon">
              <svg loading="lazy" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"
                class="arrow-icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.29289 1.3384C3.90237 1.72995 3.90237 2.36479 4.29289 2.75634L9.58579 8.06316L4.29289 13.37C3.90237 13.7615 3.90237 14.3964 4.29289 14.7879C4.68342 15.1795 5.31658 15.1795 5.70711 14.7879L11.7071 8.77213C12.0976 8.38058 12.0976 7.74574 11.7071 7.35419L5.70711 1.3384C5.31658 0.946851 4.68342 0.946851 4.29289 1.3384Z" />
              </svg>
            </div>
          </div>
          <div class="slider-product22-prev">
            <div v-if="productsTags.length > 4" class="icon">
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.7071 1.3384C12.0976 1.72995 12.0976 2.36479 11.7071 2.75634L6.41421 8.06316L11.7071 13.37C12.0976 13.7615 12.0976 14.3964 11.7071 14.7879C11.3166 15.1795 10.6834 15.1795 10.2929 14.7879L4.29289 8.77213C3.90237 8.38058 3.90237 7.74574 4.29289 7.35419L10.2929 1.3384C10.6834 0.946851 11.3166 0.946851 11.7071 1.3384Z" />
              </svg>

            </div>
          </div>
        </div>
      </swiper>
      </div>
    </div>

    <!-- <div style="height:100vh;">
      <iframe src='https://my.spline.design/kidsplaygroundphysicscopy-bc6e2942a29cbbd0a3c41e87b19e47f6/' frameborder='0' width='100%' height='100%'></iframe>
    </div> -->

    <!-- <img :src="financingAdv.icon_card_1" alt=""> -->
    <div class="best-offers">
      <div class="container">
        <div v-if="financingAdv" class="row">
          <div class="col-12 col-xl-5 col-lg-5 main-col " data-aos="fade-right" data-aos-delay="0">
            <div class="text-container">
              <span class="special"> {{ $t('about1') }}</span>
              <h4>{{ financingAdv.description }}</h4>
              <div class="main-image">
                <div class="main d-flex">
                  <div class="image hover-container">
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
                <NuxtImg :src="financingAdv.icon_card_2" format="webp" :alt="financingAdv.financing_advantage_label_card_2" quality="80" width="60" height="60" loading="lazy" />

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
                <button class="hover-container">{{ $t('finance') }}</button>
              </nuxt-link>
            </div>
          </div>
          <div class="col-12 bg-dange theImg col-xl-7 col-lg-7  d-flex justify-content-end" data-aos="fade-left">
            <img class="big-img" :src="financingAdv.image" />
          </div>
        </div>
      </div>
    </div>

    <div class="container all-marks">
      <div class="header d-flex align-items-center justify-content-c">
        <div class="text d-flex text-center w-100 align-items-center flex-column">
          <h3 class="heading-text">{{ $t('markss') }}</h3>
          <!-- <span class="p-text">{{ financingbodyArr.description }}</span> -->
        </div>
      </div>
      <div class="row gap- align-items-center">
        <div v-for="item, index in financingbodyArr" class="col-6 col-xl-2 col-lg-3 col-md-4">
          <div class="box " data-aos="fade-down" data-aos-delay="300">
            <div>
              <NuxtImg :src="item.image" format="webp" :alt="`mark ${index}`" quality="80" width="60" height="60" loading="lazy" />

            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center mt-5">
              <v-progress-circular
                  v-if="pending2"
                  indeterminate
                  :size="45"
                  :width="6"
                  color="#dcb63b"
                ></v-progress-circular>
              
              </div>
              
      <div v-if="page2 < pageCount2" class=" d-flex align-items-center justify-content-center mt-4">
       <button @click="loadMore2()" class="load-more-btn">{{ $t('more') }}</button>
      </div>
    </div>
    <!-- <Loader2 v-if="pending"></Loader2> -->

  </div>
</template>

<script setup>
import axios from "axios";
import { Vue3Lottie } from "vue3-lottie";
import hero from "~/assets/animations/hero.json";
import loaderr from "~/assets/animations/Loader.json";

let tab = ref(null);
let tabNav = ref(0);
let pending = ref(true);
const localePath = useLocalePath();

let { locale } = useI18n();

let brandsArr = ref([]);
let descBrands = ref('');
let financingbodyArr = ref([]);
let whyCodeCarArr = ref([]);
let financingAdv = ref();
let router = useRouter();

let pending1 = ref(false);
let pending2 = ref(false);
let total = ref();
let total2 = ref();
let per_page = ref();
let per_page2 = ref();
let itemsPerPage = ref();
let itemsPerPage2 = ref();
let page = ref(1);
let page2 = ref(1);

const filterCars = async () => {
  // pending1.value = true;
  brandsArr.value = [];
  let result = await axios.get(`${getUrl()}/brand`, {
    params: {
      page: page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    descBrands.value = result.data.data.description
    brandsArr.value = result.data.data.brands.original.data;
    itemsPerPage.value = result.data.data.brands.original.meta.per_page;
    per_page.value = result.data.data.brands.original.meta.per_page;
    total.value = result.data.data.brands.original.meta.total;
    if (result.data.data.length < 1) {
      brandsArr.value = [];
    }
  }
};
const filterCar2 = async () => {
  pending1.value = true;
  // brandsArr.value = [];
  let result = await axios.get(`${getUrl()}/brand`, {
    params: {
      page: page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    pending1.value = false;
    brandsArr.value = [...brandsArr.value, ...result.data.data.brands.original.data];
    itemsPerPage.value = result.data.data.brands.original.meta.per_page;
    per_page.value = result.data.data.brands.original.meta.per_page;
    total.value = result.data.data.brands.original.meta.total;
    if (result.data.data.length < 1) {
      brandsArr.value = [];
    }
    if (brandsArr.value.length < 1) {
      pending1.value = true;
    } else {
      pending1.value = false;
    }
  }
};
const filterBank = async () => {
  let result = await axios.get(`${getUrl()}/financing-body`, {
    params: {
      page: page2.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    financingbodyArr.value = result.data.data.banks.original.data;
    itemsPerPage2.value = result.data.data.banks.original.meta.per_page;
    per_page2.value = result.data.data.banks.original.meta.per_page;
    total2.value = result.data.data.banks.original.meta.total;
    if (result.data.data.length < 1) {
      financingbodyArr.value = [];
    }
    if (financingbodyArr.value.length < 1) {
      pending.value = true;
    } else {
      pending.value = false;
    }
  }
};
const filterBank2 = async () => {
  pending2.value = true;
  // brandsArr.value = [];
  let result = await axios.get(`${getUrl()}/financing-body`, {
    params: {
      page: page2.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    pending2.value = false;
    financingbodyArr.value = [...financingbodyArr.value, ...result.data.data.banks.original.data];
    itemsPerPage2.value = result.data.data.banks.original.meta.per_page;
    per_page2.value = result.data.data.banks.original.meta.per_page;
    total2.value = result.data.data.banks.original.meta.total;
    // if (result.data.data.length < 1) {
    //   financingbodyArr.value = [];
    // }
    if (financingbodyArr.value.length < 1) {
      pending2.value = true;
    } else {
      pending2.value = false;
    }
  }
};




const pageCount = computed(() => {
  return Math.ceil(total.value / per_page.value);
});
const pageCount2 = computed(() => {
  return Math.ceil(total2.value / per_page2.value);
});

const loadMore = async () => {
  if (page.value < pageCount.value) {
    page.value++;
    await filterCar2();
  }
};
const loadMore2 = async () => {
  if (page2.value < pageCount2.value) {
    page2.value++;
    await filterBank2();
  }
};

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

let searchValue = ref('');
const goCarsFilterByName = () => {
  router.push(localePath({ path: '/cars', query: { search: searchValue.value } }));
  overlay.value = false;

}

const calculateDelay = (index) => `${index * 300}`;

let selectedBrand = ref();
let selectedmodel = ref();
let selectedBody = ref();
watch(()=> selectedBrand.value , (model)=>{
  if(!model){
    selectedmodel.value = null;
  } else {
    selectedmodel.value = null;

  }
});
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


let tags = ref([]);

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
  tags.value = result.data.data.tags;
  tab.value = tags.value[0].id;
  if (tab.value) {
    getProducts();
  }
};


const categArr = computed(() => {
  if (optionsCars.value.brands) {
    return optionsCars.value.brands.filter((ele) => {
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



useSeoMeta({
  title: locale.value == "ar" ? "الرئيسية" : "home",
  description: 'This is my amazing site, let me tell you all about it.',
});

onMounted(() => {
  getOptions();
  filterCars();
  whyCodeCar();
  filterBank();
  getfinancingAdv();
  getProducts();
  pending.value = false;
  //   VANTA.WAVES({
  //   el: "#hero-section-back",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   // minHeight: 100.00,
  //   // minWidth: 100.00,
  //   scale: 1.00,
  //   scaleMobile: 1.00,
  //   // shininess: 0.00,
  //   color: 0x1b2126
  // })
});
</script>

<style lang="scss">
.iframeSlider{
  overflow: auto !important; /* Or overflow: scroll; */
  scrollbar-width: none !important; /* Firefox */
  -ms-overflow-style: none !important; /* Internet Explorer 10+ */
}
.iframeSlider::-webkit-scrollbar {
  display: none !important; /* Chrome, Safari, and Edge */
}


</style>
