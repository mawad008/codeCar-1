<template>
    <div>
        <div class="news-container container">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> {{ $t("news") }}  </h4>
                <p>
                  {{ newsArr.description }}
                </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="row">
                <div v-for="item in newsArr.news?.data" class="col-12 col-xl-4 col-lg-4 col-md-6 my-2">
                    <div class="box">
                    <img :src="item.main_image" alt="">
                        <div class="overlay">
                            <div class="w-100">
                                <div class=" w-100">
                                    <div class="date">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            fill="none">
                                            <g clip-path="url(#clip0_101_19947)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M0 8.99979C0 13.9623 4.03748 17.9998 9 17.9998C13.9625 17.9998 18.0001 13.9623 18.0001 8.99979C18.0001
                                                     4.03728 13.9626 -0.000244141 9.00004 -0.000244141C4.03752 -0.000244141 0 4.03728 0 8.99979ZM11.4263 
                                                     12.3358L8.54511 9.45436C8.42569 9.33381 8.35745 9.1704 8.35745 8.99983V3.17763C8.35745 2.82259 8.64559 2.53484 
                                                     9.00004 2.53484C9.35452 2.53484 9.64262 2.82259 9.64262 3.17763V8.73366L12.3362 11.4267C12.5864 11.6779 12.5864 
                                                     12.0848 12.3362 12.3358C12.2111 12.4616 12.0462 12.5244 11.8813 12.5244C11.7163 12.5243 11.5533 12.4616 11.4263 
                                                     12.3358Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_101_19947">
                                                    <rect width="18" height="18" rx="9" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>{{ item.created_at }}</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                    <!-- <h4>{{ item.title }}</h4> -->
                                    <h4>{{ `${item.title.substring(0 , 40)} ...` }}</h4>
                                    <!-- <h4>{{ item.title.length }}</h4> -->
                                      <div @click="goToNewPage(item.id , item.title) , store.state.newActive = true" class="icon" >
                                      <i class="fa-solid fa-arrow-left arrow-icon"></i>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <v-pagination
      v-model="page"
      :length="pageCount"
      :total-visible="7"
    ></v-pagination>
            </div>
        </div>

        <Loader v-if="pending"></Loader> 
        
    </div>
</template>

<script setup>
import axios from 'axios';
const localePath = useLocalePath();
const { locale } = useI18n();
import { useStore } from "~/store";
let store = useStore;
const router = useRouter();

let pending = ref(false);
let page = ref(1);
let newsArr = ref([]);
let total = ref();
let itemsPerPage = ref();
const getNewsData = async ()=>{
    pending.value = true;
  let result = await axios.get(`${getUrl()}/cars-news`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
    params:{
        page: page.value
    }
  });

if(result.status == 200){
    pending.value = false;
    newsArr.value = result.data.data;
    total.value = result.data.data.news?.total;
    itemsPerPage.value = result.data.data?.news?.per_page;

}

}

const pageCount = computed(() => {
  return Math.ceil(total.value / itemsPerPage.value);
});

watch(()=> page.value , (val)=>{
    if(val){
        getNewsData(); 
    }
})

const goToNewPage = (id , name) =>{
    const queryParams = {
        id: id,
        name: name,
    };
  const url = "/new";
  
  const updatedRoute = {
      path: url,
      query: {
          ...queryParams,
        },
    };
    
    const fullLocalePath = localePath(updatedRoute);
    router.push(fullLocalePath);
}


useHead({
  title: locale.value == 'ar' ? 'اخبار السيارات' : 'news'
});

let items = ref([
    {
        title: locale.value == 'ar' ? 'الرئيسية' : 'home',
        disabled: false,
    class:"breadcrumbs-text",
        href: '/',
    },
    {
        title: locale.value == 'ar' ? 'اخبار السيارات' : 'news',
        disabled: true,
        class:"breadcrumbs-dark",
        href: 'news',
    },
]);
onMounted(() => {
    getNewsData();
})

</script>

<style lang="scss">
 html[dir="rtl"]{
    .v-pagination__prev , .v-pagination__next{
        transform: scaleX(-1);
    }
 }
</style>