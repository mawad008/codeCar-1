<template>
  <div>
    <nav
      class="navbar navbar-expand-lg"
      :class="{
        active: activeNav,
        back:
          route.name !=
          `${locale == 'ar' ? 'index___ar___default' : 'index___en'}`,
      }"
    >
      <div
        class="container items w-100 d-flex align-items-center justify-content-between"
      >
        <div class="logo navbar-brand">
        <nuxt-link :to="localePath('/')">
        <div class="logo-container">
          <img class="dark-img" src="~/assets/images/logo-white.svg" alt="" />
           <logo2/>
          <span>منصة بيع وتمويل السيارات</span>
        </div>
        </nuxt-link>
        </div>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="links navbar-nav justify-content-center w-100">
            <nuxt-link class="nav-link" :to="localePath('/')"
              >{{$t("home")}}</nuxt-link
            >
            <nuxt-link class="nav-link" :to="localePath('/finance')"
              >{{$t("finance")}}</nuxt-link
            >
            <nuxt-link class="nav-link" :to="localePath('/market')"
              >{{$t("market")}}</nuxt-link
            >

            <nuxt-link class="nav-link" :to="localePath('/news')"
              >
             {{$t("news")}}
            </nuxt-link>
            <nuxt-link class="nav-link" :to="localePath('/offers')"
              >{{$t("offers")}}</nuxt-link
            >
            <nuxt-link class="nav-link" :to="localePath('/orders')"
              >
              {{ $t("followOrder") }}
              </nuxt-link
            >
            <nuxt-link class="nav-link" :to="localePath('/contact')"
              >
              {{ $t("contact") }}
            </nuxt-link>
            <nuxt-link class="nav-link" :to="localePath('/about')"
              >
              {{ $t("about") }}
              </nuxt-link
            >
            <nuxt-link class="nav-link spe" :to="localePath('/addCar')"
              >
              {{ $t("ad") }}
              </nuxt-link
            >
          </div>

          <div
            class="icons justify-content-center justify-content-xl-start justify-content-lg-start justify-content-md-start mt-4 mt-xl-0 mt-lg-0 mt-md-0"
          >
            <span @click="changeLang()" class="lang">{{ $t("lang") }}</span>
            <div @click="overlay = !overlay" class="icon">
              <img
                class="dark-img"
                src="~/assets/images/search-icon.svg"
                alt=""
              />
              <svg
                class="white-img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.0254 16.4522L19.4691 18.9195C20.148 19.605 19.1299 20.6335 18.451 19.948L16.0071 17.4805C13.0714 19.9259 8.7405 19.739 6.01915 16.9906C3.11365 14.0562 3.11365 9.29855 6.01915 6.36414C8.92465 3.42973 13.6354 3.42973 16.5409 6.36414C19.2625 9.11282 19.4473 13.4873 17.0254 16.4522ZM15.5227 7.3925C13.1795 5.02604 9.38053 5.02604 7.03739 7.3925C4.69424 9.75896 4.69424 13.5958 7.03739 15.9622C9.38053 18.3287 13.1795 18.3287 15.5227 15.9622C17.8658 13.5958 17.8658 9.75896 15.5227 7.3925Z"
                  fill="#90A3BF"
                />
              </svg>
            </div>
            <div v-if="overlay" class="searchBar">
              <input type="text"  @keypress.enter="goCarsFilterByName()"  v-model="searchValue" :placeholder="$t('search')" />
              <div @click="goCarsFilterByName()" class="iconn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0254 17.0477L19.4691 19.515C20.148 20.2005 19.1299 21.229 18.451 20.5435L16.0071 18.076C13.0714 20.5213 8.7405 20.3345 6.01915 17.586C3.11365 14.6516 3.11365 9.89401 6.01915 6.9596C8.92465 4.02519 13.6354 4.02519 16.5409 6.9596C19.2625 9.70828 19.4473 14.0828 17.0254 17.0477ZM15.5227 7.98796C13.1795 5.6215 9.38053 5.6215 7.03739 7.98796C4.69424 10.3544 4.69424 14.1912 7.03739 16.5577C9.38053 18.9241 13.1795 18.9241 15.5227 16.5577C17.8658 14.1912 17.8658 10.3544 15.5227 7.98796Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div v-if="overlay" @click="overlay = !overlay" class="overlay"></div>

            <nuxt-link :to="localePath('/wishlist')" class="icon">

              <svg class="dark-img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z" fill=""/>
                </svg>
                    <svg class="white-img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#90A3BF">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z" fill=""/>
            </svg>
            </nuxt-link>
            <nuxt-link :to="localePath(`${tokenCookie ? '/settings' : 'auth'}`)" class="icon">
              <svg
                class="dark-img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 11.5199C9.61412 11.5199 7.67999 9.58575 7.67999 7.19988C7.67999 4.81401 9.61412 2.87988 12 2.87988C14.3859 2.87988 16.32 4.81401 16.32 7.19988C16.32 9.58575 14.3859 11.5199 12 11.5199ZM12 12.4799C15.9764 12.4799 19.2 15.7034 19.2 19.6799V21.5999C19.2 21.865 18.9851 22.0799 18.72 22.0799H5.27999C5.01489 22.0799 4.79999 21.865 4.79999 21.5999V19.6799C4.79999 15.7034 8.02354 12.4799 12 12.4799Z"
                  fill="white"
                />
              </svg>
              <svg
                class="white-img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 11.5199C9.61412 11.5199 7.67999 9.58575 7.67999 7.19988C7.67999 4.81401 9.61412 2.87988 12 2.87988C14.3859 2.87988 16.32 4.81401 16.32 7.19988C16.32 9.58575 14.3859 11.5199 12 11.5199ZM12 12.4799C15.9764 12.4799 19.2 15.7034 19.2 19.6799V21.5999C19.2 21.865 18.9851 22.0799 18.72 22.0799H5.27999C5.01489 22.0799 4.79999 21.865 4.79999 21.5999V19.6799C4.79999 15.7034 8.02354 12.4799 12 12.4799Z"
                  fill="#90A3BF"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- <div class="search-nav">
    <div class="input"> 
     <input type="text" placeholder="search">
     <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    </div> -->
    <slot />
    <Loader2 v-if="checkInt"></Loader2>

    <div @click="scrollUp()" class="up-arrow-icon" :class="{'active':arrowActive}">
      <client-only>
        <Vue3Lottie :animation-data="arrow" :height="100" :width="100" />
      </client-only>
    </div>
    <footer>
      <div class="footer-container">
        <div class="container">
          <div class="search">
            <h5>
            {{ $t("mail1") }}
            </h5>
            <span class="text-center">
              {{ $t("mail2") }}
             </span>
            <div class="search-input">
              <div class="inputt">
                <img src="~/assets/images/sms.svg" alt="" />
                <input
                  type="email"
                  v-model="email"
                  :placeholder="$t('emailE')"
                />
              </div>
              <button @click="subscripe" :disabled="pendingSub" class="">
              <div class="d-flex align-items-center gap-2">
              <span>
              {{$t("join")}}
              </span>
              <v-progress-circular v-if="pendingSub"  indeterminate :size="22" :width="3"></v-progress-circular>
              
              </div>
              
              </button>
            </div>
            <span v-if="error" class="text-danger">{{ error.email[0] }}</span>
          </div>
          <v-divider :thickness="1"></v-divider>
          <div class="row justify-content-between">
            <div class="col-12 col-xl-4 col-lg-4 col-md-6">
              <div
                v-if="footerData"
                class="box-container d-flex flex-column justify-content-center gap-3"
              >
                <div
                  class="d-flex justify-content-center justify-content-xl-start justify-content-lg-start justify-content-lg-start"
                >
                  <img
                    class="img-flui"
                    :src="footerData.logo"
                    style="width: 74px; height: 46px; object-fit: cover"
                    alt=""
                  />
                </div>
                <p v-if="footerData" class="">
                  {{ footerData.description }}
                </p>
                <div
                  v-if="footerData"
                  class="icons row d-flex align-items-center justify-content-center justify-content-xl-start justify-content-lg-start justify-content-lg-start"
                >
                  <div v-if="footerData.youtube" class="col-12 col-xl-2 col-lg-2 col-md-4 icon">
                    <a target="_blank" :href="footerData.youtube">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.8008 6C19.8008 6 19.6055 4.62109 19.0039 4.01563C18.2422 3.21875 17.3906 3.21484 17 3.16797C14.2031 2.96484 10.0039 2.96484 10.0039 2.96484H9.99609C9.99609 2.96484 5.79688 2.96484 3 3.16797C2.60938 3.21484 1.75781 3.21875 0.996094 4.01563C0.394531 4.62109 0.203125 6 0.203125 6C0.203125 6 0 7.62109 0 9.23828V10.7539C0 12.3711 0.199219 13.9922 0.199219 13.9922C0.199219 13.9922 0.394531 15.3711 0.992187 15.9766C1.75391 16.7734 2.75391 16.7461 3.19922 16.832C4.80078 16.9844 10 17.0313 10 17.0313C10 17.0313 14.2031 17.0234 17 16.8242C17.3906 16.7773 18.2422 16.7734 19.0039 15.9766C19.6055 15.3711 19.8008 13.9922 19.8008 13.9922C19.8008 13.9922 20 12.375 20 10.7539V9.23828C20 7.62109 19.8008 6 19.8008 6ZM7.93359 12.5938V6.97266L13.3359 9.79297L7.93359 12.5938Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  <div v-if="footerData.instagram" class="col-12 col-xl-2 col-lg-2 col-md-4 icon">
                    <a target="_blank" :href="footerData.instagram">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_294_505)">
                          <path
                            d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                            fill="white"
                          />
                          <path
                            d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                            fill="white"
                          />
                          <path
                            d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_294_505">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div v-if="footerData.facebook" class="col-12 col-xl-2 col-lg-2 col-md-4 icon">
                    <a target="_blank" :href="footerData.facebook">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_294_519)">
                          <path
                            d="M10 0C4.4772 0 0 4.4772 0 10C0 14.6896 3.2288 18.6248 7.5844 19.7056V13.056H5.5224V10H7.5844V8.6832C7.5844 5.2796 9.1248 3.702 12.4664 3.702C13.1 3.702 14.1932 3.8264 14.6404 3.9504V6.7204C14.4044 6.6956 13.9944 6.6832 13.4852 6.6832C11.8456 6.6832 11.212 7.3044 11.212 8.9192V10H14.4784L13.9172 13.056H11.212V19.9268C16.1636 19.3288 20.0004 15.1128 20.0004 10C20 4.4772 15.5228 0 10 0Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_294_519">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div v-if="footerData.snapchat" class="col-12 col-xl-2 col-lg-2 col-md-4 icon">
                    <a target="_blank" :href="footerData.snapchat">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.9277 14.5479C19.7898 14.17 19.5242 13.9657 19.2229 13.8023C19.1667 13.7716 19.1157 13.741 19.0697 13.7206C18.9778 13.6746 18.8858 13.6286 18.7939 13.5827C17.8542 13.0822 17.1188 12.4591 16.6131 11.7135C16.4701 11.5041 16.3425 11.2794 16.2403 11.0495C16.1944 10.927 16.1995 10.8555 16.2301 10.7891C16.2608 10.738 16.3016 10.6971 16.3527 10.6614C16.5161 10.5541 16.6795 10.4469 16.7919 10.3754C16.9911 10.2426 17.1545 10.1405 17.2567 10.069C17.6397 9.79828 17.9104 9.51228 18.0789 9.19053C18.3189 8.7411 18.3496 8.21506 18.1657 7.74009C17.9104 7.06595 17.2771 6.65227 16.5059 6.65227C16.3425 6.65227 16.1841 6.66759 16.0207 6.70334C15.9799 6.71356 15.9339 6.72377 15.893 6.73398C15.8981 6.27434 15.8879 5.78916 15.8471 5.30909C15.7041 3.62883 15.1116 2.7504 14.4988 2.05072C14.1055 1.61151 13.6459 1.23868 13.1301 0.947576C12.2006 0.416431 11.1434 0.145752 9.99427 0.145752C8.84516 0.145752 7.79309 0.416431 6.86359 0.947576C6.34776 1.23868 5.88812 1.61151 5.49487 2.05072C4.88201 2.7504 4.29469 3.63394 4.14658 5.30909C4.10572 5.78916 4.09551 6.27434 4.10061 6.73398C4.05976 6.72377 4.0189 6.71356 3.97294 6.70334C3.81461 6.66759 3.65119 6.65227 3.49286 6.65227C2.72168 6.65227 2.0884 7.07106 1.83304 7.74009C1.64918 8.21506 1.67982 8.7411 1.91986 9.19053C2.0884 9.51228 2.35907 9.79828 2.74211 10.069C2.84425 10.1405 3.00258 10.2426 3.20686 10.3754C3.31411 10.4469 3.47243 10.549 3.63076 10.6512C3.68694 10.6869 3.7329 10.7329 3.76865 10.7891C3.79929 10.8555 3.8044 10.927 3.75333 11.0597C3.65119 11.2845 3.52861 11.5041 3.38561 11.7084C2.89022 12.4336 2.17522 13.0515 1.26614 13.5469C0.78607 13.8023 0.285569 13.9708 0.0710683 14.5479C-0.0872535 14.982 0.0148896 15.4723 0.418355 15.8911C0.566463 16.0443 0.740106 16.1771 0.929071 16.2793C1.32232 16.4938 1.74111 16.6623 2.18032 16.7798C2.27225 16.8053 2.35397 16.841 2.43057 16.8921C2.57868 17.0198 2.55825 17.2139 2.75233 17.4999C2.84936 17.648 2.97704 17.7757 3.12004 17.8778C3.53372 18.1638 3.99847 18.1791 4.48876 18.1996C4.93308 18.2149 5.43358 18.2353 6.01069 18.4243C6.25073 18.5009 6.49587 18.6541 6.78187 18.8328C7.47134 19.2567 8.41106 19.8338 9.98917 19.8338C11.5673 19.8338 12.5121 19.2516 13.2067 18.8277C13.4927 18.6541 13.7378 18.5009 13.9676 18.4243C14.5396 18.2353 15.0453 18.2149 15.4896 18.1996C15.9799 18.1791 16.4446 18.1638 16.8583 17.8778C17.0319 17.7552 17.1749 17.602 17.2771 17.4182C17.4201 17.1781 17.415 17.0096 17.5478 16.8921C17.6193 16.841 17.701 16.8053 17.7827 16.7849C18.2219 16.6674 18.6509 16.4989 19.0493 16.2793C19.2484 16.172 19.4323 16.029 19.5855 15.8605L19.5906 15.8554C19.989 15.4468 20.086 14.9667 19.9277 14.5479ZM18.5283 15.2987C17.6754 15.7685 17.1034 15.7175 16.6642 16.0035C16.2863 16.2435 16.511 16.7644 16.2403 16.9534C15.9033 17.1832 14.9125 16.9381 13.6357 17.362C12.5785 17.7093 11.9095 18.7154 10.0096 18.7154C8.10973 18.7154 7.45602 17.7144 6.38351 17.362C5.10673 16.9381 4.11594 17.1883 3.77886 16.9534C3.50819 16.7644 3.72779 16.2435 3.35497 16.0035C2.91065 15.7175 2.34375 15.7685 1.49086 15.2987C0.944392 14.9974 1.25593 14.8135 1.43468 14.7267C4.52962 13.2303 5.02501 10.9167 5.04544 10.7431C5.07097 10.5337 5.10162 10.3703 4.8718 10.1609C4.65219 9.9566 3.67161 9.34885 3.39583 9.15988C2.9464 8.84324 2.74722 8.5317 2.89533 8.14356C2.99747 7.87799 3.24772 7.77584 3.50819 7.77584C3.5899 7.77584 3.67161 7.78606 3.75333 7.80138C4.24872 7.90863 4.7288 8.15377 5.00458 8.22527C5.04033 8.23549 5.07098 8.2406 5.10673 8.2406C5.25483 8.2406 5.3059 8.16399 5.29569 7.99545C5.26505 7.45409 5.18844 6.40202 5.27526 5.41634C5.39273 4.06294 5.82683 3.3888 6.34776 2.79637C6.59801 2.51037 7.76755 1.27443 10.0096 1.27443C12.2516 1.27443 13.4212 2.50526 13.6714 2.79126C14.1924 3.38369 14.6265 4.05783 14.7439 5.41123C14.8308 6.39691 14.7541 7.44899 14.7184 7.99034C14.7082 8.1691 14.7593 8.23549 14.9074 8.23549C14.9431 8.23549 14.9738 8.23038 15.0095 8.22017C15.2853 8.15377 15.7654 7.90352 16.2608 7.79627C16.3425 7.77584 16.4242 7.77074 16.5059 7.77074C16.7664 7.77074 17.0166 7.87288 17.1188 8.13845C17.2669 8.5266 17.0677 8.83813 16.6183 9.15478C16.3476 9.34374 15.367 9.95149 15.1423 10.1558C14.9125 10.3652 14.9431 10.5286 14.9686 10.738C14.9891 10.9116 15.4845 13.2252 18.5794 14.7216C18.7633 14.8084 19.0697 14.9974 18.5283 15.2987Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  <div v-if="footerData.twitter" class="col-12 col-xl-2 col-lg-2 col-md-4 icon">
                    <a target="_blank" :href="footerData.twitter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.2719 1.58667H18.0831L11.9414 8.60625L19.1667 18.1583H13.5094L9.07837 12.365L4.0083 18.1583H1.19537L7.76454 10.6501L0.833344 1.58667H6.63427L10.6395 6.88195L15.2719 1.58667ZM14.2853 16.4757H15.843L5.78784 3.18095H4.11623L14.2853 16.4757Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  <div v-if="footerData.twitter" class="col-12 col-xl-2 col-lg-2 col-md-4 icon">
                    <a target="_blank" :href="footerData.twitter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_294_522)">
                          <path
                            d="M14.2271 0.500488H10.8565V14.1237C10.8565 15.7469 9.56015 17.0802 7.94688 17.0802C6.3336 17.0802 5.03723 15.7469 5.03723 14.1237C5.03723 12.5295 6.3048 11.2251 7.86047 11.1672V7.74688C4.43226 7.80482 1.66666 10.6164 1.66666 14.1237C1.66666 17.6599 4.48987 20.5005 7.9757 20.5005C11.4615 20.5005 14.2847 17.6309 14.2847 14.1237V7.13815C15.5523 8.06571 17.1079 8.61643 18.75 8.64543V5.22513C16.2149 5.13817 14.2271 3.05121 14.2271 0.500488Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_294_522">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0 0.500488)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div v-if="footerData.whatsapp" class="col-12 col-xl-2 col-lg-2 col-md-4 icon">
                    <a target="_blank" :href="footerData.whatsapp">
                       <img src="~/assets/images/whatsapp.svg" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 main-link col-xl-2 col-lg-2 d-flex justify-content-center justify-content-xl-en justify-content-lg-en col-md-6"
            >
              <div
                class="box-container d-flex flex-column align-items-center  justify-content-center justify-content-xl-start justify-content-lg-start align-items-xl-start align-items-lg-start gap-3"
              >
              <nuxt-link :to="localePath('/')">
                <h6 class="head">{{ $t("home") }}</h6>
              </nuxt-link>
                <div class="links d-flex flex-column gap-4">
                <nuxt-link :to="localePath('finance')">
                  <span class="head-link"> {{$t("finance")}} </span>
                </nuxt-link>
                <nuxt-link :to="localePath('news')">
                  <span class="head-link"> {{$t("news")}} </span>
                </nuxt-link>
                <nuxt-link :to="localePath('market')">
                  <span class="head-link"> {{$t("market")}} </span>
                </nuxt-link>
                <nuxt-link :to="localePath('ad')">
                  <span class="head-link"> {{$t("ad")}} </span>
                </nuxt-link>
                </div>
              </div>
            </div>
            <div
              class="col-12 main-link col-xl-2 col-lg-2 d-flex justify-content-center justify-content-xl-en justify-content-lg-en col-md-6"
            >
              <div
                class="box-container d-flex flex-column align-items-center text-cente justify-content-center justify-content-xl-start justify-content-lg-start align-items-xl-start align-items-lg-start gap-3"
              >
                <h6 class="head">
                {{ $t("impLinks") }}
                </h6>
                <div class="links d-flex flex-column gap-4">
                <nuxt-link :to="localePath('auth')">
                  <span class="head-link"> {{ $t("vendor") }} </span>
                </nuxt-link>
                  <nuxt-link :to="localePath('/careers')">
                    <span class="head-link"> {{ $t("employe") }} </span>
                  </nuxt-link>
                  <nuxt-link :to="localePath('about')">
                  <span class="head-link"> {{$t("about")}} </span>
                </nuxt-link>
                  <nuxt-link :to="localePath('contact')">
                  <span class="head-link"> {{$t("contact")}} </span>
                </nuxt-link>
                </div>
              </div>
            </div>
            <div
              class="col-12 main-link col-xl-2 col-lg-2  d-flex justify-content-center justify-content-xl-en justify-content-lg-en col-md-6"
            >
              <div
                class="box-container d-flex flex-column align-items-center text-cente justify-content-center justify-content-xl-start justify-content-lg-start align-items-xl-start align-items-lg-start gap-3"
              >
                <h6 class="head">{{ $t("address") }}</h6>
                <div class="d-fle gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.5 1.25C8.6773 1.25215 6.92987 1.97717 5.64102 3.26602C4.35218 4.55486 3.62716 6.3023 3.62501 8.125C3.62282 9.61452 4.10937 11.0636 5.01001 12.25C5.01001 12.25 5.19751 12.4969 5.22813 12.5325L10.5 18.75L15.7744 12.5294C15.8019 12.4963 15.99 12.25 15.99 12.25L15.9906 12.2481C16.8908 11.0623 17.3771 9.61383 17.375 8.125C17.3729 6.3023 16.6478 4.55486 15.359 3.26602C14.0701 1.97717 12.3227 1.25215 10.5 1.25ZM10.5 10.625C10.0056 10.625 9.52221 10.4784 9.11108 10.2037C8.69996 9.92897 8.37953 9.53852 8.19031 9.08171C8.00109 8.62489 7.95158 8.12223 8.04804 7.63727C8.14451 7.15232 8.38261 6.70686 8.73224 6.35723C9.08187 6.0076 9.52733 5.7695 10.0123 5.67304C10.4972 5.57657 10.9999 5.62608 11.4567 5.8153C11.9135 6.00452 12.304 6.32495 12.5787 6.73607C12.8534 7.1472 13 7.63055 13 8.125C12.9992 8.78779 12.7355 9.42319 12.2669 9.89185C11.7982 10.3605 11.1628 10.6242 10.5 10.625Z" fill="white"/>
