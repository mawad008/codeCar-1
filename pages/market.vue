<template>
    <div style="">
        <div class="brands">
          <div
            class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
          >
            <h4 class="heading-text"> المعرض </h4>
            <p>
              {{ brandsArr.description }}
            </p>

                <v-breadcrumbs :items="items">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-left"></v-icon>
              </template>
            </v-breadcrumbs>
          </div>

          <div class="container">
            <div class="row">
              <div v-for="item in brandsArr.brands" class="col-6 col-xl-2 col-lg-2 col-md-3 my-4">
                <div class="box">
              <div class="image" :style="{backgroundImage: 'url(' +( item.cover  ?  item.cover :'https://placehold.co/600'   ) + ')' }">
                <!-- <img src="~/assets/images/brand1.png" alt=""> -->
              </div>
              <span class="name"> {{ item.name }} </span>
              <span class="num"> {{ item.count_cars_count }} سيارة </span>
            </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
</template>

<script setup>
import axios from "axios";
const localePath = useLocalePath();
let { locale } = useI18n();


let brandsArr = ref([]);
const getBrands = async () => {
  let result = await axios.get(`${getUrl()}/brand`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if (result.status == 200) {
    brandsArr.value = result.data.data;
  }
 
};


onMounted(() => {
  getBrands();
})

let items = ref([
    {
        title: 'الرئيسية',
        disabled: true,
        href: '/',
    },
    {
        title: 'المعرض',
        disabled: false,
        href: 'market',
    },
]);

</script>

<style lang="scss" scoped>


</style>