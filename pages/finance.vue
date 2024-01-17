<template>
  <div>
    <div class="container finance-container paymentType">
      <div
        class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
      >
        <h4 class="heading-text">التمويل</h4>
        <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>

        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>

      <div>
        <div
          class="payment-container cash"
          :class="{
            'd-none': showConfirm,
          }"
        >
          <div class="textt">
            <h4>التمويل</h4>
            <span class="word">
              قم بإتمام عمليتك بشكل سلس وفوري مع السداد النقدي
            </span>
          </div>

          <div class="payment-method">
            <button
              @click="paymentMethod = 1"
              class="one"
              :class="{ active: paymentMethod == 1 }"
            >
              افراد
            </button>
            <button
              @click="paymentMethod = 2"
              class="two"
              :class="{ active: paymentMethod == 2 }"
            >
              شركات
            </button>
          </div>

          <div v-if="paymentMethod == 1" class="row">
            <div class="col-12 col-xl-5 col-lg-5">
              <div class="main-pagination-container">
                <div class="pagination-container">
                  <div class="contain">
                    <div class="icon" :class="{ active: paymentBtn1 == 1 }">
                      <img
                        class="def"
                        src="@/assets/images/calc-icon1.svg"
                        alt=""
                      />
                      <img
                        class="active"
                        src="@/assets/images/calc-icon-active1.svg"
                        alt=""
                      />
                    </div>
                    <div class="icon" :class="{ active: paymentBtn2 == 1 }">
                      <img
                        class="def"
                        src="@/assets/images/calc-icon2.svg"
                        alt=""
                      />
                      <img
                        class="active"
                        src="@/assets/images/calc-icon-active2.svg"
                        alt=""
                      />
                    </div>
                    <div class="icon" :class="{ active: paymentBtn3 == 1 }">
                      <img
                        class="def"
                        src="@/assets/images/calc-icon3.svg"
                        alt=""
                      />
                      <img
                        class="active"
                        src="@/assets/images/calc-icon-active3.svg"
                        alt=""
                      />
                    </div>
                    <div class="icon" :class="{ active: paymentBtn4 == 1 }">
                      <img
                        class="def"
                        src="@/assets/images/calc-icon4.svg"
                        alt=""
                      />
                      <img
                        class="active"
                        src="@/assets/images/calc-icon-active4.svg"
                        alt=""
                      />
                    </div>
                    <div class="icon" :class="{ active: paymentBtn5 == 1 }">
                      <img
                        class="def"
                        src="@/assets/images/calc-icon5.svg"
                        alt=""
                      />
                      <img
                        class="active"
                        src="@/assets/images/calc-icon-active5.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="text">
                    <div>
                      <h5 :class="{ active: paymentBtn1 == 1 }">
                        خيارات التمويل
                      </h5>
                    </div>
                    <div>
                      <h5 :class="{ active: paymentBtn2 == 1 }">
                        بيانات السيارة
                      </h5>
                    </div>
                    <div>
                      <h5 :class="{ active: paymentBtn3 == 1 }">
                        البيانات الشخصية
                      </h5>
                    </div>
                    <div>
                      <h5 :class="{ active: paymentBtn4 == 1 }">العروض</h5>
                    </div>
                    <div>
                      <h5 :class="{ active: paymentBtn5 == 1 }">اكمال الطلب</h5>
                    </div>
                  </div>
                </div>

                <div class="content-pagination">
                  <div>
                    <h5 :class="{ active: paymentBtn1 == 1 }">
                      خيارات التمويل
                    </h5>
                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                  </div>
                  <div>
                    <h5 :class="{ active: paymentBtn2 == 1 }">
                      بيانات السيارة
                    </h5>
                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                  </div>
                  <div>
                    <h5 :class="{ active: paymentBtn3 == 1 }">
                      البيانات الشخصية
                    </h5>
                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                  </div>
                  <div>
                    <h5 :class="{ active: paymentBtn4 == 1 }">
                      العروض
                    </h5>
                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                  </div>
                  <div >
                    <h5 :class="{ active: paymentBtn5 == 1 }">اكمال الطلب</h5>
                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                  </div>
                </div>
                <div class="pagination-container ">
                <div class="contain second">
                  <div
                    class="dot"
                    :class="{ active: paymentBtn1 == 1 , check: checkBtn1 == 1 }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentBtn2 == 1 , check: checkBtn2 == 1}"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentBtn3 == 1 , check: checkBtn3 == 1}"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentBtn4 == 1 , check: checkBtn4 == 1}"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentBtn5 == 1 , check: checkBtn5 == 1}"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                
                </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-7 col-lg-7">
              <div v-if="paymentIndividualBtn == 1" class="range-container">
                <div class="d-flex flex-column range-slider">
                
                  <span class="word">المقدم</span>
                  <v-slider
                    v-model="sliderValue1"
                    :min="minNum"
                    :max="maxNum"
                    step="10000"
                    thumb-label="always"
                    class="custom-slider mt-5"
                    @input="updateRange()"
                    :reverse="checkSlider"
                  >
                    <template v-slot:thumb-label="{ value }">
                      <div class="d-flex align-items-center gap-2">
                        <span> {{ $t('curr') }} </span>
                        {{ sliderValue1 }}
                      </div>
                    </template>
                  </v-slider>
                </div>
                <div class="d-flex flex-column range-slider">
                  <span class="word">مدة التقسيط</span>
                  <v-slider
                    v-model="sliderValue2"
                    min="1"
                    max="10"
                    step="1"
                    thumb-label="always"
                    class="custom-slider mt-5"
                    @input="updateRange()"
                    :reverse="checkSlider"
                  >
                    <template v-slot:thumb-label="{ value }">
                      <div class="d-flex align-items-center gap-2">
                        <span> سنة </span>
                        {{ sliderValue2 }}
                      </div>
                    </template>
                  </v-slider>
                </div>
                <div class="d-flex flex-column range-slider">
                  <span class="word">الدفعة الاخيرة</span>

                  <v-slider
                    v-model="sliderValue3"
                    :min="minNum"
                    :max="maxNum"
                    step="10000"
                    thumb-label="always"
                    class="custom-slider mt-5"
                    @input="updateRange()"
                    :reverse="checkSlider"
                  >
                    <template v-slot:thumb-label="{ value }">
                      <div class="d-flex align-items-center gap-2">
                        <span> {{ $t('curr') }} </span>
                        {{ sliderValue3 }}
                      </div>
                    </template>
                  </v-slider>
                </div>

                <!-- <div class="total-container">
                  <div
                    class="w-100 d-flex align-items-center justify-content-between"
                  >
                    <span>سعر السيارة</span>
                    <span> 500,000 ريال سعودي </span>
                  </div>
                  <div
                    class="w-100 d-flex align-items-center justify-content-between"
                  >
                    <span>الدفعة الاولي</span>
                    <span> 10% </span>
                  </div>
                  <div
                    class="w-100 d-flex align-items-center justify-content-between"
                  >
                    <span>الدفعة الاخيرة</span>
                    <span> 30% </span>
                  </div>
                </div> -->
                <div class="d-flex justify-content-end">
                  <button @click=" paymentFunc1()" :disabled="pending1" class="next-step gap-3">
                    التالي
                    <v-progress-circular v-if="pending1"  indeterminate :size="25" :width="4"></v-progress-circular>
                  </button>
                </div>
              </div>

              <div
                v-if="paymentIndividualBtn == 2"
                class="d-flex flex-column gap-4"
              >
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> ماركة السيارة </span>
                    <div class="input">
                      <Dropdown
                        v-model="form2.brand"
                        :options="brands"
                        filter
                        optionValue="id"
                        optionLabel="title"
                        placeholder="مثال : شركة"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.title }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.brand.$error">{{
                v2$.brand.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors2.brand">{{
                errors2.brand[0]
              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span> موديل السيارة </span>
                    <div class="input">
                      <Dropdown
                        v-model="form2.model"
                        :options="form2.brand != '' ? getmodels[0].models : ''"
                        filter
                        optionLabel="name"
                        optionValue="id"
                        placeholder="مثال : شركة"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.model.$error">{{
                v2$.model.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors2.model">{{
                errors2.model[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> سنة الصنع </span>
                    <div class="input">
                      <Dropdown
                        v-model="form2.year"
                        :options="years"
                        filter
                        optionLabel=""
                        placeholder="مثال : شركة"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.year.$error">{{
                v2$.year.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors2.year">{{
                errors2.year[0]
              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span> نوع المحرك </span>
                    <div class="input">
                      <Dropdown
                        v-model="form2.gear_shifter"
                        :options="gear_shifterArr"
                        filter
                        optionLabel="name"
                        optionValue="value"
                        placeholder=""
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.gear_shifter.$error">{{
                v2$.gear_shifter.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors2.gear_shifter">{{
                errors2.gear_shifter[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span>اللون</span>
                    <div class="input">
                      <Dropdown
                        v-model="form2.color_id"
                        :options="optionsCars.colors"
                        filter
                        optionLabel="title"
                        optionValue="id"
                        placeholder="مثال : شركة"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.title }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.color_id.$error">{{
                v2$.color_id.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors2.color_id">{{
                errors2.color_id[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="btns">
                  <button @click="paymentIndividualBtn = 1" class="back">
                    الرجوع
                  </button>
                  <button @click=" paymentFunc2()" :disabled="pending2" class="next gap-3">
                    التالي
                    <v-progress-circular v-if="pending2"  indeterminate :size="25" :width="4"></v-progress-circular>
                  </button>
                </div>
              </div>
              <div
                v-if="paymentIndividualBtn == 3"
                class="d-flex flex-column gap-4"
              >
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> اسم العميل </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder="خالد سوادة"
                        name=""
                       v-model="form3.client_name"
                        class=""
                      />
                      <span class="error-msg" v-if="v3$.client_name.$error">{{
                v3$.client_name.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.client_name">{{
                errors3.client_name[0]
              }}</span>
                    </div>
                  </div>
                  <!-- {{ form3 }} -->
                  <div class="input-container">
                    <span> رقم الجوال </span>
                    <div class="input">
                      <input v-model="form3.phone" type="tel" name="" class="" />
                      <span class="error-msg" v-if="v3$.phone.$error">{{
                v3$.phone.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.phone">{{
                errors3.phone[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> الجنس </span>
                    <div class="input">
                      <Dropdown
                        v-model="form3.sex"
                        :options="sexArr"
                        filter
                        optionLabel="name"
                        optionValue="value"
                        placeholder=""
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v3$.sex.$error">{{
                v3$.sex.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.sex">{{
                errors3.sex[0]
              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span> تاريخ الميلاد </span>
                    <div class="input">
                      <input type="date" name="" v-model="form3.birth_date"  class="" />
                      <span class="error-msg" v-if="v3$.birth_date.$error">{{
                v3$.birth_date.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.birth_date">{{
                errors3.birth_date[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> المدينة </span>
                    <div class="input">
                      <Dropdown
                        v-model="form3.city_id"
                        :options="cities"
                        filter
                        optionLabel="name"
                        optionValue="id"
                        placeholder=""
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v3$.city_id.$error">{{
                v3$.city_id.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.city_id">{{
                errors3.city_id[0]
              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span> رقم الهوية </span>
                    <div class="input">
                      <input type="tel" v-model="form3.identity_no"  name=""  class="" />
                      <span class="error-msg" v-if="v3$.identity_no.$error">{{
                v3$.identity_no.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.identity_no">{{
                errors3.identity_no[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span>جهة العمل</span>
                    <div class="input">
                      <Dropdown
                        v-model="form3.sector"
                        :options="optionsCars.sectors"
                        filter
                        optionLabel="name"
                        optionValue="id"
                        placeholder="مثال : حكومي"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v3$.sector.$error">{{
                v3$.sector.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.sector">{{
                errors3.sector[0]
              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span>مبلغ الراتب</span>
                    <div class="input">
                      <input
                        type="number"
                        min="1"
                        placeholder="مثال : 25000 ر.س"
                      v-model="form3.salary"
                        name=""
                        class=""
                      />
                      <span class="error-msg" v-if="v3$.salary.$error">{{
                v3$.salary.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.salary">{{
                errors3.salary[0]
              }}</span>
                    </div>
                  </div>
                 
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span>جهة تحويل الراتب</span>
                    <div class="input">
                      <Dropdown
                        v-model="form3.bank"
                        :options="optionsCars.banks"
                        filter
                        optionLabel="name"
                        optionValue="id"
                        placeholder="مثال : مصرف الجارحي"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v3$.bank.$error">{{
                v3$.bank.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.bank">{{
                errors3.bank[0]
              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span> اجمالي الالتزامات الشهرية في سمة </span>
                    <div class="input">
                      <input
                        type="number"
                        min="1"
                        placeholder="مثال : 25000 ر.س"
                        name=""
                      v-model="form3.Monthly_cometment"
                        class=""
                      />
                      <span class="error-msg" v-if="v3$.Monthly_cometment.$error">{{
                v3$.Monthly_cometment.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.Monthly_cometment">{{
                errors3.Monthly_cometment[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> التحويل </span>
                    <div class="input">
                      <Dropdown
                        v-model="form3.transferd_type "
                        :options="transferArr"
                        filter
                        optionValue="value"
                        optionLabel="name"
                        placeholder="محول"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v3$.transferd_type.$error">{{
                v3$.transferd_type.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.transferd_type">{{
                errors3.transferd_type[0]
              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <div class="d-flex align-items-center gap-3">
                      <span> البريد الالكتروني</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3337 9.99999C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 9.99999C1.66699 5.39762 5.39795 1.66666 10.0003 1.66666C14.6027 1.66666 18.3337 5.39762 18.3337 9.99999ZM10.8337 5.83332C10.8337 6.29356 10.4606 6.66666 10.0003 6.66666C9.54009 6.66666 9.16699 6.29356 9.16699 5.83332C9.16699 5.37309 9.54009 4.99999 10.0003 4.99999C10.4606 4.99999 10.8337 5.37309 10.8337 5.83332ZM9.16699 7.70832C8.82182 7.70832 8.54199 7.98815 8.54199 8.33332C8.54199 8.6785 8.82182 8.95832 9.16699 8.95832H9.37533V14.1667C9.37533 14.5118 9.65515 14.7917 10.0003 14.7917C10.3455 14.7917 10.6253 14.5118 10.6253 14.1667V8.33332C10.6253 7.98815 10.3455 7.70832 10.0003 7.70832H9.16699Z"
                          fill="#90A3BF"
                        />
                      </svg>
                    </div>
                    <div class="input">
                      <input
                        type="email"
                        placeholder="مثال : Demo@gmail.com"
                      v-model="form3.email"
                        name=""
                        class=""
                      />
                      <span class="error-msg" v-if="v3$.email.$error">{{
                v3$.email.$errors[0].$message
              }}</span>
              <span class="error-msg" v-if="errors3.email">{{
                errors3.email[0]
              }}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex main-radio align-items-center w-100 justify-content-between"
                >
                  <div>
                    <span>هل يوجد تعثرات</span>
                    <v-radio-group v-model="form3.have_life_problem">
                      <div class="d-flex">
                        <div class="d-flex align-items-center">
                          <label for="radio-first-1">نعم</label>
                          <v-radio
                            id="radio-first-1"
                            color="#DCB63B"
                            name="radio-1"
                            :value="1"
                          ></v-radio>
                        </div>
                        <div class="d-flex align-items-center">
                          <label for="radio-sec-2"> لا </label>
                          <v-radio
                            id="radio-sec-2"
                            color="#DCB63B"
                            name="radio-1"
                            :value="0"
                          ></v-radio>
                        </div>
                      </div>
                    </v-radio-group>
                  </div>
                  <div>
                    <span> هل يوجد مخالفات مرورية </span>
                    <v-radio-group v-model="form3.traffic_violations">
                      <div class="d-flex">
                        <div class="d-flex align-items-center">
                          <label for="radio-first-3">نعم</label>
                          <v-radio
                            id="radio-first-3"
                            color="#DCB63B"
                            name="radio-1"
                            :value="1"
                          ></v-radio>
                        </div>
                        <div class="d-flex align-items-center">
                          <label for="radio-sec-4"> لا </label>
                          <v-radio
                            id="radio-sec-4"
                            color="#DCB63B"
                            name="radio-1"
                            :value="0"
                          ></v-radio>
                        </div>
                      </div>
                    </v-radio-group>
                  </div>
                  <div>
                    <span> هل يوجد رخصة القيادة </span>
                    <v-radio-group v-model="form3.driving_license">
                      <div class="d-flex">
                        <div class="d-flex align-items-center">
                          <label for="radio-first-5">نعم</label>
                          <v-radio
                            id="radio-first-5"
                            color="#DCB63B"
                            name="radio-1"
                            :value="1"
                          ></v-radio>
                        </div>
                        <div class="d-flex align-items-center">
                          <label for="radio-sec-6"> لا </label>
                          <v-radio
                            id="radio-sec-6"
                            color="#DCB63B"
                            name="radio-1"
                            :value="0"
                          ></v-radio>
                        </div>
                      </div>
                    </v-radio-group>
                  </div>
                  <div>
                    <span>هل يوجد قرض عقاري</span>
                    <v-radio-group v-model="form3.department_loan">
                      <div class="d-flex">
                        <div class="d-flex align-items-center">
                          <label for="radio-first-7">نعم</label>
                          <v-radio
                            id="radio-first-7"
                            color="#DCB63B"
                            name="radio-1"
                            :value="1"
                          ></v-radio>
                        </div>
                        <div class="d-flex align-items-center">
                          <label for="radio-sec-8"> لا </label>
                          <v-radio
                            id="radio-sec-8"
                            color="#DCB63B"
                            name="radio-1"
                            :value="0"
                          ></v-radio>
                        </div>
                      </div>
                    </v-radio-group>
                  </div>
                </div>
                <div class="btns">
                  <button @click="paymentIndividualBtn = 2" class="back">
                    الرجوع
                  </button>
                  <button @click="paymentFunc3()" :disabled="pending3" class="next">
                    التالي
                    <v-progress-circular v-if="pending3"  indeterminate :size="25" :width="4"></v-progress-circular>
                  </button>
                </div>
              </div>

              <div v-if="paymentIndividualBtn == 4" class="offers">
                <v-radio-group v-model="bank_offer_id">
                  <div class="row">
                    <div v-for="item , index in offers" class="col-12 col-xl-6 col-lg-6">
                      <label :for="`offer-${index}-1`" class="offer">
                        <div
                          class="d-flex align-items-center justify-content-between w-100"
                        >
                          <span class="name">{{ item.OfferName.title }}</span>
                          <v-radio
                            class="radio-input"
                            :id="`offer-${index}-1`"
                            color="#DCB63B"
                            name="offer-1"
                            :value="item.bank_offer_id"
                            v-model="bank_offer_id"
                          ></v-radio>
                        </div>
                        <div class="price">
                          <h4>{{ item.monthly_installment }}</h4>
                          <span> اجمالي القسط الشهري </span>
                        </div>
                        <v-divider></v-divider>
                        <div class="details">
                          <div class="detail">
                            <div class="d-flex align-items-center gap-2">
                              <img src="~/assets/images/det1.png" alt="" />
                              <span class="name">مبلغ التمويل</span>
                            </div>
                            <p class="price">{{ item.fundingAmount }} ريال سعودي</p>
                          </div>
                          <div class="detail">
                            <div class="d-flex align-items-center gap-2">
                              <img src="~/assets/images/det2.png" alt="" />
                              <span class="name">الدفعة الاولي</span>
                            </div>
                            <p class="price">{{ item.firs_installment }} ريال سعودي</p>
                          </div>
                          <div class="detail">
                            <div class="d-flex align-items-center gap-2">
                              <img src="~/assets/images/det3.png" alt="" />
                              <span class="name">مدة الاقساط</span>
                            </div>
                            <p class="price">{{ item.years }} سنة</p>
                          </div>
                          <div class="detail">
                            <div class="d-flex align-items-center gap-2">
                              <img src="~/assets/images/det4.png" alt="" />
                              <span class="name">الدفعة الاخيرة</span>
                            </div>
                            <p class="price">{{ item.last_installment }} ريال سعودي</p>
                          </div>
                          <div class="detail">
                            <div class="d-flex align-items-center gap-2">
                              <img src="~/assets/images/det5.png" alt="" />
                              <span class="name">الرسوم الادارية</span>
                            </div>
                            <p class="price">{{ item.sectorAdministrative_fees }} ريال سعودي</p>
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
                  <button @click="paymentFunc4()" class="next">
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
                        <p class="type mt-2">عرض رقم : {{ theOffer.bank_offer_id }}</p>
                      </div>
                      <div class="d-flex main flex-column">
                        <h6>{{theOffer.monthly_installment  }} ريال</h6>
                        <p class="type">اجمالي القسط الشهري</p>
                      </div>
                    </div>
                    <div class="offer-det">
                      <div class="d-flex align-items-start flex-column flex-xl-row flex-lg-row align-items-xl-center align-items-lg-center  gap-3">
                        <div class="d-flex align-items-center gap-4">
                          <div class="d-flex align-items-center gap-2">
                            <img src="~/assets/images/det1.png" alt="" />
                            <span>مبلغ التمويل</span>
                          </div>
                          <h6>{{ theOffer.fundingAmount }} ريال سعودي</h6>
                        </div>
                        <div class="d-flex align-items-center gap-3">
                          <div class="d-flex align-items-center gap-2">
                            <img src="~/assets/images/det2.png" alt="" />
                            <span>الدفعة الاخيرة</span>
                          </div>
                          <h6>{{ theOffer.last_installment }} ريال سعودي</h6>
                        </div>
                      </div>
                      <div class="d-flex align-items-start flex-column flex-xl-row flex-lg-row align-items-xl-center align-items-lg-center gap-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="d-flex align-items-center gap-2">
                            <img src="~/assets/images/det3.png" alt="" />
                            <span> الدفعة الاولي </span>
                          </div>
                          <h6>{{ theOffer.firs_installment }} ريال سعودي</h6>
                        </div>
                        <div class="d-flex align-items-center gap-3">
                          <div class="d-flex align-items-center gap-2">
                            <img src="~/assets/images/det4.png" alt="" />
                            <span>الرسوم الادارية</span>
                          </div>
                          <h6>{{ theOffer.sectorAdministrative_fees }} ريال سعودي</h6>
                        </div>
                      </div>
                      <div class="d-flex align-items-start flex-column flex-xl-row flex-lg-row align-items-xl-center align-items-lg-center gap-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="d-flex align-items-center gap-2">
                            <img src="~/assets/images/det3.png" alt="" />
                            <span> مدة الاقساط </span>
                          </div>
                          <h6>{{ theOffer.years }} ريال سعودي</h6>
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
                        <!-- <img src="~/assets/images/small-car.png" /> -->
                        <img :src="theOffer.car.main_image" />
                      </div>
                      <div class="d-flex flex-column gap-2">
                        <h6>{{ theOffer.car.main_title }}</h6>
                        <span>{{ theOffer.car.brand.title }} - {{ theOffer.car.model.title }} - {{ theOffer.car.color.title }} - {{ theOffer.car.year }}</span>
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
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4">
                      <label for="fileInput1" class="custom-file-upload">
                        <!-- <span>{{ buttonText }}</span> -->
                        <img src="~/assets/images/file1.png" />
                        <h6>صورة الهوية</h6>
                        <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                        <span v-if="selectedFileName1">{{
                          selectedFileName1
                        }}</span>
                        <input
                          type="file"
                          @change="handleFileChange1"
                          id="fileInput1"
                        />
                      </label>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4">
                      <label for="fileInput2" class="custom-file-upload">
                        <!-- <span>{{ buttonText }}</span> -->
                        <img src="~/assets/images/file2.png" />
                        <h6>صورة الرخصة</h6>
                        <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                        <span v-if="selectedFileName2">{{
                          selectedFileName2
                        }}</span>
                        <input
                          type="file"
                          @change="handleFileChange2"
                          id="fileInput2"
                        />
                      </label>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4">
                      <label for="fileInput3" class="custom-file-upload">
                        <!-- <span>{{ buttonText }}</span> -->
                        <img src="~/assets/images/file3.png" />
                        <h6>تعريف الراتب</h6>
                        <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                        <span v-if="selectedFileName3">{{
                          selectedFileName3
                        }}</span>
                        <input
                          type="file"
                          @change="handleFileChange3"
                          id="fileInput3"
                        />
                      </label>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4">
                      <label for="fileInput4" class="custom-file-upload">
                        <!-- <span>{{ buttonText }}</span> -->
                        <img src="~/assets/images/file4.png" />
                        <h6>برنت التأمينات</h6>
                        <span>يمكنك تحميل المرفق بصيغة PDF أو JPG.</span>
                        <span v-if="selectedFileName4">{{
                          selectedFileName4
                        }}</span>
                        <input
                          type="file"
                          @change="handleFileChange4"
                          id="fileInput4"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="btns">
                    <button @click="paymentIndividualBtn = 4" class="back">
                      العودة للعروض
                    </button>
                    <button
                      @click="paymentFunc5()"
                      class="next"
                    >
                      ارسال الطلب
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="paymentMethod == 2" class="row">
            <div class="col-12 col-xl-5 col-lg-5">
              <div class="main-pagination-container finance">
                <div class="pagination-container">
                  <div class="contain">
                    <div class="icon" :class="{ active: paymentSec1 == 1 }">
                      <img
                        class="def"
                        src="@/assets/images/calc-icon2.svg"
                        alt=""
                      />
                      <img
                        class="active"
                        src="@/assets/images/calc-icon-active2.svg"
                        alt=""
                      />
                    </div>
                    <div class="icon" :class="{ active: paymentSec2 == 1 }">
                      <img
                        class="def"
                        src="@/assets/images/calc-icon2.svg"
                        alt=""
                      />
                      <img
                        class="active"
                        src="@/assets/images/calc-icon-active2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="text">
                    <div>
                      <h5 :class="{ active: paymentSec1 == 1 }">
                        بيانات السيارة
                      </h5>
                    </div>
                    <div>
                      <h5 :class="{ active: paymentSec2 == 1 }">
                        بيانات المنشأة
                      </h5>
                    </div>
               
                  </div>
                </div>

                <div class="content-pagination ">
                  <div>
                    <h5 :class="{ active: paymentSec1 == 1 }">
                      بيانات السيارة
                    </h5>
                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                  </div>
                  <div>
                    <h5 :class="{ active: paymentSec2 == 1 }">
                      بيانات المنشأة
                    </h5>
                    <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                  </div>
                </div>
                <div class="pagination-container ">
                <div class="contain second">
                  <div
                    class="dot"
                    :class="{ active: paymentSec1 == 1 , check: checkBtnSec1 == 1 }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentSec2 == 1 , check: checkBtnSec2 == 1}"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                
                
                </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-7 col-lg-7">
              <div v-if="paymentIndividualBtn2 == 1" v-for="item , index in form" class="form-ind">
              <div v-if="form.length > 1" class="d-flex justify-content-end">
                <i @click="removeRow(index)" class="fa-solid fa-trash"></i>
              </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> ماركة السيارة </span>
                    <div class="input">
                      <Dropdown
                        v-model="item.brand"
                        :options="brands"
                        filter
                        optionLabel="title"
                        optionValue="id"
                        placeholder="مثال : شركة"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.title }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v$[index].brand.$error">{{
                                v$[index].brand.$errors[0].$message
                              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span> موديل السيارة</span>
                    <div class="input">
                      <Dropdown
                        v-model="item.model"
                        :options="getmodels2[index][0] ? getmodels2[index][0].models : ''"
                        filter
                        optionLabel="name"
                        optionValue="id"
                        placeholder=""
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                                <span class="error-msg" v-if="v$[index].model.$error">{{
                                v$[index].model.$errors[0].$message
                              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> سنة الصنع </span>
                    <div class="input">
                      <Dropdown
                        v-model="item.year"
                        :options="years"
                        filter
                        optionLabel=""
                        placeholder=""
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option }}</div>
                          </div>
                        </template>
                      </Dropdown>

                      <span class="error-msg" v-if="v$[index].year.$error">{{
                                v$[index].year.$errors[0].$message
                              }}</span>
                    </div>
                  </div>
                  <div class="input-container">
                    <span> نوع المحرك </span>
                    <div class="input">
                    <Dropdown
                        v-model="item.gear_shifter"
                        :options="gear_shifterArr"
                        filter
                        optionLabel="name"
                        optionValue="value"
                        placeholder=""
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                    
                    <span class="error-msg" v-if="v$[index].gear_shifter.$error">{{
                                v$[index].gear_shifter.$errors[0].$message
                              }}</span>
                    
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span>اللون</span>
                    <div class="input">
                      <Dropdown
                        v-model="item.color"
                        :options="optionsCars.colors"
                        filter
                        optionLabel="title"
                        optionValue="id"
                        placeholder="رصاصي"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.title }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v$[index].color.$error">{{
                                v$[index].color.$errors[0].$message
                              }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> عدد السيارات المطلوبة</span>
                    <div class="input">
                      <input
                        type="number"
                        min="1"
                        v-model="item.car_count"
                        placeholder="3 سيارات"
                        name=""
                        class=""
                      />
                      <span class="error-msg" v-if="v$[index].car_count.$error">{{
                                v$[index].car_count.$errors[0].$message
                              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row justify-content-between align-items-center">
                <div @click="addRow()" class="add d-flex align-items-center gap-2 mb-3" style="cursor:pointer;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.9997 0.833374H3.99968C2.25077 0.833374 0.833008 2.25114 0.833008 4.00004V12C0.833008 13.7489 2.25077 15.1667 3.99968 15.1667H11.9997C13.7486 15.1667 15.1663 13.7489 15.1663 12V4.00004C15.1663 2.25114 13.7486 0.833374 11.9997 0.833374Z" fill="#DCB63B"/>
  <path d="M7.99967 11.3334C7.82286 11.3334 7.65329 11.2632 7.52827 11.1382C7.40325 11.0131 7.33301 10.8436 7.33301 10.6667V5.33341C7.33301 5.1566 7.40325 4.98703 7.52827 4.86201C7.65329 4.73699 7.82286 4.66675 7.99967 4.66675C8.17649 4.66675 8.34605 4.73699 8.47108 4.86201C8.5961 4.98703 8.66634 5.1566 8.66634 5.33341V10.6667C8.66634 10.8436 8.5961 11.0131 8.47108 11.1382C8.34605 11.2632 8.17649 11.3334 7.99967 11.3334Z" fill="white"/>
  <path d="M5.33268 8.66671C5.15587 8.66671 4.9863 8.59647 4.86128 8.47144C4.73625 8.34642 4.66602 8.17685 4.66602 8.00004C4.66602 7.82323 4.73625 7.65366 4.86128 7.52864C4.9863 7.40361 5.15587 7.33337 5.33268 7.33337H10.666C10.8428 7.33337 11.0124 7.40361 11.1374 7.52864C11.2624 7.65366 11.3327 7.82323 11.3327 8.00004C11.3327 8.17685 11.2624 8.34642 11.1374 8.47144C11.0124 8.59647 10.8428 8.66671 10.666 8.66671H5.33268Z" fill="white"/>
</svg>
                 <span style="color:#DCB63B; font-size: 14px;">اضافة سيارة اخري </span>
                </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
              
                  <button v-if="paymentIndividualBtn2 == 1" :disabled="pendingCorp1" class="corpBtn d-flex align-items-center gap-2" @click=" sendCorporate1()">
                  التالي
                  <v-progress-circular v-if="pendingCorp1"   indeterminate :size="25" :width="4"></v-progress-circular>
                  </button>
              </div>
              <div v-if="paymentIndividualBtn2 == 2" class="form-ind">
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> اسم المنشأة</span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder=""
                        name=""
                        v-model="form4.organization_name"
                        class=""
                      />
                      <span class="error-msg" v-if="v4$.organization_name.$error">{{
                v4$.organization_name.$errors[0].$message
              }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> نوع المنشأة </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder=""
                        name=""
                        v-model="form4.organization_type"
                        class=""
                      />
                      <span class="error-msg" v-if="v4$.organization_type.$error">{{
                v4$.organization_type.$errors[0].$message
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> رقم السجل التجاري</span>
                    <div class="input">
                      <input
                        type="tel"
                        placeholder="مثال : 3333-5555-9999-55"
                        name=""
                        v-model="form4.commercial_registration_no"
                        class=""
                      />
                      <span class="error-msg" v-if="v4$.commercial_registration_no.$error">{{
                v4$.commercial_registration_no.$errors[0].$message
              }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> نشاط المنشأة </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder=""
                        name=""
                        v-model="form4.organization_activity"
                        class=""
                      />
                      <span class="error-msg" v-if="v4$.organization_activity.$error">{{
                v4$.organization_activity.$errors[0].$message
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> اسم الشخص المسؤول </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder="مثال : محمد سيد"
                        name=""
                        v-model="form4.name"
                        class=""
                      />
                      <span class="error-msg" v-if="v4$.name.$error">{{
                v4$.name.$errors[0].$message
              }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> رقم الهاتف </span>
                    <div class="input">
                      <input
                        type="tel"
                        placeholder="مثال : 3333-5555-9999-55"
                        name=""
                        v-model="form4.phone"
                        class=""
                      />
                      <span class="error-msg" v-if="v4$.phone.$error">{{
                v4$.phone.$errors[0].$message
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> عمر المنشأة </span>
                    <div class="input">
                      <input
                        type="number"
                        min="1"
                        placeholder="مثال : 4 سنوات"
                        name=""
                        v-model="form4.organization_age"
                        class=""
                      />
                      <span class="error-msg" v-if="v4$.organization_age.$error">{{
                v4$.organization_age.$errors[0].$message
              }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> المدينة </span>
                    <div class="input">
                      <Dropdown
                        v-model="form4.city_id"
                        :options="cities"
                        filter
                        optionLabel="name"
                        optionValue="id"
                        placeholder="ابها"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v4$.city_id.$error">{{
                v4$.city_id.$errors[0].$message
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> حساب المنشأة لدي البنك</span>
                    <div class="input">
                      <Dropdown
                        v-model="form4.bank_id"
                        :options="optionsCars.banks"
                        filter
                        optionLabel="name"
                        optionValue="id"
                        placeholder="مثال : مصرف الجارحي"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v4$.bank_id.$error">{{
                v4$.bank_id.$errors[0].$message
              }}</span>
                    </div>
                  </div>
                </div>
                <div class="btns">
                  <button @click="paymentIndividualBtn2 = 1" class="back">
                    الرجوع
                  </button>
                  <button
                    @click="sendCorporate2()"
                    class="next gap-2"
                    :disabled="pendingCorp2"
                  >
                    ارسال الطلب
                  <v-progress-circular v-if="pendingCorp2"   indeterminate :size="25" :width="4"></v-progress-circular>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showConfirm" class="confirm-container">
        <div v-if="paymentOtp == 1" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="otpp" :height="200" :width="200" />
          </client-only>
          <h4>تم ارسال الكود!</h4>
          <p>
            شكرًا لثقتك في كود كار! لضمان أمان معلوماتك وتأكيد طلبك، ارسلنا كود
            تحقق عبر رسالة نصية إلى رقم هاتفك المسجل. يرجى إدخال الكود في الخانة
            المخصصة أدناه
          </p>

          <v-otp-input v-model="otp" :length="4" placeholder="-"></v-otp-input>
          {{ otp }}
          <button class="resend">اعد ارسال الكود</button>

          <button @click="paymentIndividualBtn = 7" class="send">متابعة</button>
        </div>
        <div v-if="paymentOtp == 2" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>تم ارسال طلبك بنجاح!</h4>
          <p>
            تم إرسال طلبك بنجاح! يمكنك متابعة حالة الطلب وجميع التفاصيل المتعلقة
            به من خلال تتبع طلبك في الصفحة الرئيسية
          </p>

          <div class="order-number">
            <h5>رقم الطلب : <span>200715DXFMW0UD</span></h5>
            <img src="~/assets/images/Copy.png" />
          </div>

          <nuxt-link to="/">
            <button class="send home">الرجوع للرئيسية</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import otpp from "~/assets/animations/otp.json";
import success from "~/assets/animations/success.json";
import { Vue3Lottie } from "vue3-lottie";
import useValidate from "@vuelidate/core";
import axios from "axios";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { useStore } from "~/store";
let store = useStore;
const localePath = useLocalePath();
const { locale } = useI18n();
let paymentMethod = ref(1);
let sliderValue1 = ref(20000);
let sliderValue2 = ref(5);
let sliderValue3 = ref(20000);
let showConfirm = ref(false);
let minNum = ref(0);
let maxNum = ref(0);
const selectedFileName1 = ref(null);
const selectedFileName2 = ref(null);
const selectedFileName3 = ref(null);
const selectedFileName4 = ref(null);
let otp = ref("");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let paymentOtp = ref(1);
let years = ref([]);
for (let i = currentYear; i >= currentYear - 14; i--) {
  years.value.push(i);
}

let optionsCars = ref([]);
let brands = ref([]);

let bank_offer_id = ref(null);
const getOptions = async () => {
  let result = await axios.get(`${getUrl()}/car-option`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  optionsCars.value = result.data.data;
  brands.value = result.data.data.brands;
    minNum.value = parseInt(result.data.data.Slider.minPrice);
  maxNum.value =  parseInt(result.data.data.Slider.maxPrice);
};
let paymentBtn1 = ref(1);
let paymentBtn2 = ref(0);
let paymentBtn3 = ref(0);
let paymentBtn4 = ref(0);
let paymentBtn5 = ref(0);
let checkBtn1 = ref(0);
let checkBtn2 = ref(0);
let checkBtn3 = ref(0);
let checkBtn4 = ref(0);
let checkBtn5 = ref(0);



let paymentSec1 = ref(1);
let paymentSec2 = ref(0);
let checkBtnSec1 = ref(0);
let checkBtnSec2 = ref(0);
let gear_shifterArr = ref([
  {
    value:"manual",
    name: locale.value == 'ar' ? 'مانوال' : 'manual'
  },
  {
    value:"automatic",
    name: locale.value == 'ar' ? 'اوتوماتيك' : 'automatic'
  },
]);

let sexArr = ref([
  {
    value:"female",
    name: locale.value == 'ar' ? 'انثي' : 'female'
  },
  {
    value:"male",
    name: locale.value == 'ar' ? 'ذكر' : 'male'
  },
]);

let transferArr = ref([
  {
    value:"transfer",
    name: locale.value == 'ar' ? 'محول' : 'transfer'
  },
  {
    value:"untransfer",
    name: locale.value == 'ar' ? 'غير محول' : 'untransfer'
  },
]);

let selectedBrand = ref();
let form2 = ref({
    brand:'',
    model:'',
    year:'',
    gear_shifter:'',
    color_id:'',
});
let form3 = ref({
  client_name:'OmarMahran',
  phone:'0588666453',
  sex:'male',
  birth_date:'13/4/1997',
  city_id:2,
  identity_no:334,
  sector:1,
  salary:10000,
  bank:1,
  Monthly_cometment:1000,
  transferd_type :'transfer',
  email:'oamr@gmail.com',
  have_life_problem:0,
  traffic_violations:1,
  department_loan:1,
  driving_license:1,
});



let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
let value5 = ref("يجب أن يكون عدد السيارات 1 سيارة على الأقل");
let checkSlider = ref(locale.value == "ar" ? true : false);
if (locale.value == "ar") {
  value1.value = "هذا الحقل مطلوبة";
  value2.value = "حقل البريد الإلكتروني مطلوب";
  value3.value = "تنسيق البريد الإلكتروني غير صالح";
  value5.value = "يجب أن يكون عدد السيارات 1 سيارة على الأقل";
} else {
  value1.value = "value is required";
  value2.value = "The email field is required";
  value3.value = "Invalid email format";
  value5.value = "The number of cars must be at least 1 car";
}

const rules2 = computed(()=>{
    return {
    brand: { required: helpers.withMessage(value1.value, required) },
    model: { required: helpers.withMessage(value1.value, required) },
    year: { required: helpers.withMessage(value1.value, required) },
    gear_shifter: { required: helpers.withMessage(value1.value, required) },
    color_id: { required: helpers.withMessage(value1.value, required) },
}
});
const rules3 = computed(()=>{
    return {
      client_name: { required: helpers.withMessage(value1.value, required) },
      phone: { required: helpers.withMessage(value1.value, required) },
      year: { required: helpers.withMessage(value1.value, required) },
      sex: { required: helpers.withMessage(value1.value, required) },
      birth_date: { required: helpers.withMessage(value1.value, required) },
      city_id: { required: helpers.withMessage(value1.value, required) },
      identity_no: { required: helpers.withMessage(value1.value, required) },
      sector: { required: helpers.withMessage(value1.value, required) },
      salary: { required: helpers.withMessage(value1.value, required) },
      transferd_type: { required: helpers.withMessage(value1.value, required) },
      bank: { required: helpers.withMessage(value1.value, required) },
      Monthly_cometment: { required: helpers.withMessage(value1.value, required) },
      have_life_problem: { required: helpers.withMessage(value1.value, required) },
      traffic_violations: { required: helpers.withMessage(value1.value, required) },
      department_loan: { required: helpers.withMessage(value1.value, required) },
      driving_license: { required: helpers.withMessage(value1.value, required) },
      email: { required: helpers.withMessage(value2.value, required) , email: helpers.withMessage(value3.value, email) },
  }
});

let errors2 = ref([]);
let errors3 = ref([]);
let pending1 = ref(false);
let pending2 = ref(false);
let pending3 = ref(false);
let pending4 = ref(false);
let pending5 = ref(false);
const v2$ = useValidate(rules2, form2);
const v3$ = useValidate(rules3, form3);
// const v4$ = useValidate(rules4, form4);

const isFormFilled3 = () => {
  // Iterate through each object in the form array
  for (const car of form3.value) {
    // Check if any key in the object has an empty value
    for (const key in car) {
      if (car[key] === '') {
        // If any key is empty, return false
        return false;
      }
    }
  }

  // If all keys in all objects have values, return true
  return true;
};
let offers = ref([]);
let theOffer = ref();
let theCar = ref();

const paymentFunc1 = async() => {
  pending1.value = true;
  let formBody = new FormData();
  formBody.append("first_batch", sliderValue1.value);
  formBody.append("installment", sliderValue2.value);
  formBody.append("last_batch", sliderValue3.value);
  let result = await axios.post(`${getUrl()}/finance-Order`, formBody , {
    params: {
        type: paymentMethod.value == 1 ? 'individual' : 'company',
        step: 1
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if(result.status >= 200){
    pending1.value = false;
    paymentBtn2.value = 1;
  checkBtn1.value = 1;
  paymentIndividualBtn.value = 2;
  }
};
const paymentFunc2 = async() => {

  let formBody = new FormData();
  formBody.append("brand", form2.value.brand);
  formBody.append("model", form2.value.model);
  formBody.append("year", form2.value.year);
  formBody.append("gear_shifter", form2.value.gear_shifter);
  formBody.append("color_id", form2.value.color_id);
  let check = await v2$.value.$validate();
  if (check) {
 
  pending2.value = true;
    try {
      let result = await axios.post(`${getUrl()}/finance-Order`, formBody, {
        params: {
          type: paymentMethod.value == 1 ? 'individual' : 'company',
          step: 2
      },
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        paymentIndividualBtn.value = 3;
            paymentBtn3.value = 1;
          checkBtn2.value = 1;
        pending2.value = false;
        errors2.value = [];
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pending2.value = false;
        errors2.value = errorss.response.data.errors;
      }
    }
  }
};
const paymentFunc3 = async() => {

  let formBody = new FormData();
  formBody.append("brand", form2.value.brand);
  formBody.append("model", form2.value.model);
  formBody.append("year", form2.value.year);
  formBody.append("gear_shifter", form2.value.gear_shifter);
  formBody.append("color_id", form2.value.color_id);
  formBody.append("client_name", form3.value.client_name);
  formBody.append("phone", form3.value.phone);
  formBody.append("sex", form3.value.sex);
  formBody.append("birth_date", form3.value.birth_date);
  formBody.append("city_id", form3.value.city_id);
  formBody.append("identity_no", form3.value.identity_no);
  formBody.append("sector", form3.value.sector);
  formBody.append("salary", form3.value.salary);
  formBody.append("bank", form3.value.bank);
  formBody.append("Monthly_cometment", form3.value.Monthly_cometment);
  formBody.append("transferd_type", form3.value.transferd_type);
  formBody.append("email", form3.value.email);
  formBody.append("have_life_problem", form3.value.have_life_problem);
  formBody.append("traffic_violations", form3.value.traffic_violations);
  formBody.append("department_loan", form3.value.department_loan);
  formBody.append("driving_license", form3.value.driving_license);
   v3$.value.$validate();
  pending3.value = true;
  if(isFormFilled3()){
    try {
      let result = await axios.post(`${getUrl()}/finance-Order`,formBody, {
        params: {
          type: paymentMethod.value == 1 ? 'individual' : 'company',
          step: 3
        },
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        paymentIndividualBtn.value = 4;
        paymentBtn4.value = 1;
       checkBtn3.value = 1;
        pending3.value = false;
        errors3.value = [];
        offers.value = result.data.data;
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pending3.value = false;
        errors3.value = errorss.response.data.errors;
      }
    }


  }
  // if (check) {
  // } else{
  //   console.log(form3.value);
  // }
};


const paymentFunc4 = async () => {
  let formBody = new FormData();
  formBody.append("brand", form2.value.brand);
  formBody.append("model", form2.value.model);
  formBody.append("year", form2.value.year);
  formBody.append("sector", form3.value.sector);
  formBody.append("gear_shifter", form2.value.gear_shifter);
  formBody.append("bank_offer_id", bank_offer_id.value);
  formBody.append("color_id", form2.value.color_id);
  formBody.append("bank", form3.value.bank);
  pending4.value = true;
  if(bank_offer_id.value){
    let result = await axios.post(`${getUrl()}/finance-Order`, formBody, {
      params: {
        type: paymentMethod.value == 1 ? 'individual' : 'company',
        step: 4
    },
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    if (result.status >= 200) {
      paymentIndividualBtn.value = 5;
      paymentBtn5.value = 1;
      checkBtn4.value = 1;
      pending4.value = false;
      theOffer.value = result.data.data
      // theOffer.value = result.data.data
    }
  }
 
};
const paymentFunc5 = async () => {
  let formBody = new FormData();
  // formBody.append("brand", form2.value.brand);
  formBody.append("brand", form2.value.brand);
  formBody.append("model", form2.value.model);
  formBody.append("year", form2.value.year);
  formBody.append("gear_shifter", form2.value.gear_shifter);
  formBody.append("color_id", form2.value.color_id);
  formBody.append("client_name", form3.value.client_name);
  formBody.append("phone", form3.value.phone);
  formBody.append("sex", form3.value.sex);
  formBody.append("birth_date", form3.value.birth_date);
  formBody.append("city_id", form3.value.city_id);
  formBody.append("identity_no", form3.value.identity_no);
  formBody.append("sector", form3.value.sector);
  formBody.append("salary", form3.value.salary);
  formBody.append("bank", form3.value.bank);
  formBody.append("Monthly_cometment", form3.value.Monthly_cometment);
  formBody.append("transferd_type", form3.value.transferd_type);
  formBody.append("email", form3.value.email);
  formBody.append("have_life_problem", form3.value.have_life_problem);
  formBody.append("traffic_violations", form3.value.traffic_violations);
  formBody.append("department_loan", form3.value.department_loan);
  formBody.append("driving_license", form3.value.driving_license);
  formBody.append("bank_offer_id", bank_offer_id.value);
  formBody.append("identity_Card", selectedFileName1.value);
  formBody.append("License_Card", selectedFileName2.value);
  formBody.append("Hr_Letter_Image", selectedFileName3.value);
  formBody.append("Insurance_Image", selectedFileName4.value);
  pending5.value = true;
  let result = await axios.post(`${getUrl()}/finance-Order`, formBody, {
    params: {
      type: paymentMethod.value == 1 ? 'individual' : 'company',
      step: 5
  },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if (result.status >= 200) {
    paymentIndividualBtn.value = 6;
    // paymentBtn5.value = 1;
    // checkBtn4.value = 1;
    showConfirm.value = true;
    pending5.value = false;
  }
 
};

const sendOtp = async()=>{
  let formBody = new FormData();
  formBody.append("identity_Card", selectedFileName1.value);

  try {
    let result = await axios.post(`${getUrl()}/finance-Order`,formBody, {
      params: {
        type: paymentMethod.value == 1 ? 'individual' : 'company',
        step: 5
      },
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    if (result.status >= 200) {
      paymentIndividualBtn.value = 7;
      errors3.value = [];
    }
  } catch (errorss) {
    console.log(errorss);
    if (errorss.response) {
      pending3.value = false;
      errors3.value = errorss.response.data.errors;
    }
  }
}


const handleFileChange1 = (event) => {
  selectedFileName1.value = event.target.files[0] || null;
  console.log(selectedFileName1.value);
};
const handleFileChange2 = (event) => {
  selectedFileName2.value = event.target.files[0] || null;
  console.log(selectedFileName2.value);
};
const handleFileChange3 = (event) => {
  selectedFileName3.value = event.target.files[0] || null;
  console.log(selectedFileName3.value);
};
const handleFileChange4 = (event) => {
  selectedFileName4.value = event.target.files[0] || null;
  console.log(selectedFileName4.value);
};
const selectedCountry = ref();
const countries = ref([
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "United States", code: "US" },
]);

let selectedCity = ref();
let cities = ref([]);
const getCites = async () =>{
  let result = await axios.get(`${getUrl()}/cities`,{
    headers:{
      "Content-Language": `${locale.value}`
    }
  });
  cities.value = result.data.data;
}

const getmodels = computed(()=>{
  return optionsCars.value.brands.filter((ele)=>{
    return form2.value.brand == ele.id
  });
});


let paymentIndividualBtn = ref(1);
let paymentIndividualBtn2 = ref(1);

let form = ref([
   { 
    brand: '', 
    model: '',
    year:'',
    color:'',
    gear_shifter:'',
    car_count:1
  }
]);



const addRow = () => {
   form.value.push(
    { 
    brand: '', 
    model: '',
    year:'',
    color:'',
    gear_shifter:'',
    car_count:0 
  }
   );
}

const removeRow = (index) => {
   if (form.value.length > 1) {
      form.value.splice(index, 1);
   }

}


const isFormFilled = () => {
  // Iterate through each object in the form array
  for (const car of form.value) {
    // Check if any key in the object has an empty value
    for (const key in car) {
      if (car[key] === '' || car[key] == 0) {
        // If any key is empty, return false
        return false;
      }
    }
  }

  // If all keys in all objects have values, return true
  return true;
};



const getmodels2 = computed(()=>{

return form.value.map((ele)=>{
return optionsCars.value.brands.filter((e)=>{
  return ele.brand == e.id
})
});
});


// const rules = computed(()=>{
//     return form.value.map(()=>{
//       brand: { required: helpers.withMessage(value1.value, required) },
//       model: { required: helpers.withMessage(value1.value, required) },
//       year: { required: helpers.withMessage(value1.value, required) },
//       gear_shifter: { required: helpers.withMessage(value1.value, required) },
//       color: { required: helpers.withMessage(value1.value, required) },
//     }) 
// });


let errors4 = ref([]);
const rules = computed(() => form.value.map(() => ({
      name: { required },
      email: { required, email },
      brand: { required: helpers.withMessage(value1.value, required) },
      model: { required: helpers.withMessage(value1.value, required) },
      year: { required: helpers.withMessage(value1.value, required) },
      gear_shifter: { required: helpers.withMessage(value1.value, required) },
      color: { required: helpers.withMessage(value1.value, required) },
          car_count: { required: helpers.withMessage(value1.value, required) , minLength: helpers.withMessage(value5.value , minLength(1))  },
    })));


    let form4 = ref(
   { 
    organization_name: '', 
    organization_type: '',
    commercial_registration_no:'',
    organization_activity:'',
    name:'',
    phone:'',
    organization_age:'',
    city_id:'',
    bank_id:''
  }
);
    const rules4 = computed(()=>{
    return {
      organization_name: { required: helpers.withMessage(value1.value, required) },
      organization_type: { required: helpers.withMessage(value1.value, required) },
      commercial_registration_no: { required: helpers.withMessage(value1.value, required) },
      organization_activity: { required: helpers.withMessage(value1.value, required) },
      name: { required: helpers.withMessage(value1.value, required) },
      city_id: { required: helpers.withMessage(value1.value, required) },
      phone: { required: helpers.withMessage(value1.value, required) },
      organization_age: { required: helpers.withMessage(value1.value, required) },
      bank_id: { required: helpers.withMessage(value1.value, required) },
      // email: { required: helpers.withMessage(value2.value, required) , email: helpers.withMessage(value3.value, email) },
  }
});


const isFormFilled2 = () => {
  // Iterate through each object in the form array
  for (const key in form4.value) {
    // Check if any key in the object has an empty value
    if (form4.value[key] === '') {
      // If any value is empty, return false
      return false;
    }
  }

  // If all keys in all objects have values, return true
  return true;
};

    const v$ = useValidate(rules, form);
    const v4$ = useValidate(rules4, form4);

    let pendingCorp1 = ref(false);
    let pendingCorp2 = ref(false);
const sendCorporate1 = async() =>{
  // let formBody = new FormData();
  // formBody.append("brand", form2.value.brand);
  // formBody.append("model", form2.value.model);
  // formBody.append("year", form2.value.year);
  // formBody.append("gear_shifter", form2.value.gear_shifter);
  // formBody.append("color_id", form2.value.color_id);
  // let check = await v$.value.$validate();
   v$.value.$validate();

  if(isFormFilled()){
    pendingCorp1.value = true;
    let result = await axios.post(`${getUrl()}/finance-Order`, {cars:JSON.stringify(form.value)} ,  {
      params: {
          type:'organization',
          step: 1
      },
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    
    if(result.status >= 200){
      pendingCorp1.value = false;
      paymentSec2.value = 1
      checkBtnSec1.value = 1;
      paymentIndividualBtn2.value = 2;
    }

  }
}
const sendCorporate2 = async() =>{
  // let formBody = new FormData();
  // formBody.append("brand", form2.value.brand);
  // formBody.append("model", form2.value.model);
  // formBody.append("year", form2.value.year);
  // formBody.append("gear_shifter", form2.value.gear_shifter);
  // formBody.append("color_id", form2.value.color_id);
  // let check = await v$.value.$validate();
   v4$.value.$validate();

  if(isFormFilled2()){
    pendingCorp2.value = true;
    try{
      let result = await axios.post(`${getUrl()}/finance-Order`, 
      {
        cars:form.value,
        organization_name: form4.value.organization_name,
        organization_type: form4.value.organization_type,
        commercial_registration_no: form4.value.commercial_registration_no,
        organization_activity: form4.value.organization_activity,
        name: form4.value.name,
        phone: form4.value.phone,
        organization_age: form4.value.organization_age,
        city_id: form4.value.city_id,
        bank_id: form4.value.bank_id,
      } ,  
      {
        params: {
            type:'organization',
            step: 2
        },
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      
      if(result.status >= 200){
        pendingCorp2.value = false
        showConfirm.value = true;
      }

    } catch(errorss){
      if (errorss.response) {
        pendingCorp2.value = false;
        errors4.value = errorss.response.data.errors;
      }
    }
  }
}


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


onMounted(() => {
    getOptions();
    getCites();  
})
</script>

<style lang="scss" scoped>

.corpBtn{
  display: flex;
width: 200px;
height: 48px;
padding: 8px 16px;
justify-content: center;
align-items: center;
align-content: center;
gap: 8px;
border-radius: 12px;
color: #fff;
font-weight: 700;
background:  #2D3A4A;
}
.finance-container {
  margin-top: 72px !important;
  margin-bottom: 140px;
  min-height: 100vh;
}
</style>