</svg>
                  <span class="head-link" style="font-size: 13px;" v-if="footerData2"> {{ footerData2.address }} </span>
                </div>
              </div>
            </div>
            <div
              class="col-12 main-link col-xl-2 col-lg-2 d-flex  justify-content-center justify-content-xl-en justify-content-lg-e col-md-6"
            >
              <div
                class="box-container d-flex flex-column align-items-center justify-content-center text-cente justify-content-xl-start justify-content-lg-start align-items-xl-start align-items-lg-start gap-3"
              >
                <h6 class="head">{{$t("contact2")}}</h6>
                <div class="links d-flex flex-column gap-4">
                <div class="d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M17.1666 9.16591H18.8333C18.8333 4.89091 15.6058 1.66675 11.325 1.66675V3.33341C14.71 3.33341 17.1666 5.78591 17.1666 9.16591Z" fill="white"/>
  <path d="M11.3333 6.66678C13.0858 6.66678 13.8333 7.41428 13.8333 9.16678H15.5C15.5 6.47928 14.0208 5.00012 11.3333 5.00012V6.66678ZM14.185 11.2026C14.0249 11.0571 13.8144 10.9795 13.5982 10.9861C13.3819 10.9928 13.1767 11.0833 13.0258 11.2385L11.0317 13.2893C10.5517 13.1976 9.58666 12.8968 8.59332 11.906C7.59999 10.9118 7.29916 9.94429 7.20999 9.46762L9.25916 7.47262C9.4145 7.32189 9.5051 7.11664 9.51179 6.90029C9.51848 6.68394 9.44073 6.47349 9.29499 6.31345L6.21582 2.92762C6.07003 2.76708 5.86739 2.6697 5.65095 2.65617C5.43451 2.64263 5.22132 2.714 5.05666 2.85512L3.24832 4.40595C3.10425 4.55055 3.01826 4.74299 3.00666 4.94678C2.99416 5.15512 2.75582 10.0901 6.58249 13.9185C9.92082 17.256 14.1025 17.5001 15.2542 17.5001C15.4225 17.5001 15.5258 17.4951 15.5533 17.4935C15.7571 17.482 15.9494 17.3957 16.0933 17.251L17.6433 15.4418C17.7845 15.2772 17.8561 15.0641 17.8427 14.8477C17.8293 14.6312 17.7321 14.4285 17.5717 14.2826L14.185 11.2026Z" fill="white"/>
