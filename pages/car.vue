<template>
  <div style="min-height: 100vh">
    <div v-if="mainCar" class="main-car-page container">
      <div class="car-details">
        <div class="images-text">
          <div class="row">
            <div class="col-12 col-xl-6 col-lg-6">
              <div class="header mobile">
                  <div class="vendor">
                    <div>
                      <div class="vendor-icon">
                        <img src="@/assets/images/vendor-icon.svg" alt="" />
                        <span>{{ mainCar.vendor.name }}</span>
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
                      <span class="city"> {{ mainCar.vendor.city.name }}  </span>
                    </div>
                    <div class="iconss d-flex align-items-center gap-3">
                      <div class="icon">
                       <button data-bs-toggle="modal" data-bs-target="#vendor-phone-modal" class="icon">
                        <!-- <img src="@/assets/images/call.svg" alt="" /> -->
                        <i class="fa-solid fa-phone"  style="color:#90A3BF; font-size:14px;"></i>
                      </button>
                      </div>
                      <div>
                      <button data-bs-toggle="modal" data-bs-target="#vendor-whatsapp-modal">
                      
                     <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M0.285156 16.7086L1.42361 12.4933C0.721612 11.257 0.352378 9.85656 0.352637 8.43139C0.352637 3.95041 3.9452 0.300171 8.35533 0.300171C10.4973 0.300171 12.5043 1.14853 14.0219 2.68205C14.7677 3.43771 15.3587 4.33446 15.761 5.321C16.1632 6.30753 16.3689 7.36449 16.3663 8.43139C16.3663 12.9128 12.7742 16.5631 8.3636 16.5631C7.02316 16.5631 5.70751 16.22 4.53508 15.5692L0.285156 16.7086Z" fill="#38A3A5"/>
    <path d="M0 17L1.18069 12.6386C0.454793 11.3577 0.0739822 9.90701 0.0762031 8.43116C0.067481 3.77865 3.78628 0 8.35709 0C10.5748 0 12.6575 0.873851 14.2261 2.46764C15.7947 4.06144 16.6545 6.17769 16.6545 8.43116C16.6545 13.0753 12.9362 16.8544 8.36535 16.8544C6.97942 16.8563 5.61576 16.5024 4.40233 15.8262L0 17ZM4.59651 14.3094L4.84945 14.4637C5.91052 15.1021 7.12247 15.4395 8.35755 15.4405C12.1521 15.4405 15.247 12.2956 15.247 8.43997C15.247 6.57173 14.5305 4.80688 13.2318 3.48706C11.9322 2.16817 10.1951 1.43108 8.35663 1.43108C4.55336 1.43108 1.45842 4.57601 1.45842 8.43162C1.45842 9.75144 1.82107 11.0453 2.51286 12.1588L2.67307 12.4249L1.97302 15.0126L4.59559 14.3098L4.59651 14.3094Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29084 4.90099C6.13935 4.54959 5.97042 4.54125 5.82719 4.54125C5.70049 4.53244 5.56553 4.53244 5.42231 4.53244C5.28734 4.53244 5.05965 4.5839 4.86593 4.79807C4.67175 5.01225 4.14062 5.51801 4.14062 6.55505C4.14062 7.59162 4.88292 8.59434 4.98391 8.7311C5.0849 8.86832 6.41754 11.062 8.52551 11.9103C10.2796 12.6127 10.634 12.4759 11.0136 12.4328C11.3928 12.3901 12.2361 11.9275 12.4132 11.4301C12.5817 10.9419 12.5817 10.5136 12.5312 10.4278C12.4807 10.342 12.337 10.2906 12.1346 10.1793C11.9239 10.0764 10.9121 9.56277 10.718 9.49369C10.5242 9.42508 10.3893 9.39078 10.2543 9.59661C10.1194 9.81078 9.72319 10.2822 9.59649 10.419C9.47851 10.5562 9.35227 10.5734 9.14983 10.4705C8.93866 10.368 8.27303 10.145 7.47979 9.42508C6.86466 8.86832 6.45151 8.17434 6.32481 7.96851C6.20683 7.75433 6.30782 7.64307 6.41754 7.54016C6.51026 7.44605 6.6287 7.29168 6.72969 7.17161C6.83068 7.05154 6.8642 6.95744 6.9404 6.82022C7.00788 6.68346 6.97391 6.55458 6.92341 6.45213C6.87292 6.35756 6.47629 5.32099 6.29084 4.90099Z" fill="white"/>
  </svg>
                      
                      </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="icons">
                      <div class="icon" @click="shareIcons = !shareIcons">
                        <!-- <img src="@/assets/images/share-icon.svg" alt="" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2233 5.28C19.2233 3.95452 18.1488 2.88 16.8233 2.88C15.4978 2.88 14.4233 3.95452 14.4233 5.28C14.4233 6.60549 15.4978 7.68 16.8233 7.68C18.1488 7.68 19.2233 6.60549 19.2233 5.28ZM19.2233 17.76C19.2233 16.4345 18.1488 15.36 16.8233 15.36C15.4978 15.36 14.4233 16.4345 14.4233 17.76C14.4233 19.0855 15.4978 20.16 16.8233 20.16C18.1488 20.16 19.2233 19.0855 19.2233 17.76ZM6.26328 9.60001C7.58876 9.60001 8.66328 10.6745 8.66328 12C8.66328 13.3255 7.58876 14.4 6.26328 14.4C4.9378 14.4 3.86328 13.3255 3.86328 12C3.86328 10.6745 4.9378 9.60001 6.26328 9.60001ZM13.6341 6.34055C13.7366 6.64885 13.8825 6.93731 14.0646 7.19868L8.7806 9.77448C8.54693 9.51038 8.27234 9.28331 7.96676 9.10322L13.6341 6.34055ZM13.6647 16.6115C13.5531 16.9184 13.4849 17.2462 13.4676 17.5874L8.04526 14.8491C8.34052 14.664 8.60496 14.4343 8.82912 14.1695L13.6647 16.6115Z" fill="#90A3BF"/>
                      </svg>
                    <div v-if="shareIcons" class="share-box">
                      <a target="_blank" :href="`https://t.me/share/url?url=${theRoute}`">
                        <img src="~/assets/images/social1.svg" alt="" />
                      </a>
                      <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?${theRoute}`">
                        <img src="~/assets/images/social2.svg" alt="" />
                      </a>
                      <a target="_blank" :href="`https://twitter.com/intent/tweet?url=${theRoute}`">
                        <img src="~/assets/images/social3.svg" alt="" />
                      </a>
                      <a target="_blank" :href="`https://wa.me/?text=${route}/`">
                        <img src="~/assets/images/social4.svg" alt="" />
                      </a>
                      <button @click="copyToClipboard2();">
                        <img v-if="checkCopy" src="~/assets/images/social5.svg" alt="" />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#fff" height="20" width="20"
                          viewBox="0 0 448 512">
                          <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </button>
                      <!-- <i @click="closeShare()" class="fa-solid fa-xmark"></i> -->
                      </div>
                      </div>
                      <div @click="addFavFunc()" class="icon">
                        <!-- <img src="@/assets/images/fav.svg" alt="" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3812 6.13407C14.1606 4.35529 17.0457 4.35529 18.8252 6.13407C20.6047 7.91296 20.6047 10.7972 18.8252 12.5761L12.3392 19.0595C12.1518 19.2468 11.8479 19.2468 11.6605 19.0595L5.17453 12.5761C3.39495 10.7972 3.39495 7.91296 5.17453 6.13407C6.95401 4.35529 9.83904 4.35529 11.6185 6.13407L11.9998 6.51524L12.3812 6.13407Z" :fill="`${mainCar.is_fav ? '#ED3F3F' :  '#90A3BF'}`"/>
  </svg>
                      </div>
                    </div>
                  </div>
                </div>
            <div class="main-images">
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
                <swiper-slide v-for="image in mainCar.images">
                <div class="image">
                <img :src="image" alt="">
                
                </div>
                  <div @click="showMultiple" class="zoom">
                    <img src="~/assets/images/zoom.svg" alt="" />
                  </div>
                </swiper-slide>
        
              </swiper>
              <div class="d-flex align-items-center gap-3 mt-3">
                <div v-if=" mainCar.images.length > 5" class="slider__prev">
                  <img class="arrow-icon" src="~/assets/images/arrow-right.svg" alt="" />
                </div>
                <swiper
                  @swiper="setThumbsSwiper"
                  :loop="true"
                  :spaceBetween="10"
                  :freeMode="true"
                  :watchSlidesProgress="true"
                  :navigation="{
                    nextEl: '.slider__next',
                    prevEl: '.slider__prev',
                  }"
                  :breakpoints="{
                    '300': {
                      slidesPerView: 3.2,
                      spaceBetween: 20,
                    },
                    '900': {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    '1400': {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }"
                  :modules="[SwiperNavigation]"
                  class="mySwiper"
                >
                  <swiper-slide v-for="image in mainCar.images" :class="{'auto-width': mainCar.images.length <= 4}">
                    <div class="image">
                     <img :src="image" alt="">
                    </div>
                  </swiper-slide>
                </swiper>
                <div  v-if=" mainCar.images.length > 5" class="slider__next">
                  <img class="arrow-icon" src="~/assets/images/arrow-left.svg" alt="" />
                </div>
              </div>
            
            </div>
            </div>
            <vue-easy-lightbox
              :visible="visibleRef"
              :imgs="imgsRef"
              :index="indexRef"
              @hide="onHide"
            ></vue-easy-lightbox>
            <div class="col-12 col-xl-6 col-lg-6">
            <div>
              <div class="header desc">
                <div class="vendor">
                  <div>
                    <div class="vendor-icon">
                      <img src="@/assets/images/vendor-icon.svg" alt="" />
                      <!-- <img :src="mainCar.vendor.image" alt="" /> -->
                      <!-- <span> متجر كود كار </span> -->
                      <span> {{ mainCar.vendor.name }} </span>
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
                    <span class="city"> {{ mainCar.vendor.city.name }} </span>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <button data-bs-toggle="modal" data-bs-target="#vendor-phone-modal" class="icon">
                      <!-- <img src="@/assets/images/call.svg" alt="" /> -->
                      <i class="fa-solid fa-phone"  style="color:#90A3BF; font-size:14px;"></i>
                    </button>
                    <div>
                    <button data-bs-toggle="modal" data-bs-target="#vendor-whatsapp-modal">
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
                    
                    </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="icons">
                    <div @click="shareIcons = !shareIcons" class="icon">
                      <img src="@/assets/images/share-icon.svg" alt="" />
                      <div v-if="shareIcons" class="share-box">
                      <a target="_blank" :href="`https://t.me/share/url?url=${theRoute}`">
                        <img src="~/assets/images/social1.svg" alt="" />
                      </a>
                      <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?${theRoute}`">
                        <img src="~/assets/images/social2.svg" alt="" />
                      </a>
                      <a target="_blank" :href="`https://twitter.com/intent/tweet?url=${theRoute}`">
                        <img src="~/assets/images/social3.svg" alt="" />
                      </a>
                      <a target="_blank" :href="`https://wa.me/?text=${route}/`">
                        <img src="~/assets/images/social4.svg" alt="" />
                      </a>
                      <button @click="copyToClipboard2();">
                        <img v-if="checkCopy" src="~/assets/images/social5.svg" alt="" />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#fff" height="20" width="20"
                          viewBox="0 0 448 512">
                          <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </button>
                      <!-- <i @click="closeShare()" class="fa-solid fa-xmark"></i> -->
                      </div>
                    </div>
                    <div @click="addFavFunc()" class="icon">
                        <!-- <img src="@/assets/images/fav.svg" alt="" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3812 6.13407C14.1606 4.35529 17.0457 4.35529 18.8252 6.13407C20.6047 7.91296 20.6047 10.7972 18.8252 12.5761L12.3392 19.0595C12.1518 19.2468 11.8479 19.2468 11.6605 19.0595L5.17453 12.5761C3.39495 10.7972 3.39495 7.91296 5.17453 6.13407C6.95401 4.35529 9.83904 4.35529 11.6185 6.13407L11.9998 6.51524L12.3812 6.13407Z" :fill="`${mainCar.is_fav ? '#ED3F3F' :  '#90A3BF'}`"/>
  </svg>
                      </div>
                  </div>
                </div>
              </div>
              <p class="time">{{$t('datee')}} {{ mainCar.publish_date }}</p>
              <div class="name">
                <h4>{{ mainCar.main_title }}</h4>
                <div class="model">
                  <span>{{ mainCar.statue }}</span>
                  <span>{{ mainCar.brand.title }}</span>
                  <!-- <img src="@/assets/images/brand1.png" alt="" /> -->
                  <span>{{ mainCar.model.title }}</span>
                </div>
              </div>
              <div class="description">
                <span class="word">{{$t('disc1')}}</span>
        
                <div class="descDiv" v-html="mainCar.description" :class="{'active':mainCar.description.length >= 235}"></div>
                
              </div>

              <div class="price">
                <span class="word">{{ $t('price') }}</span>
                <div class="main-price">
                  <h5>{{ mainCar.price }} {{$t('curr')}}</h5>
                  <span v-if="discount_price" class="disc">{{ mainCar.discount_price }}  {{$t('curr')}}</span>
                  <span>( {{ mainCar.price_after_tax }} {{ $t('curr') }} {{$t('taxx')}})</span>
                </div>
              </div>
              <div class="colors">
                <span class="word">{{$t('colorr')}}</span>
                <div class="main">
                  <span> {{ mainCar.color.title }} </span>
                </div>
              </div>

              <div class="btns">
                <a
                  href="#cash-payment-container"
                  @click="paymentType = 1"
                  class="cash"
                  >{{$t('cash')}}</a
                >
                <a href="#finance-payment-container" @click="paymentType = 2" class="finance">{{$t('finance')}}</a>
              </div>
            
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="text-center">
          <h2>{{$t('dett')}}</h2>
        </div>
        <div class="row">
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s1.svg" alt="" />
              </div>
              <span class="label">{{$t('engine')}}</span>
              <span class="type">{{ mainCar.gear_shifter }}</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s2.svg" alt="" />
              </div>
              <span class="label"> {{ $t('gaz') }} </span>
              <span class="type">{{ mainCar.fuel_type }}</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s3.svg" alt="" />
              </div>
              <span class="label">{{$t('theYear')}}</span>
              <span class="type">{{ mainCar.year }}</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s4.svg" alt="" />
              </div>
              <span class="label">{{$t('road')}}</span>
              <span class="type">{{ mainCar.kilometer ? mainCar.kilometer : 0 }} {{ $t('km') }}</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s5.svg" alt="" />
              </div>
              <span class="label">{{ $t('tra') }}</span>
              <span class="type">{{ mainCar.supplier }}</span>
            </div>
          </div>
          <div class="col-6 col-xl-2 col-lg-2 col-lg-4">
            <div class="box">
              <div class="icon">
                <img src="@/assets/images/s6.svg" alt="" />
              </div>
              <span class="label">{{ $t('adNum') }}</span>
              <span class="type">{{ mainCar.id }}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="{
          'd-none': showConfirmCash || store.state.showConfirm1 ,
        }"
        class="paymentType"
      >
        <div
          id="cash-payment-container"
          v-if="paymentType == 1"
          class="payment-container"
        >
        <div class="textt">
          <h4>{{$t('cash')}}</h4>
          <span class="word">
            {{ $t('cash1') }}
          </span>
        
        </div>

          <div class="payment-method">
            <button
              @click="btnCash = 1"
              :class="{ active: btnCash == 1 }"
              class="one"
            >
              {{$t('ind')}}
            </button>
            <button
              @click="btnCash = 2"
              :class="{ active: btnCash == 2 }"
              class="two"
            >
              {{$t('comp')}}
            </button>
          </div>

          <div v-if="btnCash == 1" class="row">
            <div class="col-12 col-xl-8 col-lg-8">
              <div class="form-ind">
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> {{$t('name1')}} </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder=""
                        name=""
                        class=""
                        v-model="formCash1.name"
                      />
                    </div>
                    <span class="error-msg" v-if="v1$.name.$error">{{
                              v1$.name.$errors[0].$message
                          }}</span>
                  <span class="error-msg" v-if="errors1.name">{{
                      errors1.name[0]
                  }}</span>
                  </div>
                  <div class="input-container">
                    <span> {{$t('phone')}} </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder="+021093051515"
                        name=""
                        v-model="formCash1.phone"
                        class=""
                      />
                      <span class="error-msg" v-if="v1$.phone.$error">{{
                              v1$.phone.$errors[0].$message
                          }}</span>
                  <span class="error-msg" v-if="errors1.phone">{{
                      errors1.phone[0]
                  }}</span>
                    </div>
                  </div>
                </div>
                <button
                  @click="cashFunc1()"
                  class="gap-3"
                >
                  {{$t('send')}}
                  <v-progress-circular v-if="pending1"  indeterminate :size="25" :width="4"></v-progress-circular>

                </button>
              </div>
            </div>
            <div class="col-12 col-xl-4 col-lg-4" style="position: relative">
              <div class="info-data">
                <h4>{{$t('info1')}}</h4>
                <p>{{$t('info2')}}</p>
                <div class="icons">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z"
                        fill="#90A3BF"
                      />
                      <path
                        d="M13.0003 7.99999C15.1033 7.99999 16.0003 8.89699 16.0003 11H18.0003C18.0003 7.77499 16.2253 5.99999 13.0003 5.99999V7.99999ZM16.4223 13.443C16.2301 13.2683 15.9776 13.1752 15.7181 13.1832C15.4585 13.1912 15.2123 13.2998 15.0313 13.486L12.6383 15.947C12.0623 15.837 10.9043 15.476 9.71228 14.287C8.52028 13.094 8.15928 11.933 8.05228 11.361L10.5113 8.96699C10.6977 8.78612 10.8064 8.53982 10.8144 8.2802C10.8225 8.02059 10.7292 7.76804 10.5543 7.57599L6.85928 3.51299C6.68432 3.32035 6.44116 3.2035 6.18143 3.18725C5.92171 3.17101 5.66588 3.25665 5.46828 3.42599L3.29828 5.28699C3.12539 5.46051 3.0222 5.69145 3.00828 5.93599C2.99328 6.18599 2.70728 12.108 7.29928 16.702C11.3053 20.707 16.3233 21 17.7053 21C17.9073 21 18.0313 20.994 18.0643 20.992C18.3088 20.9783 18.5396 20.8747 18.7123 20.701L20.5723 18.53C20.7417 18.3325 20.8276 18.0768 20.8115 17.817C20.7954 17.5573 20.6788 17.3141 20.4863 17.139L16.4223 13.443Z"
                        fill="#90A3BF"
                      />
                    </svg>
                    <span v-if="contactArr.phone">{{ contactArr.phone }}</span>
                  </div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M15 0.5H5C2 0.5 0 2 0 5.5V12.5C0 16 2 17.5 5 17.5H15C18 17.5 20 16 20 12.5V5.5C20 2 18 0.5 15 0.5ZM15.47 6.59L12.34 9.09C11.68 9.62 10.84 9.88 10 9.88C9.16 9.88 8.31 9.62 7.66 9.09L4.53 6.59C4.21 6.33 4.16 5.85 4.41 5.53C4.67 5.21 5.14 5.15 5.46 5.41L8.59 7.91C9.35 8.52 10.64 8.52 11.4 7.91L14.53 5.41C14.85 5.15 15.33 5.2 15.58 5.53C15.84 5.85 15.79 6.33 15.47 6.59Z"
                        fill="#90A3BF"
                      />
                    </svg>
                    <span v-if="contactArr.email">{{ contactArr.email }}</span>
                  </div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                        fill="#90A3BF"
                      />
                    </svg>
                    <span v-if="contactArr.address">{{ contactArr.address }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="btnCash == 2" class="row">
            <div class="col-12 col-xl-8 col-lg-8">
              <div class="form-ind">
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> {{ $t('name3') }}</span>
                    <div class="input">
                      <input
                        type="text"
                        :placeholder="$t('name3')"
                        name=""
                        v-model="formCash2.organization_name"
                        class=""
                      />
                      <span class="error-msg" v-if="v2$.organization_name.$error">{{
                              v2$.organization_name.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.name">{{
                      errors2.name[0]
                  }}</span>
              
                    </div>
                  </div>

                  <div class="input-container">
                    <span> {{ $t('orgType') }}</span>
                    <div class="input">
                      <Dropdown
                        v-model="formCash2.organization_type"
                        :options="optionsCars.OrganizationType"
                        filter
                        optionValue="id"
                        :filter-placeholder="$t('search')"
                        optionLabel="title"
                        :placeholder="$t('orgType')"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.title }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.organization_type.$error">{{
                              v2$.organization_type.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.organization_type">{{
                      errors2.organization_type[0]
                  }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> {{ $t('nummm') }} </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder="3333-5555-9999-55"
                        name=""
                        v-model="formCash2.commercial_registration_no"
                        class=""
                      />
                      <span class="error-msg" v-if="v2$.commercial_registration_no.$error">{{
                              v2$.commercial_registration_no.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.commercial_registration_no">{{
                      errors2.commercial_registration_no[0]
                  }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> {{ $t('orgAct') }}</span>
                    <div class="input">
                      <Dropdown
                        v-model="formCash2.organization_activity"
                        :options="optionsCars.OrganizationActive"
                        filter
                        optionLabel="title"
                        :filter-placeholder="$t('search')"
                        optionValue="id"
                        :placeholder="$t('orgAct')"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.title }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.organization_activity.$error">{{
                              v2$.organization_activity.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.organization_activity">{{
                      errors2.organization_activity[0]
                  }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> {{ $t('name4') }} </span>
                    <div class="input">
                      <input
                        type="text"
                        :placeholder="$t('name4')"
                        name=""
                        class=""
                        v-model="formCash2.name"
                      />
                      <span class="error-msg" v-if="v2$.name.$error">{{
                              v2$.name.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.name">{{
                      errors2.name[0]
                  }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> {{ $t('phone') }} </span>
                    <div class="input">
                      <input
                        type="text"
                        placeholder="3333-5555-9999-55"
                        name=""
                        v-model="formCash2.phone"
                        class=""
                      />
                      <span class="error-msg" v-if="v2$.phone.$error">{{
                              v2$.phone.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.phone">{{
                      errors2.phone[0]
                  }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> {{ $t('orgAge') }}</span>
                    <div class="input">
                      <input
                        type="number"
                        min="1"
                        :placeholder="$t('exmp')"
                        name=""
                        v-model="formCash2.organization_age"
                        class=""
                      />
                      <span class="error-msg" v-if="v2$.organization_age.$error">{{
                              v2$.organization_age.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.organization_age">{{
                      errors2.organization_age[0]
                  }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> {{ $t('city') }} </span>
                    <div class="input">
                      <Dropdown
                        v-model="formCash2.city_id"
                        :options="cities"
                        filter
                        :filter-placeholder="$t('search')"
                        optionLabel="name"
                            optionValue="id"
                        :placeholder="$t('city')"
                        class=""
                      >
                        <template #option="slotProps">
                          <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                          </div>
                        </template>
                      </Dropdown>
                      <span class="error-msg" v-if="v2$.city_id.$error">{{
                              v2$.city_id.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.city_id">{{
                      errors2.city_id[0]
                  }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column flex-xl-row flex-lg-row gap-3">
                  <div class="input-container">
                    <span> {{ $t('bankk') }}</span>
                    <div class="input">
                      <Dropdown
                        v-model="formCash2.bank_id"
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
                      <span class="error-msg" v-if="v2$.bank_id.$error">{{
                              v2$.bank_id.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.bank_id">{{
                      errors2.bank_id[0]
                  }}</span>
                    </div>
                  </div>

                  <div class="input-container">
                    <span> {{ $t('numCars') }} </span>
                    <div class="input">
                      <input
                        type="number"
                        min="1"
                        :placeholder="$t('numCars')"
                        name=""
                        v-model="formCash2.car_count"
                        class=""
                      />
                      <span class="error-msg" v-if="v2$.car_count.$error">{{
                              v2$.car_count.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors2.car_count">{{
                      errors2.car_count[0]
                  }}</span>
                    </div>
                  </div>
                </div>
                <button
                  @click="cashFunc1()"
                  class="gap-3"
                >
                  {{$t('send')}}
                  <v-progress-circular v-if="pending1"  indeterminate :size="25" :width="4"></v-progress-circular>

                </button>
              </div>
            </div>
            <div class="col-12 col-xl-4 col-lg-4" style="position: relative">
              <div class="info-data">
                <h4>{{$t('info1')}}</h4>
                <p>{{$t('info2')}}</p>
                <div class="icons">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z"
                        fill="#90A3BF"
                      />
                      <path
                        d="M13.0003 7.99999C15.1033 7.99999 16.0003 8.89699 16.0003 11H18.0003C18.0003 7.77499 16.2253 5.99999 13.0003 5.99999V7.99999ZM16.4223 13.443C16.2301 13.2683 15.9776 13.1752 15.7181 13.1832C15.4585 13.1912 15.2123 13.2998 15.0313 13.486L12.6383 15.947C12.0623 15.837 10.9043 15.476 9.71228 14.287C8.52028 13.094 8.15928 11.933 8.05228 11.361L10.5113 8.96699C10.6977 8.78612 10.8064 8.53982 10.8144 8.2802C10.8225 8.02059 10.7292 7.76804 10.5543 7.57599L6.85928 3.51299C6.68432 3.32035 6.44116 3.2035 6.18143 3.18725C5.92171 3.17101 5.66588 3.25665 5.46828 3.42599L3.29828 5.28699C3.12539 5.46051 3.0222 5.69145 3.00828 5.93599C2.99328 6.18599 2.70728 12.108 7.29928 16.702C11.3053 20.707 16.3233 21 17.7053 21C17.9073 21 18.0313 20.994 18.0643 20.992C18.3088 20.9783 18.5396 20.8747 18.7123 20.701L20.5723 18.53C20.7417 18.3325 20.8276 18.0768 20.8115 17.817C20.7954 17.5573 20.6788 17.3141 20.4863 17.139L16.4223 13.443Z"
                        fill="#90A3BF"
                      />
                    </svg>
                    <span v-if="contactArr.phone">{{ contactArr.phone }}</span>
                  </div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M15 0.5H5C2 0.5 0 2 0 5.5V12.5C0 16 2 17.5 5 17.5H15C18 17.5 20 16 20 12.5V5.5C20 2 18 0.5 15 0.5ZM15.47 6.59L12.34 9.09C11.68 9.62 10.84 9.88 10 9.88C9.16 9.88 8.31 9.62 7.66 9.09L4.53 6.59C4.21 6.33 4.16 5.85 4.41 5.53C4.67 5.21 5.14 5.15 5.46 5.41L8.59 7.91C9.35 8.52 10.64 8.52 11.4 7.91L14.53 5.41C14.85 5.15 15.33 5.2 15.58 5.53C15.84 5.85 15.79 6.33 15.47 6.59Z"
                        fill="#90A3BF"
                      />
                    </svg>
                    <span v-if="contactArr.email">{{ contactArr.email }}</span>
                  </div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                        fill="#90A3BF"
                      />
                    </svg>
                    <span v-if="contactArr.address">{{ contactArr.address }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="finance-payment-container"
          v-if="paymentType == 2"
          class="payment-container cash"
        >
        <div class="textt">
          <h4>{{$t('finance')}}</h4>
          <span class="word">
            {{$t('financeText')}}
          </span>
        </div>

          <div class="payment-method">
            <button
              @click="paymentMethod = 1"
              class="one"
              :class="{ active: paymentMethod == 1 }"
            >
              {{$t('ind')}}
            </button>
            <button
              @click="paymentMethod = 2"
              class="two"
              :class="{ active: paymentMethod == 2 }"
            >
              {{$t('comp')}}
            </button>
          </div>

        
          
          <div v-if="paymentMethod == 1">
           <financecar1 :carid="id" :price="mainCar.price" />
          
          </div>
          <div v-if="paymentMethod == 2">
            <financecar2 :carid="id" :price="mainCar.price" />

          </div>
        
        </div>
      </div>

      
       

      <div v-if="showConfirmCash" class="confirm-container">
        <div v-if="otpCash == 1" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="otpp" :height="250" :width="250" />
          </client-only>
          <h4>
          {{ $t('otp1') }}
        </h4>
          <p>
           {{ $t('otp2') }}
          </p>

          <v-otp-input v-model="otp1" :length="4" style="direction: ltr !important;" placeholder="-"></v-otp-input>
          <span class="error-msg2" v-if="error1">{{
                            error1
                  }}</span>
          <button class="resend">{{ $t('reOtp') }}</button>

          <button @click="sendOtp()" class="send">{{ $t('follow') }}</button>
        </div>
        <div v-if="otpCash == 2" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="250" :width="250" />
          </client-only>
          <h4>{{ $t('otp3') }}</h4>
          <p>
            {{ $t('otp4') }}
          </p>

          <div class="order-number">
            <h5>{{ $t('orderNum') }} : <span>{{ orderNum1 }}</span></h5>
            <button @click="copyToClipboard3();" class="iconn">
                              <img v-if="checkorder" src="~/assets/images/share1.svg" style="margin-bottom:0px" alt="">
                               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                              viewBox="0 0 448 512">
                              <path
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg> 
                             </button>
          </div>

          <nuxt-link :to="localePath('/')" class="nav-link">
            <button class="send home">{{ $t('backHome') }}</button>
          </nuxt-link>
        </div>
      </div>
      <div v-if="store.state.showConfirm1" class="confirm-container">
        <div v-if="paymentOtp == 1" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="otpp" :height="200" :width="200" />
          </client-only>
          <h4>
          {{ $t('otp1') }}
        </h4>
          <p>
           {{ $t('otp2') }}
          </p>

          <v-otp-input v-model="store.state.otpFin1" style="direction: ltr !important;" :length="4" placeholder="-"></v-otp-input>
          
          <span class="error-msg2" v-if="error2">{{
                            error1
                  }}</span>
          <button class="resend">{{ $t('reOtp') }}</button>

          <button @click="sendOtp2()" class="send">{{ $t('follow') }}</button>
        </div>
        <div v-if="paymentOtp == 2" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>{{ $t('otp3') }}</h4>
          <p>
            {{ $t('otp4') }}
          </p>

          <div class="order-number">
            <h5>{{ $t('orderNum') }} : <span>{{ orderNum2 }}</span></h5>
            <button @click="copyToClipboard4();" class="iconn">
                              <img v-if="check2" src="~/assets/images/share1.svg" style="margin-bottom:0px" alt="">
                               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                              viewBox="0 0 448 512">
                              <path
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg> 
                             </button>
          </div>
           <div @click="removeStore()">
          <nuxt-link :to="localePath('/')" class="nav-link">
            <button class="send home nav-link">{{ $t('backHome') }}</button>
          </nuxt-link>
           
           </div>
        </div>
      </div>

   
      <div
        class="modal fade"
        id="vendor-whatsapp-modal"
        tabindex="-1"
        aria-labelledby="logout-modal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content log-out-modal car">
          <img v-if="mainCar.vendor.type == 'individual'" src="~/assets/images/whats-model.svg" />
          <img v-else src="~/assets/images/whats.svg" />
            <h4  v-if="mainCar.vendor.type == 'individual'"> {{$t('loginModel1')}} </h4>
            <h4 v-else> {{$t('loginModel2')}} </h4>
            <p v-if="mainCar.vendor.type == 'individual'"> {{$t('loginModel4')}}  </p> 
            <p v-else> {{$t('loginModel4')}} </p>
         
            <button class="close" data-bs-dismiss="modal" aria-label="Close">
            <i class=" fa-solid fa-xmark"></i>
            </button>
            <div class="btns1">
            <div v-if="mainCar.vendor.type == 'individual'">
            <button class="fill gap-3" v-if="btnModel2 == 1" @click="btnModel2 = 2">
             {{$t('sendWhats')}}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M0.310059 17.6915L1.54049 13.2282C0.781776 11.9191 0.382712 10.4364 0.382991 8.92735C0.382991 4.18279 4.26579 0.317825 9.03222 0.317825C11.3472 0.317825 13.5163 1.21608 15.1566 2.83982C15.9627 3.63992 16.6014 4.58943 17.0361 5.63399C17.4709 6.67856 17.6932 7.79769 17.6904 8.92735C17.6904 13.6724 13.8081 17.5374 9.04115 17.5374C7.59242 17.5374 6.17048 17.1741 4.90333 16.485L0.310059 17.6915Z" fill="white"/>
    <path d="M0 18L1.27607 13.3821C0.491536 12.0258 0.0799591 10.4898 0.0823594 8.92711C0.0729327 4.00093 4.09217 0 9.03225 0C11.4291 0 13.6801 0.925254 15.3754 2.6128C17.0707 4.30035 18 6.54108 18 8.92711C18 13.8445 13.9813 17.8459 9.04118 17.8459C7.54328 17.8478 6.06945 17.4732 4.75799 16.7572L0 18ZM4.96786 15.1511L5.24123 15.3146C6.38803 15.9904 7.69788 16.3477 9.03274 16.3488C13.1338 16.3488 16.4788 13.0188 16.4788 8.93643C16.4788 6.9583 15.7044 5.08964 14.3008 3.69218C12.8962 2.29571 11.0188 1.51526 9.03175 1.51526C4.92122 1.51526 1.57624 4.84519 1.57624 8.9276C1.57624 10.3251 1.96819 11.695 2.71588 12.874L2.88903 13.1558L2.13241 15.8957L4.96687 15.1516L4.96786 15.1511Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.79902 5.18928C6.6353 4.81722 6.45272 4.80838 6.29792 4.80838C6.16099 4.79906 6.01512 4.79906 5.86032 4.79906C5.71446 4.79906 5.46837 4.85354 5.259 5.08031C5.04913 5.30709 4.4751 5.84261 4.4751 6.94064C4.4751 8.03818 5.27736 9.0999 5.38651 9.2447C5.49566 9.38999 6.93596 11.7127 9.21424 12.611C11.11 13.3546 11.493 13.2098 11.9033 13.1641C12.3131 13.119 13.2245 12.6291 13.4161 12.1024C13.5981 11.5856 13.5981 11.132 13.5436 11.0412C13.489 10.9504 13.3337 10.8959 13.1149 10.7781C12.8872 10.6691 11.7937 10.1253 11.5838 10.0521C11.3744 9.9795 11.2286 9.94318 11.0827 10.1611C10.9368 10.3879 10.5087 10.8871 10.3717 11.0319C10.2442 11.1772 10.1078 11.1953 9.88899 11.0864C9.66076 10.9779 8.94136 10.7418 8.08403 9.9795C7.4192 9.38999 6.97267 8.65518 6.83574 8.43725C6.70823 8.21047 6.81738 8.09267 6.93596 7.9837C7.03618 7.88406 7.16418 7.7206 7.27333 7.59347C7.38248 7.46634 7.4187 7.3667 7.50106 7.22141C7.57399 7.07661 7.53728 6.94015 7.48271 6.83167C7.42813 6.73154 6.99946 5.63399 6.79902 5.18928Z" fill="#2D3A4A"/>
  </svg>
            </button>
                        <div v-if="btnModel2 == 2" class="copy">
                 <a :href="mainCar.vendor.whatsapp_link" target="_blank" class="icon">
                  <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08146 3.33146C9.26451 3.1484 9.26451 2.8516 9.08146 2.66854L6.58146 0.168544C6.3984 -0.0145143 6.1016 -0.0145144 5.91854 0.168544C5.73549 0.351602 5.73549 0.648398 5.91854 0.831457L7.61834 2.53125L1.25 2.53125C0.991116 2.53125 0.781249 2.74112 0.781249 3C0.781249 3.25888 0.991116 3.46875 1.25 3.46875L7.61834 3.46875L5.91854 5.16854C5.73549 5.3516 5.73549 5.6484 5.91854 5.83146C6.1016 6.01451 6.3984 6.01451 6.58146 5.83146L9.08146 3.33146Z" fill="#DCB63B"/>
  </svg>
                 </a>
                <span>{{ `https://wa.me/${mainCar.vendor.phone}` }}</span>
              </div>
            </div>
            <div v-else class="copy">
                 <a :href="mainCar.vendor.whatsapp_link" target="_blank" class="icon">
                  <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08146 3.33146C9.26451 3.1484 9.26451 2.8516 9.08146 2.66854L6.58146 0.168544C6.3984 -0.0145143 6.1016 -0.0145144 5.91854 0.168544C5.73549 0.351602 5.73549 0.648398 5.91854 0.831457L7.61834 2.53125L1.25 2.53125C0.991116 2.53125 0.781249 2.74112 0.781249 3C0.781249 3.25888 0.991116 3.46875 1.25 3.46875L7.61834 3.46875L5.91854 5.16854C5.73549 5.3516 5.73549 5.6484 5.91854 5.83146C6.1016 6.01451 6.3984 6.01451 6.58146 5.83146L9.08146 3.33146Z" fill="#DCB63B"/>
  </svg>
                 </a>
                <span>{{ `https://wa.me/${mainCar.vendor.phone}` }}</span>
              </div>
             <button class="stroke" data-bs-dismiss="modal" aria-label="Close">{{$t('back')}}</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="vendor-phone-modal"
        tabindex="-1"
        aria-labelledby="logout-modal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content log-out-modal car">
          <img v-if="mainCar.vendor.type == 'individual'" src="~/assets/images/phone-model.svg" />
          <img v-else src="~/assets/images/Phone_Call_5_.svg" />
            <h4  v-if="mainCar.vendor.type == 'individual'">{{ $t('loginModel1') }}</h4>
            <h4 v-else>{{ $t('loginModel2') }}</h4>

            <p v-if="mainCar.vendor.type == 'individual'"> {{ $t('loginModel5') }}  </p>
            <p v-else> {{ $t('loginModel6') }} {{ mainCar.vendor.phone }}.</p>
         
            <button class="close" data-bs-dismiss="modal" aria-label="Close">
            <i class=" fa-solid fa-xmark"></i>
            </button>
            <div class="btns1">
            <div v-if="mainCar.vendor.type == 'individual'">
            <button class="fill" v-if="btnModel == 1" @click="btnModel = 2"> {{ $t('getnum') }}</button>
            <div v-if="btnModel == 2" class="copy">
              <svg v-if="copyPhone" @click="copyToClipboard()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3417 6.2714V1.91992H9.11988C7.7944 1.91992 6.71988 2.99444 6.71988 4.31992V16.7999C6.71988 18.1254 7.7944 19.1999 9.11988 19.1999H18.7199C20.0454 19.1999 21.1199 18.1254 21.1199 16.7999V7.69566H17.8035C17.0003 7.69566 16.3417 7.06227 16.3417 6.2714ZM17.5764 2.48677C17.4967 2.38227 17.4041 2.2904 17.3017 2.21272V6.2714C17.3017 6.52352 17.5223 6.73566 17.8035 6.73566H20.8163L17.5764 2.48677ZM5.27988 22.0799H14.8799C16.041 22.0799 17.0095 21.2554 17.2319 20.1599H9.11988C7.26421 20.1599 5.75988 18.6556 5.75988 16.7999V4.79992H5.27988C3.9544 4.79992 2.87988 5.87444 2.87988 7.19992V19.6799C2.87988 21.0054 3.9544 22.0799 5.27988 22.0799Z" fill="#90A3BF"/>
</svg>
<i v-else class="fa-solid fa-check"></i>
              <span>{{ mainCar.vendor.phone }}</span>
            </div>
            
            </div>
            <div v-else class="copy">
              <svg v-if="copyPhone" @click="copyToClipboard()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3417 6.2714V1.91992H9.11988C7.7944 1.91992 6.71988 2.99444 6.71988 4.31992V16.7999C6.71988 18.1254 7.7944 19.1999 9.11988 19.1999H18.7199C20.0454 19.1999 21.1199 18.1254 21.1199 16.7999V7.69566H17.8035C17.0003 7.69566 16.3417 7.06227 16.3417 6.2714ZM17.5764 2.48677C17.4967 2.38227 17.4041 2.2904 17.3017 2.21272V6.2714C17.3017 6.52352 17.5223 6.73566 17.8035 6.73566H20.8163L17.5764 2.48677ZM5.27988 22.0799H14.8799C16.041 22.0799 17.0095 21.2554 17.2319 20.1599H9.11988C7.26421 20.1599 5.75988 18.6556 5.75988 16.7999V4.79992H5.27988C3.9544 4.79992 2.87988 5.87444 2.87988 7.19992V19.6799C2.87988 21.0054 3.9544 22.0799 5.27988 22.0799Z" fill="#90A3BF"/>
</svg>
<i v-else class="fa-solid fa-check"></i>
              <span>{{ mainCar.vendor.phone }}</span>
            </div>
             <button class="stroke" data-bs-dismiss="modal" aria-label="Close">{{ $t('back') }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="similar-cars">
        <div class="head">
          <h4> {{ $t("similar") }} </h4>
        </div>
        <!-- <div class="row">
          <div v-for="i in 5" class="col-12 col-xl-3 col-lg-3 col-md-6">
            <car-card />
          </div>
        </div> -->
        <swiper
            :navigation="{
          nextEl: '.slider-product1-next',
          prevEl: '.slider-product1-prev',
        }"
              :breakpoints="{
                '300': {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
                '768': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                '1024': {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }"
              :autoplay="{
                delay: 4500,
                disableOnInteraction: false,
              }"
              :modules="[SwiperNavigation, SwiperAutoplay]"
            >
              <swiper-slide v-for="item in RelatedCars">
                <car-card :car="item" />
              </swiper-slide>
            </swiper>

            <div v-if="RelatedCars.length >= 1" class="icons-arrow">
              <div class="icon slider-product1-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  class="arrow-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.29289 1.3384C3.90237 1.72995 3.90237 2.36479 4.29289 2.75634L9.58579 8.06316L4.29289 13.37C3.90237 13.7615 3.90237 14.3964 4.29289 14.7879C4.68342 15.1795 5.31658 15.1795 5.70711 14.7879L11.7071 8.77213C12.0976 8.38058 12.0976 7.74574 11.7071 7.35419L5.70711 1.3384C5.31658 0.946851 4.68342 0.946851 4.29289 1.3384Z"
                    
                  />
                </svg>
              </div>
              <div class="icon slider-product1-prev">
                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.3384C12.0976 1.72995 12.0976 2.36479 11.7071 2.75634L6.41421 8.06316L11.7071 13.37C12.0976 13.7615 12.0976 14.3964 11.7071 14.7879C11.3166 15.1795 10.6834 15.1795 10.2929 14.7879L4.29289 8.77213C3.90237 8.38058 3.90237 7.74574 4.29289 7.35419L10.2929 1.3384C10.6834 0.946851 11.3166 0.946851 11.7071 1.3384Z" />
            </svg>
              </div>
            </div>
      </div>
    </div>
    <Loader v-if="pendingLoader"></Loader> 
  </div>
</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
import Dropdown from "primevue/dropdown";
import loader from "~/assets/animations/Loader.json";
import otpp from "~/assets/animations/otp.json";
import success from "~/assets/animations/success.json";
import { Vue3Lottie } from "vue3-lottie";
import axios from 'axios';
const { locale } = useI18n();
import { useToast } from 'vue-toastification'
const toast = useToast();
import Cookies from "js-cookie";
const tokenCookie = Cookies.get("token");
const localePath = useLocalePath();
import { useStore } from "~/store";
let store = useStore;
import useValidate from "@vuelidate/core";
import {
    required,
    email,
    sameAs,
    minLength,
    helpers,
} from "@vuelidate/validators";

let slide = ref(true);
let mainCar = ref(null);
let RelatedCars = ref([]);
if(locale.value == 'ar'){
  slide.value = true;
} else{
  slide.value = false;
}

let btnModel = ref(1);
let btnModel2 = ref(1);
let paymentMethod = ref(1);
let paymentMethod2 = ref(1);
let paymentType = ref(0);
let sliderValue1 = ref(340000);
let sliderValue2 = ref(40);
let sliderValue3 = ref(40);
let showConfirm = ref(false);
let shareIcons = ref(false);
let checkCopy = ref(true);
const selectedFileName1 = ref(null);
const selectedFileName2 = ref(null);
const selectedFileName3 = ref(null);
const selectedFileName4 = ref(null);
const removeStore = ()=>{
  store.state.otpFin1 = null;
  store.state.orderFin1 = null;
  store.state.phoneFin1 = null;
  store.state.showConfirm1 = false;
}
let otp = ref("");
let copyPhone = ref(true);

const route = useRoute();
let pendingLoader = ref(false);
let btnCash = ref(1);
let otpCash = ref(1);
let showConfirmCash = ref(false);
let otp1 = ref('');
let orderNumber1 = ref('');
let otp2 = ref('');

let theRoute = ref('');
let id = ref(route.query.id);
if (process.client) {
  theRoute.value = window.location.href;
}
function copyToClipboard() {
    if (process.client) {
      copyPhone.value = false;
        const clipBoard = navigator.clipboard;
        clipBoard.writeText(mainCar.value.vendor.phone).then(() => {
        });

        setTimeout(() => {
          copyPhone.value = true;
        }, 1000);
    }

}
function copyToClipboard2() {
  if (process.client) {
    checkCopy.value = false;
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(theRoute.value).then(() => {
    });

    setTimeout(() => {
      checkCopy.value = true;
    }, 1000);
  }

}
let valuee1 = ref(" تم الاضافة الي قائمة المفضلات ");
let valuee2 = ref(" تم الحذف من قائمة المفضلات ");
if (locale.value == "ar") {
  valuee1.value = "تم الاضافة الي قائمة المفضلات ";
  valuee2.value = "تم الحذف من قائمة المفضلات ";

} else {
    valuee1.value = 'value is required';
  valuee2.value = "The email field is required";

}




let options = ref({
  minimizable: false,
  playerSize: "standard",
  backgroundColor: "#fff",
  backgroundStyle: "color",
  theme: {
    controlsView: "standard",
    active: "light",
    light: {
      color: "#3D4852",
      backgroundColor: "#fff",
      opacity: "0.7",
    },
    dark: {
      color: "#fff",
      backgroundColor: "#202020",
      opacity: "0.7",
    },
  },
});



let paymentIndividualBtn = ref(1);



let pending = ref(false);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};


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

let pending1 = ref(false);
let pending2 = ref(false);
let errors1 = ref([]);
let errors2 = ref([]);


let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
let value5 = ref("يجب أن يكون عدد السيارات 1 سيارة على الأقل");
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


let formCash1 = ref({
  name:'',
  phone:'',
});
let formCash2 = ref({
  organization_name:'',
  organization_type:'',
  commercial_registration_no:'',
  organization_activity:'',
  name:'',
  city_id:'',
  bank_id:'',
  phone:'',
  organization_age:'',
  car_count:1
});


const rules1 = computed(() => {
    return {
      name: { required: helpers.withMessage(value1.value, required) },
      phone: { required: helpers.withMessage(value1.value, required) },
       
    }
});
const rules2 = computed(() => {
    return {
      name: { required: helpers.withMessage(value1.value, required) },
      phone: { required: helpers.withMessage(value1.value, required) },
      organization_name: { required: helpers.withMessage(value1.value, required) },
      organization_type: { required: helpers.withMessage(value1.value, required) },
      commercial_registration_no: { required: helpers.withMessage(value1.value, required) },
      organization_activity: { required: helpers.withMessage(value1.value, required) },
      city_id: { required: helpers.withMessage(value1.value, required) },
      bank_id: { required: helpers.withMessage(value1.value, required) },
      organization_age: { required: helpers.withMessage(value1.value, required) },
      car_count: { required: helpers.withMessage(value1.value, required) },
       
    }
});

const v1$ = useValidate(rules1, formCash1);
const v2$ = useValidate(rules2, formCash2);

let otpCashh = ref('');
let orderNum1 = ref('');
let pendingOtp1 = ref(false);
const cashFunc1 = async () =>{
  if(btnCash.value == 1){
    let check = await v1$.value.$validate();
  if(check){
    pending1.value = true;
    try{
      let result =  await axios.post(`${getUrl()}/cash-Order`, {name:formCash1.value.name , phone:formCash1.value.phone},{
                params: {
                       type: 'individual',
                        id: id.value
                    },
                   
                      headers: {
                        "Content-Language": `${locale.value}`,
                    }
                   
      });
    if(result.status >= 200){
      showConfirmCash.value = true;
      pending1.value = false;
      otp1.value = result.data.data.verification_code;
      orderNumber1.value = result.data.data.Order_Number;
    }
    } catch(errors){
      if (errors.response) {
                  pending1.value = false;
                  errors1.value = errors.response.data.errors;
              }
    }
  }

  } else{
    let formBody = new FormData();
    formBody.append("organization_name", formCash2.value.organization_name);
    formBody.append("organization_type", formCash2.value.organization_type);
    formBody.append("commercial_registration_no", formCash2.value.commercial_registration_no);
    formBody.append("organization_activity", formCash2.value.organization_activity);
    formBody.append("name", formCash2.value.name);
    formBody.append("city_id", formCash2.value.city_id);
    formBody.append("bank_id", formCash2.value.bank_id);
    formBody.append("phone", formCash2.value.phone);
    formBody.append("organization_age", formCash2.value.organization_age);
    formBody.append("car_count", formCash2.value.car_count);
  let check = await v2$.value.$validate();
if(check){
  pending2.value = true;
  try{
    let result =  await axios.post(`${getUrl()}/cash-Order`, formBody,{
              params: {
                     type: 'organization',
                      id: id.value
                  },
                 
                    headers: {
                      "Content-Language": `${locale.value}`,
                  }
                 
    });
    if(result.status >= 200){
      showConfirmCash.value = true;
      pending1.value = false;
      otp1.value = result.data.data.verification_code;
      orderNumber1.value = result.data.data.Order_Number;
    }
    } catch(errors){
      if (errors.response) {
                  pending1.value = false;
                  errors2.value = errors.response.data.errors;
              }
    }
}
  }
}

let error1 = ref();
const sendOtp = async () => {
    let formBody = new FormData();
    formBody.append("otp", otp1.value );
    formBody.append("phone", btnCash.value == 1 ? formCash1.value.phone : formCash2.value.phone);
    formBody.append("order_id", orderNumber1.value);
    try {
        let result = await axios.post(`${getUrl()}/verify-otp-order`, formBody, {
            headers: {
                "Content-Language": `${locale.value}`,
            },
        });
        if (result.status >= 200) {
          otpCash.value = 2;
          pendingOtp1.value = false;
          orderNum1.value = result.data.data.Order_Number;
          error1.value = '';
        }
    } catch (errorss) {
        if (errorss.response) {
          pendingOtp1.value = false;
          error1.value = errorss.response.data.errors;
        }
    }
}

let paymentOtp = ref(1);
let pendingOtp2 = ref(false);
let orderNum2 = ref();
let error2 = ref();




const sendOtp2 = async () => {
    let formBody = new FormData();
    formBody.append("otp", store.state.otpFin1 );
    formBody.append("phone", store.state.phoneFin1);
    formBody.append("order_id", store.state.orderFin1);
    try {
        let result = await axios.post(`${getUrl()}/verify-otp-order`, formBody, {
            headers: {
                "Content-Language": `${locale.value}`,
            },
        });
        if (result.status >= 200) {
          // if(store.state.orderFin1){
          // } 
          paymentOtp.value = 2;
          pendingOtp2.value = false;
          // if(store.state.orderFin2){
          //   paymentOtp1.value = 2;
          //   pendingOtp2.value = false;
          // }
          orderNum2.value = result.data.data.Order_Number;
          error2.value = '';
        }
    } catch (errorss) {
        console.log(errorss);
        if (errorss.response) {
          pendingOtp2.value = false;
          error2.value = errorss.response.data.errors;
        }
    }
}

let check2 = ref(true);
function copyToClipboard4() {
    /* Copy the text */
    if (process.client) {
        check2.value = false;
        const clipBoard = navigator.clipboard;
        clipBoard.writeText(orderNum2.value).then(() => {
        });

        setTimeout(() => {
            check2.value = true;
        }, 1000);
    }

}

let checkorder = ref(true);
function copyToClipboard3() {
    /* Copy the text */
    if (process.client) {
      checkorder.value = false;
        const clipBoard = navigator.clipboard;
        clipBoard.writeText(orderNum1.value).then(() => {
        });

        setTimeout(() => {
            checkorder.value = true;
        }, 1000);
    }

}

let optionsCars = ref([]);
const getOptions = async () => {
    let result = await axios.get(`${getUrl()}/car-option`, {
        headers: {
            "Content-Language": `${locale.value}`,
        },
    });

    optionsCars.value = result.data.data;
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

const getCar = async ()=>{
  pendingLoader.value = true;
  let result = await axios.get(`${getUrl()}/car/${id.value}`,{
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if(result.status == 200){
    pendingLoader.value = false;
    mainCar.value = result.data.data.carDetails;
    RelatedCars.value = result.data.data.Relatedcars;
  }
}

const addFavFunc = async () =>{
  mainCar.value.is_fav = !mainCar.value.is_fav;
    let formBody = new FormData();
  formBody.append("car_id", id.value);
  let result = await axios.post(
    `${getUrl()}/${tokenCookie ? 'add-favorite-withauth' : 'add-favorite-withoutauth'}`,
    { car_id: id.value },
    {
      headers: {
        "Content-Language": `${locale.value}`,
        Authorization: `Bearer ${tokenCookie}`,
      },
    }
  );
  if(result.status >= 200){
        
        toast.success(mainCar.value.is_fav ? valuee1.value : valuee2.value, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  class:'toast-container',
//   rtl: false
});

  }
}

watch(
  () => route.query.id,
  (newId) => {
    id.value = newId;
    getCar();
  }
);

// start lightbox images

const visibleRef = ref(false);
const indexRef = ref(0);
const imgsRef = ref([]);

const onShow = () => {
  visibleRef.value = true;
};
const showMultiple = () => {
  imgsRef.value = mainCar.value.images;
  indexRef.value = 0;
  onShow();
};
const onHide = () => (visibleRef.value = false);

// end lightbox images

onMounted(() => {
  getCar();
  getContactData();
  getOptions();
  getCites();
  
});
</script>
