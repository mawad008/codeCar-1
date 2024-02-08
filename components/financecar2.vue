<template>
  <div>
    <div class="row">
      <div class="col-12 col-xl-5 col-lg-5">
        <div class="main-pagination-container finance">
          <div class="pagination-container">
            <div class="contain">
              <div class="icon" :class="{ active: paymentSec1 == 1 }">
                <img class="def" src="@/assets/images/calc-icon2.svg" alt="" />
                <img class="active" src="@/assets/images/calc-icon-active4.svg" alt="" />
              </div>
              <div class="icon" :class="{ active: paymentSec2 == 1 }">
                <img class="def" src="@/assets/images/org.svg" alt="" />
                <img class="active" src="@/assets/images/org-active.svg" alt="" />
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
                  {{ $t('orgData') }}
                </h5>
              </div>

            </div>
          </div>

          <div class="content-pagination ">
            <div>
              <h5 :class="{ active: paymentSec1 == 1 }">
                {{ $t('carData') }}
              </h5>
              <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
            </div>
            <div>
              <h5 :class="{ active: paymentSec2 == 1 }">
                {{ $t('orgData') }}
              </h5>
              <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
            </div>
          </div>
          <div class="pagination-container ">
            <div class="contain second">
              <div class="dot" :class="{ active: paymentSec1 == 1, check: checkBtnSec1 == 1 }">
                <i class="fa-solid fa-check"></i>
              </div>
              <div class="dot" :class="{ active: paymentSec2 == 1, check: checkBtnSec2 == 1 }">
                <i class="fa-solid fa-check"></i>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-7 col-lg-7">
        <div v-if="paymentIndividualBtn2 == 1" class="form-ind">
          <!-- <div v-if="form.length > 1" class="d-flex justify-content-end">
                    <i @click="removeRow(index)" class="fa-solid fa-trash"></i>
                  </div> -->
          <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
            <div class="input-container">
              <span> {{ $t('carBrand') }} </span>
              <div class="input">
                <!-- <Dropdown
                            v-model="form.brand"
                            :options="brands"
                            filter
                            optionLabel="title"
                            optionValue="id"
                          :filter-placeholder="$t('search')"
                            :placeholder="$t('carBrand')"
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.title }}</div>
                              </div>
                            </template>
                          </Dropdown>
                          <span class="error-msg" v-if="v$.brand.$error">{{
                              v$.brand.$errors[0].$message
                          }}</span> -->
                <input type="text" readonly v-model="car.brand.title" />
              </div>
            </div>
            <div class="input-container">
              <span> {{ $t('carModel') }} </span>
              <div class="input">
                <!-- <Dropdown v-model="form.model" :options="form.brand != '' ? getmodels[0].models : ''" filter
                  optionLabel="name" optionValue="id" :filter-placeholder="$t('search')" :placeholder="$t('carModel')"
                  class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option.name }}</div>
                    </div>
                  </template>
                </Dropdown>
                <span class="error-msg" v-if="v$.model.$error">{{
                  v$.model.$errors[0].$message
                }}</span> -->
                <input type="text" readonly v-model="car.model.title" />

              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
            <div class="input-container">
              <span> {{ $t('theYear') }} </span>
              <div class="input">
                <!-- <Dropdown v-model="form.year" :options="optionsCars.year" filter :filter-placeholder="$t('search')"
                  optionLabel="" :placeholder="$t('theYear')" class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option }}</div>
                    </div>
                  </template>
                </Dropdown>

                <span class="error-msg" v-if="v$.year.$error">{{
                  v$.year.$errors[0].$message
                }}</span> -->
                <input type="text" readonly v-model="car.year" />

              </div>
            </div>
            <div class="input-container">
              <span> {{ $t('gear') }} </span>
              <div class="input">
                <!-- <Dropdown v-model="form.gear_shifter" :options="gear_shifterArr" filter :filter-placeholder="$t('search')"
                  optionLabel="name" optionValue="value" :placeholder="$t('gear')" class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option.name }}</div>
                    </div>
                  </template>
                </Dropdown>

                <span class="error-msg" v-if="v$.gear_shifter.$error">{{
                  v$.gear_shifter.$errors[0].$message
                }}</span> -->

                <input type="text" readonly v-model="car.gear_shifter" />


              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
            <div class="input-container">
              <span>{{ $t('color') }}</span>
              <div class="input">
                <!-- <Dropdown v-model="form.color" :options="optionsCars.colors" filter optionLabel="title"
                  :filter-placeholder="$t('search')" optionValue="id" :placeholder="$t('example6')" class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option.title }}</div>
                    </div>
                  </template>
                </Dropdown>
                <span class="error-msg" v-if="v$.color.$error">{{
                  v$.color.$errors[0].$message
                }}</span> -->

                <input type="text" readonly v-model="car.color.title" />

              </div>
            </div>

            <div class="input-container">
              <span> {{ $t('numCars') }} </span>
              <div class="input">
                <input type="number" min="1" v-model="form.car_count" :placeholder="$t('numCars')" name="" class="" />
                <span class="error-msg" v-if="v$.car_count.$error">{{
                  v$.car_count.$errors[0].$message
                }}</span>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button v-if="paymentIndividualBtn2 == 1" :disabled="pendingCorp1"
              class="corpBtn d-flex align-items-center gap-2" @click=" sendCorporate1()">
              {{ $t('next') }}
              <v-progress-circular v-if="pendingCorp1" indeterminate :size="25" :width="4"></v-progress-circular>
            </button>
          </div>
        </div>
        <div v-if="paymentIndividualBtn2 == 2" class="form-ind">
          <div class="d-flex gap-3">
            <div class="input-container">
              <span> {{ $t('name3') }} </span>
              <div class="input">
                <input type="text" placeholder="" name="" v-model="form4.organization_name" class="" />
                <span class="error-msg" v-if="v4$.organization_name.$error">{{
                  v4$.organization_name.$errors[0].$message
                }}</span>
                    <span class="error-msg2" v-if="errors4.organization_name">{{
                      errors4.organization_name[0]
                    }}</span>
              </div>
            </div>

            <div class="input-container">
              <span> {{ $t('orgType') }} </span>
              <div class="input">
                <Dropdown v-model="form4.organization_type" :options="optionsCars.OrganizationType" filter
                  optionLabel="title" optionValue="id" :filter-placeholder="$t('search')" :placeholder="$t('orgType')"
                  class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option.title }}</div>
                    </div>
                  </template>
                </Dropdown>
                <span class="error-msg" v-if="v4$.organization_type.$error">{{
                  v4$.organization_type.$errors[0].$message
                }}</span>
                  <span class="error-msg2" v-if="errors4.organization_type">{{
                    errors4.organization_type[0]
                  }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex gap-3">
            <div class="input-container">
              <span> {{ $t('nummm') }} </span>
              <div class="input">
                <input type="tel" placeholder=" 3333-5555-9999-55" name="" v-model="form4.commercial_registration_no"
                  class="" />
                 <span class="error-msg2" v-if="errors4.commercial_registration_no">{{
                   errors4.commercial_registration_no[0]
                 }}</span>
              </div>
            </div>

            <div class="input-container">
              <span> {{ $t('orgAct') }} </span>
              <div class="input">
                <Dropdown v-model="form4.organization_activity" :options="optionsCars.OrganizationActive" filter
                  optionLabel="title" optionValue="id" :filter-placeholder="$t('search')" :placeholder="$t('orgAct')"
                  class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option.title }}</div>
                    </div>
                  </template>
                </Dropdown>
                <span class="error-msg" v-if="v4$.organization_activity.$error">{{
                  v4$.organization_activity.$errors[0].$message
                }}</span>
                <span class="error-msg2" v-if="errors4.organization_activity">{{
                  errors4.organization_activity[0]
                }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex gap-3">
            <div class="input-container">
              <span> {{ $t('name4') }} </span>
              <div class="input">
                <input type="text" placeholder="" name="" v-model="form4.name" class="" />
                <span class="error-msg" v-if="v4$.name.$error">{{
                  v4$.name.$errors[0].$message
                }}</span>
                <span class="error-msg2" v-if="errors4.name">{{
                  errors4.name[0]
                }}</span>
              </div>
            </div>

            <div class="input-container">
              <span> {{ $t('phone') }} </span>
              <div class="input">
                <input type="tel" placeholder=" 3333-5555-9999-55" name="" v-model="form4.phone" class="" />
                <span class="error-msg" v-if="v4$.phone.$error">{{
                  v4$.phone.$errors[0].$message
                }}</span>
                 <span class="error-msg2" v-if="errors4.phone">{{
                   errors4.phone[0]
                 }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex gap-3">
            <div class="input-container">
              <span> {{ $t('orgAge') }} </span>
              <div class="input">
                <input type="number" min="1" placeholder="4" name="" v-model="form4.organization_age" class="" />
                <span class="error-msg" v-if="v4$.organization_age.$error">{{
                  v4$.organization_age.$errors[0].$message
                }}</span>
                <span class="error-msg2" v-if="errors4.organization_age">{{
                  errors4.organization_age[0]
                }}</span>
              </div>
            </div>

            <div class="input-container">
              <span> {{ $t('city') }} </span>
              <div class="input">
                <Dropdown v-model="form4.city_id" :options="cities" filter optionLabel="name"
                  :filter-placeholder="$t('search')" optionValue="id" :placeholder="$t('city')" class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option.name }}</div>
                    </div>
                  </template>
                </Dropdown>
                <span class="error-msg" v-if="v4$.city_id.$error">{{
                  v4$.city_id.$errors[0].$message
                }}</span>
                <span class="error-msg2" v-if="errors4.city_id">{{
                  errors4.city_id[0]
                }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex gap-3">
            <div class="input-container">
              <span> {{ $t('bankk') }} </span>
              <div class="input">
                <Dropdown v-model="form4.bank_id" :options="optionsCars.banks" filter optionLabel="name" optionValue="id"
                  :placeholder="$t('example8')" class="">
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <div>{{ slotProps.option.name }}</div>
                    </div>
                  </template>
                </Dropdown>
                <span class="error-msg" v-if="v4$.bank_id.$error">{{
                  v4$.bank_id.$errors[0].$message
                }}</span>
                <span class="error-msg2" v-if="errors4.bank_id">{{
                  errors4.bank_id[0]
                }}</span>
              </div>
            </div>
          </div>
          <div class="btns">
            <button @click="paymentIndividualBtn2 = 1" class="back">
              {{ $t('back') }}
            </button>
            <button @click="sendCorporate2()" class="next gap-2" :disabled="pendingCorp2">
              {{ $t('sendOrd') }}
              <v-progress-circular v-if="pendingCorp2" indeterminate :size="25" :width="4"></v-progress-circular>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useValidate from "@vuelidate/core";
import axios from "axios";
import Cookies from "js-cookie";
const tokenCookie = Cookies.get("token");
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { useStore } from "~/store";
let store = useStore;
const props = defineProps(["carid", "car"]);

const localePath = useLocalePath();
const { locale } = useI18n();
let paymentMethod = ref(1);
let showConfirm = ref(false);

let otp = ref("");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let paymentOtp = ref(1);
let years = ref([]);
for (let i = currentYear; i >= currentYear - 14; i--) {
  years.value.push(i);
}

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


let paymentSec1 = ref(1);
let paymentSec2 = ref(0);
let checkBtnSec1 = ref(0);
let checkBtnSec2 = ref(0);
let gear_shifterArr = ref([
  {
    value: "manual",
    name: locale.value == 'ar' ? 'جير عادي' : 'manual'
  },
  {
    value: "automatic",
    name: locale.value == 'ar' ? 'اوتوماتيك' : 'automatic'
  },
]);



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

let errors3 = ref([]);
let pending3 = ref(false);



const sendOtp = async () => {
  let formBody = new FormData();
  formBody.append("identity_Card", selectedFileName1.value);

  try {
    let result = await axios.post(`${getUrl()}/finance-Order`, formBody, {
      params: {
        type: paymentMethod.value == 1 ? 'individual' : 'company',
        step: 5
      },
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    if (result.status >= 200) {
      paymentIndividualBtn.value = 7;
      errors3.value = [];
    }
  } catch (errorss) {
    console.log(errorss);
    if (errorss.response) {
      pending3.value = false;
      errors3.value = errorss.response.data.errors;
    }
  }
}


let selectedCity = ref();
let cities = ref([]);
const getCites = async () => {
  let result = await axios.get(`${getUrl()}/cities`, {
    headers: {
      "Content-Language": `${locale.value}`
    }
  });
  cities.value = result.data.data;
}

let paymentIndividualBtn = ref(1);
let paymentIndividualBtn2 = ref(1);

let form = ref(
  {
    brand: '',
    model: '',
    year: '',
    color: '',
    gear_shifter: '',
    car_count: 1
  }
);




const isFormFilled = () => {
  // Iterate through each object in the form array
  for (const key in form.value) {
    // Check if any key in the object has an empty value
    if (form.value[key] === "") {
      // If any value is empty, return false
      return false;
    }
  }

  // If all keys in all objects have values, return true
  return true;
};



const getmodels = computed(() => {
  if (optionsCars.value.brands) {
    return optionsCars.value.brands.filter((ele) => {
      return form.value.brand == ele.id;
    });
  }
});

// const getmodels2 = (index) => {
//     if (optionsCars.value.brands) {
//     let temp = form.value.map((ele) => {
//       return optionsCars.value.brands.filter((e) => {
//         return ele.brand == e.id
//       })
//     });
//     return temp[index][0] ? temp[index][0].models : [];
//   }
// }

let errors4 = ref([]);
const rules = computed(() => {
  return {
    name: { required: helpers.withMessage(value1.value, required), email: helpers.withMessage(value3.value, required) },
    email: { required, email },
    brand: { required: helpers.withMessage(value1.value, required) },
    model: { required: helpers.withMessage(value1.value, required) },
    year: { required: helpers.withMessage(value1.value, required) },
    gear_shifter: { required: helpers.withMessage(value1.value, required) },
    color: { required: helpers.withMessage(value1.value, required) },
    car_count: { required: helpers.withMessage(value1.value, required), minLength: helpers.withMessage(value5.value, minLength(1)) },
  }
})


let form4 = ref(
  {
    organization_name: '',
    organization_type: '',
    commercial_registration_no: '',
    organization_activity: '',
    name: '',
    phone: '',
    organization_age: '',
    city_id: '',
    bank_id: ''
  }
);
const rules4 = computed(() => {
  return {
    organization_name: { required: helpers.withMessage(value1.value, required) },
    organization_type: { required: helpers.withMessage(value1.value, required) },
    commercial_registration_no: { required: helpers.withMessage(value1.value, required) },
    organization_activity: { required: helpers.withMessage(value1.value, required) },
    name: { required: helpers.withMessage(value1.value, required) },
    city_id: { required: helpers.withMessage(value1.value, required) },
    phone: { required: helpers.withMessage(value1.value, required) },
    organization_age: { required: helpers.withMessage(value1.value, required) },
    bank_id: { required: helpers.withMessage(value1.value, required) },
    // email: { required: helpers.withMessage(value2.value, required) , email: helpers.withMessage(value3.value, email) },
  }
});


const isFormFilled2 = () => {
  // Iterate through each object in the form array
  for (const key in form4.value) {
    // Check if any key in the object has an empty value
    if (form4.value[key] === '') {
      // If any value is empty, return false
      return false;
    }
  }

  // If all keys in all objects have values, return true
  return true;
};

const v$ = useValidate(rules, form);
const v4$ = useValidate(rules4, form4);

let pendingCorp1 = ref(false);
let pendingCorp2 = ref(false);
const sendCorporate1 = async () => {
  // let formBody = new FormData();
  // formBody.append("brand", form2.value.brand);
  v$.value.$validate();

  if (form.value.car_count) {
    // pendingCorp1.value = true;
    // let result = await axios.post(`${getUrl()}/financecar-Order`, { 
    //              brand: form.value.brand,
    //               model: form.value.model,
    //               year: form.value.year,
    //               color: form.value.color,
    //               gear_shifter: form.value.gear_shifter,
    //               car_count: form.value.car_count,
    //  }, {
    //     params: {
    //         type: 'organization',
    //         id: props.carid,
    //         step: 1
    //     },
    //     headers: {
    //         "Content-Language": `${locale.value}`,
    //     },
    // });

    // if (result.status >= 200) {
    //     pendingCorp1.value = false;
    //   }
    paymentSec2.value = 1
    checkBtnSec1.value = 1;
    paymentIndividualBtn2.value = 2;

  }
}
const sendCorporate2 = async () => {
  v4$.value.$validate();

  if (isFormFilled2()) {
    pendingCorp2.value = true;
    try {
      let result = await axios.post(`${getUrl()}/financecar-Order`,
        {
          // cars: form.value,
          // brand: form.value.brand,
          //   model: form.value.model,
          //   year: form.value.year,
          //   color: form.value.color,
          //   gear_shifter: form.value.gear_shifter,
          car_count: form.value.car_count,
          organization_name: form4.value.organization_name,
          organization_type: form4.value.organization_type,
          commercial_registration_no: form4.value.commercial_registration_no,
          organization_activity: form4.value.organization_activity,
          name: form4.value.name,
          phone: form4.value.phone,
          organization_age: form4.value.organization_age,
          city_id: form4.value.city_id,
          bank_id: form4.value.bank_id,
        },
        {
          params: {
            type: 'organization',
            id: props.carid,
            step: 1
          },
          headers: {
            "Content-Language": `${locale.value}`,
          },
        });

      if (result.status >= 200) {
        pendingCorp2.value = false
        store.state.showConfirm1 = true;
        store.state.otpFin1 = result.data.data.verification_code;
        store.state.orderFin1 = result.data.data.Order_Number;
        store.state.phoneFin1 = form4.value.phone;
      }

    } catch (errorss) {
      if (errorss.response) {
        pendingCorp2.value = false;
        errors4.value = errorss.response.data.errors;
      }
    }
  }
}


onMounted(() => {
  getOptions();
  getCites();
})
</script>

<style lang="scss" >
.corpBtn {
  display: flex;
  width: 200px;
  height: 48px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 8px;
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
  background: #2D3A4A;
}
</style>