</svg>
                  <span class="head-link"  v-if="footerData2"> {{ footerData2.phone }} </span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M14.6667 2.91675H6.33342C3.83341 2.91675 2.16675 4.16675 2.16675 7.08342V12.9167C2.16675 15.8334 3.83341 17.0834 6.33342 17.0834H14.6667C17.1667 17.0834 18.8334 15.8334 18.8334 12.9167V7.08342C18.8334 4.16675 17.1667 2.91675 14.6667 2.91675ZM15.0584 7.99175L12.4501 10.0751C11.9001 10.5167 11.2001 10.7334 10.5001 10.7334C9.80008 10.7334 9.09175 10.5167 8.55008 10.0751L5.94175 7.99175C5.67508 7.77508 5.63341 7.37508 5.84175 7.10841C6.05841 6.84175 6.45008 6.79175 6.71675 7.00841L9.32508 9.09175C9.95842 9.60008 11.0334 9.60008 11.6667 9.09175L14.2751 7.00841C14.5417 6.79175 14.9417 6.83341 15.1501 7.10841C15.3667 7.37508 15.3251 7.77508 15.0584 7.99175Z" fill="white"/>
</svg>
                  <span class="head-link"  v-if="footerData2">  {{ footerData2.email }} </span>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="head-icons d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <img src="" alt="" />
          </div>
          <v-divider :thickness="1"></v-divider>
          <div
            class="foot w-100 d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <div
              class="d-flex align-items-center text-center gap-2 flex-column flex-xl-row flex-lg-row"
            >
              <span> {{ $t('policy') }} </span>
              <span> | </span>
              <span> {{ $t('cop') }}  © 2023</span>
            </div>
            <div>
              <img src="~/assets/images/webstdy-white.png" alt="" />
            </div>
            <div class="d-flex align-items-center gap-3">
              <img src="~/assets/images/footer-png-1.svg" alt="" />
              <img src="~/assets/images/footer-png-2.svg" alt="" />
              <img src="~/assets/images/footer-png-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useStore } from "~/store";
