<template>
    <div class="container">
       <div v-if="favArr.length >= 1" class="container wishlist">
        <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> {{ $t('fav') }} </h4>
                <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="wishlist-container">
             <div class="row">
              <div v-for="item in favArr" class="col-12 col-xl-3 col-lg-3 col-md-6">
               <CarCard :car="item" :myFunction="favFunc" :check="check"></CarCard>
              </div>
             </div>
            </div>
       
       </div>

          <div v-else class=" empty-container">
          <div class="empty">
          <client-only>
              <Vue3Lottie :animation-data="cart" :height="200" :width="200" />
          </client-only>
            <h4> {{ $t("emptyfav1") }} </h4>
            <p>
              {{ $t("emptyfav2") }}   
              </p>

            <nuxt-link :to="localePath('/')">
              <button> {{ $t("emptyfav3") }} </button>

            </nuxt-link>

          </div>
        </div> 

        <Loader v-if="pending"></Loader> 

    </div>
</template>


<script setup>
import axios from "axios";
import { Vue3Lottie } from "vue3-lottie";
import cart from "~/assets/animations/fav.json";

const localePath = useLocalePath();
import Cookies from "js-cookie";
const tokenCookie = Cookies.get("token");
const { locale } = useI18n();

let favArr = ref([]);

let check = ref(true);

let pending = ref(true);

const favFunc = async() =>{
    try {
    let result = await axios.post(
      `${getUrl()}/${tokenCookie ? 'favorite-auth' : 'favorite-withoutauth'}`,
      {},
      {
        headers: {
          "Content-Language": `${locale.value}`,
          Authorization: `Bearer ${tokenCookie}`,
        },
      }
    );

    if(result.status >= 200){
        pending.value = false;
    }

    favArr.value = result.data.data;
  } catch (error) {
    console.error("Error in favFunc:", error);
  }
}



onMounted(() => {
    favFunc();
});
let items = ref([
    {
        title: locale.value == "ar" ? "الرئيسية" : "home",
        disabled: true,
        href: "/",
    },
    {
        title: locale.value == "ar" ? "قائمة المفضلة" : "wishlist",
        disabled: false,
        href: "wishlist",
    },
]);
</script>


<style lang="scss">
.wishlist{
    margin-top: 70px;
    margin-bottom: 120px;
}
</style>