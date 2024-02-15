<template>
    <div>
        <div class="container policy-container">
      <h3>{{ $t('policyy3') }}</h3>
      <div class="policy-page" >
        <div class="text">
         <p>
           {{ generalArr.terms_and_conditions }}
         </p>
        </div>
      
      </div>

      
    </div>

    <Loader v-if="pending"></Loader> 

    </div>
</template>



<script setup>
import axios from "axios";
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
let generalArr = ref([]);
let pending = ref(true);
const getGeneral = async () => {
  let result = await axios.get(`${getUrl()}/terms-condition-privacy`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if(result.status == 200){
    pending.value = false;
  }
  generalArr.value = result.data.data;
};


useHead({
  title: locale.value == 'ar' ? 'الشروط والاحكام' : 'terms & conditions'
});
onMounted(()=>{
  getGeneral();
});
</script>


<style>

</style>