const store = useStore;
import axios from "axios";
// import { createToast } from "mosha-vue-toastify";
// import "mosha-vue-toastify/dist/style.css";
import Cookies from "js-cookie";
const tokenCookie = Cookies.get("token");
import { Vue3Lottie } from "vue3-lottie";
import arrow from "~/assets/animations/arrow.json";
let activeNav = ref(false);
let activeItemsContainer = ref(false);

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

let arrowActive = ref(false);
let overlay = ref(false);
let route = useRoute();
let router = useRouter();
const removeStore = ()=>{
  store.state.otpFin1 = null;
  store.state.orderFin1 = null;
  store.state.phoneFin1 = null;
  store.state.otpFin2 = null;
  store.state.orderFin2 = null;
  store.state.phoneFin2 = null;
  store.state.showConfirm1 = false;
  store.state.showConfirm2 = false;
  store.state.showConfirm3 = false;
}
const changeLang = async () => {
  locale.value = locale.value === "en" ? "ar" : "en";
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    });
  } else {
    useHead({
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    });
    setLocale("en");
  }
  console.log(route);
  const query = useRoute().query;
  await navigateTo(
    localePath({ path: useRoute().path, query: query }, undefined, {
      preserveQuery: true,
    })
  );
};

const updateLang = () => {
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    });
  } else if (locale.value == "en") {
    useHead({
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    });
    setLocale("en");
  }
  if (process.client) {
    const navItems = document.querySelectorAll(".nav-link");

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        navbarCollapse.classList.remove("show");
        removeStore();
        document.querySelector(".navbar-toggler").classList.add("collapsed");
      });
    });
  }
};

