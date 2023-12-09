<template>
    <div>
        <div class="container finance-container paymentType">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text">التمويل</h4>
                <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div>
                <div class="payment-container cash"
                    :class="{ 'd-none': paymentIndividualBtn == 6 || paymentIndividualBtn == 7 }">
                    <h4>التمويل</h4>
                    <span class="word">
                        قم بإتمام عمليتك بشكل سلس وفوري مع السداد النقدي
                    </span>

                    <div class="payment-method">
                        <button @click="paymentMethod = 1" :class="{ active: paymentMethod == 1 }">
                            افراد
                        </button>
                        <button @click="paymentMethod = 2" :class="{ active: paymentMethod == 2 }">
                            شركات
                        </button>
                    </div>

                    <div v-if="paymentMethod == 1" class="row">
                        <div class="col-5">
                            <div class="main-pagination-container">
                                <div class="pagination-container">
                                    <div class="icon" :class="{ active: paymentIndividualBtn == 1 }">
                                        <img class="def" src="@/assets/images/calc-icon1.svg" alt="" />
                                        <img class="active" src="@/assets/images/calc-icon-active1.svg" alt="" />
                                    </div>
                                    <div class="icon" :class="{ active: paymentIndividualBtn == 2 }">
                                        <img class="def" src="@/assets/images/calc-icon2.svg" alt="" />
                                        <img class="active" src="@/assets/images/calc-icon-active2.svg" alt="" />
                                    </div>
                                    <div class="icon" :class="{ active: paymentIndividualBtn == 3 }">
                                        <img class="def" src="@/assets/images/calc-icon3.svg" alt="" />
                                        <img class="active" src="@/assets/images/calc-icon-active3.svg" alt="" />
                                    </div>
                                    <div class="icon" :class="{ active: paymentIndividualBtn == 4 }">
                                        <img class="def" src="@/assets/images/calc-icon4.svg" alt="" />
                                        <img class="active" src="@/assets/images/calc-icon-active4.svg" alt="" />
                                    </div>
                                    <div class="icon" :class="{ active: paymentIndividualBtn == 5 }">
                                        <img class="def" src="@/assets/images/calc-icon5.svg" alt="" />
                                        <img class="active" src="@/assets/images/calc-icon-active5.svg" alt="" />
                                    </div>
                                </div>
                                <div class="content-pagination">
                                    <div>
                                        <h5 :class="{ active: paymentIndividualBtn == 1 }">
                                            خيارات التمويل
                                        </h5>
                                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                    </div>
                                    <div>
                                        <h5 :class="{ active: paymentIndividualBtn == 2 }">
                                            خيارات التمويل
                                        </h5>
                                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                    </div>
                                    <div>
                                        <h5 :class="{ active: paymentIndividualBtn == 3 }">
                                            خيارات التمويل
                                        </h5>
                                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                    </div>
                                    <div>
                                        <h5 :class="{ active: paymentIndividualBtn == 4 }">
                                            خيارات التمويل
                                        </h5>
                                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                    </div>
                                    <div :class="{ active: paymentIndividualBtn == 5 }">
                                        <h5>خيارات التمويل</h5>
                                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                    </div>
                                </div>
                                <div class="pagination-container">
                                    <div class="dot" :class="{ active: paymentIndividualBtn == 1 }">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                    <div class="dot" :class="{ active: paymentIndividualBtn == 2 }">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                    <div class="dot" :class="{ active: paymentIndividualBtn == 3 }">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                    <div class="dot" :class="{ active: paymentIndividualBtn == 4 }">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                    <div class="dot" :class="{ active: paymentIndividualBtn == 5 }">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                            <div v-if="paymentIndividualBtn == 1" class="range-container">
                                <div class="d-flex flex-column range-slider">
                                    <span class="word">المقدم</span>
                                    <v-slider v-model="sliderValue1" min="100000" max="500000" step="10000"
                                        thumb-label="always" class="custom-slider mt-5" @input="updateRange()"
                                        :reverse="true">
                                        <template v-slot:thumb-label="{ value }">
                                            <div class="d-flex align-items-center gap-2">
                                                <span> ر.س </span>
                                                {{ sliderValue1 }}
                                            </div>
                                        </template>
                                    </v-slider>
                                </div>
                                <div class="d-flex flex-column range-slider">
                                    <span class="word">مدة التقسيط</span>
                                    <v-slider v-model="sliderValue2" min="1" max="160" step="1" thumb-label="always"
                                        class="custom-slider mt-5" @input="updateRange()" :reverse="true">
                                        <template v-slot:thumb-label="{ value }">
                                            <div class="d-flex align-items-center gap-2">
                                                <span> شهر </span>
                                                {{ sliderValue2 }}
                                            </div>
                                        </template>
                                    </v-slider>
                                </div>

                                <div class="total-container">
                                    <div class="w-100 d-flex align-items-center justify-content-between">
                                        <span>سعر السيارة</span>
                                        <span> 500,000 ريال سعودي </span>
                                    </div>
                                    <div class="w-100 d-flex align-items-center justify-content-between">
                                        <span>الدفعة الاولي</span>
                                        <span> 10% </span>
                                    </div>
                                    <div class="w-100 d-flex align-items-center justify-content-between">
                                        <span>الدفعة الاخيرة</span>
                                        <span> 30% </span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button @click="paymentIndividualBtn = 2" class="next-step">
                                        التالي
                                    </button>
                                </div>
                            </div>

                            <div v-if="paymentIndividualBtn == 2" class="d-flex flex-column gap-4">
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> ماركة السيارة </span>
                                        <div class="input">
                                            <input type="text" placeholder="مثال : تويوتا" name="" value="" class="" />
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span> نوع السيارة </span>
                                        <div class="input">
                                            <input type="text" name="" value="" class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> موديل السيارة </span>
                                        <div class="input">
                                            <input type="text" placeholder="مثال : تويوتا" name="" value="" class="" />
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span> المواصفات </span>
                                        <div class="input">
                                            <input type="text" name="" value="" class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span>اللون</span>
                                        <div class="input">
                                            <input type="text" placeholder="مثال : تويوتا" name="" value="" class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="btns">
                                    <button @click="paymentIndividualBtn = 1" class="back">
                                        الرجوع
                                    </button>
                                    <button @click="paymentIndividualBtn = 3" class="next">
                                        التالي
                                    </button>
                                </div>
                            </div>
                            <div v-if="paymentIndividualBtn == 3" class="d-flex flex-column gap-4">
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> اسم العميل </span>
                                        <div class="input">
                                            <input type="text" placeholder="خالد سوادة" name="" value="" class="" />
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span> رقم الجوال </span>
                                        <div class="input">
                                            <input type="tel" name="" value="" class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> رقم الهوية </span>
                                        <div class="input">
                                            <input type="tel" placeholder="مثال : 3333-5555-9999-55" name="" value=""
                                                class="" />
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span> تاريخ الميلاد </span>
                                        <div class="input">
                                            <input type="date" name="" value="" class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span>جهة تحويل الراتب</span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : مصرف الجارحي" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span>جهة العمل</span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : حكومي" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span>مبلغ الراتب</span>
                                        <div class="input">
                                            <input type="number" min="1" placeholder="مثال : 25000 ر.س" name="" value=""
                                                class="" />
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span> اجمالي الالتزامات الشهرية في سمة </span>
                                        <div class="input">
                                            <input type="number" min="1" placeholder="مثال : 25000 ر.س" name="" value=""
                                                class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> المدينة </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : مصرف الجارحي" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <div class="d-flex align-items-center gap-3">
                                            <span> البريد الالكتروني</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M18.3337 9.99999C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 9.99999C1.66699 5.39762 5.39795 1.66666 10.0003 1.66666C14.6027 1.66666 18.3337 5.39762 18.3337 9.99999ZM10.8337 5.83332C10.8337 6.29356 10.4606 6.66666 10.0003 6.66666C9.54009 6.66666 9.16699 6.29356 9.16699 5.83332C9.16699 5.37309 9.54009 4.99999 10.0003 4.99999C10.4606 4.99999 10.8337 5.37309 10.8337 5.83332ZM9.16699 7.70832C8.82182 7.70832 8.54199 7.98815 8.54199 8.33332C8.54199 8.6785 8.82182 8.95832 9.16699 8.95832H9.37533V14.1667C9.37533 14.5118 9.65515 14.7917 10.0003 14.7917C10.3455 14.7917 10.6253 14.5118 10.6253 14.1667V8.33332C10.6253 7.98815 10.3455 7.70832 10.0003 7.70832H9.16699Z"
                                                    fill="#90A3BF" />
                                            </svg>

                                        </div>
                                        <div class="input">
                                            <input type="email" placeholder="مثال : Demo@gmail.com" name="" value=""
                                                class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex main-radio align-items-center w-100 justify-content-between">
                                    <div>
                                        <span>هل يوجد تعثرات</span>
                                        <v-radio-group>
                                            <div class="d-flex">

                                                <div class="d-flex align-items-center ">
                                                    <label for="radio-1">نعم</label>
                                                    <v-radio id="radio-1" color="#DCB63B" name="radio-1"
                                                        value="one"></v-radio>

                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <label for="radio-2"> لا </label>
                                                    <v-radio id="radio-2" color="#DCB63B" name="radio-1"
                                                        value="two"></v-radio>
                                                </div>

                                            </div>

                                        </v-radio-group>
                                    </div>
                                    <div>
                                        <span> هل يوجد مخالفات مرورية </span>
                                        <v-radio-group>
                                            <div class="d-flex">

                                                <div class="d-flex align-items-center ">
                                                    <label for="radio-1">نعم</label>
                                                    <v-radio id="radio-1" color="#DCB63B" name="radio-1"
                                                        value="one"></v-radio>

                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <label for="radio-2"> لا </label>
                                                    <v-radio id="radio-2" color="#DCB63B" name="radio-1"
                                                        value="two"></v-radio>
                                                </div>

                                            </div>

                                        </v-radio-group>
                                    </div>
                                    <div>
                                        <span> هل يوجد رخصة القيادة </span>
                                        <v-radio-group>
                                            <div class="d-flex">

                                                <div class="d-flex align-items-center ">
                                                    <label for="radio-1">نعم</label>
                                                    <v-radio id="radio-1" color="#DCB63B" name="radio-1"
                                                        value="one"></v-radio>

                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <label for="radio-2"> لا </label>
                                                    <v-radio id="radio-2" color="#DCB63B" name="radio-1"
                                                        value="two"></v-radio>
                                                </div>

                                            </div>

                                        </v-radio-group>
                                    </div>
                                    <div>
                                        <span>هل يوجد قرض عقاري ( اختياري )</span>
                                        <v-radio-group>
                                            <div class="d-flex">

                                                <div class="d-flex align-items-center ">
                                                    <label for="radio-1">نعم</label>
                                                    <v-radio id="radio-1" color="#DCB63B" name="radio-1"
                                                        value="one"></v-radio>

                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <label for="radio-2"> لا </label>
                                                    <v-radio id="radio-2" color="#DCB63B" name="radio-1"
                                                        value="two"></v-radio>
                                                </div>

                                            </div>

                                        </v-radio-group>
                                    </div>
                                </div>
                                <div class="btns">
                                    <button @click="paymentIndividualBtn = 2" class="back">
                                        الرجوع
                                    </button>
                                    <button @click="paymentIndividualBtn = 4" class="next">
                                        التالي
                                    </button>
                                </div>
                            </div>


                            <div v-if="paymentIndividualBtn == 4" class=" offers">
                                <v-radio-group>
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="offer-1" class="offer">
                                                <div class="d-flex align-items-center justify-content-between w-100 ">
                                                    <span class="name">حملة السنابل</span>
                                                    <v-radio class="radio-input" id="offer-1" color="#DCB63B" name="offer-1"
                                                        value="one"></v-radio>
                                                </div>
                                                <div class="price">
                                                    <h4> 14,340 ريال </h4>
                                                    <span> اجمالي مبلغ التمويل </span>
                                                </div>
                                                <v-divider></v-divider>
                                                <div class="details">
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det1.png" alt="">
                                                            <span class="name">القسط الشهري</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det2.png" alt="">
                                                            <span class="name">الدفعة الاولي</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det3.png" alt="">
                                                            <span class="name">مدة الاقساط</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det4.png" alt="">
                                                            <span class="name">الدفعة الاخيرة</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det5.png" alt="">
                                                            <span class="name">الرسوم الادارية</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6">
                                            <label for="offer-2" class="offer">
                                                <div class="d-flex align-items-center justify-content-between w-100 ">
                                                    <span class="name">حملة السنابل</span>
                                                    <v-radio class="radio-input" id="offer-2" color="#DCB63B" name="offer-1"
                                                        value="two"></v-radio>
                                                </div>
                                                <div class="price">
                                                    <h4> 14,340 ريال </h4>
                                                    <span> اجمالي مبلغ التمويل </span>
                                                </div>
                                                <v-divider></v-divider>
                                                <div class="details">
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det1.png" alt="">
                                                            <span class="name">القسط الشهري</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det2.png" alt="">
                                                            <span class="name">الدفعة الاولي</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det3.png" alt="">
                                                            <span class="name">مدة الاقساط</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det4.png" alt="">
                                                            <span class="name">الدفعة الاخيرة</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det5.png" alt="">
                                                            <span class="name">الرسوم الادارية</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6">
                                            <label for="offer-3" class="offer">
                                                <div class="d-flex align-items-center justify-content-between w-100 ">
                                                    <span class="name">حملة السنابل</span>
                                                    <v-radio class="radio-input" id="offer-3" color="#DCB63B" name="offer-1"
                                                        value="three"></v-radio>
                                                </div>
                                                <div class="price">
                                                    <h4> 14,340 ريال </h4>
                                                    <span> اجمالي مبلغ التمويل </span>
                                                </div>
                                                <v-divider></v-divider>
                                                <div class="details">
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det1.png" alt="">
                                                            <span class="name">القسط الشهري</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det2.png" alt="">
                                                            <span class="name">الدفعة الاولي</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det3.png" alt="">
                                                            <span class="name">مدة الاقساط</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det4.png" alt="">
                                                            <span class="name">الدفعة الاخيرة</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det5.png" alt="">
                                                            <span class="name">الرسوم الادارية</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6">
                                            <label for="offer-4" class="offer">
                                                <div class="d-flex align-items-center justify-content-between w-100 ">
                                                    <span class="name">حملة السنابل</span>
                                                    <v-radio class="radio-input" id="offer-4" color="#DCB63B" name="offer-1"
                                                        value="four"></v-radio>
                                                </div>
                                                <div class="price">
                                                    <h4> 14,340 ريال </h4>
                                                    <span> اجمالي مبلغ التمويل </span>
                                                </div>
                                                <v-divider></v-divider>
                                                <div class="details">
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det1.png" alt="">
                                                            <span class="name">القسط الشهري</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det2.png" alt="">
                                                            <span class="name">الدفعة الاولي</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det3.png" alt="">
                                                            <span class="name">مدة الاقساط</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det4.png" alt="">
                                                            <span class="name">الدفعة الاخيرة</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                    <div class="detail">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <img src="~/assets/images/det5.png" alt="">
                                                            <span class="name">الرسوم الادارية</span>
                                                        </div>
                                                        <p class="price">40,000 ريال سعودي</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                    </div>

                                </v-radio-group>
                                <div class="btns">
                                    <button @click="paymentIndividualBtn = 3" class="back">
                                        الرجوع
                                    </button>
                                    <button @click="paymentIndividualBtn = 5" class="next">
                                        التالي
                                    </button>
                                </div>
                            </div>

                            <div v-if="paymentIndividualBtn == 5" class="final-review">
                                <div class="offer">
                                    <span class="word">العرض</span>
                                    <div class="main-container">
                                        <div class="name-price">
                                            <div class="d-flex main flex-column">
                                                <span class="name">العرض</span>
                                                <p class="type mt-2">عرض رقم : 562</p>
                                            </div>
                                            <div class="d-flex main flex-column">
                                                <h6>14,340 ريال</h6>
                                                <p class="type">اجمالي مبلغ التمويل</p>
                                            </div>

                                        </div>
                                        <div class="offer-det">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="d-flex align-items-center gap-4">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="~/assets/images/det1.png" alt="">
                                                        <span>القسط الشهري</span>
                                                    </div>
                                                    <h6>40,000 ريال سعودي</h6>
                                                </div>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="~/assets/images/det2.png" alt="">
                                                        <span>الدفعة الاخيرة</span>
                                                    </div>
                                                    <h6>40,000 ريال سعودي</h6>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="~/assets/images/det3.png" alt="">
                                                        <span> الدفعة الاولي </span>
                                                    </div>
                                                    <h6>40,000 ريال سعودي</h6>
                                                </div>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="~/assets/images/det4.png" alt="">
                                                        <span>الرسوم الادارية</span>
                                                    </div>
                                                    <h6>40,000 ريال سعودي</h6>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="~/assets/images/det3.png" alt="">
                                                        <span> مدة الاقساط </span>
                                                    </div>
                                                    <h6>40,000 ريال سعودي</h6>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="offer">
                                    <span class="word"> بيانات السيارة </span>
                                    <div class="main-container">
                                        <div class="img-container">
                                            <div class="image">
                                                <img src="~/assets/images/small-car.png" />
                                            </div>
                                            <div class="d-flex flex-column ">
                                                <h6>تويوتا كامري 2024</h6>
                                                <span>كامري - GLX - رصاصي - 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="files-span">
                                        <span class="f1">المرفقات</span>
                                        <span class="f2">( اختياري )</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-3">
                                            <label for="fileInput1" class="custom-file-upload">
                                                <!-- <span>{{ buttonText }}</span> -->
                                                <img src="~/assets/images/file1.png" />
                                                <h6> صورة الهوية </h6>
                                                <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                                                <span v-if="selectedFileName1">{{ selectedFileName1 }}</span>
                                                <input type="file" @change="handleFileChange1" id="fileInput1" />
                                            </label>
                                        </div>
                                        <div class="col-3">
                                            <label for="fileInput2" class="custom-file-upload">
                                                <!-- <span>{{ buttonText }}</span> -->
                                                <img src="~/assets/images/file2.png" />
                                                <h6> صورة الرخصة </h6>
                                                <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                                                <span v-if="selectedFileName2">{{ selectedFileName2 }}</span>
                                                <input type="file" @change="handleFileChange2" id="fileInput2" />
                                            </label>
                                        </div>
                                        <div class="col-3">
                                            <label for="fileInput3" class="custom-file-upload">
                                                <!-- <span>{{ buttonText }}</span> -->
                                                <img src="~/assets/images/file3.png" />
                                                <h6> تعريف الراتب </h6>
                                                <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                                                <span v-if="selectedFileName3">{{ selectedFileName3 }}</span>
                                                <input type="file" @change="handleFileChange3" id="fileInput3" />
                                            </label>
                                        </div>
                                        <div class="col-3">
                                            <label for="fileInput4" class="custom-file-upload">
                                                <!-- <span>{{ buttonText }}</span> -->
                                                <img src="~/assets/images/file4.png" />
                                                <h6>برنت التأمينات</h6>
                                                <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                                                <span v-if="selectedFileName4">{{ selectedFileName4 }}</span>
                                                <input type="file" @change="handleFileChange4" id="fileInput4" />
                                            </label>
                                        </div>

                                    </div>
                                    <div class="btns">
                                        <button @click="paymentIndividualBtn = 4" class="back">
                                            العودة للعروض
                                        </button>
                                        <button @click="paymentIndividualBtn = 6, showConfirm = true;" class="next">
                                            ارسال الطلب
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="paymentMethod == 2" class="row">

                        <div class="col-5">
                            <div class="main-pagination-container finance">
                                <div class="pagination-container ">
                                    <div class="icon" :class="{ active: paymentIndividualBtn2 == 1 }">
                                        <img class="def" src="@/assets/images/calc-icon1.svg" alt="" />
                                        <img class="active" src="@/assets/images/calc-icon-active1.svg" alt="" />
                                    </div>
                                    <div class="icon" :class="{ active: paymentIndividualBtn2 == 2 }">
                                        <img class="def" src="@/assets/images/calc-icon2.svg" alt="" />
                                        <img class="active" src="@/assets/images/calc-icon-active2.svg" alt="" />
                                    </div>

                                </div>
                                <div class="content-pagination">
                                    <div>
                                        <h5 :class="{ active: paymentIndividualBtn2 == 1 }">
                                            خيارات التمويل
                                        </h5>
                                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                    </div>
                                    <div>
                                        <h5 :class="{ active: paymentIndividualBtn2 == 2 }">
                                            خيارات التمويل
                                        </h5>
                                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                                    </div>

                                </div>
                                <div class="pagination-container">
                                    <div class="dot" :class="{ active: paymentIndividualBtn2 == 1 }">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                    <div class="dot" :class="{ active: paymentIndividualBtn2 == 2 }">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                            <div v-if="paymentIndividualBtn2 == 1" class="form-ind">
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> ماركة السيارة </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : شركة" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span> نوع السيارة </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : شركة" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> موديل السيارة </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : شركة" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div class="input-container">
                                        <span> المواصفات </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : شركة" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span>اللون</span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="رصاصي" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <div class="input-container">
                                        <span> عدد السيارات المطلوبة</span>
                                        <div class="input">
                                            <input type="number" min="1" placeholder="3 سيارات" name="" value="" class="" />
                                        </div>
                                    </div>

                                </div>
                                <div class="d-flex justify-content-end">
                                <button @click="paymentIndividualBtn2 = 2">التالي</button>
                                
                                </div>

                            </div>
                            <div v-if="paymentIndividualBtn2 == 2" class="form-ind">

                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> اسم المنشأة</span>
                                        <div class="input">
                                            <input type="text" placeholder="مثال : تويوتا" name="" value="" class="" />
                                        </div>
                                    </div>

                                    <div class="input-container">
                                        <span> نوع المنشأة </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : شركة" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> رقم السجل التجاري</span>
                                        <div class="input">
                                            <input type="text" placeholder="مثال : 3333-5555-9999-55" name="" value=""
                                                class="" />
                                        </div>
                                    </div>

                                    <div class="input-container">
                                        <span> نشاط المنشأة </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="تأجير سيارات" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> اسم الشخص المسؤول </span>
                                        <div class="input">
                                            <input type="text" placeholder="مثال : محمد سيد" name="" value="" class="" />
                                        </div>
                                    </div>

                                    <div class="input-container">
                                        <span> رقم الهاتف </span>
                                        <div class="input">
                                            <input type="text" placeholder="مثال : 3333-5555-9999-55" name="" value=""
                                                class="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> عمر المنشأة </span>
                                        <div class="input">
                                            <input type="number" min="1" placeholder="مثال : 4 سنوات" name="" value=""
                                                class="" />
                                        </div>
                                    </div>

                                    <div class="input-container">
                                        <span> المدينة </span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="ابها" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="input-container">
                                        <span> حساب المنشأة لدي البنك</span>
                                        <div class="input">
                                            <Dropdown v-model="selectedCountry" :options="countries" filter
                                                optionLabel="name" placeholder="مثال : مصرف الجارحي" class="">

                                                <template #option="slotProps">
                                                    <div class="flex align-items-center">
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>
                                            </Dropdown>
                                        </div>
                                    </div>


                                </div>
                                <div class="btns">
                                    <button @click="paymentIndividualBtn2 = 1" class="back">
                                    الرجوع
                                    </button>
                                    <button @click="paymentIndividualBtn = 6, showConfirm = true;" class="next">
                                        ارسال الطلب
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div v-if="showConfirm" class="confirm-container ">
                <div v-if="paymentIndividualBtn == 6" class="confirm-text">
                    <client-only>
                        <Vue3Lottie :animation-data="data" :height="100" :width="100" />
                    </client-only>
                    <h4>تم ارسال الكود!</h4>
                    <p> شكرًا لثقتك في كود كار! لضمان أمان معلوماتك وتأكيد طلبك، ارسلنا كود تحقق عبر رسالة نصية إلى رقم
                        هاتفك
                        المسجل.
                        يرجى إدخال الكود في الخانة المخصصة أدناه </p>

                    <v-otp-input v-model="otp" :length="4" placeholder="-"></v-otp-input>
                    {{ otp }}
                    <button class="resend">اعد ارسال الكود</button>

                    <button @click="paymentIndividualBtn = 7" class="send"> متابعة </button>
                </div>
                <div v-if="paymentIndividualBtn == 7" class="confirm-text">
                    <client-only>
                        <Vue3Lottie :animation-data="data" :height="100" :width="100" />
                    </client-only>
                    <h4>تم ارسال طلبك بنجاح!</h4>
                    <p> تم إرسال طلبك بنجاح! يمكنك متابعة حالة الطلب وجميع التفاصيل المتعلقة به من خلال تتبع طلبك في الصفحة
                        الرئيسية
                    </p>

                    <div class="order-number">
                        <h5>رقم الطلب : <span>200715DXFMW0UD</span></h5>
                        <img src="~/assets/images/Copy.png" />
                    </div>

                    <nuxt-link to="/">
                        <button class="send home"> الرجوع للرئيسية </button>

                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import data from "~/assets/animations/animation.json";
