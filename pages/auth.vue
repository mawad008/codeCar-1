<template>
  <div>
    <div class="main-auth">
      <div class="row justify-content-betwee">
        <div class="col-12 col-xl-7 col-lg-7 main-col">
          <div class="form-inputs">
            
           <div v-if="store.state.checkForm == 1">
           <register />
           </div>
           <div v-if="store.state.checkForm == 2">
              <login />
           </div>
           
          </div>
        </div>
        <div class="col-12 col-xl-5 col-lg-5 ">
          <div class="main-img">
            <img src="~/assets/images/login-img.png" alt="" />
            <img class="overlay" src="~/assets/images/overlay-form.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
import { useStore } from "@/store/index";
let store = useStore;
const { locale } = useI18n();


useHead({
  title: locale.value == 'ar' ? 'تسجيل الدخول' : 'sign up'
});
</script>

<style lang="scss" scoped></style>
