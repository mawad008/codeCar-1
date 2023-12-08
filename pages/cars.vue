<template>
    <div>
        <div class="container cars-filter">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> المعرض </h4>
                <p>
                    هذا النص هو مثال حي يستبدل في نفش المساحة
                </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="row">
                <div class="col-12 col-xl-3 col-lg-3" style="position: relative;">
                    <div class="filter">
                        <div class="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289Z"
                                    fill="#2D3A4A" />
                            </svg>
                            <span>اعادة الظبط</span>
                        </div>
                        <div class="sort">
                        <div class="image">
                         <img src="~/assets/images/sort.svg"/>
                        
                        </div>
                         <h6>خيارات التصفية</h6>
                        </div>
                        <Accordion :multiple="true" :activeIndex="0">
                            <AccordionTab header="تصفية عامة">
                                <div class="d-flex flex-column gap-2">
                                    <div class="d-flex align-items-center gap-2">
                                        <v-checkbox style="" class="" id="All-1" v-model="selected1" color="#DCB63B"
                                            value="all"></v-checkbox>
                                        <label for="All-1">الكل</label>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="used1" v-model="selected1" color="#DCB63B"
                                                value="used"></v-checkbox>
                                            <label for="used1">مستعمل</label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="new-1" v-model="selected1" color="#DCB63B"
                                                value="new"></v-checkbox>
                                            <label for="new-1"> جديد </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="نوع المحرك">
                                <div class="d-flex flex-column gap-2">
                                    <div class="d-flex align-items-center gap-2">
                                        <v-checkbox style="" class="" id="All-2" v-model="selected2" color="#DCB63B"
                                            value="all"></v-checkbox>
                                        <label for="All-2">الكل</label>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="auto-1" v-model="selected2" color="#DCB63B"
                                                value="used"></v-checkbox>
                                            <label for="auto-1"> اوتوماتيك </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="manu-1" v-model="selected2" color="#DCB63B"
                                                value="new"></v-checkbox>
                                            <label for="manu-1"> مانوال </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="نوع الوقود">
                                <div class="d-flex flex-column gap-2">
                                    <div class="d-flex align-items-center gap-2">
                                        <v-checkbox style="" class="" id="All-3" v-model="selected3" color="#DCB63B"
                                            value="all"></v-checkbox>
                                        <label for="All-3">الكل</label>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-1" v-model="selected3" color="#DCB63B"
                                                value="used"></v-checkbox>
                                            <label for="label-1"> بنزين </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-2" v-model="selected3" color="#DCB63B"
                                                value="new"></v-checkbox>
                                            <label for="label-2"> ديزل </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="هيكل السيارة">
                                <div class="d-flex flex-column gap-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="All-3" v-model="selected4" color="#DCB63B"
                                                value="all"></v-checkbox>
                                            <label for="All-3">الكل</label>

                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-3" v-model="selected4" color="#DCB63B"
                                                value="used"></v-checkbox>
                                            <label for="label-3"> هاتشباك </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-4" v-model="selected4" color="#DCB63B"
                                                value="new"></v-checkbox>
                                            <label for="label-4"> سيدان </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-5" v-model="selected4" color="#DCB63B"
                                                value="new1"></v-checkbox>
                                            <label for="label-5"> دفع رباعي </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-6" v-model="selected4" color="#DCB63B"
                                                value="new2"></v-checkbox>
                                            <label for="label-6"> عائلي </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-7" v-model="selected4" color="#DCB63B"
                                                value="new3"></v-checkbox>
                                            <label for="label-7"> تجاري</label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="الماركات">


                                <div class="d-flex flex-column all-marks-container">
                                    <div class="d-flex align-items-center mt-3 gap-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M13 11H0V4C0 2.346 1.346 1 3 1H13V11ZM21 20H15V3H21C22.654 3 24 4.346 24 6V17C24 18.654 22.654 20 21 20ZM13 23H5C3.346 23 2 21.654 2 20V13H13V23Z"
                                                fill="#90A3BF" />
                                        </svg>
                                        <span class="all-span">كل الماركات</span>

                                    </div>
                                    <div>
                                        <Accordion>
                                            <AccordionTab>
                                                <template v-slot:header>
                                                    <div class="d-flex align-items-center gap-2 header-icon">
                                                        <span>تويوتا</span>
                                                        <img src="~/assets/images/brand1.png" />
                                                    </div>
                                                </template>
                                                <div class="d-flex flex-column gap-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <v-checkbox style="" class="" id="brand-1" v-model="selected5"
                                                                color="#DCB63B" value="brand-1"></v-checkbox>
                                                            <label for="brand-1"> النترا </label>
                                                        </div>
                                                        <span class="num">(25)</span>

                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <v-checkbox style="" class="" id="brand-2" v-model="selected5"
                                                                color="#DCB63B" value="brand-2"></v-checkbox>
                                                            <label for="brand-2"> اكسنت </label>
                                                        </div>
                                                        <span class="num">(25)</span>

                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <v-checkbox style="" class="" id="brand-3" v-model="selected5"
                                                                color="#DCB63B" value="brand-3"></v-checkbox>
                                                            <label for="brand-3"> اكسنت </label>
                                                        </div>
                                                        <span class="num">(25)</span>

                                                    </div>

                                                </div>
                                            </AccordionTab>
                                        </Accordion>
                                    </div>

                                </div>
                            </AccordionTab>
                            <AccordionTab header="الفئة">
                                <div class="d-flex flex-column gap-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="All-l-3" v-model="selected6" color="#DCB63B"
                                                value="all"></v-checkbox>
                                            <label for="All-l-3">الكل</label>

                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-l-3" v-model="selected6" color="#DCB63B"
                                                value="used"></v-checkbox>
                                            <label for="label-l-3"> 2022 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-l-4" v-model="selected6" color="#DCB63B"
                                                value="new"></v-checkbox>
                                            <label for="label-l-4"> 2023 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-l-5" v-model="selected6" color="#DCB63B"
                                                value="new1"></v-checkbox>
                                            <label for="label-l-5"> 2024 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-l-6" v-model="selected6" color="#DCB63B"
                                                value="new2"></v-checkbox>
                                            <label for="label-l-6"> 2025 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-l-7" v-model="selected6" color="#DCB63B"
                                                value="new3"></v-checkbox>
                                            <label for="label-l-7"> 2026 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="اللون">

                            </AccordionTab>
                            <AccordionTab header="سعة المحرك">
                                <div class="d-flex flex-column gap-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="All-t-3" v-model="selected7" color="#DCB63B"
                                                value="all"></v-checkbox>
                                            <label for="All-t-3">الكل</label>

                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-t-3" v-model="selected7" color="#DCB63B"
                                                value="used"></v-checkbox>
                                            <label for="label-t-3"> 2022 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-t-4" v-model="selected7" color="#DCB63B"
                                                value="new"></v-checkbox>
                                            <label for="label-t-4"> 2023 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-t-5" v-model="selected7" color="#DCB63B"
                                                value="new1"></v-checkbox>
                                            <label for="label-t-5"> 2024 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-t-6" v-model="selected6" color="#DCB63B"
                                                value="new2"></v-checkbox>
                                            <label for="label-t-6"> 2025 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center gap-2">
                                            <v-checkbox style="" class="" id="label-t-7" v-model="selected6" color="#DCB63B"
                                                value="new3"></v-checkbox>
                                            <label for="label-t-7"> 2026 </label>
                                        </div>
                                        <span class="num">(25)</span>

                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="السعر">
                                <div class="range">
                                    <v-range-slider class="" v-model="valuePrice" :min="60000" :max="90000" :step="5000"
                                        thumb-label="always">

                                    </v-range-slider>
                                </div>
                            </AccordionTab>
                        </Accordion>

                    </div>
                </div>
                <div class="col-12 col-xl-9 col-lg-9">
                    <div class="row">
                        <div v-for="i in 15" class="col-12 col-xl-4 col-lg-4 col-md-6">
                            <car-card />
                        </div>
                    </div>
                    <div class="progress-container">
                        <span>لقد شاهدت 50 سيارة من اصل 200</span>
                        <v-progress-linear reverse rounded color="#DCB63B" model-value="20" :height="6">
                        </v-progress-linear>
                        <button>تصفح المزيد</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

// import Accordion from 'primevue/accordion';
// import AccordionTab from 'primevue/accordiontab';
let valuePrice = ref([60000, 90000]);
const rangeLabel = (value) => {
    return `${value} SAR`;
}
let selected1 = ref(["all"]);
let selected2 = ref(["all"]);
let selected3 = ref(["all"]);
let selected4 = ref(["all"]);
let selected5 = ref([]);
let selected6 = ref(["all"]);
let selected7 = ref([]);
let selected8 = ref(["all"]);
let items = ref([
    {
        title: 'الرئيسية',
        disabled: true,
        href: '/',
    },
    {
        title: 'المعرض',
        disabled: false,
        href: 'wishlist',
    },
]);


</script>