<template>
  <div>
    <div class="register">
      <div v-if="signNav == 1">
        <div class="">
          <div
            class="header w-100 d-flex align-items-center justify-content-between"
          >
            <logo />
            <nuxt-link :to="localePath('/')" class="arrow">
              <svg
              class="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.46849 0.414376C5.79194 0.673133 5.84438 1.1451 5.58562 1.46855L1.96044 6.00003L5.58562 10.5315C5.84438 10.855 5.79194 11.3269 5.46849 11.5857C5.14505 11.8444 4.67308 11.792 4.41432 11.4685L0.414321 6.46855C0.195189 6.19464 0.195189 5.80542 0.414321 5.53151L4.41432 0.531506C4.67308 0.20806 5.14505 0.155619 5.46849 0.414376Z"
                  fill="#2D3A4A"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
        <div class="text">
          <h3> {{ $t('reg1') }} </h3>
          <span> {{ $t('reg2') }} </span>
        </div>

        <v-radio-group
          class="d-flex align-items-center justify-content-center main-radio"
          v-model="typeForm"
          inline
        >
          <div class="d-flex align-items-center radio">
            <v-radio
              id="radio-input-1"
              color="#DCB63B"
              value="individual"
            ></v-radio>
            <label
              for="radio-input-1"
              :class="{ active: typeForm == 'individual' }"
            >
              {{ $t('indi') }}
            </label>
          </div>
          <div class="d-flex align-items-center radio">
            <v-radio
              id="radio-input-2"
              color="#DCB63B"
              value="agency"
            ></v-radio>
            <label
              for="radio-input-2"
              :class="{ active: typeForm == 'agency' }"
            >
              {{ $t('vend') }}
            </label>
          </div>
          <div class="d-flex align-items-center radio">
            <v-radio
              id="radio-input-3"
              color="#DCB63B"
              value="exhibition"
            ></v-radio>
            <label
              for="radio-input-3"
              :class="{ active: typeForm == 'exhibition' }"
            >
              {{ $t('compa') }}
            </label>
          </div>
        </v-radio-group>
        <div class="mainform">
          <div class="form">
            <div class="input">
              <label for=""> {{ $t('name0') }} </label>
              <input
                type="text"
                :placeholder="$t('name0')"
                name=""
                v-model="form.name"
              />
              <span class="error-msg" v-if="v$.name.$error">{{
                v$.name.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors.name">{{
                errors.name[0]
              }}</span>
            </div>
            <div class="input">
              <label for=""> {{ $t('phone') }} </label>
              <input
                type="tel"
                placeholder=" 3333-5555-9999-55"
                name=""
                v-model="form.phone"
              />
              <span class="error-msg" v-if="v$.phone.$error">{{
                v$.phone.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors.phone">{{
                errors.phone[0]
              }}</span>
            </div>
            <div v-if="typeForm != 'individual'" class="input">
              <label for=""> {{ $t('ident') }}</label>
              <input
                type="text"
                placeholder="مثال : 3333-5555-9999-55"
                name=""
                v-model="form.id_number"
              />
            </div>
            <div v-if="typeForm != 'individual'" class="input">
              <label for=""> {{ $t('nummm') }} </label>
              <input
                type="text"
                placeholder="3333-5555-9999-55"
                name=""
                v-model="form.commercial_register_namber"
              />
            </div>
            <div class="input">
              <label for=""> {{ $t('city') }} </label>
              <Dropdown
                v-model="form.city_id"
                :options="countries"
                filter
                :filter-placeholder="$t('search')"
                optionLabel="name"
                :placeholder="$t('city')"
                class=""
              >
                <template #option="slotProps">
                  <div class="flex align-items-center">
                    <div>{{ slotProps.option.name }}</div>
                  </div>
                </template>
              </Dropdown>
              <span class="error-msg" v-if="v$.city_id.$error">{{
                v$.city_id.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors.city_id">{{
                errors.city_id[0]
              }}</span>
            </div>
            <div class="input pass">
              <label for=""> {{ $t('pass1') }}  </label>
              <input
                :type="passType"
                placeholder="***************"
                name=""
                v-model="form.password"
              />
              <div @click="changePass1()" class="icon">
                <svg
                v-if="passType == 'password'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M23.9204 7.6296C23.2116 6.0552 19.9696 0 12 0C4.0304 0 0.7884 6.0552 0.0796 7.6296C0.0264 7.748 0 7.8744 0 8C0 8.1256 0.0264 8.252 0.0796 8.3704C0.7884 9.9444 4.0304 16 12 16C19.9696 16 23.2116 9.9444 23.9204 8.3704C23.9736 8.252 24 8.1256 24 8C24 7.8744 23.9736 7.748 23.9204 7.6296ZM12 13.2C9.128 13.2 6.8 10.872 6.8 8C6.8 5.128 9.128 2.8 12 2.8C14.872 2.8 17.2 5.128 17.2 8C17.2 10.872 14.872 13.2 12 13.2Z"
                    fill="#90A3BF"
                  />
                  <path
                    d="M11.9999 11.6C13.9881 11.6 15.5999 9.98826 15.5999 8.00002C15.5999 6.01178 13.9881 4.40002 11.9999 4.40002C10.0117 4.40002 8.3999 6.01178 8.3999 8.00002C8.3999 9.98826 10.0117 11.6 11.9999 11.6Z"
                    fill="#90A3BF"
                  />
                </svg>
                <svg v-if="passType == 'text'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.2699 9.17981C20.9799 8.71981 20.6699 8.28981 20.3499 7.88981C19.9799 7.41981 19.2799 7.37981 18.8599 7.79981L15.8599 10.7998C16.0799 11.4598 16.1199 12.2198 15.9199 13.0098C15.5699 14.4198 14.4299 15.5598 13.0199 15.9098C12.2299 16.1098 11.4699 16.0698 10.8099 15.8498C10.8099 15.8498 9.37995 17.2798 8.34995 18.3098C7.84995 18.8098 8.00995 19.6898 8.67995 19.9498C9.74995 20.3598 10.8599 20.5698 11.9999 20.5698C13.7799 20.5698 15.5099 20.0498 17.0899 19.0798C18.6999 18.0798 20.1499 16.6098 21.3199 14.7398C22.2699 13.2298 22.2199 10.6898 21.2699 9.17981Z" fill="#90A3BF"/>
  <path d="M14.0201 9.98014L9.98014 14.0201C9.47014 13.5001 9.14014 12.7801 9.14014 12.0001C9.14014 10.4301 10.4201 9.14014 12.0001 9.14014C12.7801 9.14014 13.5001 9.47014 14.0201 9.98014Z" fill="#90A3BF"/>
  <path d="M18.25 5.75018L14.86 9.14018C14.13 8.40018 13.12 7.96018 12 7.96018C9.76 7.96018 7.96 9.77018 7.96 12.0002C7.96 13.1202 8.41 14.1302 9.14 14.8602L5.76 18.2502H5.75C4.64 17.3502 3.62 16.2002 2.75 14.8402C1.75 13.2702 1.75 10.7202 2.75 9.15018C3.91 7.33017 5.33 5.90018 6.91 4.92018C8.49 3.96018 10.22 3.43018 12 3.43018C14.23 3.43018 16.39 4.25018 18.25 5.75018Z" fill="#90A3BF"/>
  <path d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z" fill="#90A3BF"/>
  <path d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z" fill="#90A3BF"/>
