<template>
    <div>
        <div v-if="offerArr" class="container offer-page">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text">{{ offerArr.title }}</h4>
                <p> {{ offerArr.description }} </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="main-offer-img">
            <img :src="image" alt="">
             <div class="overlay"></div>
            </div>

            <div class="cars">
            <div class="head">
             <h5> {{ $t('carOffer') }} </h5>
            </div>
             <div class="row">
              <div v-for="item in cars" class="col-12 col-xl-3 col-lg-3 col-md-6 my-3">
               <CarCard :car="item" /> 
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
let route = useRoute();
let id = route.query.id;

let cars = ref([]);

let image = ref('');

let pending = ref(false);
let offerArr = ref([]);
const getOfferData = async ()=>{
    pending.value = true;
  let result = await axios.get(`${getUrl()}/offer/show/${id}`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

if(result.status == 200){
    pending.value = false;
    offerArr.value = result.data.data.Offers;
    cars.value = result.data.data.RelatedCars;
    image.value = result.data.data.fullPathImage
}

}

onMounted(() => {
    getOfferData();
});

let items = ref([
    {
        title: locale.value == "ar" ? 'الرئيسية' : 'home',
        disabled: false,
      class:"breadcrumbs-text",
        href: '/',
    },
    {
        title: locale.value == "ar" ? 'العروض' : 'offers',
        disabled: false,
      class:"breadcrumbs-text",
        href: 'offers',
    },
    {
        title: locale.value == "ar" ? 'العرض' : 'offer',
        disabled: true,
        class:"breadcrumbs-dark",
    },
]);

</script>

<style lang="scss" scoped></style>