let footerData = ref();
let footerData2 = ref();

const getFooterData = async () => {
  let result = await axios.get(`${getUrl()}/footer`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  let result1 = await axios.get(`${getUrl()}/contact-us`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    footerData.value = result.data.data;
    footerData2.value = result1.data.data;
  }
};

let email = ref("");
let error = ref();

let title = ref("تم الاشتراك بنجاح");

if (locale.value == 'ar') {
  title.value = 'تم الاشتراك بنجاح';
} else {
  title.value = 'You have successfully subscribed'
}
let pendingSub = ref(false);

const subscripe = async () => {
  if (email.value != "") {
    try {
      pendingSub.value = true;
      let result = await axios.post(
        `${getUrl()}/subscriber/store`,
        { email: email.value },
        {
          headers: {
            "Content-Language": `${locale.value}`,
          },
        }
      );

      if (result.status >= 200) {
        error.value = "";
        pendingSub.value = false;
        email.value = "";
        // createToast(
        //   {
        //     title: title.value,
        //   },
        //   {
        //     type: "success",
        //     transition: "bounce",
        //     showIcon: "true",
        //     timeout: 3000,
        //     toastBackgroundColor: "#dcb63b",
        //   }
        // );
      }
    } catch (errors) {
      if (errors.response) {
        pendingSub.value = false;
        error.value = errors.response.data.errors;
      }
    }
  }
};


let searchValue = ref('');
const goCarsFilterByName = () =>{
  router.push(localePath({path:'/cars', query:{search:searchValue.value}}));
  overlay.value = false;

}

const scrollUp = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

let checkInt = ref(false);
onMounted(() => {
  window.addEventListener("online", function () {
    checkInt.value = false;
  });
  window.addEventListener("offline", function () {
    checkInt.value = true;
  });

  updateLang();
  window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 300) {
      activeNav.value = true;
      activeItemsContainer.value = true;
    } else if (window.scrollY == 0) {
      activeNav.value = false;
      activeItemsContainer.value = false;
    }
    if (this.window.scrollY >= 1000) {
      arrowActive.value = true;
    } else if (window.scrollY == 0) {
      arrowActive.value = false;
    }
  });
  getFooterData();
  
  store.dispatch("loadBasketFromLocalStorage");
});

