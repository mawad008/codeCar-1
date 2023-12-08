<template>
    <div>
        <div class="container offer-page">
            <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> صيانة سيارات مجانية </h4>
                <p>
                    اشتري الان سيارة فورد من توبكار و أحصل على صيانة مجانية عامين أو 24000 كم أيهما أقرب.عروض توبكار لا تقبل
                    المنافسة. </p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="main-offer-img">
             <div class="overlay"></div>
            </div>

            <div class="cars">
            <div class="head">
             <h5>سيارات العرض</h5>
            </div>
             <div class="row">
              <div v-for="i in 8" class="col-12 col-xl-3 col-lg-3 col-md-6 my-3">
               <CarCard/> 
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
        disabled: true,
        href: 'offers',
    },
    {
        title: 'العرض',
        disabled: true,
    },
]);

</script>

<style lang="scss" scoped></style>