<template>
  <div>

    <div class="car-card" v-if="car">
      <div @click="goToCar(car.id)" style="cursor: pointer;">
        <Swiper :spaceBetween="30" :slidesPerView="1" :centeredSlides="true" :autoplay="{
      delay: 5500,
      disableOnInteraction: false,
    }" :modules="[SwiperAutoplay]" class="image">
          <swiper-slide v-for="item, index in car.images" :key="index">
            <NuxtImg :src="item" format="webp" :alt="car.title" quality="80" width="60" height="60" loading="lazy" />
            
          </swiper-slide>
        </Swiper>

      </div>
      <!-- <div class="image">
                <img :src="car.main_image" alt="" />
            </div> -->
            <div class="namee d-flex align-items-center gap-2">
              <div class="" v-if="car?.statuekey == 1" style="width: 10px; height: 10px; border-radius: 50%; background-color: green;"></div>
              <div class="" v-else style="width: 10px; height: 10px; border-radius: 50%; background-color: red;"></div>
              <span class="">{{ car.statue }}</span>

            </div>
      <div class="name d-flex flex-column">
        <span class="used" v-if="car.discount_percentage > 0"> {{ $t('discc') }} {{
      car.discount_percentage }} % </span>
        <h4>{{ car.title }}</h4>
      </div>
      <div class="price d-flex flex-column align-items-cente w-100 justify-content-center " style="min-height: 60px;">
        <div v-if="car?.statuekey == 0 && car.price == 0" class="d-flex align-items-center justify-content-center">
          <span> {{ $t('Asoum') }} </span>
        </div>
        <div v-else>
          <div class="d-flex align-items-center justify-content-between w-100">
            <h5 class="price-text price-dir">{{ car.selling_price }} <riyal class="mb-1 mx-1" color="#90a3bf"></riyal></h5>
            <span class="disc2  price-dir" v-if="car.have_discount == 1"> {{ car.price }} <riyal class="mb-1 mx-1" color="#90a3bf"></riyal> </span>
          </div>
          <span class="price-dir"><riyal class="mb-1 mx-1" color="#90a3bf" v-if="locale == 'en'"></riyal> {{ car.price_after_tax }} <riyal v-if="locale == 'ar'" class="mb-1 mx-1" color="#90a3bf"></riyal> {{ $t('taxes') }}</span>
        </div>
      </div>
      <div class="types">
        <div class="type">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
            <path
              d="M15.5 0.9375H7.92503C7.83041 0.937711 7.73732 0.961474 7.65418 1.00665C7.57104 1.05182 7.50045 1.11698 7.44878 1.19625L0.762528 11.625C0.705626 11.7114 0.673483 11.8117 0.66959 11.9151C0.665698 12.0185 0.690204 12.121 0.740448 12.2114C0.790692 12.3019 0.864753 12.3768 0.954589 12.4281C1.04443 12.4794 1.1466 12.5052 1.25003 12.5025H6.24503L1.69628 22.2525C1.64137 22.3723 1.63023 22.5075 1.66482 22.6346C1.6994 22.7617 1.77751 22.8727 1.88553 22.9481C1.99354 23.0236 2.12461 23.0587 2.25587 23.0474C2.38713 23.0361 2.51026 22.979 2.60378 22.8863L15.6688 9.8325C15.7456 9.75317 15.7975 9.65311 15.8182 9.54465C15.8388 9.43619 15.8273 9.32406 15.7851 9.22205C15.7428 9.12003 15.6717 9.0326 15.5804 8.97049C15.4891 8.90839 15.3817 8.87433 15.2713 8.8725H11.5925L15.9763 1.79625C16.029 1.71119 16.058 1.61362 16.0605 1.51359C16.0629 1.41356 16.0386 1.31469 15.99 1.22719C15.9415 1.13968 15.8705 1.06671 15.7844 1.01579C15.6982 0.964865 15.6001 0.93784 15.5 0.9375Z"
              fill="#90A3BF" />
          </svg>
          <span> {{ car.fuel_type }}</span>
        </div>
        <div class="type">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M8.09362 4.38877C6.59525 3.31431 4.46077 3.8016 3.59883 5.4295C3.11734 6.33892 3.14859 7.45154 3.68044 8.33323C4.40504 9.53544 5.8573 10.0838 7.21217 9.66681C8.48875 9.27424 9.34645 8.12591 9.34645 6.80932C9.34645 5.8562 8.87809 4.95136 8.09362 4.38877Z"
              fill="#90A3BF" />
            <path
              d="M12.0908 8.48417L11.949 8.38293C12.231 7.37965 12.231 6.30615 11.949 5.30286L12.0913 5.20162C12.6067 4.83327 12.7547 4.14593 12.4359 3.60359L12.2222 3.23931C11.9035 2.69646 11.2241 2.47972 10.6419 2.73411L10.4799 2.80482C9.73583 2.06203 8.79094 1.52477 7.76896 1.26428L7.75084 1.09283C7.68357 0.470099 7.15266 0 6.51566 0H6.08772C5.45098 0 4.91981 0.470049 4.85254 1.09283L4.83443 1.26428C3.81244 1.52477 2.86755 2.06203 2.12344 2.80482L1.96147 2.73411C1.37933 2.47972 0.6999 2.69646 0.381143 3.23931L0.167431 3.60359C-0.151326 4.14593 -0.00333165 4.83327 0.512578 5.20162L0.654363 5.30286C0.372346 6.30615 0.372346 7.37965 0.654363 8.38293L0.512578 8.48417C-0.00333165 8.85252 -0.151326 9.53986 0.167431 10.0822L0.381143 10.4465C0.6999 10.9893 1.37933 11.2061 1.96147 10.9517L2.12344 10.881C2.86755 11.6238 3.81244 12.161 4.83443 12.4215L4.85305 12.5925C4.91981 13.2157 5.45072 13.6858 6.08772 13.6858H6.51566C7.15266 13.6858 7.68357 13.2157 7.75084 12.593L7.76896 12.4215C8.79094 12.161 9.73635 11.6238 10.4805 10.881L10.6419 10.9517C11.2241 11.2061 11.9035 10.9893 12.2222 10.4465L12.4359 10.0822C12.7547 9.53986 12.6067 8.85252 12.0908 8.48417ZM7.45941 10.4436C5.73543 10.9743 3.88892 10.2758 2.96825 8.74833C1.6452 6.55499 2.85865 3.69313 5.41735 3.10316C7.8457 2.54352 10.1744 4.35452 10.1744 6.80932C10.1744 8.48377 9.08331 9.94428 7.45941 10.4436Z"
              fill="#90A3BF" />
            <path
              d="M23.4879 18.4336L23.2577 18.2693C23.5723 17.1668 23.5723 15.9844 23.2577 14.8819L23.4879 14.7171C24.0033 14.3487 24.1513 13.6614 23.8326 13.119L23.5319 12.6072C23.2132 12.0649 22.5342 11.8476 21.9521 12.1025L21.6903 12.2165C20.8747 11.3958 19.8341 10.8041 18.7081 10.5223L18.6786 10.244C18.6114 9.62127 18.0804 9.15117 17.4434 9.15117H16.8422C16.2106 9.15117 15.6741 9.61689 15.6075 10.244L15.5775 10.5223C14.452 10.8041 13.4109 11.3958 12.5953 12.2165L12.3335 12.1025C11.7514 11.8476 11.0724 12.0649 10.7537 12.6072L10.453 13.119C10.1343 13.6614 10.2828 14.3487 10.7982 14.7171L11.0279 14.8819C10.7133 15.9844 10.7133 17.1668 11.0279 18.2693L10.7982 18.4336C10.2828 18.8025 10.1343 19.4893 10.453 20.0321L10.7537 20.544C11.0724 21.0863 11.7519 21.303 12.334 21.0487L12.5953 20.9342C13.4109 21.7553 14.452 22.3465 15.5775 22.6284L15.6075 22.9067C15.6742 23.5299 16.2052 24 16.8422 24H17.4434C18.0804 24 18.6114 23.5299 18.6786 22.9067L18.7081 22.6284C19.8341 22.3465 20.8747 21.7553 21.6903 20.9342L21.9521 21.0487C22.5342 21.3035 23.2137 21.0863 23.5319 20.544L23.8326 20.0321C24.1513 19.4893 24.0033 18.8025 23.4879 18.4336ZM18.3928 20.4992C16.5357 21.0709 14.5403 20.3217 13.5439 18.669C12.1158 16.301 13.4254 13.2112 16.188 12.5743C18.8501 11.9607 21.3238 13.9664 21.3238 16.5755C21.3238 18.3832 20.1459 19.96 18.3928 20.4992Z"
              fill="#90A3BF" />
            <path
              d="M16.377 13.3668C14.1592 13.8782 13.112 16.3568 14.2562 18.2539C15.0542 19.5777 16.6535 20.1817 18.1455 19.7223C19.5514 19.29 20.4959 18.0254 20.4959 16.5755C20.4959 14.4573 18.4874 12.8803 16.377 13.3668Z"
              fill="#90A3BF" />
            <path
              d="M22.9213 8.46987C20.4928 6.82341 17.4754 6.34725 14.6732 7.12846L14.7799 6.91712C14.8816 6.7158 14.798 6.47154 14.5932 6.37157C14.3884 6.2717 14.14 6.35392 14.0383 6.55519C13.4459 7.7285 13.4772 7.66317 13.4641 7.70199C13.398 7.89314 13.4852 8.10529 13.6719 8.19636L14.7862 8.74018C14.9915 8.84031 15.2396 8.75748 15.3411 8.55657C15.4428 8.35525 15.3592 8.11099 15.1544 8.01102L14.932 7.9025C17.4885 7.2003 20.2372 7.6388 22.4513 9.14002C22.5231 9.18866 22.6049 9.21201 22.6859 9.21201C23.0889 9.21201 23.2564 8.69714 22.9213 8.46987Z"
              fill="#90A3BF" />
            <path
              d="M9.18877 15.6303C9.16673 15.6111 9.26277 15.6831 7.90371 14.6797C7.72084 14.5447 7.46138 14.5811 7.3241 14.7609C7.18681 14.9406 7.22381 15.1957 7.40663 15.3307L7.95209 15.7333C5.98754 16.0808 3.96457 15.795 2.17203 14.9034C1.9681 14.8019 1.71899 14.8823 1.61576 15.0828C1.51258 15.2834 1.59429 15.5283 1.79827 15.6298C3.70248 16.5769 5.85963 16.9049 7.98422 16.5537L7.68606 16.9845C7.49786 17.2565 7.69977 17.6206 8.0279 17.6206C8.16032 17.6206 8.29041 17.5582 8.37051 17.4425C9.32435 16.0644 9.29413 16.1282 9.31793 16.0219C9.34836 15.8866 9.30655 15.7332 9.18877 15.6303Z"
              fill="#90A3BF" />
          </svg>
          <span> {{ car.gear_shifter }} </span>
        </div>
        <div class="type year">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74999V2C8.74999 1.59 8.40999 1.25 7.99999 1.25C7.58999 1.25 7.24999 1.59 7.24999 2V3.56C4.54999 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z"
              fill="#90A3BF" />
            <path
              d="M20 9.84H4C3.45 9.84 3 10.29 3 10.84V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V10.84C21 10.29 20.55 9.84 20 9.84ZM9.21 18.21C9.11 18.3 9 18.37 8.88 18.42C8.76 18.47 8.63 18.5 8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C8 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 8 16.63 8.12 16.58C8.36 16.48 8.64 16.48 8.88 16.58C9 16.63 9.11 16.7 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.42 14.38C9.37 14.5 9.3 14.61 9.21 14.71C9.11 14.8 9 14.87 8.88 14.92C8.76 14.97 8.63 15 8.5 15C8.37 15 8.24 14.97 8.12 14.92C8 14.87 7.89 14.8 7.79 14.71C7.7 14.61 7.63 14.5 7.58 14.38C7.53 14.26 7.5 14.13 7.5 14C7.5 13.87 7.53 13.74 7.58 13.62C7.63 13.5 7.7 13.39 7.79 13.29C7.89 13.2 8 13.13 8.12 13.08C8.36 12.98 8.64 12.98 8.88 13.08C9 13.13 9.11 13.2 9.21 13.29C9.3 13.39 9.37 13.5 9.42 13.62C9.47 13.74 9.5 13.87 9.5 14C9.5 14.13 9.47 14.26 9.42 14.38ZM12.71 14.71C12.61 14.8 12.5 14.87 12.38 14.92C12.26 14.97 12.13 15 12 15C11.87 15 11.74 14.97 11.62 14.92C11.5 14.87 11.39 14.8 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.39 13.2 11.5 13.13 11.62 13.08C11.86 12.97 12.14 12.97 12.38 13.08C12.5 13.13 12.61 13.2 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71Z"
              fill="#90A3BF" />
          </svg>
          <span> {{ car.year }} </span>
        </div>
      </div>
      <div class="btn-container">

        <button @click="goToCar(car.id)">
          {{ $t('buy') }}
          <!-- <nuxt-link class="w-100" :to="localePath({path:'/car',query:{id:car.id}})">   </nuxt-link> -->
        </button>
        <div @click="addFavFunc(car.id, car.is_fav)" class="icon heart">
          <!-- <img src="~/assets/images/heart.png" /> -->
          <svg :class="{ 'active': favBtn }" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 
  20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 
  19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401
   4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z" fill="#90A3BF" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast();
