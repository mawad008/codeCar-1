<template>
    <div>
         <div class="login">
           
               <div v-if="loginNav == 1">
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
                    <h3> {{$t('login1')}} </h3>
                    <span> {{ $t('login2') }} </span
                    >
                  </div>

          
                  <div class="mainform">
                    <div class="form">
              
                      <div class="input">
                        <label for="">{{ $t('phone') }}</label>
                        <input
                          type="tel"
                          placeholder="3333-5555-9999-55"
                          name=""
                         v-model="form.phone"
                        />
                      </div>
              
                      <div class="input pass">
                        <label for=""> {{ $t('pass1') }} </label>
                        <input
                          :type="passType"
                          placeholder="***************"
                          name=""
                          @keypress.enter="loginFunc()"
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
                
                    </div>
                    <div class="input">
                    <span @click="loginNav = 2" class="forget d-block mt-3">{{$t('forget')}}</span>
                    </div>
             
                    <div class="d-flex align-item-center justify-content-center">
                      <button @click="loginFunc()"  class="gap-3"  type="">
                        {{ $t('login') }}
                      <v-progress-circular v-if="pending1" indeterminate :size="30" :width="5"></v-progress-circular>
                      </button>
                    </div>
                    <div class="d-flex align-item-center justify-content-center">
                      <div class="d-flex align-items-center gap-2 linkk">
                        <span> {{$t('login3')}} </span>
                        <span @click="store.state.checkForm = 1" class="active"> {{$t('create')}} </span>
                      </div>
                    </div>

                    <div class="icons-container">
                     <icons />
                    <div class="d-flex align-item-center justify-content-center">
                     <a target="_blank" href="https://webstdy.com/ar?utm_source=codeCar-foorter&utm_medium=referral" class="d-flex align-items-center gap-3 logo">
                      <span> {{$t('powred')}} </span>
                      <img class="" src="~/assets/images/blue-logo.png" alt="">
                     </a>
                    </div>
                
                    </div>
                  </div>
           
               </div>
             
                 <div v-if="loginNav == 2" class="otp">
                   <div class="">
                      <div
                        class="header w-100 d-flex align-items-center justify-content-between"
                      >
                        <logo />
                        <div @click="loginNav = 1" class="arrow">
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
                       <div class="text">
                        <h3> {{$t('forget2')}}</h3>
                        <span>  {{ $t('forget3') }}     </span
                        >
                      </div>
                     <div class="mainform">
                    <div class="form">
                     <div class="input">
                     <label for=""> {{$t('phone')}}</label>
                     <input type="tel" v-model="phone" placeholder="3333-5555-9999-55" />
                     <span class="error-msg" v-if="error2">{{ error2 }}</span>
                     </div>
                    </div>
                    <button @click="sendOtp()" :disabled="pending2" style="margin-top:72px;">
                    {{$t('follow')}}
                    <v-progress-circular v-if="pending2" indeterminate :size="30" :width="5"></v-progress-circular>
                    </button>
                  <div class="icons-container">
                      <icons />
                      <div class="d-flex align-item-center justify-content-center">
                       <a target="_blank" href="https://webstdy.com/ar?utm_source=codeCar-foorter&utm_medium=referral" class="d-flex align-items-center gap-3 logo">
                        <span>تم تطويره بواسطة</span>
                        <img class="" src="~/assets/images/blue-logo.png" alt="">
                       </a>
                      </div>
                  </div>
                     </div>
                 </div>
                 <div v-if="loginNav == 3" class="otp">
                   <div class="">
                      <div
                        class="header w-100 d-flex align-items-center justify-content-between"
                      >
                        <logo />
                        <div @click="loginNav = 2" class="arrow">
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
                      <div class="d-flex otp-container align-items-center flex-column justify-content-center text-center">
                      <h3 style="margin-top: 32px; font-weight:700;"> </h3>
                      <p style="margin-top: 16px; margin-bottom: 56px;"> {{ $t('loginn2') }} {{ phone }} {{$t('loginn1')}} </p>
                         <v-otp-input v-model="otp" :length="4" placeholder="-"
                      style="direction: ltr !important; margin-bottom: 14px;"></v-otp-input>
                  <span @click="resendOtp();">{{ $t('reOtp') }}</span>
                  <span class="error-msg" v-if="error3">{{error3}}</span>
                  <div>
                      <button @click="otpFunc()" :disabled="pending3">
                      {{ $t('follow') }}
                    <v-progress-circular v-if="pending3" indeterminate :size="30" :width="5"></v-progress-circular>
                      
                      </button>
                  <div class="icons-container">
                      <icons />
                      <div class="d-flex align-item-center justify-content-center">
                       <a target="_blank" href="https://webstdy.com/ar?utm_source=codeCar-foorter&utm_medium=referral"  class="d-flex align-items-center gap-3 logo">
                        <span>{{$t('powred')}}</span>
                        <img class="" src="~/assets/images/blue-logo.png" alt="">
                       </a>
                      </div>
                  </div>
                  </div>
                      </div>
                     </div>
                 </div>
                   <div v-if="loginNav == 4" class="otp">
                       <div class="">
                          <div
                            class="header w-100 d-flex align-items-center justify-content-between"
                          >
                            <logo />
                            <div @click="loginNav = 3" class="arrow">
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
                           <div class="text">
                            <h3> {{$t('repass')}} </h3>
                            <span>  {{ $t('repass2') }}     </span
                            >
                          </div>
                         <div class="mainform">
                        <div class="form">
                       
                          <div class="input pass">
                            <label for=""> {{ $t('pass3') }}</label>
                            <input
                              :type="passType1"
                              placeholder="***************"
                              name=""
                              v-model="pass"
                            />
                            <div @click="changePass2()" class="icon">
                              <svg
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
                            </div>
                          </div>
                          <span class="error-msg" v-if="errors4.password">{{
                errors4.password[0]
              }}</span>
                          
                          <div class="input pass">
                            <label for="">{{ $t('pass4') }}</label>
                            <input
                              :type="passType2"
                              placeholder="***************"
                              name=""
                              v-model="newPass"
                            />
            
                            <div @click="changePass3()" class="icon">
                              <svg
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
                            </div>
                          </div>
                          <span class="error-msg" v-if="errors4.password_confirmation">{{
                errors4.password_confirmation[0]
              }}</span>
                        </div>
                        <button @click="resetPass()" :disabled="pending4" style="margin-top:72px;">
                        {{$t('confirm')}}
                    <v-progress-circular v-if="pending4" indeterminate :size="30" :width="5"></v-progress-circular>
                        </button>
                      <div class="icons-container">
                         <icons />
                          <div class="d-flex align-item-center justify-content-center">
                           <a target="_blank" href="https://webstdy.com/ar?utm_source=codeCar-foorter&utm_medium=referral" class="d-flex align-items-center gap-3 logo">
                            <span>{{$t('powred')}}</span>
                            <img class="" src="~/assets/images/blue-logo.png" alt="">
                           </a>
                          </div>
                      </div>
                         </div>
                     </div>
          
              </div>
    </div>
