<template>
    <div>
        <div class="container offers-container">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> {{ $t("offers") }} </h4>
                <p>
                  {{ offersArr.description }}
                </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="row">
                <div v-for="item in offersArr.offers" class="col-12 col-xl-6 col-lg-6 my-2">
                    <div class="offer-box">
                        <div class="image">
                          <img  :src="item.image" />
                        </div>
                        <div class="text w-100">
                            <h6>{{ item.title }}</h6>
                            <p> {{ item.description }} </p>
                            <div class="det">
                                <div @click="goToOfferPage(item.id , item.title)" class="d-flex align-items-center gap-2">
                                    <span>{{ $t("offersDetails") }}</span>
                                    <i class="fa-solid fa-arrow-left arrow-icon"></i>

                                </div>
                                <img src="~/assets/images/special-offer.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <Loader v-if="pending"></Loader> 

    </div>
</template>

<script setup>

import axios from 'axios';
const localePath = useLocalePath();
const { locale } = useI18n();

const router = useRouter();

let pending = ref(false);

let offersArr = ref([]);
const getOffersData = async ()=>{
    pending.value = true;
  let result = await axios.get(`${getUrl()}/offer`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

if(result.status == 200){
    pending.value = false;
    offersArr.value = result.data.data;
}

}



const goToOfferPage = (id , name) =>{
    const queryParams = {
        id: id,
        name: name,
    };
  const url = "/offer";
  
  const updatedRoute = {
      path: url,
      query: {
          ...queryParams,
        },
    };
    
    const fullLocalePath = localePath(updatedRoute);
    router.push(fullLocalePath);
}

onMounted(() => {
    getOffersData();
})
let items = ref([
    {
        title: locale.value == 'ar' ? 'الرئيسية' : 'home',
        disabled: true,
        href: '/',
    },
    {
        title: locale.value == 'ar' ? 'العروض' : 'offers',
        disabled: false,
        href: 'offers',
    },
]);
</script>

<style lang="scss" scoped></style>