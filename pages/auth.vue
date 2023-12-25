<template>
  <div>
    <div class="main-auth">
      <div class="row justify-content-betwee">
        <div class="col-7 main-col">
          <div class="form-inputs">
            
           <div v-if="store.state.checkForm == 1">
           <register />
           </div>
           <div v-if="store.state.checkForm == 2">
              <login />
           </div>
           
          </div>
        </div>
        <div class="col-5 ">
          <div class="main-img">
            <img src="~/assets/images/login-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
import { useStore } from "@/store/index";
let store = useStore;



</script>

<style lang="scss" scoped></style>