</template>

<script setup>
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import Cookies from 'js-cookie';
import { useStore } from "~/store";
import axios from 'axios';
import useValidate from '@vuelidate/core'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';
const localePath = useLocalePath();
const { locale } = useI18n();
let store = useStore;
let loginNav = ref(1);
const router = useRouter();
let otp = ref('');
let passType = ref('password');
let passType1 = ref('password');
let passType2 = ref('password');
const changePass1 = () => {
    passType.value = passType.value === 'password' ? 'text' : 'password'
}
const changePass2 = () => {
    passType1.value = passType1.value === 'password' ? 'text' : 'password'
}
const changePass3 = () => {
    passType2.value = passType2.value === 'password' ? 'text' : 'password'
}

const handleButtonClick = (value) => {
    store.commit("changeFormCheck", value);

};


let form = ref({
    phone: '',
    password: '',
});

let phone = ref('');

let pending1 = ref(false);
let pending2 = ref(false);
let pending3 = ref(false);
let pending4 = ref(false);

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
    value1.value = 'value is required';
  value2.value = "The email field is required";
  value3.value = "Invalid email format";
  value4.value = "This field should be at least 8 characters long";
}

const rules = computed(() => {
  return {
    phone: {
      required: helpers.withMessage(value2.value, required),
    },
    password: {
      required: helpers.withMessage(value1.value , required),
      minLength: helpers.withMessage(value4.value, minLength(8)),
    },
  };
});