</svg>
              </div>
            </div>
            <div class="input">
              <span class="error-msg" v-if="v$.password.$error">{{
                v$.password.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors.password">{{
                errors.password[0]
              }}</span>
            </div>
            <div class="input pass">
              <label for=""> {{ $t('pass3') }} </label>
              <input
                :type="passConfType"
                placeholder="***************"
                name=""
                v-model="form.password_confirmation"
              />
              <div @click="changePass2()" class="icon">
                <svg
                v-if="passConfType == 'password'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M23.9204 7.6296C23.2116 6.0552 19.9696 0 12 0C4.0304 0 0.7884 6.0552 0.0796 7.6296C0.0264 7.748 0 7.8744 0 8C0 8.1256 0.0264 8.252 0.0796 8.3704C0.7884 9.9444 4.0304 16 12 16C19.9696 16 23.2116 9.9444 23.9204 8.3704C23.9736 8.252 24 8.1256 24 8C24 7.8744 23.9736 7.748 23.9204 7.6296ZM12 13.2C9.128 13.2 6.8 10.872 6.8 8C6.8 5.128 9.128 2.8 12 2.8C14.872 2.8 17.2 5.128 17.2 8C17.2 10.872 14.872 13.2 12 13.2Z"
                    fill="#90A3BF"
                  />
                  <path
                    d="M11.9999 11.6C13.9881 11.6 15.5999 9.98826 15.5999 8.00002C15.5999 6.01178 13.9881 4.40002 11.9999 4.40002C10.0117 4.40002 8.3999 6.01178 8.3999 8.00002C8.3999 9.98826 10.0117 11.6 11.9999 11.6Z"
                    fill="#90A3BF"
                  />
                </svg>
                <svg v-if="passConfType == 'text'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.2699 9.17981C20.9799 8.71981 20.6699 8.28981 20.3499 7.88981C19.9799 7.41981 19.2799 7.37981 18.8599 7.79981L15.8599 10.7998C16.0799 11.4598 16.1199 12.2198 15.9199 13.0098C15.5699 14.4198 14.4299 15.5598 13.0199 15.9098C12.2299 16.1098 11.4699 16.0698 10.8099 15.8498C10.8099 15.8498 9.37995 17.2798 8.34995 18.3098C7.84995 18.8098 8.00995 19.6898 8.67995 19.9498C9.74995 20.3598 10.8599 20.5698 11.9999 20.5698C13.7799 20.5698 15.5099 20.0498 17.0899 19.0798C18.6999 18.0798 20.1499 16.6098 21.3199 14.7398C22.2699 13.2298 22.2199 10.6898 21.2699 9.17981Z" fill="#90A3BF"/>
  <path d="M14.0201 9.98014L9.98014 14.0201C9.47014 13.5001 9.14014 12.7801 9.14014 12.0001C9.14014 10.4301 10.4201 9.14014 12.0001 9.14014C12.7801 9.14014 13.5001 9.47014 14.0201 9.98014Z" fill="#90A3BF"/>
  <path d="M18.25 5.75018L14.86 9.14018C14.13 8.40018 13.12 7.96018 12 7.96018C9.76 7.96018 7.96 9.77018 7.96 12.0002C7.96 13.1202 8.41 14.1302 9.14 14.8602L5.76 18.2502H5.75C4.64 17.3502 3.62 16.2002 2.75 14.8402C1.75 13.2702 1.75 10.7202 2.75 9.15018C3.91 7.33017 5.33 5.90018 6.91 4.92018C8.49 3.96018 10.22 3.43018 12 3.43018C14.23 3.43018 16.39 4.25018 18.25 5.75018Z" fill="#90A3BF"/>
  <path d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z" fill="#90A3BF"/>
  <path d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z" fill="#90A3BF"/>
