<template>
  <div>
    <div class="container finance-container paymentType">
      <div
        class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
      >
        <h4 class="heading-text">التمويل</h4>
        <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>
         {{ store.state.showConfirm1 }}
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>

      <div>
        <div
        v-if="!store.state.showConfirm1"
          class="payment-container cash"
        >
          <div class="textt">
            <h4>التمويل</h4>
            <span class="word">
              قم بإتمام عمليتك بشكل سلس وفوري مع السداد النقدي
            </span>
          </div>

          <div class="payment-method">
            <button
              @click="paymentMethod = 1"
              class="one"
              :class="{ active: paymentMethod == 1 }"
            >
              افراد
            </button>
            <button
              @click="paymentMethod = 2"
              class="two"
              :class="{ active: paymentMethod == 2 }"
            >
              شركات
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
          <h4>تم ارسال الكود!</h4>
          <p>
            شكرًا لثقتك في كود كار! لضمان أمان معلوماتك وتأكيد طلبك، ارسلنا كود
            تحقق عبر رسالة نصية إلى رقم هاتفك المسجل. يرجى إدخال الكود في الخانة
            المخصصة أدناه
          </p>

          <v-otp-input v-model="otp" :length="4" placeholder="-"></v-otp-input>
          {{ otp }}
          <button class="resend">اعد ارسال الكود</button>

          <button @click="paymentOtp = 7" class="send">متابعة</button>
        </div>
        <div v-if="paymentOtp == 2" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>تم ارسال طلبك بنجاح!</h4>
          <p>
            تم إرسال طلبك بنجاح! يمكنك متابعة حالة الطلب وجميع التفاصيل المتعلقة
            به من خلال تتبع طلبك في الصفحة الرئيسية
          </p>

          <div class="order-number">
            <h5>رقم الطلب : <span>200715DXFMW0UD</span></h5>
            <img src="~/assets/images/Copy.png" />
          </div>

          <nuxt-link :to="localePath('/')">
            <button class="send home">الرجوع للرئيسية</button>
          </nuxt-link>
        </div>
      </div>

      <div v-if="store.state.showConfirm2" class="confirm-container">
        <div v-if="paymentOtp1 == 1" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="otpp" :height="200" :width="200" />
          </client-only>
          <h4>تم ارسال الكود!</h4>
          <p>
            شكرًا لثقتك في كود كار! لضمان أمان معلوماتك وتأكيد طلبك، ارسلنا كود
            تحقق عبر رسالة نصية إلى رقم هاتفك المسجل. يرجى إدخال الكود في الخانة
            المخصصة أدناه
          </p>

          <v-otp-input v-model="otp" :length="4" placeholder="-"></v-otp-input>
          {{ otp }}
          <button class="resend">اعد ارسال الكود</button>

          <button @click="paymentOtp1 = 2" class="send">متابعة</button>
        </div>
        <div v-if="paymentOtp1 == 2" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>تم ارسال طلبك بنجاح!</h4>
          <p>
            تم إرسال طلبك بنجاح! يمكنك متابعة حالة الطلب وجميع التفاصيل المتعلقة
            به من خلال تتبع طلبك في الصفحة الرئيسية
          </p>

          <div class="order-number">
            <h5>رقم الطلب : <span>200715DXFMW0UD</span></h5>
            <img src="~/assets/images/Copy.png" />
          </div>

          <nuxt-link to="/">
            <button class="send home">الرجوع للرئيسية</button>
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

.corpBtn{
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
background:  #2D3A4A;
}
.finance-container {
  margin-top: 72px !important;
  margin-bottom: 140px;
  min-height: 100vh;
}
</style>