onBeforeMount(() => {
  store.dispatch("loadBasketFromLocalStorage");
  updateLang();
});
</script>

<style lang="scss" >


.search-nav{
  
}
.navbar-toggler .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  margin-top: 5px;
  background-color: #fff;
  margin-bottom: 4px;
}
.navbar-toggler.collapsed .icon-bar {
  background-color: #fff;
}
.navbar {
  .navbar-toggler {
    // background-color: #fff;
    outline: none !important;
    border: none !important;
    color: transparent !important;
  }
  &.back , &.active {
    .icon-bar {
      background-color: #000;
    }
    .navbar-toggler.collapsed .icon-bar {
      background-color: #555;
    }
  }
}

.navbar-toggler.collapsed span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler.collapsed span.icon-bar:nth-child(3) {
  opacity: 1;
}

.navbar-toggler.collapsed span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler span.icon-bar {
  -webkit-transition: all 300ms;
  transition: all 300ms;
}

.navbar-toggler span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(301%) rotate(40deg);
  transform: translateY(350%) rotate(40deg);
}

.navbar-toggler span.icon-bar:nth-child(3) {
  opacity: 0;
}

.navbar-toggler span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(-301%) rotate(-45deg);
  transform: translateY(-330%) rotate(-45deg);
}



</style>
