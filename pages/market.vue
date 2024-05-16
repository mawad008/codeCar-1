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
            
              <div v-for="item in brandsArr" class="col-6 col-xl-2 col-lg-2 col-md-3 ">
                <nuxt-link :to="localePath({path:'/cars', query:{id:item.id}})" class="box">
              <div class="image" :style="{backgroundImage: 'url(' +( item.cover  ?  item.cover :'https://placehold.co/600'   ) + ')' }">
                <!-- <img src="~/assets/images/brand1.png" alt=""> -->
              </div>
              <span class="name"> {{ item.name }} </span>
              <span class="num"> {{ item.count_cars_count }} {{ $t('car') }} </span>
            </nuxt-link>
              </div>
              <div class="d-flex align-items-center justify-content-center mt-5">
              <v-progress-circular
                  v-if="pending2"
                  indeterminate
                  :size="45"
                  :width="6"
                  color="#dcb63b"
                ></v-progress-circular>
              
              </div>
              <div v-if="page < pageCount" class=" d-flex align-items-center justify-content-center mt-4">
       <button @click="loadMore()" class="load-more-btn">{{ $t('more') }}</button>
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
let pending2 = ref(false);
let brandsArr = ref([]);
let total = ref();
let per_page = ref();
let desc = ref('');
let itemsPerPage = ref();
const getDesc = async () => {
  let result = await axios.get(`${getUrl()}/allsettings`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  desc.value = result.data.data.exhibitionDescription;
}

let page = ref(1);

const filterCars = async () => {
  pending.value = true;
  brandsArr.value = [];
  let result = await axios.get(`${getUrl()}/brand`, {
    params: {
      page: page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    pending.value = false;
    brandsArr.value = result.data.data.brands.original.data;
    itemsPerPage.value = result.data.data.brands.original.meta.per_page;
    per_page.value = result.data.data.brands.original.meta.per_page;
    total.value = result.data.data.brands.original.meta.total;
    if (result.data.data.length < 1) {
      brandsArr.value = [];
    }
    if (brandsArr.value.length < 1) {
      pending.value = true;
    } else {
      pending.value = false;
    }
  }
};
const filterCar2 = async () => {
  pending2.value = true;
  // brandsArr.value = [];
  let result = await axios.get(`${getUrl()}/brand`, {
    params: {
      page: page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    pending2.value = false;
    brandsArr.value = [...brandsArr.value, ...result.data.data.brands.original.data];
    itemsPerPage.value = result.data.data.brands.original.meta.per_page;
    per_page.value = result.data.data.brands.original.meta.per_page;
    total.value = result.data.data.brands.original.meta.total;
    if (result.data.data.length < 1) {
      brandsArr.value = [];
    }
    if (brandsArr.value.length < 1) {
      pending2.value = true;
    } else {
      pending2.value = false;
    }
  }
};




const pageCount = computed(() => {
  return Math.ceil(total.value / per_page.value);
});

const loadMore = async () => {
  if (page.value < pageCount.value) {
    page.value++;
    await filterCar2();
  }
};


onMounted(() => {
  getDesc();
  // getBrands();
  filterCars();
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