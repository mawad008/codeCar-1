<template>
  <div>
    <div class="container finance-container paymentType">
      <div
        class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
      >
        <h4 class="heading-text">{{ $t('finance') }}</h4>
        <p>{{desc}}</p>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>

      <div>
        <div
        v-if="!store.state.showConfirm1"
          class="payment-container cash"
        >
          <div class="textt">
            <h4>{{ $t('finance') }}</h4>
            <span class="word">
              {{ $t('financeText') }}
            </span>
          </div>

          <div class="payment-method">
            <button
              @click="paymentMethod = 1"
              class="one"
              :class="{ active: paymentMethod == 1 }"
            >
              {{ $t('ind') }}
            </button>
            <button
              @click="paymentMethod = 2"
              class="two"
              :class="{ active: paymentMethod == 2 }"
            >
              {{ $t('comp') }}
            </button>
          </div>
          <div v-if="paymentMethod == 1">
           <finance1/>
          </div>
           
           <div v-if="paymentMethod == 2">
           <finance2 />
           </div>
         
        </div>
      </div>

      <div v-if="store.state.showConfirm1" class="confirm-container">
        <div v-if="paymentOtp == 1" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="otpp" :height="200" :width="200" />
          </client-only>
          <h4>
          {{ $t('otp1') }}
        </h4>
          <p>
           {{ $t('otp2') }}
          </p>

          <v-otp-input v-model="store.state.otpFin1" style="direction: ltr !important;" :length="4" placeholder="-"></v-otp-input>
          <!-- {{ otp }}
          {{ store.state.otpFin1 }} -->
          <span class="error-msg2" v-if="error1">{{
                            error1
                  }}</span>
          <button class="resend">{{ $t('reOtp') }}</button>

          <button @click="sendOtp()" class="send">{{ $t('follow') }}</button>
        </div>
        <div v-if="paymentOtp == 2" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>{{ $t('otp3') }}</h4>
          <p>
            {{ $t('otp4') }}
          </p>

          <div class="order-number">
            <h5>{{ $t('orderNum') }} : <span>{{ orderNum1 }}</span></h5>
            <button @click="copyToClipboard();" class="iconn">
                              <img v-if="check" src="~/assets/images/share1.svg" style="margin-bottom:0px" alt="">
                               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                              viewBox="0 0 448 512">
                              <path
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg> 
                             </button>
          </div>

          <nuxt-link :to="localePath('/')" class="nav-link">
            <button class="send home">{{ $t('backHome') }}</button>
          </nuxt-link>
        </div>
      </div>

      <!-- <div v-if="store.state.showConfirm2" class="confirm-container">
        <div v-if="paymentOtp1 == 1" class="confirm-text">
           <client-only>
              <Vue3Lottie :animation-data="otpp" :height="200" :width="200" />
            </client-only>
            <h4>
            {{ $t('otp1') }}
          </h4>
            <p>
             {{ $t('otp2') }}
            </p>

            <v-otp-input v-model="store.state.otpFin2" :length="4" placeholder="-"></v-otp-input>
            {{ store.state.otpFin2 }}
            <button class="resend" >{{ $t('reOtp') }}</button>

            <button @click="sendOtp()" class="send">{{ $t('follow') }}</button>
        </div>
        <div v-if="paymentOtp1 == 2" class="confirm-text">
           <client-only>
              <Vue3Lottie :animation-data="success" :height="200" :width="200" />
            </client-only>
            <h4>{{ $t('otp3') }}</h4>
            <p>
              {{ $t('otp4') }}
            </p>

            <div class="order-number">
              <h5>{{ $t('orderNum') }} : <span>{{ orderNum1 }}</span></h5>
            <button @click="copyToClipboard();" class="iconn">
                              <img v-if="check" src="~/assets/images/share1.svg" style="margin-bottom:0px" alt="">
                               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                              viewBox="0 0 448 512">
                              <path
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg> 
                             </button>
            </div>

            <nuxt-link :to="localePath('/')">
              <button class="send home">{{ $t('backHome') }}</button>
            </nuxt-link>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import otpp from "~/assets/animations/otp.json";
import success from "~/assets/animations/success.json";
import { Vue3Lottie } from "vue3-lottie";
import { useStore } from "~/store";
let store = useStore;
const localePath = useLocalePath();
const { locale } = useI18n();
let paymentMethod = ref(1);
let otp = ref(store.state.otpFin1);

let paymentOtp = ref(1);
let paymentOtp1 = ref(1);

let pendingOtp1 = ref(false);
let pendingOtp2 = ref(false);
let orderNum1 = ref();
let error1 = ref();

let desc = ref('');
const getDesc = async () => {
  let result = await axios.get(`${getUrl()}/allsettings`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  desc.value = result.data.data.financeDescription;
}


const sendOtp = async () => {
    let formBody = new FormData();
    formBody.append("otp", store.state.otpFin1 );
    formBody.append("phone", store.state.phoneFin1);
    formBody.append("order_id", store.state.orderFin1);
    try {
        let result = await axios.post(`${getUrl()}/verify-otp-order`, formBody, {
            // params: {
            //     type: paymentMethod.value == 1 ? 'individual' : 'company',
            //     step: 5
            // },
            headers: {
                "Content-Language": `${locale.value}`,
            },
        });
        if (result.status >= 200) {
          // if(store.state.orderFin1){
          // } 
          paymentOtp.value = 2;
          pendingOtp1.value = false;
          // if(store.state.orderFin2){
          //   paymentOtp1.value = 2;
          //   pendingOtp2.value = false;
          // }
          orderNum1.value = result.data.data.Order_Number;
          error1.value = '';
        }
    } catch (errorss) {
        console.log(errorss);
        if (errorss.response) {
          pendingOtp1.value = false;
          error1.value = errorss.response.data.errors;
        }
    }
}

let check = ref(true);
function copyToClipboard() {
    /* Copy the text */
    if (process.client) {
        check.value = false;
        const clipBoard = navigator.clipboard;
        clipBoard.writeText(orderNum1.value).then(() => {
        });

        setTimeout(() => {
            check.value = true;
        }, 1000);
    }

}


useHead({
  title: locale.value == 'ar' ? 'التمويل' : 'finance'
});

let items = ref([
  {
    title: locale.value == 'ar' ? "الرئيسية" : "home",
    disabled: false,
    class:"breadcrumbs-text",
    href: "/",
  },
  {
    title: locale.value == 'ar' ? "التمويل" : "finance",
    disabled: true,
        class:"breadcrumbs-dark",
    href: "finance",
  },
]);


onMounted(() => {
  getDesc();
})
</script>

<style lang="scss" scoped>


.finance-container {
  margin-top: 72px !important;
  margin-bottom: 140px;
  min-height: 100vh;
}
</style>
