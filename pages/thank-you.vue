<<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div  class="confirm-container" style="margin: 70px 0px;">
        <div class="confirm-text w-100">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>{{ $t('otp3') }}</h4>
          <p>
            {{ $t('otp4') }}
          </p>

          <div class="order-number">
            <h5>{{ $t('orderNum') }} : <span> {{ orderNum1 }} </span></h5>
            <button @click="copyToClipboard();" class="iconn">
              <img v-if="check" src="~/assets/images/share1.svg" style="margin-bottom:0px" alt="">
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                viewBox="0 0 448 512">
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>

          <nuxt-link :to="localePath('/')" class="nav-link">
            <button class="send home">{{ $t('backHome') }}</button>
          </nuxt-link>
        </div>
      </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import otpp from "~/assets/animations/otp.json";
import success from "~/assets/animations/success.json";
import { Vue3Lottie } from "vue3-lottie";
import { useStore } from "~/store";
let store = useStore;
import { useToast } from 'vue-toastification';
const toast = useToast();
const localePath = useLocalePath();
const { locale } = useI18n();
let check = ref(true);
let orderNum1 = ref(store.state.thankOrderNum);
function copyToClipboard() {
  if (process.client) {
    check.value = false;
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(orderNum1.value).then(() => {
    });

    setTimeout(() => {
      check.value = true;
    }, 1000);
  }

}

watch([() => store.state.thankOrderNum], ([newVal]) => {
    orderNum1.value = newVal;
    });

</script>

<style scoped>
 .confirm-container{
    width:70%;
    margin:0px;
 }
 @media(max-width:760px){
    .confirm-container{
        width:100%;
    }
 }
</style>

