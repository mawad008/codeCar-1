<template>
    <div>
        <div class="container policy-container">
      <h3>{{ $t('policyy2') }}</h3>
      <div class="policy-page" >
        <div class="text">
         <p v-html="generalArr.privacy">
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
  title: locale.value == 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'
});
onMounted(()=>{
  getGeneral();
});
</script>


<style lang="scss">
.policy-container {
    margin-top: 75px;
    margin-bottom: 120px;
  h3 {
    text-align: center;
    margin-bottom: 70px;
    font-weight: 700;
  }
  .policy-page {
    border-radius: 16px;
    background: #fff;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h5 {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      color: #2d3a4a;
      margin-bottom: 16px;
    }
    p {
      color: #5a7184;
      font-size: 16px;
      font-weight: 400;
      line-height: 48px;
    }
  }
}

@media(max-width:760px){
  .policy-container{
    margin-top: 48px !important;
    h3{
      margin-bottom: 25px !important;
    }
  }
}
</style>
