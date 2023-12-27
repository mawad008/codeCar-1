<template>
    <div class="loader-page">
        <client-only>
            <Vue3Lottie :animation-data="cart" :height="300" :width="300" />
        </client-only>
    </div>
</template>




<script setup>
import { Vue3Lottie } from "vue3-lottie";
import cart from "~/assets/animations/car.json";
</script>

<style lang="scss">
.loader-page{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 5555555555;
}
</style>

