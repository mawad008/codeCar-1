<template>
    <div>
        <div v-if="newsArr" class="container single-new-container">
            <div v-if="newsArr.news" class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text">{{ newsArr.news.title }}</h4>

                <div class="date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clip-path="url(#clip0_148_13371)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 8.99985C0 13.9624 4.03748 17.9999 9 17.9999C13.9625 17.9999 
        18.0001 13.9624 18.0001 8.99985C18.0001 4.03734 13.9626 -0.000183105 9.00004 -0.000183105C4.03752 -0.000183105
         0 4.03734 0 8.99985ZM11.4263 12.3358L8.54511 9.45442C8.42569 9.33387 8.35745 9.17047 8.35745 8.99989V3.1777C8.35745
          2.82265 8.64559 2.5349 9.00004 2.5349C9.35452 2.5349 9.64262 2.82265 9.64262 3.1777V8.73372L12.3362 11.4267C12.5864
           11.6779 12.5864 12.0848 12.3362 12.3358C12.2111 12.4617 12.0462 12.5244 11.8813 12.5244C11.7163 12.5244 11.5533 12.4617 11.4263 12.3358Z"
                                fill="#90A3BF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_148_13371">
                                <rect width="18" height="18" rx="9" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>{{ newsArr.news.created_at }}</span>
                </div>
                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="single-new">
                <div class="row justify-content-center justify-content-xl-between justify-content-lg-between">
                    <div class="col-12 col-xl-7 col-lg-7">
                        <div v-if="newsArr.news" class="img-box">
                            <div class="image" >
                            <img :src="newsArr.news.main_image" alt="">
                                <div class="overlay"></div>
                            </div>

                            <div class="text" v-html="newsArr.news.description ">
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4 col-lg-4">
                        <div class="news-box">
                            <h5>{{ $t('newss1') }}</h5>
                            <div class="boxes">
                                <div v-for="item in newsArr.latest" class="box my-2">
                                    <div class="image">
                                     <img :src="item.main_image" alt="">
                                    </div>
                                    <div class="text w-100">
                                        <h6>{{ item.title }}</h6>
                                        <div class="d-flex w-100 align-items-center justify-content-between">
                                            <div class="date ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <g clip-path="url(#clip0_148_13397)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M-0.000976562 7.99985C-0.000976562 12.411 3.5879 15.9999 7.99902 15.9999C12.4101 15.9999 15.9991 12.411 15.9991 7.99985C15.9991 3.58872 12.4102 -0.000183105 7.99905 -0.000183105C3.58793 -0.000183105 -0.000976562 3.58872 -0.000976562 7.99985ZM10.1558 10.9652L7.59468 8.40391C7.48852 8.29675 7.42787 8.1515 7.42787 7.99988V2.8246C7.42787 2.509 7.68399 2.25322 7.99905 2.25322C8.31415 2.25322 8.57024 2.509 8.57024 2.8246V7.76329L10.9645 10.1571C11.1869 10.3803 11.1869 10.7421 10.9645 10.9652C10.8533 11.077 10.7067 11.1328 10.5601 11.1328C10.4136 11.1328 10.2686 11.077 10.1558 10.9652Z"
                                                            fill="#90A3BF" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_148_13397">
                                                            <rect x="-0.000976562" width="16" height="16" rx="8"
                                                                fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>{{ item.created_at }}</span>
                                            </div>
                                            <div @click="id = item.id , getNewsData()" class="icon">
                                                <i class="fa-solid fa-arrow-left arrow-icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="news-box">
                            <h5>{{ $t('newss2') }}</h5>
                            <div class="icons">
                             <button @click="copyToClipboard();" class="iconn">
                              <img v-if="check" src="~/assets/images/share1.svg" alt="">
                               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                              viewBox="0 0 448 512">
                              <path
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg> 
                             </button>
                             <a v-if="contactArr.instagram" :href="`https://www.instagram.com/?url=${routee}`" target="_blank" class="iconn">
                              <img src="~/assets/images/share2.svg" alt="">
                             </a>
                             <a v-if="contactArr.facebook" :href="`https://www.facebook.com/sharer/sharer.php?${routee}`" target="_blank" class="iconn">
                              <img src="~/assets/images/share3.svg" alt="">
                             </a>
                             <a v-if="contactArr.snapchat" :href="`https://www.snapchat.com/share?url=${routee}`" target="_blank" class="iconn">
                              <img src="~/assets/images/share4.svg" alt="">
                             </a>
                             <a v-if="contactArr.twitter" :href="`https://twitter.com/intent/tweet?url=${routee}`" target="_blank" class="iconn">
                              <img src="~/assets/images/share5.svg" alt="">
                             </a>
                             <a v-if="contactArr.phone" :href="`https://wa.me/?text=${routee}/`" target="_blank" class="iconn">
                              <img src="~/assets/images/share6.svg" alt="">
                             </a>
                            </div>
                        </div>
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
const router = useRouter();
let id = ref(route.query.id);

let pending = ref(false);

let newsArr = ref([]);
const getNewsData = async ()=>{
    pending.value = true;
  let result = await axios.get(`${getUrl()}/news/show/${id.value}`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

if(result.status == 200){
    pending.value = false;
    newsArr.value = result.data.data;
}

}


let routee = ref(route.fullPath);
if (process.client) {
    routee.value = window.location.href;
}
let check = ref(true);

function copyToClipboard() {
    /* Copy the text */
    if (process.client) {
        check.value = false;
        routee.value = window.location.href;
        const clipBoard = navigator.clipboard;
        
        clipBoard.writeText(routee.value).then(() => {
        });
       
        // console.log(window.location.href);
        setTimeout(() => {
            check.value = true;
        }, 1000);
    }

}

const contactArr = ref([]);
const getContactData =  async()=>{
    let result = await axios.get(`${getUrl()}/contact-us`,{
        headers:{
            "Content-Language": `${locale.value}`,
        }
    });
    if(result.status == 200){
     contactArr.value = result.data.data;
    }
}

watch(id, (newId) => {
  // Update the route with the new id
  router.push({ query: { id: newId } })
})

let items = ref([
    {
        title: locale.value == 'ar' ? 'الرئيسية' : 'home',
        disabled: false,
        class:"breadcrumbs-text",
        href: '/',
    },
    {
        title: locale.value == 'ar' ? 'اخبار السيارات' : 'car news',
        disabled: true,
    //    class:"breadcrumbs-text",
        href: 'news',
    },
    {
        title: locale.value == 'ar' ? 'الخبر' : 'new',
        disabled: true,
        class:"breadcrumbs-dark",
    },
]);

onMounted(() => {
    getNewsData();  
    getContactData();
})
</script>

<style lang="scss" scoped></style>