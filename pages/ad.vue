<template>
    <div>
        <div class="container advertisement-container">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text">{{ $t('ad') }}</h4>
                <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="ad-container">
                <div class="row" :class="{'d-none': adNavBtn == 3 }">
                    <div class="col-12 col-xl-5 col-lg-5">
                        <div class="main-pagination-container">
                            <div class="pagination-container">
                                <div class="icon" :class="{ active: adNavBtn == 1 }">
                                    <img class="def" src="@/assets/images/calc-icon4.svg" alt="" />
                                    <img class="active" src="@/assets/images/calc-icon-active4.svg" alt="" />
                                </div>
                                <div class="icon" :class="{ active: adNavBtn == 2 }">
                                    <img class="def" src="@/assets/images/calc-icon2.svg" alt="" />
                                    <img class="active" src="@/assets/images/calc-icon-active2.svg" alt="" />
                                </div>

                            </div>
                            <div class="content-pagination">
                                <div>
                                    <h5 :class="{ active: adNavBtn == 1 }">
                                        {{ $t('carDet') }}                                    </h5>
                                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                </div>
                                <div>
                                    <h5 :class="{ active: adNavBtn == 2 }">
                                        {{ $t("carImgs") }}
                                    </h5>
                                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                </div>
                            </div>
                            <div class="pagination-container">
                                <div class="dot" :class="{ active: adNavBtn == 1 }">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <div class="dot" :class="{ active: adNavBtn == 2 }">
                                    <i class="fa-solid fa-check"></i>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-xl-7 col-lg-7">
                        <div class="ad-content">
                            <div v-if="adNavBtn == 1">
                                <h5> {{ $t('namee') }} </h5>
                                <div class="input">
                                    <label for="">
                                     {{ $t('carName') }}
                                    </label>
                                    <input type="text" placeholder="هيونداي ستاندر 2024">
                                </div>
                                <div class="input">
                                    <label for="">
                                        <span> {{ $t('car_det') }} </span>
                                    </label>
                                    <textarea v-model="inputValue" :maxlength="50" name="" id="" cols="30"
                                        rows="10"></textarea>
                                    <div class="num">
                                        <span> 50 / {{ inputValue.length }} </span>
                                    </div>
                                </div>
                                <div class="det">
                                    <h5> {{ $t('carDet') }} </h5>
                                    <div class="half row">
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('carBrand') }}</label>
                                                <Dropdown v-model="selectedCountry" :options="countries" filter
                                                    optionLabel="name" placeholder="مثال : تويوتا" class="">

                                                    <template #option="slotProps">
                                                        <div class="flex align-items-center">
                                                            <div>{{ slotProps.option.name }}</div>
                                                        </div>
                                                    </template>
                                                </Dropdown>
                                            </div>

                                        </div>
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('carName') }}</label>
                                                <Dropdown v-model="selectedCountry" :options="countries" filter
                                                    optionLabel="name" placeholder="كامري" class="">

                                                    <template #option="slotProps">
                                                        <div class="flex align-items-center">
                                                            <div>{{ slotProps.option.name }}</div>
                                                        </div>
                                                    </template>
                                                </Dropdown>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="half row">
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('carModel') }}</label>
                                                <Dropdown v-model="selectedCountry" :options="countries" filter
                                                    optionLabel="name" placeholder="مثال : 2024" class="">

                                                    <template #option="slotProps">
                                                        <div class="flex align-items-center">
                                                            <div>{{ slotProps.option.name }}</div>
                                                        </div>
                                                    </template>
                                                </Dropdown>
                                            </div>

                                        </div>
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('carStat') }}</label>
                                                <input type="text" :placeholder="$t('example1')">
                                            </div>

                                        </div>

                                    </div>
                                    <div class="half row">
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">
                                                {{ $t('engine') }}
                                                
                                                </label>
                                                <input type="text" :placeholder="$t('example2')">

                                            </div>

                                        </div>
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('road') }}</label>
                                                <input type="text" :placeholder="$t('example3')">
                                            </div>

                                        </div>

                                    </div>
                                    <div class="half row">
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('gaz') }}</label>
                                                <input type="text" :placeholder="$t('example4')">
                                            </div>

                                        </div>
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('tra') }}</label>
                                                <input type="text" :placeholder="$t('example5')">
                                            </div>

                                        </div>

                                    </div>
                                    <div class="half row">
                                        <div class="col-12 col-l-6 col-lg-6">
                                            <div class="input">
                                                <label for="">{{ $t('color') }}</label>
                                                <Dropdown v-model="selectedCountry" :options="countries" filter
                                                    optionLabel="name" :placeholder="$t('example6')" class="">

                                                    <template #option="slotProps">
                                                        <div class="flex align-items-center">
                                                            <div>{{ slotProps.option.name }}</div>
                                                        </div>
                                                    </template>
                                                </Dropdown>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="price">
                                        <h5> {{ $t('price') }} </h5>
                                        <div class="half row">
                                            <div class="col-12 col-l-6 col-lg-6">
                                                <div class="input">
                                                    <label for="">{{ $t('carPrice') }}</label>
                                                    <input type="number" min="1" placeholder="100,000">
                                                </div>

                                            </div>
                                            <div class="col-12 col-l-6 col-lg-6">
                                                <div class="input">
                                                    <label for="">{{ $t('disc') }}</label>
                                                    <input type="number" min="1" placeholder="100,000">
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="main-btn d-flex justify-content-end">
                                    <button @click="adNavBtn = 2">{{ $t('next') }}</button>
                                </div>

                            </div>

                            <div v-if="adNavBtn == 2" class="images">
                                <h5>{{ $t('mainImgs') }}</h5>
                                <div>
                                    <label for="big-img" class="image big">
                                        <div class="img-icon">
                                            <img src="~/assets/images/gallery-add.png" />
                                            <span>
                                            {{ $t('img1') }}
                                            </span>
                                        </div>
                                        <img v-if="selectedFileUrl" class="main-img" :src="selectedFileUrl" />
                                        <input id="big-img" type="file" @change="handleFileChange">
                                    </label>
                                    <span class="word">{{ $t('img2') }}</span>
                                </div>
                                <div>
                                    <div class="d-flex w-100 align-items-center justify-content-between mt-4 mb-2">
                                        <h5>
                                        {{ $t('img3') }}
                                        </h5>
                                        <div @click="addImage" class="add">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M11.9997 0.833374H3.99968C2.25077 0.833374 0.833008 2.25114 0.833008 4.00004V12C0.833008 13.7489 2.25077 15.1667 3.99968 15.1667H11.9997C13.7486 15.1667 15.1663 13.7489 15.1663 12V4.00004C15.1663 2.25114 13.7486 0.833374 11.9997 0.833374Z"
                                                    fill="#DCB63B" />
                                                <path
                                                    d="M7.99967 11.3334C7.82286 11.3334 7.65329 11.2632 7.52827 11.1382C7.40325 11.0131 7.33301 10.8436 7.33301 10.6667V5.33341C7.33301 5.1566 7.40325 4.98703 7.52827 4.86201C7.65329 4.73699 7.82286 4.66675 7.99967 4.66675C8.17649 4.66675 8.34605 4.73699 8.47108 4.86201C8.5961 4.98703 8.66634 5.1566 8.66634 5.33341V10.6667C8.66634 10.8436 8.5961 11.0131 8.47108 11.1382C8.34605 11.2632 8.17649 11.3334 7.99967 11.3334Z"
                                                    fill="white" />
                                                <path
                                                    d="M5.33268 8.66671C5.15587 8.66671 4.9863 8.59647 4.86128 8.47144C4.73625 8.34642 4.66602 8.17685 4.66602 8.00004C4.66602 7.82323 4.73625 7.65366 4.86128 7.52864C4.9863 7.40361 5.15587 7.33337 5.33268 7.33337H10.666C10.8428 7.33337 11.0124 7.40361 11.1374 7.52864C11.2624 7.65366 11.3327 7.82323 11.3327 8.00004C11.3327 8.17685 11.2624 8.34642 11.1374 8.47144C11.0124 8.59647 10.8428 8.66671 10.666 8.66671H5.33268Z"
                                                    fill="white" />
                                            </svg>
                                            <span>{{ $t("img4") }}</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div v-for="(image, index) in images" :key="index" class="col-12 col-xl-6 col-lg-6">
                                            <div>
                                                <label :for="`the-img-${index}`" class="image">
                                                    <div class="img-icon">
                                                        <img src="~/assets/images/gallery-add.png" />
                                                        <span>{{ $t('img1') }}</span>
                                                    </div>
                                                    <img v-if="image.file" class="main-img" :src="image.url" />
                                                    <input :id="`the-img-${index}`" type="file"
                                                        @change="handleFilesChange($event, index)" />
                                                </label>
                                                <span class="word">{{ $t('img2') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btns d-flex align-items-center justify-content-end">
                                    <button @click="adNavBtn = 1" class="back">{{ $t('back') }}</button>
                                    <button @click="adNavBtn = 3" class="next">
                                    {{ $t('addd') }}
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

                <div v-if="adNavBtn == 3" class="confirm">
                    <h4>
                     {{ $t('adThank1') }}
                    </h4>
                    <span>
                     {{ $t('adThank2') }}
                        </span>
                    <nuxt-link :to="useLocalePath('/')">
                        <button>{{$t('backHome')}}</button>
                    </nuxt-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
const localePath = useLocalePath();
const { locale } = useI18n();
let inputValue = ref('');

// const handleKeyUp = (event) => {
//     if (process.client) {

//         if (inputValue.value.length === 50) {
//             // Prevent further typing
//             console.log(event);
//             event.preventDefault();
//             return;
//         } else {
//               inputValue.value = event.target.value;
//         }
//     }
// }
let adNavBtn = ref(1);

let selectedFileUrl = ref(null);
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        selectedFileUrl.value = URL.createObjectURL(file);
    }
}
const images = ref([
    { url: '', file: null },
    { url: '', file: null },
]);

const handleFilesChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        images.value[index].url = imageUrl;
        images.value[index].file = file;
    }
};

const addImage = () => {
    if (images.value.length <= 5) {
        images.value.push({ url: '', file: null });
        
    }
};

const selectedCountry = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);


const addFunc1 = async () => {
    
}
const addFunc2 = async () => {
    
}

let items = ref([
    {
        title: locale.value == 'ar' ? 'الرئيسية' : 'home',
        disabled: true,
        href: "/",
    },
    {
        title: locale.value == 'ar' ? "اضف اعلانك" : "add your ad",
        disabled: false,
        href: "ad",
    },
]);
</script>

<style lang="scss" scoped></style>