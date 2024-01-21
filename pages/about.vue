<template>
    <div>
        <div v-if="aboutArr" class="container about-us">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> {{ $t("about") }} </h4>
                <p>{{ aboutArr.description }}</p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="about-container">
                <div class="row">
                    <div class="col-12 col-xl-7 col-lg-7 order-2 order-xl-1 order-lg-1">
                        <div class="text-container">
                            <div class="text">
                                <h6>عننا !</h6>
                                <div></div>
                                <span> {{ aboutArr.description_card }} </span>
                            </div>

                            <div class="icons">
                                <div class="icon">
                                    <!-- <img src="~/assets/images/target_802036 1.svg" alt=""> -->
                                    <img :src="aboutArr.icon_card_right" alt="">
                                    <h6>{{ aboutArr.text_card_right }}</h6>
                                    <span>{{ aboutArr.card_right }}</span>
                                </div>
                                <div class="icon">
                                    <!-- <img src="~/assets/images/starfish_515990 1.svg" /> -->
                                    <img :src="aboutArr.icon_card_left" alt="">

                                    <h6>{{ aboutArr.text_card_left }}</h6>
                                    <span>{{ aboutArr.card_left }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-5 col-lg-5 order-1 order-xl-2 order-lg-2">
                        <div class="image">
                        <img :src="aboutArr.image" alt="">
                            <div class="overlay"></div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="faqs">
            <h5> {{ $t("faq") }}</h5>
                <v-expansion-panels class="row justify-content-start"   multiple  variant="popout">
                    <div v-for="item in aboutArr.faq" :key="i" class="col-12 col-xl-6 col-lg-6 my-2">
                        <v-expansion-panel >

                            <template v-slot:title>
                                <span>{{ item.question }}</span>
                            </template>
                            <template v-slot:text>
                                <span> {{ item.answer }}</span>
                            </template>
                        </v-expansion-panel>

                    </div>
                </v-expansion-panels>
            </div>
        </div>
    <Loader v-if="pending"></Loader>

    </div>
</template>

<script setup>
import axios from 'axios';
const localePath = useLocalePath();
const { locale } = useI18n();

const router = useRouter();


let pending = ref(false);
let aboutArr = ref();
const getAboutData = async ()=>{
    pending.value = true;
  let result = await axios.get(`${getUrl()}/about`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

if(result.status == 200){
    pending.value = false;
    aboutArr.value = result.data.data;
}

}

onMounted(() => {
    getAboutData();
});

let items = ref([
    {
        title: locale.value == 'ar' ? 'الرئيسية' : 'home',
        disabled: true,
        href: '/',
    },
    {
        title: locale.value == 'ar' ? 'من نحن' : 'about us',
        disabled: false,
        href: 'about',
    },
]);
</script>

<style lang="scss" scoped></style>