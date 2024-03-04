<template>
    <div style="">
        <div class="brands market">
          <div
            class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
          >
            <h4 class="heading-text"> {{ $t('market') }} </h4>
            <p>
              {{ desc }}
            </p>

                <v-breadcrumbs :items="items">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
              </template>
            </v-breadcrumbs>
          </div>

          <div class="container">
            <div class="row">
              <div v-for="item in brandsArr.brands" class="col-6 col-xl-2 col-lg-2 col-md-3 ">
                <nuxt-link :to="localePath({path:'/cars', query:{id:item.id}})" class="box">
              <div class="image" :style="{backgroundImage: 'url(' +( item.cover  ?  item.cover :'https://placehold.co/600'   ) + ')' }">
                <!-- <img src="~/assets/images/brand1.png" alt=""> -->
              </div>
              <span class="name"> {{ item.name }} </span>
              <span class="num"> {{ item.count_cars_count }} {{ $t('car') }} </span>
            </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <Loader v-if="pending"></Loader> 
    </div>
</template>

<script setup>
import axios from "axios";
const localePath = useLocalePath();
let { locale } = useI18n();

let pending = ref(false);
let brandsArr = ref([]);

let desc = ref('');
const getDesc = async () => {
  let result = await axios.get(`${getUrl()}/allsettings`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  desc.value = result.data.data.exhibitionDescription;
}
const getBrands = async () => {
  pending.value = true;
  let result = await axios.get(`${getUrl()}/brand`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if (result.status == 200) {
    brandsArr.value = result.data.data;
    pending.value = false;
  }
 
};


onMounted(() => {
  getDesc();
  getBrands();
});


useHead({
  title: locale.value == 'ar' ? 'السيارات' : 'brands'
});

let items = ref([
    {
        title: locale.value == "ar" ? 'الرئيسية' : 'home',
        disabled: false,
    class:"breadcrumbs-text",
        href: '/',
    },
    {
        title: locale.value == "ar" ? 'المعرض' : 'market',
        disabled: true,
        class:"breadcrumbs-dark",
        href: 'market',
    },
]);

</script>

<style lang="scss" scoped>


</style>