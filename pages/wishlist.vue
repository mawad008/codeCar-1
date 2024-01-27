<template>
    <div>
       <div class="container wishlist">
        <div class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column">
                <h4 class="heading-text"> {{ $t('fav') }} </h4>
                <p>هذا النص هو مثال حي يستبدل في نفش المساحة</p>

                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="wishlist-container">
             <div class="row">
              <div v-for="i in 8" class="col-12 col-xl-3 col-lg-3 col-md-6">
               <CarCard></CarCard>
              </div>
             </div>
            </div>
       
       </div> 
    </div>
</template>


<script setup>

const localePath = useLocalePath();
const { locale } = useI18n();

let items = ref([
    {
        title: locale.value == "ar" ? "الرئيسية" : "home",
        disabled: true,
        href: "/",
    },
    {
        title: locale.value == "ar" ? "قائمة المفضلة" : "wishlist",
        disabled: false,
        href: "wishlist",
    },
]);
</script>


<style lang="scss">
.wishlist{
    margin-top: 70px;
    margin-bottom: 120px;
}
</style>