<template>
    <div>
        <div class="container offers-container">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> العروض </h4>
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
                <div v-for="i in 8" class="col-12 col-xl-6 col-lg-6 my-2">
                    <div class="offer-box">
                        <div class="image"></div>
                        <div class="text">
                            <h6>صيانة مجانية سنتين</h6>
                            <p>اشتري الان سيارة فورد من توبكار و أحصل على صيانة مجانية عامين أو 24000 كم أيهما أقرب.عروض
                                توبكار لا تقبل المنافسة.</p>
                            <div class="det">
                                <div class="d-flex align-items-center gap-2">
                                    <span>تفاصيل العرض</span>
                                    <i class="fa-solid fa-arrow-left"></i>

                                </div>
                                <img src="~/assets/images/special-offer.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

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
        title: 'العروض',
        disabled: false,
        href: 'offers',
    },
]);
</script>

<style lang="scss" scoped></style>