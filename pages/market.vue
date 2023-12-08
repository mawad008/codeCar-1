<template>
    <div style="min-height:100vh;">
        <div class="brands">
          <div
            class="text text-breadcrumbs d-flex align-items-center justify-content-center text-center flex-column"
          >
            <h4 class="heading-text"> المعرض </h4>
            <p>
              هذا النص هو مثال حي يستبدل في نفش المساحة
            </p>

                <v-breadcrumbs :items="items">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-left"></v-icon>
              </template>
            </v-breadcrumbs>
          </div>

          <div class="container">
            <div class="row">
              <div v-for="i in 12" class="col-6 col-xl-2 col-lg-2 col-md-3 my-4">
                <div class="box">
                  <div class="image">
                    <!-- <img src="~/assets/images/brand1.png" alt=""> -->
                  </div>
                  <span class="name"> هيونداي </span>
                  <span class="num"> 320 سيارة </span>
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
        title: 'المعرض',
        disabled: false,
        href: 'market',
    },
]);

</script>

<style lang="scss" scoped>


</style>