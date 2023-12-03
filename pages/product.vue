<template>
  <div style="min-height: 100vh">
    <div class="container">
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
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";

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
</script>