</svg>
              </div>
            </div>
            <div class="input">
              <span class="error-msg" v-if="v$.password_confirmation.$error">{{
                v$.password_confirmation.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors.password_confirmation">{{
                errors.password_confirmation[0]
              }}</span>
            </div>
          </div>
          <div class="d-flex align-item-center justify-content-center">
            <p>
                {{ $t('reg5') }}<span> {{$t('policy1')}} </span> -  <span> {{ $t('policy2') }} </span>
            </p>
          </div>
          <div class="d-flex align-item-center justify-content-center">
            <button @click="registerFunc()" :disabled="pending1" type="" class="gap-3">
            {{ $t('follow') }}
            <v-progress-circular v-if="pending1" indeterminate :size="27" :width="4"></v-progress-circular>
            
            </button>
          </div>
          <div class="d-flex align-item-center justify-content-center">
            <div class="d-flex align-items-center gap-2 linkk">
              <span> {{ $t('reg3') }} </span>
              <span @click="store.state.checkForm = 2" class="active"
                >{{ $t('login') }}</span
              >
            </div>
          </div>
          <icons />
          <div class="d-flex align-item-center justify-content-center">
            <a target="_blank" href="https://webstdy.com/ar?utm_source=codeCar-foorter&utm_medium=referral" class="d-flex align-items-center gap-3 logo">
              <span>{{ $t('powred') }}</span>
              <img class="" src="~/assets/images/blue-logo.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div v-if="signNav == 2" class="otp">
        <div class="">
          <div
            class="header w-100 d-flex align-items-center justify-content-between"
          >
            <logo />
            <div @click="signNav = 1" class="arrow">
              <svg
              class="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.46849 0.414376C5.79194 0.673133 5.84438 1.1451 5.58562 1.46855L1.96044 6.00003L5.58562 10.5315C5.84438 10.855 5.79194 11.3269 5.46849 11.5857C5.14505 11.8444 4.67308 11.792 4.41432 11.4685L0.414321 6.46855C0.195189 6.19464 0.195189 5.80542 0.414321 5.53151L4.41432 0.531506C4.67308 0.20806 5.14505 0.155619 5.46849 0.414376Z"
                  fill="#2D3A4A"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mainform">
          <div
            class="d-flex otp-container align-items-center flex-column justify-content-center text-center"
          >
            <h3 style="margin-top: 32px; font-weight: 700;"> {{ $t('otp') }} </h3>
            <p style="margin-top: 16px; margin-bottom: 56px">
              {{ $t('loginn2') }} {{ form.phone }} {{ $t('loginn1') }}
            </p>
            <v-otp-input
              v-model="otp"
              :length="4"
              placeholder="-"
              style="direction: ltr !important; margin-bottom: 14px"
            ></v-otp-input>
            <span class="error-msg" v-if="error">{{error}}</span>
            <span @click="resendOtp()">{{ $t('reOtp') }}</span>
            <div>
              <button @click="otpFunc()"> {{ $t('create') }} </button>
              <div class="icons-container">
               <icons /> 
                <div class="d-flex align-item-center justify-content-center">
                  <a target="_blank" href="https://webstdy.com/ar?utm_source=codeCar-foorter&utm_medium=referral" class="d-flex align-items-center gap-3 logo">
                    <span>{{ $t('powred') }}</span>
                    <img class="" src="~/assets/images/blue-logo.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

