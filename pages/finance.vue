<template>
  <div>
    <div class="container finance-container paymentType">
      <div
        class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
      >
        <h4 class="heading-text">{{ $t('finance') }}</h4>
        <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>
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

          <v-otp-input v-model="otp" :length="4" placeholder="-"></v-otp-input>
          {{ otp }}
          <button class="resend">{{ $t('reOtp') }}</button>

          <button @click="paymentOtp = 7" class="send">{{ $t('follow') }}</button>
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
            <h5>{{ $t('orderNum') }} : <span>200715DXFMW0UD</span></h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3417 6.27149V1.92001H9.11988C7.7944 1.92001 6.71988 2.99453 6.71988 4.32001V16.8C6.71988 18.1255 7.7944 19.2 9.11988 19.2H18.7199C20.0454 19.2 21.1199 18.1255 21.1199 16.8V7.69575H17.8035C17.0003 7.69575 16.3417 7.06237 16.3417 6.27149ZM17.5764 2.48686C17.4967 2.38236 17.4041 2.2905 17.3017 2.21281V6.27149C17.3017 6.52361 17.5223 6.73575 17.8035 6.73575H20.8163L17.5764 2.48686ZM5.27988 22.08H14.8799C16.041 22.08 17.0095 21.2555 17.2319 20.16H9.11988C7.26421 20.16 5.75988 18.6557 5.75988 16.8V4.80001H5.27988C3.9544 4.80001 2.87988 5.87453 2.87988 7.20001V19.68C2.87988 21.0055 3.9544 22.08 5.27988 22.08Z" fill="#90A3BF"/>
</svg>
          </div>

          <nuxt-link :to="localePath('/')">
            <button class="send home">{{ $t('backHome') }}</button>
          </nuxt-link>
        </div>
      </div>

      <div v-if="store.state.showConfirm2" class="confirm-container">
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

            <v-otp-input v-model="otp" :length="4" placeholder="-"></v-otp-input>
            {{ otp }}
            <button class="resend">{{ $t('reOtp') }}</button>

            <button @click="paymentOtp = 7" class="send">{{ $t('follow') }}</button>
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
              <h5>{{ $t('orderNum') }} : <span>200715DXFMW0UD</span></h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3417 6.27149V1.92001H9.11988C7.7944 1.92001 6.71988 2.99453 6.71988 4.32001V16.8C6.71988 18.1255 7.7944 19.2 9.11988 19.2H18.7199C20.0454 19.2 21.1199 18.1255 21.1199 16.8V7.69575H17.8035C17.0003 7.69575 16.3417 7.06237 16.3417 6.27149ZM17.5764 2.48686C17.4967 2.38236 17.4041 2.2905 17.3017 2.21281V6.27149C17.3017 6.52361 17.5223 6.73575 17.8035 6.73575H20.8163L17.5764 2.48686ZM5.27988 22.08H14.8799C16.041 22.08 17.0095 21.2555 17.2319 20.16H9.11988C7.26421 20.16 5.75988 18.6557 5.75988 16.8V4.80001H5.27988C3.9544 4.80001 2.87988 5.87453 2.87988 7.20001V19.68C2.87988 21.0055 3.9544 22.08 5.27988 22.08Z" fill="#90A3BF"/>
</svg>
            </div>

            <nuxt-link :to="localePath('/')">
              <button class="send home">{{ $t('backHome') }}</button>
            </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import otpp from "~/assets/animations/otp.json";
import success from "~/assets/animations/success.json";
import { Vue3Lottie } from "vue3-lottie";
import { useStore } from "~/store";
let store = useStore;
const localePath = useLocalePath();
const { locale } = useI18n();
let paymentMethod = ref(1);
let otp = ref("");

let paymentOtp = ref(1);
let paymentOtp1 = ref(1);

let items = ref([
  {
    title: locale.value == 'ar' ? "الرئيسية" : "home",
    disabled: true,
    href: "/",
  },
  {
    title: locale.value == 'ar' ? "التمويل" : "finance",
    disabled: false,
    href: "finance",
  },
]);


onMounted(() => {
})
</script>

<style lang="scss" scoped>


.finance-container {
  margin-top: 72px !important;
  margin-bottom: 140px;
  min-height: 100vh;
}
</style>
