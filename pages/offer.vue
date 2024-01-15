<template>
    <div>
        <div v-if="offerArr" class="container offer-page">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text">{{ offerArr.title }}</h4>
                <p> {{ offerArr.description }} </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="main-offer-img">
             <div class="overlay"></div>
            </div>

            <div class="cars">
            <div class="head">
             <h5>سيارات العرض</h5>
            </div>
             <div class="row">
              <div v-for="item in offerArr.cars" class="col-12 col-xl-3 col-lg-3 col-md-6 my-3">
               <CarCard/> 
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
}

}

onMounted(() => {
    getOfferData();
})

let items = ref([
    {
        title: 'الرئيسية',
        disabled: true,
        href: '/',
    },
    {
        title: 'العروض',
        disabled: true,
        href: 'offers',
    },
    {
        title: 'العرض',
        disabled: true,
    },
]);

</script>

<style lang="scss" scoped></style>