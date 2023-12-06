<template>
  <div style="min-height: 100vh">
    <div class="main-car-page container">
      <div class="car-details">
        <div class="images-text">
          <div class="row">
            <div class="col-6">
              <swiper
                :style="{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }"
                :loop="true"
                :spaceBetween="10"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="[SwiperFreeMode, SwiperThumbs]"
                class="mySwiper2"
              >
                <swiper-slide>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
              </swiper>
              <div class="d-flex align-items-center gap-3 mt-3">
                <div class="slider__prev">
                  <img src="~/assets/images/arrow-right.svg" alt="" />
                </div>
                <swiper
                  @swiper="setThumbsSwiper"
                  :loop="true"
                  :spaceBetween="10"
                  :slidesPerView="1"
                  :freeMode="true"
                  :watchSlidesProgress="true"
                  :navigation="{
                    nextEl: '.slider__next',
                    prevEl: '.slider__prev',
                  }"
                  :breakpoints="{
                    '640': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '768': {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    '1024': {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }"
                  :modules="[SwiperNavigation]"
                  class="mySwiper"
                >
                  <swiper-slide>
                    <div class="image"></div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="image"></div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="image"></div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="image"></div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="image"></div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="image"></div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="image"></div>
                  </swiper-slide>
                </swiper>
                <div class="slider__next">
                  <img src="~/assets/images/arrow-left.svg" alt="" />
                </div>
              </div>
            </div>
            <vue-easy-lightbox
              :visible="visibleRef"
              :imgs="imgsRef"
              :index="indexRef"
              @hide="onHide"
            ></vue-easy-lightbox>
            <div class="col-6">
              <div class="header">
                <div class="vendor">
                  <div>
                    <div class="vendor-icon">
                      <img src="@/assets/images/vendor-icon.svg" alt="" />
                      <span> متجر كود كار </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M15.6513 8.18343C15.7969 7.98193 15.9002 7.75247 15.9549 7.50913C16.0096 7.2658 16.0146 7.01372 15.9696 6.76836C15.9285 6.5213 15.8384 6.28518 15.7049 6.07418C15.5714 5.86318 15.3971 5.68165 15.1925 5.54047L14.1119 4.79924C14.067 4.76794 14.0297 4.72676 14.0028 4.67878C13.9759 4.6308 13.9601 4.57727 13.9565 4.52222L13.8603 3.21197C13.8429 2.9622 13.7756 2.71861 13.6623 2.49596C13.5491 2.27331 13.3924 2.07624 13.2016 1.9167C13.0124 1.7551 12.7931 1.63344 12.5567 1.55886C12.3203 1.48428 12.0716 1.4583 11.8251 1.48244L10.5373 1.61721C10.4815 1.6246 10.4248 1.61825 10.372 1.5987C10.3191 1.57915 10.2718 1.54697 10.2339 1.5049L9.32356 0.561525C9.15062 0.383693 8.94442 0.242459 8.71697 0.146054C8.48953 0.0496491 8.2454 0 7.9988 0C7.7522 0 7.50807 0.0496491 7.28063 0.146054C7.05319 0.242459 6.84699 0.383693 6.67404 0.561525L5.76373 1.5049C5.72583 1.54697 5.67845 1.57915 5.62562 1.5987C5.57279 1.61825 5.51607 1.6246 5.46029 1.61721L4.17253 1.48244C3.92627 1.45882 3.67783 1.485 3.44167 1.55944C3.2055 1.63389 2.98634 1.75512 2.79693 1.91608C2.60752 2.07703 2.45166 2.2745 2.33841 2.49698C2.22516 2.71946 2.15679 2.9625 2.13728 3.21197L2.04107 4.52222C2.03686 4.57898 2.02003 4.63405 1.99183 4.68332C1.96364 4.73258 1.92482 4.77477 1.87825 4.80673L0.805121 5.54796C0.601848 5.68878 0.428411 5.86925 0.294977 6.07877C0.161543 6.28829 0.0707977 6.52265 0.028061 6.76811C-0.0146758 7.01357 -0.00854412 7.26519 0.0460966 7.50823C0.100737 7.75126 0.202788 7.98081 0.346265 8.18343L1.10856 9.25409C1.14064 9.30032 1.16197 9.3533 1.17094 9.40905C1.17992 9.46481 1.1763 9.52189 1.16036 9.57603L0.805121 10.8414C0.739319 11.0826 0.721791 11.3346 0.753563 11.5827C0.785335 11.8309 0.865768 12.0701 0.990143 12.2864C1.11326 12.503 1.27832 12.6922 1.47543 12.8427C1.67254 12.9932 1.89765 13.1019 2.13728 13.1624L3.39544 13.4843C3.4493 13.498 3.49933 13.524 3.54167 13.5604C3.58401 13.5967 3.61754 13.6424 3.63967 13.694L4.17253 14.8919C4.27353 15.1206 4.41891 15.3265 4.60004 15.4973C4.78117 15.6681 4.99436 15.8004 5.22696 15.8863C5.45957 15.9721 5.70686 16.0099 5.95417 15.9973C6.20147 15.9847 6.44375 15.9219 6.66664 15.8128L7.83598 15.2438C7.88646 15.218 7.94223 15.2045 7.9988 15.2045C8.05537 15.2045 8.11115 15.218 8.16162 15.2438L9.33097 15.8128C9.57967 15.9364 9.85316 16.0005 10.1303 16C10.3472 15.9998 10.5625 15.9618 10.7667 15.8877C10.9996 15.801 11.2131 15.6684 11.3948 15.4974C11.5765 15.3264 11.7228 15.1206 11.8251 14.8919L12.3579 13.694C12.3801 13.6424 12.4136 13.5967 12.4559 13.5604C12.4983 13.524 12.5483 13.498 12.6022 13.4843L13.8603 13.1624C14.0999 13.1013 14.3249 12.9923 14.5221 12.8416C14.7192 12.691 14.8845 12.5018 15.008 12.2854C15.1316 12.0689 15.2109 11.8296 15.2413 11.5815C15.2717 11.3335 15.2526 11.0818 15.1851 10.8414L14.8372 9.57603C14.8213 9.52189 14.8177 9.46481 14.8267 9.40905C14.8356 9.3533 14.857 9.30032 14.889 9.25409L15.6513 8.18343ZM11.381 6.79082L7.947 10.2649C7.63936 10.5719 7.2246 10.744 6.79245 10.744C6.36031 10.744 5.94555 10.5719 5.63791 10.2649L4.61659 9.23163C4.54095 9.15637 4.48088 9.06664 4.43988 8.96766C4.39888 8.86868 4.37776 8.76244 4.37776 8.65512C4.37776 8.5478 4.39888 8.44155 4.43988 8.34257C4.48088 8.24359 4.54095 8.15386 4.61659 8.07861C4.76864 7.92746 4.97328 7.84276 5.18646 7.84276C5.39963 7.84276 5.60428 7.92746 5.75633 8.07861L6.77765 9.11183L10.2487 5.6378C10.3998 5.48589 10.6044 5.40095 10.8175 5.40165C11.0305 5.40235 11.2346 5.48865 11.3847 5.64155C11.5349 5.79445 11.6188 6.00143 11.6181 6.21696C11.6175 6.43249 11.5322 6.63891 11.381 6.79082Z"
                          fill="#5BCE97"
                        />
                      </svg>
                    </div>
                    <span class="city"> الرياض </span>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon">
                      <img src="@/assets/images/call.svg" alt="" />
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <rect width="28" height="28" rx="14" fill="#E7F1F1" />
                        <path
                          d="M6.28711 22.7085L7.42556 18.4932C6.72357 17.2568 6.35433 15.8564 6.35459 14.4313C6.35459 9.95029 9.94715 6.30005 14.3573 6.30005C16.4992 6.30005 18.5062 7.1484 20.0239 8.68193C20.7697 9.43759 21.3606 10.3343 21.7629 11.3209C22.1652 12.3074 22.3709 13.3644 22.3682 14.4313C22.3682 18.9127 18.7761 22.563 14.3656 22.563C13.0251 22.563 11.7095 22.2199 10.537 21.569L6.28711 22.7085Z"
                          fill="#38A3A5"
                        />
                        <path
                          d="M6 23L7.18069 18.6386C6.45479 17.3577 6.07398 15.907 6.0762 14.4312C6.06748 9.77865 9.78628 6 14.3571 6C16.5748 6 18.6575 6.87385 20.2261 8.46764C21.7947 10.0614 22.6545 12.1777 22.6545 14.4312C22.6545 19.0753 18.9362 22.8544 14.3654 22.8544C12.9794 22.8563 11.6158 22.5024 10.4023 21.8262L6 23ZM10.5965 20.3094L10.8495 20.4637C11.9105 21.1021 13.1225 21.4395 14.3575 21.4405C18.1521 21.4405 21.247 18.2956 21.247 14.44C21.247 12.5717 20.5305 10.8069 19.2318 9.48706C17.9322 8.16817 16.1951 7.43108 14.3566 7.43108C10.5534 7.43108 7.45842 10.576 7.45842 14.4316C7.45842 15.7514 7.82107 17.0453 8.51286 18.1588L8.67307 18.4249L7.97302 21.0126L10.5956 20.3098L10.5965 20.3094Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2908 10.901C12.1393 10.5496 11.9704 10.5413 11.8272 10.5413C11.7005 10.5325 11.5655 10.5325 11.4223 10.5325C11.2873 10.5325 11.0597 10.5839 10.8659 10.7981C10.6718 11.0123 10.1406 11.518 10.1406 12.5551C10.1406 13.5916 10.8829 14.5944 10.9839 14.7311C11.0849 14.8684 12.4175 17.062 14.5255 17.9104C16.2796 18.6127 16.634 18.4759 17.0136 18.4328C17.3928 18.3902 18.2361 17.9275 18.4132 17.4301C18.5817 16.942 18.5817 16.5136 18.5312 16.4278C18.4807 16.3421 18.337 16.2906 18.1346 16.1794C17.9239 16.0764 16.9121 15.5628 16.718 15.4937C16.5242 15.4251 16.3893 15.3908 16.2543 15.5966C16.1194 15.8108 15.7232 16.2823 15.5965 16.419C15.4785 16.5563 15.3523 16.5734 15.1498 16.4705C14.9387 16.368 14.273 16.1451 13.4798 15.4251C12.8647 14.8684 12.4515 14.1744 12.3248 13.9685C12.2068 13.7544 12.3078 13.6431 12.4175 13.5402C12.5103 13.4461 12.6287 13.2917 12.7297 13.1716C12.8307 13.0516 12.8642 12.9575 12.9404 12.8202C13.0079 12.6835 12.9739 12.5546 12.9234 12.4522C12.8729 12.3576 12.4763 11.321 12.2908 10.901Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="icons">
                    <div class="icon">
                      <img src="@/assets/images/share-icon.svg" alt="" />
                    </div>
                    <div class="icon">
                      <img src="@/assets/images/fav.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <p class="time">تاريخ النشر : 24 / 10 / 2023</p>
              <div class="name">
                <h4>هيونداي اكسنت ستاندر 2024</h4>
                <div class="model">
                  <span>جديد</span>
                  <span>ستاندر</span>
                  <img src="@/assets/images/brand1.png" alt="" />
                </div>
              </div>
              <div class="description">
                <span class="word">الوصف</span>
                <p>
                  استمتع بتجربة القيادة الفريدة مع هذه السيارة الفاخرة. تجمع
                  الأداء العالي والتصميم الأنيق في سيارة تضيف لمسة من الرفاهية
                  إلى رحلاتك اليومية. اكتشف قوة المحرك، والراحة في الداخل،
                  والتكنولوجيا المتقدمة التي تجعل هذه السيارة فريدة من نوعها
                  استمتع بتجربة القيادة الفريدة مع هذه السيارة الفاخرة. تجمع
                  الأداء العالي والتصميم الأنيق في سيارة تضيف لمسة من الرفاهية
                  إلى رحلاتك اليومية. اكتشف قوة المحرك، والراحة في الداخل،
                  والتكنولوجيا المتقدمة التي تجعل هذه السيارة فريدة من نوعها
                  استمتع بتجربة القيادة الفريدة مع هذه السيارة الفاخرة. تجمع
                  الأداء العالي والتصميم الأنيق في سيارة تضيف لمسة من الرفاهية
                  إلى رحلاتك اليومية. اكتشف قوة المحرك، والراحة في الداخل،
                  والتكنولوجيا المتقدمة التي تجعل هذه السيارة فريدة من نوعها
                </p>
              </div>

              <div class="price">
                <span class="word">السعر</span>
                <div class="main-price">
                  <h5>2500 ر.س</h5>
                  <span class="disc">4000 ر.س</span>
                  <span>( 700,000 ر.س شامل ضريبة )</span>
                </div>
              </div>
              <div class="colors">
                <span class="word">الالوان المتاحة</span>
                <div class="main">
                  <span> اسود </span>
                </div>
              </div>

              <div class="btns">
                <button class="cash">كاش</button>
                <button class="finance">تمويل</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="text-center">
          <h2>التفاصيل</h2>
        </div>
        <div class="row">
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s1.svg" alt="" />
              </div>
              <span class="label">نوع المحرك</span>
              <span class="type">اوتوماتيك</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s2.svg" alt="" />
              </div>
              <span class="label"> نوع الوقود </span>
              <span class="type">بنزين</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s3.svg" alt="" />
              </div>
              <span class="label">الموديل</span>
              <span class="type">2024</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s4.svg" alt="" />
              </div>
              <span class="label">الممشي</span>
              <span class="type">25,000 كم</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s5.svg" alt="" />
              </div>
              <span class="label">الوارد</span>
              <span class="type">سعودي</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s6.svg" alt="" />
              </div>
              <span class="label">رقم الاعلان</span>
              <span class="type">561</span>
            </div>
          </div>
        </div>
      </div>

      <div class="paymentType">
        <div class="payment-container cash">
          <h4>التمويل</h4>
          <span class="word">
            قم بإتمام عمليتك بشكل سلس وفوري مع السداد النقدي
          </span>

          <div class="payment-method">
            <button
              @click="paymentMethod = 1"
              :class="{ active: paymentMethod == 1 }"
            >
              افراد
            </button>
            <button
              @click="paymentMethod = 2"
              :class="{ active: paymentMethod == 2 }"
            >
              شركات
            </button>
          </div>

          <div class="row">
            <div class="col-5">
              <div class="main-pagination-container">
                <div class="pagination-container">
                  <div
                    class="icon"
                    :class="{ active: paymentIndividualBtn == 1 }"
                  >
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
                  <div
                    class="icon"
                    :class="{ active: paymentIndividualBtn == 2 }"
                  >
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
                  <div
                    class="icon"
                    :class="{ active: paymentIndividualBtn == 3 }"
                  >
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
                  <div
                    class="icon"
                    :class="{ active: paymentIndividualBtn == 4 }"
                  >
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
                  <div
                    class="icon"
                    :class="{ active: paymentIndividualBtn == 5 }"
                  >
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
                  <div
                    class="dot"
                    :class="{ active: paymentIndividualBtn == 1 }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentIndividualBtn == 2 }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentIndividualBtn == 3 }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentIndividualBtn == 4 }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div
                    class="dot"
                    :class="{ active: paymentIndividualBtn == 5 }"
                  >
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7">
              <div v-if="paymentIndividualBtn == 1" class="range-container">
                <div class="d-flex flex-column range-slider">
                  <span class="word">المقدم</span>
                  <v-slider
                    v-model="sliderValue1"
                    min="100000"
                    max="500000"
                    step="10000"
                    thumb-label="always"
                    class="custom-slider mt-5"
                    @input="updateRange()"
                    :reverse="true"
                  >
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
                  <v-slider
                    v-model="sliderValue2"
                    min="1"
                    max="160"
                    step="1"
                    thumb-label="always"
                    class="custom-slider mt-5"
                    @input="updateRange()"
                    :reverse="true"
                  >
                    <template v-slot:thumb-label="{ value }">
                      <div class="d-flex align-items-center gap-2">
                        <span> شهر </span>
                        {{ sliderValue2 }}
                      </div>
                    </template>
                  </v-slider>
                </div>

                <div class="total-container">
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
                </div>
                <div class="d-flex justify-content-end">
                  <button @click="paymentIndividualBtn = 2" class="next-step">
                    التالي
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
                      <input
                        type="text"
                        placeholder="مثال : تويوتا"
                        name=""
                        value=""
                        class=""
                      />
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
                      <input
                        type="text"
                        placeholder="مثال : تويوتا"
                        name=""
                        value=""
                        class=""
                      />
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
                      <input
                        type="text"
                        placeholder="مثال : تويوتا"
                        name=""
                        value=""
                        class=""
                      />
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
              <div class="d-flex flex-column gap-4">
                <div class="d-flex gap-3">
                  <div class="input-container">
                    <span> اسم العميل </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder="خالد سوادة"
                        name=""
                        value=""
                        class=""
                      />
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
                      <input
                        type="tel"
                        placeholder="مثال : 3333-5555-9999-55"
                        name=""
                        value=""
                        class=""
                      />
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
                      <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="مثال : مصرف الجارحي" class="">
            <!-- <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template> -->
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Dropdown>
                  <h3>{{ selectedCountry }}</h3>
                    </div>
                  </div>
                  <div class="input-container">
                    <span>اللون</span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder="مثال : تويوتا"
                        name=""
                        value=""
                        class=""
                      />
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
            </div>
          </div>
        </div>
      </div>
      <div class="similar-cars">
        <div class="head">
          <h4>السيارات المشابهة</h4>
        </div>
        <div class="row">
          <div v-for="i in 5" class="col-12 col-xl-3 col-lg-3 col-md-6">
            <car-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
import Dropdown from "primevue/dropdown";

let paymentMethod = ref(1);
let paymentType = ref(0);
let sliderValue1 = ref(340000);
let sliderValue2 = ref(40);
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
])

let paymentIndividualBtn = ref(1);

const updateRange = () => {
  //console.log('Slider value:', sliderValue.value);
};

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

// start lightbox images

const visibleRef = ref(false);
const indexRef = ref(0);
const imgsRef = ref([]);

const onShow = () => {
  visibleRef.value = true;
};
const showMultiple = () => {
  imgsRef.value = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
    "https://swiperjs.com/demos/images/nature-10.jpg",
  ];
  indexRef.value = 0;
  onShow();
};
const onHide = () => (visibleRef.value = false);

// end lightbox images

onMounted(() => {});
</script>
