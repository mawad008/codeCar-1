<template>
    <div>
        <div class="container about-us">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> من نحن </h4>
                <p>
                    هذا النص هو مثال حي يستبدل في نفش المساحة
                </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="about-container">
                <div class="row">
                    <div class="col-7">
                        <div class="text-container">
                            <div class="text">
                                <h6>عننا !</h6>
                                <span>منصة موقع كود كار تختص في بيع وشراء وتمويل السيارات بطرق حديثة ومتطورة لتصل الى كل من
                                    يرغب أن يعلن او يبحث عن سيارة أحلامه نقداً او عن طريق التمويل التأجيري مع أفضل جهات
                                    التمويل بالمملكة العربية السعودية . نحن ثقتكم التي نفتخر بها و التميز الذي نضعه بين
                                    أيديكم لننال رضاكم ولنكون الطريق المتميز لأيصالكم لأهدافكم بالحصول على طلبك بكل سهولة
                                    وسرعة وبشكل مرضي ..</span>
                            </div>

                            <div class="icons">
                                <div class="icon">
                                    <img src="~/assets/images/target_802036 1.svg" alt="">
                                    <h6>اهدافنا</h6>
                                    <span>نسعي لتقديم خدمات فائقة المستوى وتجربة فريدة، لتحقيق تطلعات عشاق السيارات بكفاءة
                                        وراحة.</span>
                                </div>
                                <div class="icon">
                                    <img src="~/assets/images/starfish_515990 1.svg" />
                                    <h6>ما يميزنا</h6>
                                    <span>حلول تمويلية فريدة هي ما يميزنا، نقدم لك حلاً متخصصاً يلبي احتياجاتك في عالم
                                        السيارات.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="image">
                            <div class="overlay"></div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="faqs">
            <h5>الاسئلة الشائعة</h5>
                <v-expansion-panels class="row justify-content-start"   multiple  variant="popout">
                    <div v-for="i in 8" :key="i" class="col-6 my-2">
                        <v-expansion-panel >

                            <template v-slot:title>
                                <span>هل يمكنني الإعلان عن سيارتي للبيع على الموقع؟</span>
                            </template>
                            <template v-slot:text>
                                <span>نعم، يمكن للأفراد الإعلان عن سياراتهم للبيع عبر موقع "كود كار" بسهولة.</span>
                            </template>
                        </v-expansion-panel>

                    </div>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script setup>
let items = ref([
    {
        title: 'الرئيسية',
        disabled: true,
        href: '/',
    },
    {
        title: 'من نحن',
        disabled: false,
        href: 'about',
    },
]);
</script>

<style lang="scss" scoped></style>