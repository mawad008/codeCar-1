<template>
    <div>
        <div class="container contact-us">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> {{ $t('contact') }} </h4>
                <p>
                  {{ contactArr.description }}
                </p>

                <v-breadcrumbs class="" :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>
            <div class="contact-container">
                <div class="row justify-content-between">
                    <div class="col-12 col-xl-6 col-lg-6">
                        <div class="text-container">
                            <h4> {{ $t('info1') }} </h4>
                            <span class="word">{{ $t('info2') }}</span>
                            <div class="row mt-4">
                                <div class="col-12 col-xl-6 col-lg-6 my-3">
                                    <div class="icon-container">
                                        <div class="icon">
                                            <img src="~/assets/images/contact-1.svg" alt="">
                                        </div>
                                        <span>{{ $t('email') }}</span>
                                        <h6>{{ contactArr.email }}</h6>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-6 col-lg-6 my-3">
                                    <div class="icon-container">
                                        <div class="icon">
                                            <img src="~/assets/images/contact-2.svg" alt="">
                                        </div>
                                        <span> {{ $t('phoneNum') }}</span>
                                        <h6>{{ contactArr.phone }}</h6>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-6 col-lg-6 my-3">
                                    <div class="icon-container">
                                        <div class="icon">
                                            <img src="~/assets/images/contact-3.svg" alt="">
                                        </div>
                                        <span> {{ $t('address') }}</span>
                                        <h6>{{ contactArr.address }}</h6>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-6 col-lg-6 my-3">
                                    <div class="icon-container">
                                        <div class="icon">
                                            <img src="~/assets/images/_x30_4_world.svg" alt="">
                                        </div>
                                        <span> {{ $t('websites') }} </span>
                                        <div class="icons">
                                            <div class="iconn">
                                            <a :href="contactArr.youtube" target="_blank">
                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M19.8008 6C19.8008 6 19.6055 4.62109 19.0039 4.01563C18.2422 3.21875 17.3906 3.21484 17 3.16797C14.2031 2.96484 10.0039 2.96484 10.0039 2.96484H9.99609C9.99609 2.96484 5.79688 2.96484 3 3.16797C2.60938 3.21484 1.75781 3.21875 0.996094 4.01563C0.394531 4.62109 0.203125 6 0.203125 6C0.203125 6 0 7.62109 0 9.23828V10.7539C0 12.3711 0.199219 13.9922 0.199219 13.9922C0.199219 13.9922 0.394531 15.3711 0.992187 15.9766C1.75391 16.7734 2.75391 16.7461 3.19922 16.832C4.80078 16.9844 10 17.0313 10 17.0313C10 17.0313 14.2031 17.0234 17 16.8242C17.3906 16.7773 18.2422 16.7734 19.0039 15.9766C19.6055 15.3711 19.8008 13.9922 19.8008 13.9922C19.8008 13.9922 20 12.375 20 10.7539V9.23828C20 7.62109 19.8008 6 19.8008 6ZM7.93359 12.5938V6.97266L13.3359 9.79297L7.93359 12.5938Z"
                                                        fill="#2D3A4A" />
                                                </svg>
                                            </a>
                                            </div>
                                            <div class="iconn">
                                                <a :href="contactArr.instagram" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <g clip-path="url(#clip0_329_29609)">
                                                        <path
                                                            d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                                                            fill="#2D3A4A" />
                                                        <path
                                                            d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                                                            fill="#2D3A4A" />
                                                        <path
                                                            d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                                                            fill="#2D3A4A" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_329_29609">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                
                                                </a>

                                            </div>
                                            <div class="iconn">
                                                <a :href="contactArr.facebook" target="_blank">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <g clip-path="url(#clip0_329_29607)">
                                                        <path
                                                            d="M10 0C4.4772 0 0 4.4772 0 10C0 14.6896 3.2288 18.6248 7.5844 19.7056V13.056H5.5224V10H7.5844V8.6832C7.5844 5.2796 9.1248 3.702 12.4664 3.702C13.1 3.702 14.1932 3.8264 14.6404 3.9504V6.7204C14.4044 6.6956 13.9944 6.6832 13.4852 6.6832C11.8456 6.6832 11.212 7.3044 11.212 8.9192V10H14.4784L13.9172 13.056H11.212V19.9268C16.1636 19.3288 20.0004 15.1128 20.0004 10C20 4.4772 15.5228 0 10 0Z"
                                                            fill="#2D3A4A" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_329_29607">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                </a>

                                            </div>
                                            <div class="iconn">
                                                <a :href="contactArr.snapchat" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M19.9277 14.5479C19.7898 14.17 19.5242 13.9657 19.2229 13.8023C19.1667 13.7716 19.1157 13.741 19.0697 13.7206C18.9778 13.6746 18.8858 13.6286 18.7939 13.5827C17.8542 13.0822 17.1188 12.4591 16.6131 11.7135C16.4701 11.5041 16.3425 11.2794 16.2403 11.0495C16.1944 10.927 16.1995 10.8555 16.2301 10.7891C16.2608 10.738 16.3016 10.6971 16.3527 10.6614C16.5161 10.5541 16.6795 10.4469 16.7919 10.3754C16.9911 10.2426 17.1545 10.1405 17.2567 10.069C17.6397 9.79828 17.9104 9.51228 18.0789 9.19053C18.3189 8.7411 18.3496 8.21506 18.1657 7.74009C17.9104 7.06595 17.2771 6.65227 16.5059 6.65227C16.3425 6.65227 16.1841 6.66759 16.0207 6.70334C15.9799 6.71356 15.9339 6.72377 15.893 6.73398C15.8981 6.27434 15.8879 5.78916 15.8471 5.30909C15.7041 3.62883 15.1116 2.7504 14.4988 2.05072C14.1055 1.61151 13.6459 1.23868 13.1301 0.947576C12.2006 0.416431 11.1434 0.145752 9.99427 0.145752C8.84516 0.145752 7.79309 0.416431 6.86359 0.947576C6.34776 1.23868 5.88812 1.61151 5.49487 2.05072C4.88201 2.7504 4.29469 3.63394 4.14658 5.30909C4.10572 5.78916 4.09551 6.27434 4.10061 6.73398C4.05976 6.72377 4.0189 6.71356 3.97294 6.70334C3.81461 6.66759 3.65119 6.65227 3.49286 6.65227C2.72168 6.65227 2.0884 7.07106 1.83304 7.74009C1.64918 8.21506 1.67982 8.7411 1.91986 9.19053C2.0884 9.51228 2.35907 9.79828 2.74211 10.069C2.84425 10.1405 3.00258 10.2426 3.20686 10.3754C3.31411 10.4469 3.47243 10.549 3.63076 10.6512C3.68694 10.6869 3.7329 10.7329 3.76865 10.7891C3.79929 10.8555 3.8044 10.927 3.75333 11.0597C3.65119 11.2845 3.52861 11.5041 3.38561 11.7084C2.89022 12.4336 2.17522 13.0515 1.26614 13.5469C0.78607 13.8023 0.285569 13.9708 0.0710683 14.5479C-0.0872535 14.982 0.0148896 15.4723 0.418355 15.8911C0.566463 16.0443 0.740106 16.1771 0.929071 16.2793C1.32232 16.4938 1.74111 16.6623 2.18032 16.7798C2.27225 16.8053 2.35397 16.841 2.43057 16.8921C2.57868 17.0198 2.55825 17.2139 2.75233 17.4999C2.84936 17.648 2.97704 17.7757 3.12004 17.8778C3.53372 18.1638 3.99847 18.1791 4.48876 18.1996C4.93308 18.2149 5.43358 18.2353 6.01069 18.4243C6.25073 18.5009 6.49587 18.6541 6.78187 18.8328C7.47134 19.2567 8.41106 19.8338 9.98917 19.8338C11.5673 19.8338 12.5121 19.2516 13.2067 18.8277C13.4927 18.6541 13.7378 18.5009 13.9676 18.4243C14.5396 18.2353 15.0453 18.2149 15.4896 18.1996C15.9799 18.1791 16.4446 18.1638 16.8583 17.8778C17.0319 17.7552 17.1749 17.602 17.2771 17.4182C17.4201 17.1781 17.415 17.0096 17.5478 16.8921C17.6193 16.841 17.701 16.8053 17.7827 16.7849C18.2219 16.6674 18.6509 16.4989 19.0493 16.2793C19.2484 16.172 19.4323 16.029 19.5855 15.8605L19.5906 15.8554C19.989 15.4468 20.086 14.9667 19.9277 14.5479ZM18.5283 15.2987C17.6754 15.7685 17.1034 15.7175 16.6642 16.0035C16.2863 16.2435 16.511 16.7644 16.2403 16.9534C15.9033 17.1832 14.9125 16.9381 13.6357 17.362C12.5785 17.7093 11.9095 18.7154 10.0096 18.7154C8.10973 18.7154 7.45602 17.7144 6.38351 17.362C5.10673 16.9381 4.11594 17.1883 3.77886 16.9534C3.50819 16.7644 3.72779 16.2435 3.35497 16.0035C2.91065 15.7175 2.34375 15.7685 1.49086 15.2987C0.944392 14.9974 1.25593 14.8135 1.43468 14.7267C4.52962 13.2303 5.02501 10.9167 5.04544 10.7431C5.07097 10.5337 5.10162 10.3703 4.8718 10.1609C4.65219 9.9566 3.67161 9.34885 3.39583 9.15988C2.9464 8.84324 2.74722 8.5317 2.89533 8.14356C2.99747 7.87799 3.24772 7.77584 3.50819 7.77584C3.5899 7.77584 3.67161 7.78606 3.75333 7.80138C4.24872 7.90863 4.7288 8.15377 5.00458 8.22527C5.04033 8.23549 5.07098 8.2406 5.10673 8.2406C5.25483 8.2406 5.3059 8.16399 5.29569 7.99545C5.26505 7.45409 5.18844 6.40202 5.27526 5.41634C5.39273 4.06294 5.82683 3.3888 6.34776 2.79637C6.59801 2.51037 7.76755 1.27443 10.0096 1.27443C12.2516 1.27443 13.4212 2.50526 13.6714 2.79126C14.1924 3.38369 14.6265 4.05783 14.7439 5.41123C14.8308 6.39691 14.7541 7.44899 14.7184 7.99034C14.7082 8.1691 14.7593 8.23549 14.9074 8.23549C14.9431 8.23549 14.9738 8.23038 15.0095 8.22017C15.2853 8.15377 15.7654 7.90352 16.2608 7.79627C16.3425 7.77584 16.4242 7.77074 16.5059 7.77074C16.7664 7.77074 17.0166 7.87288 17.1188 8.13845C17.2669 8.5266 17.0677 8.83813 16.6183 9.15478C16.3476 9.34374 15.367 9.95149 15.1423 10.1558C14.9125 10.3652 14.9431 10.5286 14.9686 10.738C14.9891 10.9116 15.4845 13.2252 18.5794 14.7216C18.7633 14.8084 19.0697 14.9974 18.5283 15.2987Z"
                                                        fill="#2D3A4A" />
                                                </svg>
                                                
                                                </a>

                                            </div>
                                            <div class="iconn">
                                                <a :href="contactArr.twitter" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M15.2726 1.58667H18.0838L11.9421 8.60625L19.1673 18.1583H13.51L9.07901 12.365L4.00894 18.1583H1.19601L7.76518 10.6501L0.833984 1.58667H6.63491L10.6401 6.88195L15.2726 1.58667ZM14.2859 16.4757H15.8436L5.78848 3.18095H4.11687L14.2859 16.4757Z"
                                                        fill="#2D3A4A" />
                                                </svg>
                                                
                                                
                                                </a>

                                            </div>
                                            <div class="iconn">
                                                <a :href="contactArr.twitter" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M14.2265 0H10.8559V13.6232C10.8559 15.2464 9.55951 16.5797 7.94624 16.5797C6.33296 16.5797 5.03659 15.2464 5.03659 13.6232C5.03659 12.029 6.30416 10.7246 7.85983 10.6667V7.24639C4.43161 7.30433 1.66602 10.1159 1.66602 13.6232C1.66602 17.1594 4.48923 20 7.97506 20C11.4608 20 14.284 17.1304 14.284 13.6232V6.63767C15.5516 7.56522 17.1073 8.11594 18.7493 8.14495V4.72464C16.2142 4.63768 14.2265 2.55072 14.2265 0Z"
                                                        fill="#2D3A4A" />
                                                </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="map">
                            <div class="image">
                                <!-- <img src="~/assets/images/contact-map.png" alt=""> -->
                                <!-- <iframe v-if="contactArr.address_iframe" :src="contactArr.address_iframe"></iframe> -->
                                <div v-html="contactArr.address_iframe"></div>
                            
                            </div>
                                <div class="overlay">
                                    <div class="text" @click="openGoogleMap()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21.5223 5.74723C22.3809 3.68663 20.3136 1.61941 18.253 2.478L4.0366 8.40151C1.25632 9.55996 1.72626 13.6348 4.69725 14.1299L9.13133 14.8689L9.87034 19.303C10.3655 22.274 14.4403 22.7439 15.5988 19.9637L21.5223 5.74723Z"
                                                fill="white" />
                                        </svg>
                                        <span> {{ $t('address2') }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="col-12 col-xl-5 col-lg-5">
                        <div class="form-container">
                         <div class="input">
                          <label> {{ $t('name0') }} </label>
                          <input type="text" v-model="form.name" :placeholder="$t('name0')" >
                          <span class="error-msg" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
                            <span class="error-msg" v-if="errors.name">{{ errors.name[0] }}</span>
                         </div>
                         <div class="input">
                          <label> {{ $t('phone') }} </label>
                          <div class="w-100  d-flex align-items-center justify-content-between phonenum">
                  <input type="tel" placeholder="3333-5555-9999-55" name="" v-model="form.phone" />
                  <span class="numm login">966+</span>
                </div>
                          <span class="error-msg" v-if="v$.phone.$error">{{ v$.phone.$errors[0].$message }}</span>
                            <span class="error-msg" v-if="errors.phone">{{ errors.phone[0] }}</span>
                         </div>
                         <div class="input">
                          <label> {{ $t('email') }} </label>
                          <input type="email" v-model="form.email" placeholder=" Demo@icloud.com">
                          <span class="error-msg" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                            <span class="error-msg" v-if="errors.email">{{ errors.email[0] }}</span>
                         </div>
                         <div class="input">
                          <label> {{ $t('messg') }} </label>
                          <textarea style="resize:none;" v-model="form.message" :placeholder="$t('write')" id="" cols="30" rows="10"></textarea>
                          <span class="error-msg" v-if="v$.message.$error">{{ v$.message.$errors[0].$message }}</span>
                            <span class="error-msg" v-if="errors.message">{{ errors.message[0] }}</span>
                         </div>
                         <div class="d-flex justify-content-center justify-content-xl-start justify-content-lg-start">
                         <button class="gap-3" @click="sendContact()">
                         {{ $t('send') }}
                      <v-progress-circular v-if="pendingBtn"  indeterminate :size="25" :width="4"></v-progress-circular>
                          
                         </button>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Loader v-if="pending"></Loader> 
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast();
import useValidate from '@vuelidate/core'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';
import axios from 'axios';
// import { createToast } from 'mosha-vue-toastify';
// import 'mosha-vue-toastify/dist/style.css'
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
let route = useRoute();
let pending = ref(false);
let pendingBtn = ref(false);
let items = ref([
    {
        title: locale.value == 'ar' ? 'الرئيسية' : 'home',
        disabled: false,
    class:"breadcrumbs-text",
        href: '/',
    },
    {
        title: locale.value == 'ar' ? 'اتصل بنا' : 'contact us',
        disabled: true,
        class:"breadcrumbs-dark",
        href: 'contact',
    },
]);

let form = ref({
    name: '',
    phone: '',
    email: '',
    message: '',
});

let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
let title = ref('تم التواصل بنجاح  ');
if (locale.value == "ar") {
    value1.value = "هذا الحقل مطلوب";
    value2.value = "حقل البريد الإلكتروني مطلوب";
    value3.value = "تنسيق البريد الإلكتروني غير صالح";
    title.value = "تم التواصل بنجاح  ";
} else {
    value1.value = "value is required";
    value2.value = "The email field is required";
    value3.value = "Invalid email format";
    title.value = "Communication was successful"
}
const rules = computed(() => {
    return {
        name: { required: helpers.withMessage(value1.value, required) },
        phone: { required: helpers.withMessage(value1.value, required) },
        email: {
            required: helpers.withMessage(value2.value, required),
            email: helpers.withMessage(value3.value, email),
        },
        message: { required: helpers.withMessage(value1.value, required)  },

    };
});

const v$ = useValidate(rules, form);
let errors = ref([]);
const sendContact = async()=>{
    let check = await v$.value.$validate();
    let formBody = new FormData();
    formBody.append("name", form.value.name);
    formBody.append("phone", form.value.phone);
    formBody.append("email", form.value.email);
    formBody.append("message", form.value.message);
  if(check){
    pendingBtn.value = true;
    try{
      let result = await axios.post(
      `${getUrl()}/contact`,formBody,
      {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      }
    );

      if(result.status >= 200){
    pendingBtn.value = false;
        errors.value = [];
        // form.value = '';
        // createToast({
        //   title: title.value
        // },
        // {
        // type: 'success',
        // transition: 'bounce',
        // showIcon: 'true',
        // timeout: 3000,
        // toastBackgroundColor: '#dcb63b',
        // });

        toast.success(title.value, {
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
  rtl: false
});
      }

    }catch(errorss){
      if (errorss.response) {
    pendingBtn.value = false;
                errors.value = errorss.response.data.errors;
            }

    }

  } else{
    console.log(check);
  }
}


const contactArr = ref([]);
const getContactData =  async()=>{
    pending.value = true;
    let result = await axios.get(`${getUrl()}/contact-us`,{
        headers:{
            "Content-Language": `${locale.value}`,
        }
    });
    if(result.status == 200){
    pending.value = false;
     contactArr.value = result.data.data;
    }
}


const openGoogleMap = () =>{
    if(process.client){
        const googleMapsUrl = contactArr.value.src;
      window.open(googleMapsUrl, '_blank');
    }
}

useHead({
  title: locale.value == 'ar' ? 'تواصل معنا' : 'contact us'
});

onMounted(() => {
    getContactData();  
})
</script>

<style lang="scss" scoped></style>