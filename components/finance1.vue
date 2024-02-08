<template>
    <div>
          <div  class="row">
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
                            src="@/assets/images/package.svg"
                            alt=""
                          />
                          <img
                            class="active"
                            src="@/assets/images/package-active.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="text">
                        <div>
                          <h5 :class="{ active: paymentBtn1 == 1 }">
                            {{$t('finance1')}}
                          </h5>
                        </div>
                        <div>
                          <h5 :class="{ active: paymentBtn2 == 1 }">
                            {{$t('finance2')}}
                            
                          </h5>
                        </div>
                        <div>
                          <h5 :class="{ active: paymentBtn3 == 1 }">
                            {{$t('finance3')}}
                            
                          </h5>
                        </div>
                        <div>
                          <h5 :class="{ active: paymentBtn4 == 1 }">
                            {{$t('finance4')}}
                           
                          </h5>
                        </div>
                        <div>
                          <h5 :class="{ active: paymentBtn5 == 1 }">
                            {{ $t('finance5') }}
                          
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div class="content-pagination">
                      <div>
                        <h5 :class="{ active: paymentBtn1 == 1 }">
                            {{$t('finance1')}}
                
                        </h5>
                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                      </div>
                      <div>
                        <h5 :class="{ active: paymentBtn2 == 1 }">
                         {{ $t('finance2') }}

                        </h5>
                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                      </div>
                      <div>
                        <h5 :class="{ active: paymentBtn3 == 1 }">
                          {{ $t('finance3') }}

                        </h5>
                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                      </div>
                      <div>
                        <h5 :class="{ active: paymentBtn4 == 1 }">
                            {{$t('finance4')}}
                        
                        </h5>
                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                      </div>
                      <div >
                        <h5 :class="{ active: paymentBtn5 == 1 }">
                            {{ $t('finance5') }}
                        
                        </h5>
                        <span> هذا النص هو مثال حي يمكن ان يستبدل في </span>
                      </div>
                    </div>
                    <div class="pagination-container ">
                    <div class="contain second">
                      <div
                        class="dot"
                        :class="{ active: paymentBtn1 == 1, check: checkBtn1 == 1 }"
                      >
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <div
                        class="dot"
                        :class="{ active: paymentBtn2 == 1, check: checkBtn2 == 1 }"
                      >
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <div
                        class="dot"
                        :class="{ active: paymentBtn3 == 1, check: checkBtn3 == 1 }"
                      >
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <div
                        class="dot"
                        :class="{ active: paymentBtn4 == 1, check: checkBtn4 == 1 }"
                      >
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <div
                        class="dot"
                        :class="{ active: paymentBtn5 == 1, check: checkBtn5 == 1 }"
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
                
                      <span class="word">{{$t('calc1')}}</span>
                      <v-slider
                        v-model="sliderValue1"
                        :min="minNum"
                        :max="maxNum"
                        step="5"
                        thumb-label="always"
                        class="custom-slider mt-5"
                        @input="updateRange()"
                        :reverse="checkSlider"
                      >
                        <template v-slot:thumb-label="{ value }">
                          <div class="d-flex align-items-center gap-2">
                            <!-- <span> {{ $t('curr') }} </span> -->
                            % {{ sliderValue1 }}
                          </div>
                        </template>
                      </v-slider>
                    </div>
                    <div class="d-flex flex-column range-slider">
                      <span class="word">
                      {{$t('calc2')}}
                      </span>
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
                            <span> {{$t('year')}} </span>
                            {{ sliderValue2 }}
                          </div>
                        </template>
                      </v-slider>
                    </div>
                    <div class="d-flex flex-column range-slider">
                      <span class="word">
                       {{$t('calc3')}}
                      </span>

                      <v-slider
                        v-model="sliderValue3"
                        :min="minNum"
                        :max="maxNum"
                        step="5"
                        thumb-label="always"
                        class="custom-slider mt-5"
                        @input="updateRange()"
                        :reverse="checkSlider"
                      >
                        <template v-slot:thumb-label="{ value }">
                          <div class="d-flex align-items-center gap-2">
                            <!-- <span> {{ $t('curr') }} </span> -->
                            % {{ sliderValue3 }}
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
                         {{$t('next')}}
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
                        <span> {{$t('carBrand')}}</span>
                        <div class="input">
                          <Dropdown
                            v-model="form2.brand"
                            :options="brands"
                          :filter-placeholder="$t('search')"
                            filter
                            optionValue="id"
                            optionLabel="title"
                            :placeholder="$t('examplee2')"
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
                  <span class="error-msg position-relative" v-if="errors2.brand">{{
                      errors2.brand[0]
                  }}</span>
                        </div>
                      </div>
                      <div class="input-container">
                        <span> {{$t('carModel')}} </span>
                        <div class="input">
                          <Dropdown
                            v-model="form2.model"
                          :filter-placeholder="$t('search')"
                            :options="form2.brand != '' ? getmodels[0].models : ''"
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
                        <span> {{$t('theYear')}}</span>
                        <div class="input">
                          <Dropdown
                          :filter-placeholder="$t('search')"

                            v-model="form2.year"
                            :options="optionsCars.year"
                            filter
                            optionLabel=""
                            placeholder="2024"
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
                        <span>{{$t('gear')}}</span>
                        <div class="input">
                          <Dropdown
                            v-model="form2.gear_shifter"
                            :options="gear_shifterArr"
                            filter
                          :filter-placeholder="$t('search')"

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
                        <span>{{$t('color')}}</span>
                        <div class="input">
                          <Dropdown
                            v-model="form2.color_id"
                            :options="optionsCars.colors"
                            filter
                          :filter-placeholder="$t('search')"

                            optionLabel="title"
                            optionValue="id"
                            :placeholder="$t('example6')"
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
                       {{$t('back')}}
                      </button>
                      <button @click=" paymentFunc2()" :disabled="pending2" class="next gap-3">
                        {{$t('next')}}
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
                        <span> {{$t('name1')}} </span>
                        <div class="input">
                          <input
                            type="text"
                            placeholder=""
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
                        <span> {{$t('phone')}}</span>
                        <div class="input">
                          <input v-model="form3.phone" type="tel" maxlength="11" name="" class="" />
                          <span class="numm act">+966</span>
                          <span class="error-msg" v-if="v3$.phone.$error">{{
                              v3$.phone.$errors[0].$message
                          }}</span>
                  <span class="error-msg2 d-block position-relative" style="position:relative;" v-if="errors3.phone">{{
                      errors3.phone[0]
                  }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                      <div class="input-container">
                        <span> {{ $t('sex') }} </span>
                        <div class="input">
                          <Dropdown
                            v-model="form3.sex"
                            :options="sexArr"
                            filter
                          :filter-placeholder="$t('search')"

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
                        <span> {{$t('birth')}}</span>
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
                        <span> {{$t('city')}} </span>
                        <div class="input">
                          <Dropdown
                            v-model="form3.city_id"
                            :options="cities"
                            filter
                          :filter-placeholder="$t('search')"
                          
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
                        <span> {{ $t('ident') }}</span>
                        <div class="input">
                          <input type="tel" v-model="form3.identity_no" maxlength="11"  name=""  class="" />
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
                        <span>
                        {{ $t('sector') }}
                       </span>
                        <div class="input">
                          <Dropdown
                            v-model="form3.sector"
                            :options="optionsCars.sectors"
                            filter
                          :filter-placeholder="$t('search')"

                            optionLabel="name"
                            optionValue="id"
                            :placeholder="$t('example7')"
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
                        <span>
                       {{$t('sal')}}
                        </span>
                        <div class="input">
                          <input
                            type="number"
                            min="1"
                            placeholder=" 25000"
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
                        <span>
                         {{$t('sal2')}}    
                        </span>
                        <div class="input">
                          <Dropdown
                            v-model="form3.bank"
                            :options="optionsCars.banks"
                            filter
                          :filter-placeholder="$t('search')"

                            optionLabel="name"
                            optionValue="id"
                            :placeholder="$t('example8')"
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
                        <span> {{ $t('sal3') }} </span>
                        <div class="input">
                          <input
                            type="number"
                            min="1"
                            placeholder="25000"
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
                        <span> {{$t('nat')}} </span>
                        <div class="input">
                          <Dropdown
                            v-model="form3.nationality_id"
                            :options="optionsCars.nationalities"
                            filter
                          :filter-placeholder="$t('search')"

                            optionValue="id"
                            optionLabel="title"
                            :placeholder="$t('nat')"
                            class=""
                          >
                            <template #option="slotProps">
                              <div class="flex align-items-center">
                                <div>{{ slotProps.option.title }}</div>
                              </div>
                            </template>
                          </Dropdown>
                          <span class="error-msg" v-if="v3$.nationality_id.$error">{{
                              v3$.nationality_id.$errors[0].$message
                          }}</span>
                  <span class="error-msg" v-if="errors3.nationality_id">{{
                      errors3.nationality_id[0]
                  }}</span>
                        </div>
                      </div>
                      <div class="input-container">
                        <div class="d-flex align-items-center gap-3">
                          <span> {{ $t('emailE') }}</span>
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
                            placeholder=" Demo@gmail.com"
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
                      class="d-flex main-radio align-items-center flex-column flex-xl-row flex-lg-row w-100 justify-content-between"
                    >
                      <div>
                        <span> {{ $t('problem') }} </span>
                        <v-radio-group v-model="form3.have_life_problem">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <label for="radio-first-1">{{$t('yes')}}</label>
                              <v-radio
                                id="radio-first-1"
                                color="#DCB63B"
                                name="radio-1"
                                :value="1"
                              ></v-radio>
                            </div>
                            <div class="d-flex align-items-center">
                              <label for="radio-sec-2"> {{$t('no')}} </label>
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
                        <span> {{ $t('traffic') }} </span>
                        <v-radio-group v-model="form3.traffic_violations">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <label for="radio-first-3">{{$t('yes')}}</label>
                              <v-radio
                                id="radio-first-3"
                                color="#DCB63B"
                                name="radio-1"
                                :value="1"
                              ></v-radio>
                            </div>
                            <div class="d-flex align-items-center">
                              <label for="radio-sec-4"> {{$t('no')}} </label>
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
                        <span> {{$t('driv')}} </span>
                        <v-radio-group v-model="form3.driving_license">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <label for="radio-first-5">{{$t('yes')}}</label>
                              <v-radio
                                id="radio-first-5"
                                color="#DCB63B"
                                name="radio-1"
                                :value="1"
                              ></v-radio>
                            </div>
                            <div class="d-flex align-items-center">
                              <label for="radio-sec-6"> {{$t('no')}} </label>
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
                        <span> {{$t('loan')}} </span>
                        <v-radio-group v-model="form3.department_loan">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <label for="radio-first-7">{{$t('yes')}}</label>
                              <v-radio
                                id="radio-first-7"
                                color="#DCB63B"
                                name="radio-1"
                                :value="1"
                              ></v-radio>
                            </div>
                            <div class="d-flex align-items-center">
                              <label for="radio-sec-8"> {{$t('no')}} </label>
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
                      <button @click="paymentIndividualBtn = 2, pending3 = false" class="back">
                        {{$t('back')}}
                      </button>
                      <button @click="paymentFunc3()" :disabled="pending3" class="next gap-2">
                        {{$t('next')}}
                        <v-progress-circular v-if="pending3"  indeterminate :size="25" :width="4"></v-progress-circular>
                      </button>
                    </div>
                  </div>

                  <div v-if="paymentIndividualBtn == 4" class="offers">
                  <div v-if="offers.length >= 1">
                    <v-radio-group  v-model="bank_offer_id">
                      <div  class="row">
                        <div v-for="item, index in offers" class="col-12 col-xl-6 col-lg-6">
                          <label :for="`offer-${index}-1`" class="offer w-100">
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
                              <span> {{$t('offer1')}} </span>
                            </div>
                            <v-divider></v-divider>
                            <div class="details">
                              <div class="detail">
                                <div class="d-flex align-items-center gap-2">
                                  <img src="~/assets/images/det1.png" alt="" />
                                  <span class="name"> {{$t('offer2')}} </span>
                                </div>
                                <p class="price">{{ item.fundingAmount }} {{$t('curr')}}</p>
                              </div>
                              <div class="detail">
                                <div class="d-flex align-items-center gap-2">
                                  <img src="~/assets/images/det2.png" alt="" />
                                  <span class="name"> {{$t('offer3')}}</span>
                                </div>
                                <p class="price">{{ item.firs_installment }} {{$t('curr')}}</p>
                              </div>
                              <div class="detail">
                                <div class="d-flex align-items-center gap-2">
                                  <img src="~/assets/images/det3.png" alt="" />
                                  <span class="name"> {{$t('offer4')}} </span>
                                </div>
                                <p class="price">{{ item.years }} {{$t('year')}}</p>
                              </div>
                              <div class="detail">
                                <div class="d-flex align-items-center gap-2">
                                  <img src="~/assets/images/det4.png" alt="" />
                                  <span class="name"> {{$t('calc3')}}</span>
                                </div>
                                <p class="price">{{ item.last_installment }} {{$t('curr')}}</p>
                              </div>
                              <div class="detail">
                                <div class="d-flex align-items-center gap-2">
                                  <img src="~/assets/images/det5.png" alt="" />
                                  <span class="name"> {{ $t('offer5') }} </span>
                                </div>
                                <p class="price">{{ item.sectorAdministrative_fees }} {{$t('curr')}}</p>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </v-radio-group>
                    <div class="btns">
                      <button @click="paymentIndividualBtn = 3" class="back">
                        {{ $t('back') }}
                      </button>
                      <button @click="paymentFunc4()" class="next gap-3">
                        {{ $t('next') }}
                        <v-progress-circular v-if="pending4"  indeterminate :size="25" :width="4"></v-progress-circular>

                      </button>
                    </div>
                  </div>
                  <div v-else class="empty">
                <div class="main">
                  <client-only>
            <Vue3Lottie :animation-data="emptyoffers" :height="300" :width="300" />
          </client-only>
                  <h4> {{ $t('stateAd1') }} </h4>
                  <span>
                   {{$t('stateAd2')}}
                  </span>
                  <nuxt-link :to="localePath('/')">
                  <button>{{$t('backHome')}}</button>
                  </nuxt-link>
                </div>
              </div>
                  </div>

                  <div v-if="paymentIndividualBtn == 5" class="final-review">
                    <div class="offer">
                      <span class="word">{{$t('offer')}}</span>
                      <div class="main-container">
                        <div class="name-price">
                          <div class="d-flex main flex-column">
                            <span class="name">{{$t('offer')}}</span>
                            <p class="type mt-2"> {{ $t('offernum') }} : {{ theOffer.bank_offer_id }}</p>
                          </div>
                          <div class="d-flex main flex-column">
                            <h6>{{ theOffer.monthly_installment }} {{ $t('curr') }}</h6>
                            <p class="type"> {{$t('offer1')}} </p>
                          </div>
                        </div>
                        <div class="offer-det">
                          <div class="d-flex align-items-start flex-column flex-xl-row flex-lg-row align-items-xl-center align-items-lg-center  gap-3">
                            <div class="d-flex align-items-center gap-4">
                              <div class="d-flex align-items-center gap-2">
                                <img src="~/assets/images/det1.png" alt="" />
                                <span> {{$t('offer2')}} </span>
                              </div>
                              <h6>{{ theOffer.fundingAmount }} {{$t('curr')}}</h6>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                              <div class="d-flex align-items-center gap-2">
                                <img src="~/assets/images/det2.png" alt="" />
                                <span>{{$t('calc3')}}</span>
                              </div>
                              <h6>{{ theOffer.last_installment }} {{$t('curr')}}</h6>
                            </div>
                          </div>
                          <div class="d-flex align-items-start flex-column flex-xl-row flex-lg-row align-items-xl-center align-items-lg-center gap-3">
                            <div class="d-flex align-items-center gap-3">
                              <div class="d-flex align-items-center gap-2">
                                <img src="~/assets/images/det3.png" alt="" />
                                <span> {{ $t('offer3') }} </span>
                              </div>
                              <h6>{{ theOffer.firs_installment }} {{$t('curr')}}</h6>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                              <div class="d-flex align-items-center gap-2">
                                <img src="~/assets/images/det4.png" alt="" />
                                <span>{{$t('offer5')}}</span>
                              </div>
                              <h6>{{ theOffer.sectorAdministrative_fees }} ريال سعودي</h6>
                            </div>
                          </div>
                          <div class="d-flex align-items-start flex-column flex-xl-row flex-lg-row align-items-xl-center align-items-lg-center gap-3">
                            <div class="d-flex align-items-center gap-3">
                              <div class="d-flex align-items-center gap-2">
                                <img src="~/assets/images/det3.png" alt="" />
                                <span> {{$t('offer4')}} </span>
                              </div>
                              <h6>{{ theOffer.years }} {{$t('year')}}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="offer">
                      <span class="word"> {{$t('carData')}} </span>
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
                        <span class="f1"> {{ $t('uti') }} </span>
                        <span class="f2">( {{$t('opt')}} )</span>
                      </div>
                      <div class="row">
                        <div class="col-6 col-xl-3 col-lg-3 col-md-4">
                          <label for="fileInput1" class="custom-file-upload">
                            <!-- <span>{{ buttonText }}</span> -->
                            <img src="~/assets/images/file1.png" />
                            <h6> {{$t('immg1')}} </h6>
                            <span> {{ $t('immg2') }} </span>
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
                            <h6> {{$t('immg3')}} </h6>
                            <span> {{$t('immg2')}} </span>
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
                            <h6> {{ $t('immg4') }} </h6>
                            <span>{{$t('immg2')}}</span>
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
                            <h6> {{$t('immg5')}} </h6>
                            <span> {{$t('immg2')}} </span>
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
                          {{ $t('backOf') }}
                        </button>
                        <button
                          @click="paymentFunc5()"
                          class="next"
                        >
                          {{$t('sendOrd')}}
                        <v-progress-circular v-if="pending5"  indeterminate :size="25" :width="4"></v-progress-circular>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
</template>

<script setup>
import emptyoffers from "~/assets/animations/empty-offer.json";

import { Vue3Lottie } from "vue3-lottie";
import useValidate from "@vuelidate/core";
import axios from "axios";
import Cookies from "js-cookie";
const tokenCookie = Cookies.get("token");

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
let sliderValue1 = ref(0);
let sliderValue2 = ref(5);
let sliderValue3 = ref(0);
let showConfirm = ref(false);
let minNum = ref(0);
let maxNum = ref(100);
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
    //minNum.value = parseInt(result.data.data.Slider.minPrice);
    //maxNum.value = parseInt(result.data.data.Slider.maxPrice);
    // sliderValue1.value = parseInt(result.data.data.Slider.minPrice) + 20000;
    // sliderValue3.value = parseInt(result.data.data.Slider.minPrice) + 20000;
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


let gear_shifterArr = ref([
    {
        value: "manual",
        name: locale.value == 'ar' ? ' جير عادي ' : 'manual'
    },
    {
        value: "automatic",
        name: locale.value == 'ar' ? 'اوتوماتيك' : 'automatic'
    },
]);

let sexArr = ref([
    {
        value: "female",
        name: locale.value == 'ar' ? 'انثي' : 'female'
    },
    {
        value: "male",
        name: locale.value == 'ar' ? 'ذكر' : 'male'
    },
]);

let transferArr = ref([
    {
        value: "transfer",
        name: locale.value == 'ar' ? 'محول' : 'transfer'
    },
    {
        value: "untransfer",
        name: locale.value == 'ar' ? 'غير محول' : 'untransfer'
    },
]);

let selectedBrand = ref();
let form2 = ref({
    brand: '',
    model: '',
    year: '',
    gear_shifter: '',
    color_id: '',
});
let form3 = ref({
    client_name: '',
    phone: '',
    sex: '',
    birth_date: '',
    city_id: '',
    identity_no: '',
    sector: '',
    salary: '',
    bank: '',
    Monthly_cometment: '',
    nationality_id: '',
    email: '',
    have_life_problem: 0,
    traffic_violations: 0,
    department_loan: 0,
    driving_license: 0,
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

const rules2 = computed(() => {
    return {
        brand: { required: helpers.withMessage(value1.value, required) },
        model: { required: helpers.withMessage(value1.value, required) },
        year: { required: helpers.withMessage(value1.value, required) },
        gear_shifter: { required: helpers.withMessage(value1.value, required) },
        color_id: { required: helpers.withMessage(value1.value, required) },
    }
});
const rules3 = computed(() => {
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
        nationality_id: { required: helpers.withMessage(value1.value, required) },
        bank: { required: helpers.withMessage(value1.value, required) },
        Monthly_cometment: { required: helpers.withMessage(value1.value, required) },
        have_life_problem: { required: helpers.withMessage(value1.value, required) },
        traffic_violations: { required: helpers.withMessage(value1.value, required) },
        department_loan: { required: helpers.withMessage(value1.value, required) },
        driving_license: { required: helpers.withMessage(value1.value, required) },
        email: { required: helpers.withMessage(value2.value, required), email: helpers.withMessage(value3.value, email) },
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
    for (const key in form3.value) {
        // Check if any key in the object has an empty value
        if (form3.value[key] === '') {
            // If any value is empty, return false
            return false;
        }
    }

    // If all keys in all objects have values, return true
    return true;
};
let offers = ref([]);
let theOffer = ref();
let theCar = ref();

const paymentFunc1 = async () => {
    pending1.value = true;
    let formBody = new FormData();
    formBody.append("first_batch", sliderValue1.value);
    formBody.append("installment", sliderValue2.value);
    formBody.append("last_batch", sliderValue3.value);
    let result = await axios.post(`${getUrl()}/finance-Order`, formBody, {
        params: {
            type: paymentMethod.value == 1 ? 'individual' : 'company',
            step: 1
        },
        headers: {
            "Content-Language": `${locale.value}`,
        },
    });
    if (result.status >= 200) {
        pending1.value = false;
        paymentBtn2.value = 1;
        checkBtn1.value = 1;
        paymentIndividualBtn.value = 2;
    }
};
const paymentFunc2 = async () => {

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
const paymentFunc3 = async () => {
    v3$.value.$validate();
    let formBody = createFormData1(form2.value, form3.value);
    if (isFormFilled3()) {
      pending3.value = true;
        try {
            let result = await axios.post(`${getUrl()}/finance-Order`, formBody, {
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
    if (bank_offer_id.value) {
      pending4.value = true;
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
// const paymentFunc5 = async () => {
//     let formBody = new FormData();
//     // formBody.append("brand", form2.value.brand);
//     formBody.append("brand", form2.value.brand);
//     formBody.append("model", form2.value.model);
//     formBody.append("year", form2.value.year);
//     formBody.append("gear_shifter", form2.value.gear_shifter);
//     formBody.append("color_id", form2.value.color_id);
//     formBody.append("client_name", form3.value.client_name);
//     formBody.append("phone", form3.value.phone);
//     formBody.append("sex", form3.value.sex);
//     formBody.append("birth_date", form3.value.birth_date);
//     formBody.append("city_id", form3.value.city_id);
//     formBody.append("identity_no", form3.value.identity_no);
//     formBody.append("sector", form3.value.sector);
//     formBody.append("salary", form3.value.salary);
//     formBody.append("bank", form3.value.bank);
//     formBody.append("Monthly_cometment", form3.value.Monthly_cometment);
//     formBody.append("transferd_type", form3.value.transferd_type);
//     formBody.append("email", form3.value.email);
//     formBody.append("have_life_problem", form3.value.have_life_problem);
//     formBody.append("traffic_violations", form3.value.traffic_violations);
//     formBody.append("department_loan", form3.value.department_loan);
//     formBody.append("driving_license", form3.value.driving_license);
//     formBody.append("bank_offer_id", bank_offer_id.value);
//     formBody.append("identity_Card", selectedFileName1.value);
//     formBody.append("License_Card", selectedFileName2.value);
//     formBody.append("Hr_Letter_Image", selectedFileName3.value);
//     formBody.append("Insurance_Image", selectedFileName4.value);
//     pending5.value = true;
//     let result = await axios.post(`${getUrl()}/finance-Order`, formBody, {
//         params: {
//             type: paymentMethod.value == 1 ? 'individual' : 'company',
//             step: 5
//         },
//         headers: {
//             "Content-Language": `${locale.value}`,
//         },
//     });
//     if (result.status >= 200) {
//         paymentIndividualBtn.value = 6;
//         // paymentBtn5.value = 1;
//         // checkBtn4.value = 1;
//         showConfirm.value = true;
//         pending5.value = false;
//     }

// };
const paymentFunc5 = async () => {
    let formBody = createFormData(form2.value , form3.value , selectedFileName1.value , selectedFileName2.value , selectedFileName3.value , selectedFileName4.value , bank_offer_id.value);
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
        // paymentIndividualBtn.value = 6;
        // paymentBtn5.value = 1;
        // checkBtn4.value = 1;
        store.state.showConfirm1 = true;
        store.state.otpFin1 = result.data.data.verification_code;
        store.state.orderFin1 = result.data.data.Order_Number;
        store.state.phoneFin1 = form3.value.phone;
        pending5.value = false;
    }

};




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

let cities = ref([]);
const getCites = async () => {
    let result = await axios.get(`${getUrl()}/cities`, {
        headers: {
            "Content-Language": `${locale.value}`
        }
    });
    cities.value = result.data.data;
}

const getmodels = computed(() => {
    return optionsCars.value.brands.filter((ele) => {
        return form2.value.brand == ele.id
    });
});


let paymentIndividualBtn = ref(1);

onMounted(() => {
    getOptions();
    getCites();
})
</script>

<style lang="scss" scoped>


</style>