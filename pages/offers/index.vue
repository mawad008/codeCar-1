<template>
    <div>
        <div class="container offers-container">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> العروض </h4>
                <p>
                    هذا النص هو مثال حي يستبدل في نفش المساحة
                </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="row">
                <div v-for="item in offersArr.offers" class="col-12 col-xl-6 col-lg-6 my-2">
                    <div class="offer-box">
                        <div class="image" :style="{backgroundImage: 'url(' +( item.image  ?  item.image :'https://placehold.co/600'   ) + ')' }"></div>
                        <div class="text w-100">
                            <h6>{{ item.title }}</h6>
                            <p> {{ item.description }} </p>
                            <div class="det">
                                <div @click="goToOfferPage(item.id , item.title)" class="d-flex align-items-center gap-2">
                                    <span>تفاصيل العرض</span>
                                    <i class="fa-solid fa-arrow-left"></i>

                                </div>
                                <img src="~/assets/images/special-offer.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';
const localePath = useLocalePath();
const { locale } = useI18n();

const router = useRouter();

let offersArr = ref([]);
const getOffersData = async ()=>{
  let result = await axios.get(`${getUrl()}/offer`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

if(result.status == 200){
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
        title: 'الرئيسية',
        disabled: true,
        href: '/',
    },
    {
        title: 'العروض',
        disabled: false,
        href: 'offers',
    },
]);
</script>

<style lang="scss" scoped></style>