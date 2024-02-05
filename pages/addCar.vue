<template>
  <div>
    <div class="container advertisementtt-container">
      <div
        class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
      >
        <h4 class="heading-text">{{ $t("ad") }}</h4>
        <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>

        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>

      <div class="ad-container paymentType">
        <div class="row" :class="{ 'd-none': adNavBtn == 3 }">
          <div class="col-12 col-xl-5 col-lg-5">
            <div class="main-pagination-container finance">
              <div class="pagination-container">
                <div class="contain">
                  <div class="icon" :class="{ active: paymentSec1 == 1 }">
                    <img
                      class="def"
                      src="@/assets/images/calc-icon2.svg"
                      alt=""
                    />
                    <img
                      class="active"
                      src="@/assets/images/calc-icon-active2.svg"
                      alt=""
                    />
                  </div>
                  <div class="icon" :class="{ active: paymentSec2 == 1 }">
                    <img
                      class="def"
                      src="@/assets/images/image-ad.svg"
                      alt=""
                    />
                    <img
                      class="active"
                      src="@/assets/images/image-ad-active.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="text">
                  <div>
                    <h5 :class="{ active: paymentSec1 == 1 }">
                  {{ $t('carData') }}
                    </h5>
                  </div>
                  <div>
                    <h5 :class="{ active: paymentSec2 == 1 }">
                     {{ $t('carImgs') }}

                    </h5>
                  </div>
                </div>
              </div>

              <div class="content-pagination">
                <div>
                  <h5 :class="{ active: paymentSec1 == 1 }"> {{ $t('carData') }} </h5>
                  <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                </div>
                <div>
                  <h5 :class="{ active: paymentSec2 == 1 }">{{ $t('carImgs') }}</h5>
                  <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                </div>
              </div>
              <div class="pagination-container">
                <div class="contain second">
                  <div
                    class="dot"
                    :class="{
                      active: paymentSec1 == 1,
                      check: checkBtnSec1 == 1,
                    }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{
                      active: paymentSec2 == 1,
                      check: checkBtnSec2 == 1,
                    }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-7 col-lg-7">
            <div class="ad-content">
              <div v-if="adNavBtn == 1">
                <h5>{{ $t("namee") }}</h5>
                <div class="input">
                  <label for="">
                    {{ $t("carName") }}
                  </label>
                  <input
                    v-model="form4.Car_Name"
                    type="text"
                    :placeholder="$t('examplee1')"
                  />
                  <span class="error-msg" v-if="v1$.Car_Name.$error">{{
                    v1$.Car_Name.$errors[0].$message
                  }}</span>
                  <span class="error-msg2" v-if="errors1.Car_Name">{{
                    errors1.Car_Name[0]
                  }}</span>
                </div>
                <div class="input">
                  <label for="">
                    <span> {{ $t("car_det") }} </span>
                  </label>
                  <textarea
                    v-model="form4.Car_Description"
                    :maxlength="500"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <div class="num d-flex align-items-center gap-3">
                    <span> 500 / {{ form4.Car_Description.length }} </span>
                    <v-progress-circular
                      :model-value="form4.Car_Description.length"
                      color="#dcb63b"
                      :size="25"
                    ></v-progress-circular>
                  </div>
                  <span class="error-msg" v-if="v1$.Car_Description.$error">{{
                    v1$.Car_Description.$errors[0].$message
                  }}</span>
                  <span class="error-msg2" v-if="errors1.Car_Description">{{
                    errors1.Car_Description[0]
                  }}</span>
                </div>
                <div class="det">
                  <h5>{{ $t("carDet") }}</h5>
                  <div class="half row">
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">{{ $t("carBrand") }}</label>
                        <Dropdown
                          v-model="form4.Car_Brand"
                          optionValue="id"
                          :filter-placeholder="$t('search')"
                          :options="brands"
                          filter
                          optionLabel="title"
                          :placeholder="$t('examplee2')"
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.title }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span class="error-msg" v-if="v1$.Car_Brand.$error">{{
                          v1$.Car_Brand.$errors[0].$message
                        }}</span>
                        <span class="error-msg2" v-if="errors1.Car_Brand">{{
                          errors1.Car_Brand[0]
                        }}</span>
                      </div>
                    </div>
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">{{ $t("carModel") }}</label>
                        <Dropdown
                          v-model="form4.Car_Model"
                          optionValue="id"
                          :filter-placeholder="$t('search')"
                          :options="
                            form4.Car_Brand != '' ? getmodels[0].models : ''
                          "
                          filter
                          optionLabel="name"
                          placeholder=""
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.name }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span class="error-msg" v-if="v1$.Car_Model.$error">{{
                          v1$.Car_Model.$errors[0].$message
                        }}</span>
                        <span class="error-msg2" v-if="errors1.Car_Model">{{
                          errors1.Car_Model[0]
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="half row">
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for=""> {{ $t('theYear') }}</label>

                        <Dropdown
                          v-model="form4.Car_Year"
                          :filter-placeholder="$t('search')"
                          :options="optionsCars.year"
                          filter
                          optionLabel=""
                          placeholder="2024"
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span class="error-msg" v-if="v1$.Car_Year.$error">{{
                          v1$.Car_Year.$errors[0].$message
                        }}</span>
                        <span class="error-msg2" v-if="errors1.Car_Year">{{
                          errors1.Car_Year[0]
                        }}</span>
                      </div>
                    </div>
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">{{ $t("carStat") }}</label>
                        <Dropdown
                          v-model="form4.Car_Statue"
                          optionValue="value"
                          :filter-placeholder="$t('search')"
                          :options="carBody"
                          filter
                          optionLabel="name"
                          :placeholder="$t('example1')"
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.name }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span class="error-msg" v-if="v1$.Car_Statue.$error">{{
                          v1$.Car_Statue.$errors[0].$message
                        }}</span>
                        <span class="error-msg2" v-if="errors1.Car_Statue">{{
                          errors1.Car_Statue[0]
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="half row">
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">
                          {{ $t("engine") }}
                        </label>
                        <Dropdown
                          v-model="form4.Gear_shifter"
                          optionValue="value"
                          :filter-placeholder="$t('search')"
                          :options="gear_shifterArr"
                          filter
                          optionLabel="name"
                          :placeholder="$t('example2')"
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.name }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span
                          class="error-msg"
                          v-if="v1$.Gear_shifter.$error"
                          >{{ v1$.Gear_shifter.$errors[0].$message }}</span
                        >
                        <span class="error-msg2" v-if="errors1.Gear_shifter">{{
                          errors1.Gear_shifter[0]
                        }}</span>
                      </div>
                    </div>
                    <div v-if="form4.Car_Statue == 0" class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">{{ $t("road") }}</label>
                        <input
                          type="number"
                          min="1"
                          v-model="form4.Killometer"
                          :placeholder="$t('example3')"
                        />
                     
                        <span class="error-msg2" v-if="errors1.Killometer">{{
                          errors1.Killometer[0]
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="half row">
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">{{ $t("gaz") }}</label>
                        <Dropdown
                          v-model="form4.Fuel_Type"
                          optionValue="value"
                          :filter-placeholder="$t('search')"
                          :options="fuel_typeArr"
                          filter
                          optionLabel="name"
                          :placeholder="$t('example4')"
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.name }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span class="error-msg" v-if="v1$.Fuel_Type.$error">{{
                          v1$.Fuel_Type.$errors[0].$message
                        }}</span>
                        <span class="error-msg2" v-if="errors1.Fuel_Type">{{
                          errors1.Fuel_Type[0]
                        }}</span>
                      </div>
                    </div>
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">{{ $t("tra") }}</label>
                        <Dropdown
                          v-model="form4.Supplier"
                          optionValue="value"
                          :filter-placeholder="$t('search')"
                          :options="supplierArr"
                          filter
                          optionLabel="name"
                          :placeholder="$t('example5')"
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.name }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span class="error-msg" v-if="v1$.Supplier.$error">{{
                          v1$.Supplier.$errors[0].$message
                        }}</span>
                        <span class="error-msg2" v-if="errors1.Supplier">{{
                          errors1.Supplier[0]
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="half row">
                    <div class="col-12 col-l-6 col-lg-6">
                      <div class="input">
                        <label for="">{{ $t("color") }}</label>
                        <Dropdown
                          v-model="form4.Car_Color"
                          optionValue="id"
                          :filter-placeholder="$t('search')"
                          :options="optionsCars.colors"
                          filter
                          optionLabel="title"
                          :placeholder="$t('example6')"
                          class=""
                        >
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.title }}</div>
                            </div>
                          </template>
                        </Dropdown>
                        <span class="error-msg" v-if="v1$.Car_Color.$error">{{
                          v1$.Car_Color.$errors[0].$message
                        }}</span>
                        <span class="error-msg2" v-if="errors1.Car_Color">{{
                          errors1.Car_Color[0]
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <h5>{{ $t("price") }}</h5>
                    <div class="half row">
                      <div class="col-12 col-l-6 col-lg-6">
                        <div class="input">
                          <label for="">{{ $t("carPrice") }}</label>
                          <input
                            type="number"
                            v-model="form4.Car_Price"
                            min="1"
                            placeholder="100,000"
                          />
                          <span class="error-msg" v-if="v1$.Car_Price.$error">{{
                            v1$.Car_Price.$errors[0].$message
                          }}</span>
                          <span class="error-msg2" v-if="errors1.Car_Price">{{
                          errors1.Car_Price[0]
                        }}</span>
                        </div>
                      </div>
                      <div class="col-12 col-l-6 col-lg-6">
                        <div class="input">
                          <label for="">{{ $t("disc") }}</label>
                          <input
                            type="number"
                            v-model="form4.Car_Price_after_Discount"
                            min="1"
                            placeholder="100,000"
                          />
                          <span
                            class="error-msg"
                            v-if="v1$.Car_Price_after_Discount.$error"
                            >{{
                              v1$.Car_Price_after_Discount.$errors[0].$message
                            }}</span
                          >
                          <span class="error-msg2" v-if="errors1.Car_Price_after_Discount">{{
                          errors1.Car_Price_after_Discount[0]
                        }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="main-btn d-flex justify-content-end">
                  <button
                    @click="addFunc1()"
                    class="gap-3"
                    :disabled="pending1"
                  >
                    {{ $t("next") }}
                    <v-progress-circular
                      v-if="pending1"
                      indeterminate
                      :size="25"
                      :width="4"
                    ></v-progress-circular>
                  </button>
                </div>
              </div>

              <div v-if="adNavBtn == 2" class="images">
                <h5>{{ $t("mainImgs") }}</h5>
                <div style="position:relative;">
                  <label for="big-img" class="image big" >
                    <div class="img-icon">
                      <img src="~/assets/images/gallery-add.png" />
                      <span>
                        {{ $t("img1") }}
                      </span>
                    </div>
                    <img
                      v-if="selectedFileUrl"
                      class="main-img"
                      :src="selectedFileUrl"
                    />
                    <input
                      id="big-img"
                      type="file"
                      @change="handleFileChange"
                    />
                  </label>
                  <span class="word">{{ $t("img2") }}</span>
                  <span class="error-msg" v-if="v2$.selectedMainImg.$error">{{
                          v2$.selectedMainImg.$errors[0].$message
                        }}</span>
                </div>
                <div>
                  <div
                    class="d-flex w-100 align-items-center justify-content-between mt-4 mb-2"
                  >
                    <h5>
                      {{ $t("img3") }}
                    </h5>
                    <div @click="addImage" class="add">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M11.9997 0.833374H3.99968C2.25077 0.833374 0.833008 2.25114 0.833008 4.00004V12C0.833008 13.7489 2.25077 15.1667 3.99968 15.1667H11.9997C13.7486 15.1667 15.1663 13.7489 15.1663 12V4.00004C15.1663 2.25114 13.7486 0.833374 11.9997 0.833374Z"
                          fill="#DCB63B"
                        />
                        <path
                          d="M7.99967 11.3334C7.82286 11.3334 7.65329 11.2632 7.52827 11.1382C7.40325 11.0131 7.33301 10.8436 7.33301 10.6667V5.33341C7.33301 5.1566 7.40325 4.98703 7.52827 4.86201C7.65329 4.73699 7.82286 4.66675 7.99967 4.66675C8.17649 4.66675 8.34605 4.73699 8.47108 4.86201C8.5961 4.98703 8.66634 5.1566 8.66634 5.33341V10.6667C8.66634 10.8436 8.5961 11.0131 8.47108 11.1382C8.34605 11.2632 8.17649 11.3334 7.99967 11.3334Z"
                          fill="white"
                        />
                        <path
                          d="M5.33268 8.66671C5.15587 8.66671 4.9863 8.59647 4.86128 8.47144C4.73625 8.34642 4.66602 8.17685 4.66602 8.00004C4.66602 7.82323 4.73625 7.65366 4.86128 7.52864C4.9863 7.40361 5.15587 7.33337 5.33268 7.33337H10.666C10.8428 7.33337 11.0124 7.40361 11.1374 7.52864C11.2624 7.65366 11.3327 7.82323 11.3327 8.00004C11.3327 8.17685 11.2624 8.34642 11.1374 8.47144C11.0124 8.59647 10.8428 8.66671 10.666 8.66671H5.33268Z"
                          fill="white"
                        />
                      </svg>
                      <span>{{ $t("img4") }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      v-for="(image, index) in images"
                      :key="index"
                      class="col-12 col-xl-6 col-lg-6"
                    >
                      <div style="position:relative;">
                        <label :for="`the-img-${index}`" class="image">
                          <div class="img-icon">
                            <img src="~/assets/images/gallery-add.png" />
                            <span>{{ $t("img1") }}</span>
                          </div>
                          <img
                            v-if="image.file"
                            class="main-img"
                            :src="image.url"
                          />
                          <input
                            :id="`the-img-${index}`"
                            type="file"
                            @change="handleFilesChange($event, index)"
                          />
                        </label>
                        <span class="word">{{ $t("img2") }}</span>
                     
                        <span class="d-block word" v-if="!isImage(image.file)">{{ $t('imgCheck') }}</span>
                      </div>

                    </div>
                      <span v-if="!checkImages" class="d-block text-center mt-2 text-danger" > {{$t('warn1')}} </span>
                  </div>
                </div>
                <div class="btns d-flex align-items-center justify-content-end">
                  <button @click="adNavBtn = 1" class="back">
                    {{ $t("back") }}
                  </button>
                  <button @click="addFunc2()" :disabled="pending2" class="next gap-3">
                    {{ $t("addd") }}
                    <v-progress-circular
                      v-if="pending2"
                      indeterminate
                      :size="25"
                      :width="4"
                    ></v-progress-circular>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="adNavBtn == 3" class="confirm">
          
          <img src="~/assets/images/frame-ads.png" alt="">
          <h4>
            {{ $t("adThank1") }}
          </h4>
          <span>
            {{ $t("adThank2") }}
          </span>
          <nuxt-link :to="localePath('/')">
            <button>{{ $t("backHome") }}</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

import Cookies from "js-cookie";
const tokenCookie = Cookies.get("token");
// import { Vue3Lottie } from "vue3-lottie";
// import success from "~/assets/animations/success.json";

import useValidate from "@vuelidate/core";
import axios from "axios";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { useStore } from "~/store";
let store = useStore;
const localePath = useLocalePath();
const { locale } = useI18n();
let inputValue = ref("");

let paymentSec1 = ref(1);
let paymentSec2 = ref(0);
let checkBtnSec1 = ref(0);
let checkBtnSec2 = ref(0);


// const handleKeyUp = (event) => {
//     if (process.client) {

//         if (inputValue.value.length === 50) {
//             // Prevent further typing
//             console.log(event);
//             event.preventDefault();
//             return;
//         } else {
//               inputValue.value = event.target.value;
//         }
//     }
// }
let adNavBtn = ref(1);

let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
let value5 = ref("يجب أن يكون عدد السيارات 1 سيارة على الأقل");
if (locale.value == "ar") {
  value1.value = "هذا الحقل مطلوبة";
  value2.value = "حقل البريد الإلكتروني مطلوب";
  value3.value = "تنسيق البريد الإلكتروني غير صالح";
  value5.value = "يجب أن يكون عدد السيارات 1 سيارة على الأقل";
} else {
  value1.value = "value is required";
  value2.value = "The email field is required";
  value3.value = "Invalid email format";
  value5.value = "The number of cars must be at least 1 car";
}

let selectedFileUrl = ref(null);
let selectedMainImg = ref(null);

let form4 = ref({
  Car_Name: "",
  Car_Description: "",
  Car_Brand: "",
  Car_Model: "",
  Car_Year: "",
  Car_Statue: "",
  Gear_shifter: "",
  Killometer: 0,
  Fuel_Type: "",
  Supplier: "",
  Car_Color: "",
  Car_Price: "",
  Car_Price_after_Discount: "",
});

const rules1 = computed(() => {
  return {
    Car_Name: { required: helpers.withMessage(value1.value, required) },
    Car_Description: { required: helpers.withMessage(value1.value, required) },
    Car_Brand: { required: helpers.withMessage(value1.value, required) },
    Car_Model: { required: helpers.withMessage(value1.value, required) },
    Car_Year: { required: helpers.withMessage(value1.value, required) },
    Car_Statue: { required: helpers.withMessage(value1.value, required) },
    Gear_shifter: { required: helpers.withMessage(value1.value, required) },
    // Killometer: { required: helpers.withMessage(value1.value, required) },
    Fuel_Type: { required: helpers.withMessage(value1.value, required) },
    Supplier: { required: helpers.withMessage(value1.value, required) },
    Car_Color: { required: helpers.withMessage(value1.value, required) },
    Car_Price: { required: helpers.withMessage(value1.value, required) },
    Car_Price_after_Discount: {
      required: helpers.withMessage(value1.value, required),
    },
  };
});
// watch(form4, (newForm, oldForm) => {
//       // Check if Car_Statue has changed to 0
//       if (newForm.Car_Statue === 1) {
//         // Set Killometer to 0
//         form4.value.Killometer = 0;
//       } else {
//         form4.value.Killometer = '';
//       }
// }, { deep: true });


let errors1 = ref([]);
let errors2 = ref([]);
let pending1 = ref(false);
let pending2 = ref(false);
const v1$ = useValidate(rules1, form4);
// const v2$ = useValidate(rules2, form4);
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFileUrl.value = URL.createObjectURL(file);
    selectedMainImg.value = file;
  }
};
const images = ref([
  { url: "", file: null },
  { url: "", file: null },
]);

let filterImages = computed(()=>{
    return images.value.map(image => image.file)
});




let checkImages = ref(true);

const checkImagesFunc = ()=>{
    checkImages.value = filterImages.value.every(value => value !== null)
}

const handleFilesChange = (event, index) => {
  const file = event.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    images.value[index].url = imageUrl;
    images.value[index].file = file;
    checkImagesFunc();
  }
};

const addImage = () => {
  if (images.value.length <= 15) {
    images.value.push({ url: "", file: null });
  }
//   loopImages();
console.log(checkImages.value);
};

let gear_shifterArr = ref([
  {
    value: "manual",
    name: locale.value == "ar" ? "مانوال" : "manual",
  },
  {
    value: "automatic",
    name: locale.value == "ar" ? "اوتوماتيك" : "automatic",
  },
]);

let carBody = ref([
  {
    value: 0,
    name: locale.value == "ar" ? "مستعمل" : "used",
  },
  {
    value: 1,
    name: locale.value == "ar" ? "جديد" : "new",
  },
]);

let fuel_typeArr = ref([
  {
    value: "gasoline",
    name: locale.value == "ar" ? "بنزين" : "gasoline",
  },
  {
    value: "diesel",
    name: locale.value == "ar" ? "ديزل" : "diesel",
  },
  {
    value: "electric",
    name: locale.value == "ar" ? "كهربا" : "electric",
  },
  {
    value: "hybrid",
    name: locale.value == "ar" ? "هايبرد" : "hybrid",
  },
]);

let supplierArr = ref([
  {
    value: "gulf",
    name: locale.value == "ar" ? "خليجي" : "saudi",
  },
  {
    value: "saudi",
    name: locale.value == "ar" ? "سعودي" : "saudi",
  },
]);

let optionsCars = ref([]);
let brands = ref([]);
const getOptions = async () => {
  let result = await axios.get(`${getUrl()}/car-option`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  optionsCars.value = result.data.data;
  brands.value = result.data.data.brands;
};


   const validations = {
    selectedMainImg: { required:helpers.withMessage(value1.value, required) },
    };
 

const v2$ = useValidate(validations, {selectedMainImg});

   const validations2 = {
    // filterImages: { required:helpers.withMessage(value1.value, required) },
    images: {
        $each: {
          file: { required:helpers.withMessage(value1.value, required) },
        },
      },
    };

const v3$ = useValidate(validations2, {images});

let check11 = v3$.value.$validate();

let checkImg = ref(false);
const isImage = (file) => {
      let theFile =  file && file.type.startsWith('image/');
      checkImg.value = theFile;
      return theFile;
    };


const getmodels = computed(() => {
  if (optionsCars.value.brands) {
    return optionsCars.value.brands.filter((ele) => {
      return form4.value.Car_Brand == ele.id;
    });
  }
});


const isFormFilled2 = () => {
  // Iterate through each object in the form array
  for (const key in form4.value) {
    // Check if any key in the object has an empty value
    if (form4.value[key] === "") {
      // If any value is empty, return false
      return false;
    }
  }

  // If all keys in all objects have values, return true
  return true;
};

const addFunc1 = async () => {
  //     let formBody = new FormData();
  //   formBody.append("brand", form2.value.brand);
  //   formBody.append("model", form2.value.model);
  //   formBody.append("year", form2.value.year);
  //   formBody.append("gear_shifter", form2.value.gear_shifter);
  //   formBody.append("color_id", form2.value.color_id);
  let check = await v1$.value.$validate();
  if (check) {
    pending1.value = true;
    try {
      let result = await axios.post(`${getUrl()}/add-Your-addss`, form4.value, {
        params: {
          step: 0,
        },
        headers: {
          "Content-Language": `${locale.value}`,
          Authorization: `Bearer ${tokenCookie}`,

        },
      });
      if (result.status >= 200) {
        adNavBtn.value = 2;
        paymentSec2.value = 1;
        checkBtnSec1.value = 1;
        pending1.value = false;
        errors1.value = [];
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pending1.value = false;
        errors1.value = errorss.response.data.errors;
      }
    }
  }
};
const addFunc2 = async () => {
    checkImagesFunc();
    // console.log(filterImages.value);
    // console.log(checkImg.value);
          let formBody = new FormData();
    formBody.append("Car_Name", form4.value.Car_Name);
    formBody.append("Car_Description", form4.value.Car_Description);
    formBody.append("Car_Brand", form4.value.Car_Brand);
    formBody.append("Car_Model", form4.value.Car_Model);
    formBody.append("Car_Year", form4.value.Car_Year);
    formBody.append("Car_Statue", form4.value.Car_Statue);
    formBody.append("Gear_shifter", form4.value.Gear_shifter);
    formBody.append("Killometer",form4.value.Car_Statue == 1 ? 0 : form4.value.Killometer);
    formBody.append("Fuel_Type", form4.value.Fuel_Type);
    formBody.append("Supplier", form4.value.Supplier);
    formBody.append("Car_Color", form4.value.Car_Color);
    formBody.append("Car_Price", form4.value.Car_Price);
    formBody.append("Car_Price_after_Discount", form4.value.Car_Price_after_Discount);
    formBody.append("Main_Image", selectedMainImg.value);
    // formBody.append("Images", filterImages.value);
    filterImages.value.forEach((file, index) => {
        formBody.append(`Images[${index}]`, file);
      });
   
  let check1 = await v2$.value.$validate();
//   let check2 = await v3$.value.$validate();
  if (check1 && checkImages.value && checkImg.value) {
    // for (let i = 0; i < images.value.length; i++) {
    //   filterImages.value.push(images.value[i].file);
    // }
    pending2.value = true;
    try {
      let result = await axios.post(`${getUrl()}/add-Your-Ad`, formBody , {
        params: {
          step: 1,
        },
        headers: {
          "Content-Language": `${locale.value}`,
          Authorization: `Bearer ${tokenCookie}`,

        },
      });
      if (result.status >= 200) {
        adNavBtn.value = 3;
        checkBtnSec2.value = 1;
        pending2.value = false;
        errors2.value = [];
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pending2.value = false;
        errors2.value = errorss.response.data.errors;
      }
    }
  }

};

let items = ref([
  {
    title: locale.value == "ar" ? "الرئيسية" : "home",
    disabled: false,
    class:"breadcrumbs-text",
    href: "/",
  },
  {
    title: locale.value == "ar" ? "اضف اعلانك" : "add your ad",
    disabled: false,
    href: "addCar",
  },
]);
onMounted(() => {
    // loopImages();
  getOptions();

});
</script>

<style lang="scss" scoped></style>
