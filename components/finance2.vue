<template>
    <div>
         <div  class="row">
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
                            src="@/assets/images/calc-icon-active4.svg"
                            alt=""
                          />
                        </div>
                        <div class="icon" :class="{ active: paymentSec2 == 1 }">
                          <img
                            class="def"
                            src="@/assets/images/org.svg"
                            alt=""
                          />
                          <img
                            class="active"
                            src="@/assets/images/org-active.svg"
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
                      <div
                        class="dot"
                        :class="{ active: paymentSec1 == 1, check: checkBtnSec1 == 1 }"
                      >
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <div
                        class="dot"
                        :class="{ active: paymentSec2 == 1, check: checkBtnSec2 == 1 }"
                      >
                        <i class="fa-solid fa-check"></i>
                      </div>
                
                
                    </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-xl-7 col-lg-7">
                  <div v-if="paymentIndividualBtn2 == 1" v-for="item, index in form" class="form-ind">
                  <div v-if="form.length > 1" class="d-flex justify-content-end">
                    <i @click="removeRow(index)" class="fa-solid fa-trash"></i>
                  </div>
                    <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                      <div class="input-container">
                        <span> {{ $t('carBrand') }} </span>
                        <div class="input">
                          <Dropdown
                            v-model="item.brand"
                            :options="brands"
                            filter
                            optionLabel="title"
                            optionValue="id"
                            placeholder=""
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.title }}</div>
                              </div>
                            </template>
                          </Dropdown>
                          <span class="error-msg" v-if="v$[index].brand.$error">{{
                              v$[index].brand.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                      <div class="input-container">
                        <span> {{ $t('carModel') }} </span>
                        <div class="input">
                          <Dropdown
                            v-model="item.model"
                            :options="getmodels2[index][0] ? getmodels2[index][0].models : ''"
                            filter
                            optionLabel="name"
                            optionValue="id"
                            placeholder=""
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.name }}</div>
                              </div>
                            </template>
                          </Dropdown>
                                    <span class="error-msg" v-if="v$[index].model.$error">{{
                                        v$[index].model.$errors[0].$message
                                    }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                      <div class="input-container">
                        <span> {{ $t('theYear') }} </span>
                        <div class="input">
                          <Dropdown
                            v-model="item.year"
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

                          <span class="error-msg" v-if="v$[index].year.$error">{{
                              v$[index].year.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                      <div class="input-container">
                        <span> {{ $t('gear') }} </span>
                        <div class="input">
                        <Dropdown
                            v-model="item.gear_shifter"
                            :options="gear_shifterArr"
                            filter
                            optionLabel="name"
                            optionValue="value"
                            placeholder=""
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.name }}</div>
                              </div>
                            </template>
                          </Dropdown>
                    
                        <span class="error-msg" v-if="v$[index].gear_shifter.$error">{{
                            v$[index].gear_shifter.$errors[0].$message
                        }}</span>
                    
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                      <div class="input-container">
                        <span>{{ $t('color') }}</span>
                        <div class="input">
                          <Dropdown
                            v-model="item.color"
                            :options="optionsCars.colors"
                            filter
                            optionLabel="title"
                            optionValue="id"
                            :placeholder="$t('example6')"
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.title }}</div>
                              </div>
                            </template>
                          </Dropdown>
                          <span class="error-msg" v-if="v$[index].color.$error">{{
                              v$[index].color.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="input-container">
                        <span> {{ $t('numCars') }} </span>
                        <div class="input">
                          <input
                            type="number"
                            min="1"
                            v-model="item.car_count"
                            placeholder="3"
                            name=""
                            class=""
                          />
                          <span class="error-msg" v-if="v$[index].car_count.$error">{{
                              v$[index].car_count.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column flex-xl-row flex-lg-row justify-content-between align-items-center">
                    <div @click="addRow()" class="add d-flex align-items-center gap-2 mb-3" style="cursor:pointer;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11.9997 0.833374H3.99968C2.25077 0.833374 0.833008 2.25114 0.833008 4.00004V12C0.833008 13.7489 2.25077 15.1667 3.99968 15.1667H11.9997C13.7486 15.1667 15.1663 13.7489 15.1663 12V4.00004C15.1663 2.25114 13.7486 0.833374 11.9997 0.833374Z" fill="#DCB63B"/>
      <path d="M7.99967 11.3334C7.82286 11.3334 7.65329 11.2632 7.52827 11.1382C7.40325 11.0131 7.33301 10.8436 7.33301 10.6667V5.33341C7.33301 5.1566 7.40325 4.98703 7.52827 4.86201C7.65329 4.73699 7.82286 4.66675 7.99967 4.66675C8.17649 4.66675 8.34605 4.73699 8.47108 4.86201C8.5961 4.98703 8.66634 5.1566 8.66634 5.33341V10.6667C8.66634 10.8436 8.5961 11.0131 8.47108 11.1382C8.34605 11.2632 8.17649 11.3334 7.99967 11.3334Z" fill="white"/>
      <path d="M5.33268 8.66671C5.15587 8.66671 4.9863 8.59647 4.86128 8.47144C4.73625 8.34642 4.66602 8.17685 4.66602 8.00004C4.66602 7.82323 4.73625 7.65366 4.86128 7.52864C4.9863 7.40361 5.15587 7.33337 5.33268 7.33337H10.666C10.8428 7.33337 11.0124 7.40361 11.1374 7.52864C11.2624 7.65366 11.3327 7.82323 11.3327 8.00004C11.3327 8.17685 11.2624 8.34642 11.1374 8.47144C11.0124 8.59647 10.8428 8.66671 10.666 8.66671H5.33268Z" fill="white"/>
    </svg>
                     <span style="color:#DCB63B; font-size: 14px;"> {{$t('addCar')}}</span>
                    </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
              
                      <button v-if="paymentIndividualBtn2 == 1" :disabled="pendingCorp1" class="corpBtn d-flex align-items-center gap-2" @click=" sendCorporate1()">
                        {{ $t('next') }}
                      <v-progress-circular v-if="pendingCorp1"   indeterminate :size="25" :width="4"></v-progress-circular>
                      </button>
                  </div>
                  <div v-if="paymentIndividualBtn2 == 2" class="form-ind">
                    <div class="d-flex gap-3">
                      <div class="input-container">
                        <span> {{ $t('name3') }} </span>
                        <div class="input">
                          <input
                            type="text"
                            placeholder=""
                            name=""
                            v-model="form4.organization_name"
                            class=""
                          />
                          <span class="error-msg" v-if="v4$.organization_name.$error">{{
                              v4$.organization_name.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="input-container">
                        <span> {{ $t('orgType') }} </span>
                        <div class="input">
                          <input
                            type="text"
                            placeholder=""
                            name=""
                            v-model="form4.organization_type"
                            class=""
                          />
                          <span class="error-msg" v-if="v4$.organization_type.$error">{{
                              v4$.organization_type.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex gap-3">
                      <div class="input-container">
                        <span> {{ $t('nummm') }} </span>
                        <div class="input">
                          <input
                            type="tel"
                            placeholder=" 3333-5555-9999-55"
                            name=""
                            v-model="form4.commercial_registration_no"
                            class=""
                          />
                          <span class="error-msg" v-if="v4$.commercial_registration_no.$error">{{
                              v4$.commercial_registration_no.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="input-container">
                        <span> {{ $t('orgAct') }} </span>
                        <div class="input">
                          <input
                            type="text"
                            placeholder=""
                            name=""
                            v-model="form4.organization_activity"
                            class=""
                          />
                          <span class="error-msg" v-if="v4$.organization_activity.$error">{{
                              v4$.organization_activity.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex gap-3">
                      <div class="input-container">
                        <span> {{ $t('name4') }} </span>
                        <div class="input">
                          <input
                            type="text"
                            placeholder=""
                            name=""
                            v-model="form4.name"
                            class=""
                          />
                          <span class="error-msg" v-if="v4$.name.$error">{{
                              v4$.name.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="input-container">
                        <span> {{ $t('phone') }} </span>
                        <div class="input">
                          <input
                            type="tel"
                            placeholder=" 3333-5555-9999-55"
                            name=""
                            v-model="form4.phone"
                            class=""
                          />
                          <span class="error-msg" v-if="v4$.phone.$error">{{
                              v4$.phone.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex gap-3">
                      <div class="input-container">
                        <span> {{ $t('orgAge') }} </span>
                        <div class="input">
                          <input
                            type="number"
                            min="1"
                            placeholder="4"
                            name=""
                            v-model="form4.organization_age"
                            class=""
                          />
                          <span class="error-msg" v-if="v4$.organization_age.$error">{{
                              v4$.organization_age.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="input-container">
                        <span> {{ $t('city') }} </span>
                        <div class="input">
                          <Dropdown
                            v-model="form4.city_id"
                            :options="cities"
                            filter
                            optionLabel="name"
                            optionValue="id"
                            :placeholder="$t('city')"
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.name }}</div>
                              </div>
                            </template>
                          </Dropdown>
                          <span class="error-msg" v-if="v4$.city_id.$error">{{
                              v4$.city_id.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex gap-3">
                      <div class="input-container">
                        <span> {{ $t('bankk') }} </span>
                        <div class="input">
                          <Dropdown
                            v-model="form4.bank_id"
                            :options="optionsCars.banks"
                            filter
                            optionLabel="name"
                            optionValue="id"
                            :placeholder="$t('example8')"
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.name }}</div>
                              </div>
                            </template>
                          </Dropdown>
                          <span class="error-msg" v-if="v4$.bank_id.$error">{{
                              v4$.bank_id.$errors[0].$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="btns">
                      <button @click="paymentIndividualBtn2 = 1" class="back">
                        {{ $t('back') }}
                      </button>
                      <button
                        @click="sendCorporate2()"
                        class="next gap-2"
                        :disabled="pendingCorp2"
                      >
                       {{ $t('sendOrd') }}
                      <v-progress-circular v-if="pendingCorp2"   indeterminate :size="25" :width="4"></v-progress-circular>
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

let form = ref([
    {
        brand: '',
        model: '',
        year: '',
        color: '',
        gear_shifter: '',
        car_count: 1
    }
]);



const addRow = () => {
    form.value.push(
        {
            brand: '',
            model: '',
            year: '',
            color: '',
            gear_shifter: '',
            car_count: 0
        }
    );
}

const removeRow = (index) => {
    if (form.value.length > 1) {
        form.value.splice(index, 1);
    }

}


const isFormFilled = () => {
    // Iterate through each object in the form array
    for (const car of form.value) {
        // Check if any key in the object has an empty value
        for (const key in car) {
            if (car[key] === '' || car[key] == 0) {
                // If any key is empty, return false
                return false;
            }
        }
    }

    // If all keys in all objects have values, return true
    return true;
};



const getmodels2 = computed(() => {

    return form.value.map((ele) => {
        return optionsCars.value.brands.filter((e) => {
            return ele.brand == e.id
        })
    });
});

let errors4 = ref([]);
const rules = computed(() => form.value.map(() => ({
    name: { required },
    email: { required, email },
    brand: { required: helpers.withMessage(value1.value, required) },
    model: { required: helpers.withMessage(value1.value, required) },
    year: { required: helpers.withMessage(value1.value, required) },
    gear_shifter: { required: helpers.withMessage(value1.value, required) },
    color: { required: helpers.withMessage(value1.value, required) },
    car_count: { required: helpers.withMessage(value1.value, required), minLength: helpers.withMessage(value5.value, minLength(1)) },
})));


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

    if (isFormFilled()) {
        pendingCorp1.value = true;
        let result = await axios.post(`${getUrl()}/finance-Order`, { cars: JSON.stringify(form.value) }, {
            params: {
                type: 'organization',
                step: 1
            },
            headers: {
                "Content-Language": `${locale.value}`,
            },
        });

        if (result.status >= 200) {
            pendingCorp1.value = false;
            paymentSec2.value = 1
            checkBtnSec1.value = 1;
            paymentIndividualBtn2.value = 2;
        }

    }
}
const sendCorporate2 = async () => {
    v4$.value.$validate();

    if (isFormFilled2()) {
        pendingCorp2.value = true;
        try {
            let result = await axios.post(`${getUrl()}/finance-Order`,
                {
                    cars: form.value,
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
                        step: 2
                    },
                    headers: {
                        "Content-Language": `${locale.value}`,
                    },
                });

            if (result.status >= 200) {
                pendingCorp2.value = false
                store.state.showConfirm2  = true;
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

<style lang="scss" scoped>


</style>