let type = ref(0);
let passType = ref("password");
let passConfType = ref("password");

const selectedCountry = ref();
const countries = ref([]);

let pending1 = ref(false);

const getCites = async ()=>{
  let result = await axios.get(`${getUrl()}/cities`,{
    headers:{
      "Content-Language": `${locale.value}`,
    }
  });

  countries.value = result.data.data;
}

const changePass1 = () => {
  passType.value = passType.value === "password" ? "text" : "password";
};
const changePass2 = () => {
  passConfType.value = passConfType.value === "password" ? "text" : "password";
};
let otp = ref("");
let signNav = ref(1);

let phoneNum = ref(null);

let typeForm = ref("individual");
const handleButtonClick = (value) => {
  store.commit("changeFormCheck", value);
  console.log(store.state.checkForm);
};

let pending = ref(false);

let form = ref({
  name: "",
  phone: "",
  id_number: "",
  city_id: '',
  commercial_register_namber: "",
  password: "",
  password_confirmation: "",
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.image = file;
  }
};

let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
let value4 = ref("This field should be at least 8 characters long");
if (locale.value == "ar") {
  value1.value = "هذا الحقل مطلوبة";
  value2.value = "حقل البريد الإلكتروني مطلوب";
  value3.value = "تنسيق البريد الإلكتروني غير صالح";
  value4.value = "يجب أن يكون هذا الحقل 8 أحرف على الأقل";
} else {
  value1.value = "value is required";
  value2.value = "The email field is required";
  value3.value = "Invalid email format";
  value4.value = "This field should be at least 8 characters long";
}

