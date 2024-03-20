<template>
  <div>
    <div class="container cars-filter">
      <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
        <h4 class="heading-text">{{ $t('market') }}</h4>
        <p> {{ desc }} </p>

        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>

      <div class="d-none arrow-icon justify-content-end mb-3" :class="{ 'active': checkSort }">
        <svg @click="checkSort = !checkSort" class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20"
          height="15" viewBox="0 0 6 12" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5.46849 0.414376C5.79194 0.673133 5.84438 1.1451 5.58562 1.46855L1.96044 6.00003L5.58562 10.5315C5.84438 10.855 5.79194 11.3269 5.46849 11.5857C5.14505 11.8444 4.67308 11.792 4.41432 11.4685L0.414321 6.46855C0.195189 6.19464 0.195189 5.80542 0.414321 5.53151L4.41432 0.531506C4.67308 0.20806 5.14505 0.155619 5.46849 0.414376Z"
            fill="#2D3A4A" />
        </svg>
      </div>
      <div class="row">
        <div class="col-12 col-xl-3 col-lg-3" style="position: relative">
          <div class="cars-box filter" :class="{ 'none': !checkSort }">
            <div @click="resetFunc();" class="reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289Z"
                  fill="#2D3A4A" />
              </svg>
              <span> {{ $t('reset') }}</span>
            </div>
            <div class="sort">
              <div class="image">
                <img src="~/assets/images/sort.svg" />
              </div>
              <h6> {{ $t('sort') }} </h6>
            </div>
            <Accordion :multiple="true" :activeIndex="0">
              <AccordionTab :header="$t('filter1')">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex align-items-center gap-2">
                    <v-checkbox style="" class="" id="All-1" v-model="selected1" color="#DCB63B"
                      value="all"></v-checkbox>
                    <label for="All-1">{{ $t('all') }}</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="used1" v-model="selected1" color="#DCB63B"
                        value="0"></v-checkbox>
                      <label for="used1">{{ $t('used') }}</label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="new-1" v-model="selected1" color="#DCB63B"
                        value="1"></v-checkbox>
                      <label for="new-1"> {{ $t('new') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab :header="$t('brands')">
                <div class="d-flex flex-column all-marks-container">
                  <!-- <div class="d-flex align-items-center mt-3 gap-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M13 11H0V4C0 2.346 1.346 1 3 1H13V11ZM21 20H15V3H21C22.654 3 24 4.346 24 6V17C24 18.654 22.654 20 21 20ZM13 23H5C3.346 23 2 21.654 2 20V13H13V23Z"
                                                fill="#90A3BF" />
                                        </svg>
                                        <span class="all-span">كل الماركات</span>

                                    </div> -->
                  <div>
                    <Accordion>
                      <AccordionTab v-for="(item, index) in optionsCars.brands">
                        <template v-slot:header>
                          <div class="d-flex align-items-center gap-2 header-icon">
                            <label :for="`brand-label-${index}`" class="fw-bold">{{ item.title }}</label>
                            <!-- <img src="~/assets/images/brand1.png" /> -->
                            <v-checkbox style="" class="" :id="`brand-label-${index}`" v-model="selected5"
                              color="#DCB63B" :value="item.id"></v-checkbox>
                          </div>
                        </template>
                        <div class="accordtion-container">
                          <div class="mainn d-flex flex-column gap-3">
                            <div v-for="(model, index) in item.models"
                              class="d-flex align-items-center justify-content-between">
                              <div class="d-flex align-items-center gap-2">
                                <v-checkbox style="" class="" :id="`model-label-${index}`" v-model="selected6"
                                  color="#DCB63B" :value="model.id"></v-checkbox>
                                <label :for="`model-label-${index}`">
                                  {{ model.name }}
                                </label>
                              </div>
                              <span class="num">(25)</span>
                            </div>
                          </div>
                        </div>
                      </AccordionTab>
                    </Accordion>
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab :header="$t('gear')">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex align-items-center gap-2">
                    <v-checkbox style="" class="" id="All-2" v-model="selected2" color="#DCB63B"
                      value="all"></v-checkbox>
                    <label for="All-2">{{ $t('all') }}</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="auto-1" v-model="selected2" color="#DCB63B"
                        value="manual"></v-checkbox>
                      <label for="auto-1"> {{ $t('gear1') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="manu-1" v-model="selected2" color="#DCB63B"
                        value="automatic"></v-checkbox>
                      <label for="manu-1"> {{ $t('automatic') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab :header="$t('filter3')">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex align-items-center gap-2">
                    <v-checkbox style="" class="" id="All-3" v-model="selected3" color="#DCB63B"
                      value="all"></v-checkbox>
                    <label for="All-3">{{ $t('all') }}</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-1" v-model="selected3" color="#DCB63B"
                        value="gasoline"></v-checkbox>
                      <label for="label-1"> {{ $t('benz') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-2" v-model="selected3" color="#DCB63B"
                        value="electric"></v-checkbox>
                      <label for="label-2"> {{ $t('elct') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-77" v-model="selected3" color="#DCB63B"
                        value="hybrid"></v-checkbox>
                      <label for="label-77"> {{ $t('hyp') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-7" v-model="selected3" color="#DCB63B"
                        value="diesel "></v-checkbox>
                      <label for="label-7"> {{ $t('dis') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab :header="$t('filter4')">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="All-3" v-model="selected4" color="#DCB63B"
                        value="all"></v-checkbox>
                      <label for="All-3">{{ $t('all') }}</label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-3" v-model="selected4" color="#DCB63B"
                        value="hatchback"></v-checkbox>
                      <label for="label-3"> {{ $t('hatchback') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-4" v-model="selected4" color="#DCB63B"
                        value="sedan"></v-checkbox>
                      <label for="label-4"> {{ $t('sedan') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-5" v-model="selected4" color="#DCB63B"
                        value="our-wheel-drive"></v-checkbox>
                      <label for="label-5"> {{ $t('our-wheel-drive') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-6" v-model="selected4" color="#DCB63B"
                        value="family"></v-checkbox>
                      <label for="label-6"> {{ $t('family') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="label-7" v-model="selected4" color="#DCB63B"
                        value="commercial"></v-checkbox>
                      <label for="label-7"> {{ $t('commercial') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab :header="$t('theYear')">
                <div class="accordtion-container">
                  <div class="mainn d-flex flex-column gap-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center gap-2">
                        <v-checkbox style="" class="" id="All-l-3" v-model="selected7" color="#DCB63B"
                          value="all"></v-checkbox>
                        <label for="All-l-3">{{ $t('all') }}</label>
                      </div>
                      <span class="num">(25)</span>
                    </div>
                    <div v-for="(i, index) in optYears" class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center gap-2">
                        <v-checkbox style="" class="" :id="`labelll-${index}`" v-model="selected7" color="#DCB63B"
                          :value="i"></v-checkbox>
                        <label :for="`labelll-${index}`"> {{ i }} </label>
                      </div>
                      <span class="num">(25)</span>
                    </div>

                    <span class="moree" style="font-size: 12px; color: #dcb63b; cursor: pointer"
                      @click="optYears = years">
                      {{ $t('more') }}
                    </span>
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center gap-2">
                        <v-checkbox style="" class="" :id="`labelll-less`" v-model="selected7" color="#DCB63B"
                          :value="1"></v-checkbox>
                        <label :for="`labelll-less`"> {{ $t('less1') }} </label>
                      </div>
                      <span class="num">(25)</span>
                    </div>
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab :header="$t('color')">
                <div class="d-flex flex-column gap-3">
                  <div v-for="(item, index) in optionsCars.colors"
                    class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" :id="`color-label-${index}`" v-model="selected8" color="#DCB63B"
                        :value="item.id"></v-checkbox>
                      <label :for="`color-label-${index}`">
                        {{ item.title }}
                      </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                </div>
              </AccordionTab>




              <AccordionTab :header="$t('engi')">
                <div class="d-flex flex-column gap-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="All-t-3" v-model="selected9" color="#DCB63B"
                        value="all"></v-checkbox>
                      <label for="All-t-3">{{ $t('all') }}</label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="cc-label-1" v-model="selected9" color="#DCB63B"
                        value="0"></v-checkbox>
                      <label for="cc-label-1"> {{ $t('from1') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="cc-label-2" v-model="selected9" color="#DCB63B"
                        value="1"></v-checkbox>
                      <label for="cc-label-2"> {{ $t('from2') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="cc-label-3" v-model="selected9" color="#DCB63B"
                        value="2"></v-checkbox>
                      <label for="cc-label-3"> {{ $t('from3') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="cc-label-4" v-model="selected9" color="#DCB63B"
                        value="3"></v-checkbox>
                      <label for="cc-label-4"> {{ $t('from4') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="cc-label-5" v-model="selected9" color="#DCB63B"
                        value="4"></v-checkbox>
                      <label for="cc-label-5"> {{ $t('from5') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                      <v-checkbox style="" class="" id="cc-label-6" v-model="selected9" color="#DCB63B"
                        value="5"></v-checkbox>
                      <label for="cc-label-6"> {{ $t('from6') }} </label>
                    </div>
                    <span class="num">(25)</span>
                  </div>
                </div>
              </AccordionTab>
              <AccordionTab :header="$t('price')">
                <div class="range">
                  <v-range-slider class="" v-model="valuePrice" :min="minNum" :max="maxNum" :step="5000"
                    thumb-label="always">
                  </v-range-slider>
                </div>
              </AccordionTab>
            </Accordion>
            <button @click="filterCars();" class="search-btn">{{ $t('searchh') }}</button>

          </div>
          <div @click="checkSort = !checkSort" class="sort-mobile">
            <!-- <img src="~/assets/images/sort.svg" /> -->
            <div class="sort">
              <span class="one"></span>
              <span class="two"></span>
              <span class="three"></span>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-9 col-lg-9 cars-box2" :class="{ 'active': checkSort }">
          <div v-if="!pendingState">
            <div class="row">
              <div v-for="item in filterCarsArr" class="col-12 col-xl-4 col-lg-4 col-md-6">
                <car-card :car="item" />
              </div>
            </div>
            <client-only>
              <Vue3Lottie v-if="spinnerProducts" :animation-data="loader" :height="200" :width="200" />
            </client-only>
            <div class="progress-container">
              <span> {{ $t('watch') }} {{ filterCarsArr.length }} {{ $t('car') }} {{ $t('from0') }} {{ total }} </span>
              <div class="line">
                <v-progress-linear :reverse="reverse" rounded color="#DCB63B" :model-value="progressValue" :height="6">
                </v-progress-linear>

              </div>



              <button @click="loadMore()"> {{ $t('searchMore') }} </button>
            </div>


          </div>
          <div v-if="pendingState" class="empty-state">
            <client-only>
              <Vue3Lottie :animation-data="search" :height="200" :width="200" />
            </client-only>
            <h4> {{ $t('not1') }} </h4>
            <p> {{ $t('not2') }} </p>
            <!-- <button></button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

import { Vue3Lottie } from "vue3-lottie";
import loader from "~/assets/animations/Loader.json";
import search from "~/assets/animations/search.json";

// import Accordion from 'primevue/accordion';
// import AccordionTab from 'primevue/accordiontab';

let { locale } = useI18n();
const localePath = useLocalePath();

let route = useRoute();
let reverse = ref(locale.value == "ar" ? true : false);
let brandId = ref(route.query.id);
let modelId = ref(route.query.model);
let typeCar = ref(route.query.type);
let searchh = ref(route.query.search);
let valuePrice = ref([]);
let minNum = ref(0);
let maxNum = ref(0);
let pendingState = ref(false);
let spinnerProducts = ref(false);
let page = ref(1);
let itemsPerPage = ref();
let total = ref();

let checkSort = ref(false);
const rangeLabel = (value) => {
  return `${value} SAR`;
};
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let years = ref([]);
for (let i = currentYear; i >= currentYear - 14; i--) {
  years.value.push(i);
}

let optYears = ref(years.value.slice(0, 6));
let selected1 = ref(typeCar.value ? [typeCar.value] : []);
let selected2 = ref([]);
let selected3 = ref([]);
let selected4 = ref([]);
let selected5 = ref(brandId.value ? [parseInt(brandId.value)] : []);
let selected6 = ref(modelId.value ? [parseInt(modelId.value)] : []);
let selected7 = ref([]);
let selected8 = ref([]);
let selected9 = ref([]);


const resetFunc = () => {
  selected1.value = ["all"];
  selected2.value = ["all"];
  selected3.value = ["all"];
  selected4.value = ["all"];
  selected5.value = [];
  selected6.value = [];
  selected7.value = ["all"];
  selected8.value = [];
  selected9.value = ["all"];
  valuePrice.value = [minNum.value, maxNum.value];
}

let optionsCars = ref([]);
const getOptions = async () => {
  let result = await axios.get(`${getUrl()}/car-option`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  optionsCars.value = result.data.data;
  minNum.value = parseInt(optionsCars.value.Slider.minPrice);
  maxNum.value = parseInt(optionsCars.value.Slider.maxPrice);
  valuePrice.value = [parseInt(optionsCars.value.Slider.minPrice), parseInt(optionsCars.value.Slider.maxPrice)]
};

let filterCarsArr = ref([]);

let desc = ref('');
const getDesc = async () => {
  let result = await axios.get(`${getUrl()}/allsettings`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  desc.value = result.data.data.exhibitionDescription;
}

const filterCars = async () => {
  spinnerProducts.value = true;
  pendingState.value = false;
  filterCarsArr.value = [];
  let result = await axios.get(`${getUrl()}/filter`, {
    params: {
      type: selected1.value,
      gear_shifters: selected2.value,
      fuel_types: selected3.value,
      car_body: selected4.value,
      brand_id: selected5.value,
      model_id: selected6.value,
      year: selected7.value,
      color_id: selected8.value,
      fuel_tank_capacity: selected9.value,
      min_price: valuePrice.value[0],
      max_price: valuePrice.value[1],
      search: searchh.value ? searchh.value : null,
      page: page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    spinnerProducts.value = false;
    checkSort.value = !checkSort.value;
    filterCarsArr.value = result.data.data;
    itemsPerPage.value = result.data.meta.per_page;
    total.value = result.data.meta.total;
    if (result.data.data.length < 1) {
      filterCarsArr.value = [];
    }
    if (filterCarsArr.value.length < 1) {
      pendingState.value = true;
    } else {
      pendingState.value = false;
    }
  }
};
const filterCar2 = async () => {
  spinnerProducts.value = true;
  pendingState.value = false;
  // filterCarsArr.value = [];
  let result = await axios.get(`${getUrl()}/filter`, {
    params: {
      type: selected1.value,
      gear_shifters: selected2.value,
      fuel_types: selected3.value,
      car_body: selected4.value,
      brand_id: selected5.value,
      model_id: selected6.value,
      year: selected7.value,
      color_id: selected8.value,
      fuel_tank_capacity: selected9.value,
      min_price: valuePrice.value[0],
      max_price: valuePrice.value[1],
      search: searchh.value ? searchh.value : null,
      page: page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    spinnerProducts.value = false;
    filterCarsArr.value = [...filterCarsArr.value, ...result.data.data];
    itemsPerPage.value = result.data.meta.per_page;
    total.value = result.data.meta.total;
    checkSort.value = !checkSort.value;
    if (result.data.data.length < 1) {
      filterCarsArr.value = [];
    }
    if (filterCarsArr.value.length < 1) {
      pendingState.value = true;
    } else {
      pendingState.value = false;
    }
  }
};




const pageCount = computed(() => {
  return Math.ceil(total.value / itemsPerPage.value);
});
const progressValue = computed(() => {
  return ((itemsPerPage.value * page.value) / total.value) * 100;
});

const loadMore = async () => {
  if (page.value < pageCount.value) {
    page.value++;
    await filterCar2();
  }
};


watch(
  () => route.query.search,
  (newSearch) => {
    searchh.value = newSearch;
    filterCars();
  }
);


useHead({
  title: locale.value == 'ar' ? 'السيارات' : 'cars'
});

let items = ref([
  {
    title: locale.value == 'ar' ? "الرئيسية" : "home",
    disabled: false,
    class: "breadcrumbs-text",
    href: "/",
  },
  {
    title: locale.value == 'ar' ? "المعرض" : "market",
    disabled: true,
    class: "breadcrumbs-dark",
    href: "market",
  },
]);

onMounted(() => {
  getDesc();
  getOptions();
  filterCars();
});
</script>