const props = defineProps(["car", "myFunction", "check"]);
import axios from 'axios';
const { locale } = useI18n();
const localePath = useLocalePath();

const router = useRouter();

import Cookies from "js-cookie";
const tokenCookie = Cookies.get("token");

let value1 = ref(" تم الاضافة الي قائمة المفضلات ");
let value2 = ref(" تم الحذف من قائمة المفضلات ");

let favBtn = ref(false);


if (locale.value == "ar") {
  value1.value = "تم الاضافة الي قائمة المفضلات ";
  value2.value = "تم الحذف من قائمة المفضلات ";

} else {
  value1.value = 'Added to Favorites list';
  value2.value = "Removed from Favorites list";

}


onMounted(() => {
  setTimeout(() => {
    favBtn.value = props.car.is_fav ? true : false;
  }, 1000);
});

const addFavFunc = async (id, fav) => {
  let formBody = new FormData();
  formBody.append("car_id", id);
  let result = await axios.post(
    `${getUrl()}/${tokenCookie ? 'add-favorite-withauth' : 'add-favorite-withoutauth'}`,
    { car_id: id },
    {
      headers: {
        "Content-Language": `${locale.value}`,
        Authorization: `Bearer ${tokenCookie}`,
      },
    }
  );
  if (result.status >= 200) {
    if (props.check) {
      props.myFunction();
    }
    // props.myFunction();
    favBtn.value = !favBtn.value;
    toast.success(favBtn.value ? value1.value : value2.value, {
      position: locale.value == 'ar' ? "top-right" : "top-left",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      class: 'toast-container',
      rtl: locale.value == 'ar' ? true : false
    });

  }
}

const goToCar = (id) => {
  const queryParams = {
    id: id,
  };
  const url = "/car";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

</script>

<style lang="scss" scoped></style>