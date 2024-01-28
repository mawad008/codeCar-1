<template>
    <div>
        <div class="container d-flex align-items-center justify-content-center">
      <div class="search-section mobile">
        <div class="select">
          <span class="type"> {{ $t('kind') }} </span>
          <v-autocomplete
            chips
            :items="carBody"
            item-title="name"
            item-value="value"
            variant="underlined"
            v-model="selectedBody"
            :label="$t('carStat')"
          ></v-autocomplete>
        </div>
        <div class="select">
          <span class="type"> {{ $t('brand') }} </span>
          <v-autocomplete
            clearable
            chips
            v-model="selectedBrand"
            :items="brands"
            item-title="title"
            item-value="id"
            variant="underlined"
            :label="$t('search1')"
          ></v-autocomplete>
        </div>
        <div class="select">
          <span class="type"> {{ $t('model') }} </span>
          <v-autocomplete
            chips
            v-model="selectedmodel"
            :items="selectedBrand ? categArr[0].models : '' "
            item-title="name"
            item-value="id"
            variant="underlined"
            :label="$t('search2')"
          ></v-autocomplete>
        </div>
        <nuxt-link :to="localePath({path:'/cars', query:{type:selectedBody , id:selectedBrand , model: selectedmodel}})">
        <button class="search">{{ $t('searchh') }}</button>
        </nuxt-link>
      </div>
    </div>
    </div>
</template>


<script setup>
import axios from "axios";
const localePath = useLocalePath();

let { locale } = useI18n();

let carBody = ref([
  {
    name: locale.value == 'ar' ? "مستعمل" : 'used',
    value: 0,
  },
  {
    name: locale.value == 'ar' ? "جديد" : 'new',
    value: 1,
  },
]);

let selectedBrand = ref();
let selectedmodel = ref();
let selectedBody = ref();

let optionsCars = ref([]);
let brands = ref([]);

const getOptions = async () => {
  let result = await axios.get(`${getUrl()}/car-option`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  optionsCars.value = result.data.data;
  brands.value = result.data.data.brands;
};


const categArr = computed(()=>{
  if(optionsCars.value.brands){
    return optionsCars.value.brands.filter((ele)=>{
      return selectedBrand.value == ele.id
    });
  }
});


onMounted(() => {
    getOptions();  
});

</script>


<style>

</style>