let errors = ref([]);
let error2 = ref();
let error3 = ref();
let errors4 = ref([]);
const v$ = useValidate(rules, form);

let title = ref("هذا الحساب ليس مفعل ");

if (locale.value == 'ar') {
  title.value = 'هذا الحساب ليس مفعل  ';
} else {
  title.value = 'You have successfully subscribed'
}
const loginFunc = async () => {
    let check = await v$.value.$validate();
    let formBody = new FormData();
    formBody.append("phone", form.value.phone);
    formBody.append("password", form.value.password);
    if (check) {
        console.log('login');
        pending1.value = true;
        try {
            let result = await axios.post(`${getUrl()}/login`, formBody, {
                headers: {
                    "Content-Language": `${locale.value}`,

                }
            });
            if (result.status >= 200) {
                console.log(result.data.data);
                if (process.client) {
                  pending1.value = false;
                    document.cookie = `token=${result.data.data.token}; path=/;`; // Set token in cookie
                    store.state.user = result.data.data.user;
                    store.state.authenticated = true;

                    const userObjectString = JSON.stringify(result.data.data.user);
                    Cookies.set('user', userObjectString);
                    Cookies.set('auth', true);

                    //  localStorage.setItem("user", JSON.stringify(result.data.data.user));
                    // localStorage.setItem("auth", true);
                    router.push(localePath('/'));
                }
              }
          

        } catch (errorss) {
            console.log(errorss);
            if (errorss.response) {
              pending1.value = false;
                errors.value = errorss.response.data.errors;
                if(!errorss.response.data.success){
                createToast(
                {
                  title: title.value,
                },
                {
                  type: "danger",
                  transition: "bounce",
                  showIcon: "true",
                  timeout: 4000,
                  toastBackgroundColor: "#2d3a4a",
                }
              );
                    }
            }


            // Optionally, set an expiration date for the cookie
            // Example: Expires in 7 days
            // const expirationDate = new Date();
            // expirationDate.setDate(expirationDate.getDate() + 7);
            // Cookies.set('user', userObjectString, { expires: expirationDate });

        }
    } else {
        console.log('not login');
    }
}

const sendOtp = async () => {
  pending2.value = true;
  let formBody = new FormData();
  formBody.append("phone",phone.value);
  try {
    let result = await axios.post(`${getUrl()}/send-otp`, formBody,
    {
     
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    if (result.status >= 200) {
      if (process.client) {
        loginNav.value = 3;
        pending2.value = false;
        error2.value = '';
        otp.value = result.data.data.verification_code;
      }
    }
  } catch (errorss) {
    if (errorss.response) {
      pending2.value = false;
      error2.value = errorss.response.data.errors.phone[0];
    }
  }
};
const otpFunc = async () => {
  pending3.value = true;
  let formBody = new FormData();
  formBody.append("otp", parseInt(otp.value));
  formBody.append("phone", phone.value);
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
        loginNav.value = 4;
        pending3.value = false;
        error3.value = '';
      }
    }
    console.log(result.data.data);
  } catch (errorss) {
    if (errorss.response) {
      pending3.value = false;
      error3.value = errorss.response.data.errors;
    }
  }
};

const resendOtp = async () => {
  // pending.value = true;
  let formBody = new FormData();
  formBody.append("phone", phone.value);
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
      // pending.value = false;
      error.value = '';
   
    }
  } catch (errorss) {
    if (errorss.response) {
      // pending.value = false;
      // error.value = errorss.response.data.errors;
    }
  }
};


let newPass = ref('');
let pass = ref('');

const resetPass = async ()=>{
  pending4.value = false;
  let formBody = new FormData();
  formBody.append("password", pass.value);
  formBody.append("password_confirmation", newPass.value);
  formBody.append("phone", phone.value);
  try {
    let result = await axios.post(`${getUrl()}/reset-password`, formBody,
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
      // otp.value = result.data.data.verification_code;
      loginNav.value = 1;
      pending4.value = false;
      errors4.value = [];
   
    }
  } catch (errorss) {
    if (errorss.response) {
      pending4.value = false;
      errors4.value = errorss.response.data.errors;
    }
  }
}


</script>

<style lang="scss" scoped>


</style>