const rules = {
  name: { required: helpers.withMessage(value1.value, required) },
  city_id: { required: helpers.withMessage(value1.value, required) },
  phone: { required: helpers.withMessage(value1.value, required) },
  // email: {
  //   required: helpers.withMessage(value2.value, required),
  //   email: helpers.withMessage(value3.value, email),
  // },
  password: {
    required: helpers.withMessage(value1.value, required),
    minLength: helpers.withMessage(value4.value, minLength(8)),
  },
  password_confirmation: {
    required: helpers.withMessage(value1.value, required),
    // sameAs: sameAs(form.value.password)
  },
};
let errors = ref([]);
let error = ref();
let emailError = ref(null);
const v$ = useValidate(rules, form);
const registerFunc = async () => {
  pending.value = true;
  let check = await v$.value.$validate();
  let formBody = new FormData();
  formBody.append("name", form.value.name);
  formBody.append("phone", form.value.phone);

  formBody.append("type", typeForm.value);
  formBody.append("city_id", form.value.city_id.id);
  formBody.append("password", form.value.password);
  formBody.append("password_confirmation", form.value.password_confirmation);
  if (typeForm.value != "individual") {
    formBody.append("id_number", form.value.id_number);
    formBody.append(
      "commercial_register_namber",
      form.value.commercial_register_namber
    );
  }
  if (check) {
    pending1.value= true;
    try {
      let result = await axios.post(`${getUrl()}/register`, formBody, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        console.log(result.data.data);
        // phoneNum.value = result.data.data.vendor.phone;
        signNav.value = 2;
        otp.value = result.data.data.vendor.verification_code;
        pending1.value= false;
        errors.value = [];
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
       pending1.value= false;
        errors.value = errorss.response.data.errors;
      }
    }
  }
};

const otpFunc = async () => {
  pending.value = true;
  let formBody = new FormData();
  formBody.append("otp", parseInt(otp.value));
  formBody.append("phone", form.value.phone);
  try {
    let result = await axios.post(`${getUrl()}/verify-otp`, formBody,
    {
      // params: {
      //   otp: parseInt(otp.value),
      //   phone: form.value.phone
      // },
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    if (result.status >= 200) {
      if (process.client) {
        store.commit("changeFormCheck", 2);
        pending.value = false;
        error.value = '';
      }
    }
    console.log(result.data.data);
  } catch (errorss) {
    if (errorss.response) {
      pending.value = false;
      error.value = errorss.response.data.errors;
    }
  }
};
const resendOtp = async () => {
  pending.value = true;
  let formBody = new FormData();
  formBody.append("phone", form.value.phone);
  try {
    let result = await axios.post(`${getUrl()}/resend-otp`, formBody,
    {
      // params: {
      //   otp: parseInt(otp.value),
      //   phone: form.value.phone
      // },
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    if (result.status >= 200) {
      // store.commit("changeFormCheck", 2);
      otp.value = result.data.data.verification_code;
      pending.value = false;
      error.value = '';
   
    }
  } catch (errorss) {
    if (errorss.response) {
      pending.value = false;
      error.value = errorss.response.data.errors;
    }
  }
};


onMounted(() => {
  getCites();
});


</script>

<style lang="scss" scoped></style>