import { Vue3Lottie } from "vue3-lottie";

let paymentMethod = ref(1);
let sliderValue1 = ref(340000);
let sliderValue2 = ref(40);
let showConfirm = ref(false);
const selectedFileName1 = ref(null);
const selectedFileName2 = ref(null);
const selectedFileName3 = ref(null);
const selectedFileName4 = ref(null);
let otp = ref('');

const handleFileChange1 = (event) => {
    selectedFileName1.value = event.target.files[0]?.name || null;
    console.log(selectedFileName1.value);
};
const handleFileChange2 = (event) => {
    selectedFileName2.value = event.target.files[0]?.name || null;
    console.log(selectedFileName2.value);
};
const handleFileChange3 = (event) => {
    selectedFileName3.value = event.target.files[0]?.name || null;
    console.log(selectedFileName3.value);
};
const handleFileChange4 = (event) => {
    selectedFileName4.value = event.target.files[0]?.name || null;
    console.log(selectedFileName4.value);
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

let paymentIndividualBtn = ref(1);
let paymentIndividualBtn2 = ref(1);


let items = ref([
    {
        title: "الرئيسية",
        disabled: true,
        href: "/",
    },
    {
        title: "التمويل",
        disabled: false,
        href: "finance",
    },
]);
</script>

<style lang="scss" scoped>
.finance-container {
    margin-top: 72px !important;
    margin-bottom: 140px;
    min-height: 100vh;
}
</style>