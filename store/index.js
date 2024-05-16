import { createStore } from "vuex";
import Cookies from "js-cookie";
export const useStore = createStore({
  state: {
    favArr: [],
    paymentFinance1:1,
    paymentFinance2:0,
    paymentFinance3:0,
    paymentFinance4:0,
    paymentFinance5:0,
    paymentCheck1:0,
    paymentCheck2:0,
    paymentCheck3:0,
    paymentCheck4:0,
    paymentCheck5: 0,
    newActive:false,
    offerActive:false,
    showConfirm1: false,
    showConfirm2: false,
    showConfirm3: false,
    showConfirm4: false,
    authenticated: false,
    checkForm: 2,
    otpFin1: null,
    orderFin1: null,
    phoneFin1:null,
    otpFin2: null,
    orderFin2: null,
    phoneFin2:null,
    isInFav: [],
    user: {},
    thankOrderNum:0
  },
  mutations: {
    changeFormCheck(state, payload) {
      state.checkForm = payload;
    },
    addFav(state, payload) {
      const { item, index } = payload;
      const existingItem = state.favArr.find((itemm) => {
        return itemm.id == item.id;
      });
      if (existingItem) {
        console.log(existingItem);
      } else {
        state.favArr.push(item);
        localStorage.setItem("fav", JSON.stringify(state.favArr));
        state.isInFav.push(item.id);
        //  state.isInFav[index] = true;
        localStorage.setItem("favIcon", JSON.stringify(state.isInFav));
      }
    },
    deleteFav(state, payload) {
      const { indexx, itemId } = payload;

      // state.isInFav[index] = false;
      var index = Array.from(state.favArr).findIndex(
        (item) => item.id === itemId
      );

      if (index != -1) {
        state.isInFav.splice(index, 1);
        localStorage.setItem("favIcon", JSON.stringify(state.isInFav));
        state.favArr.splice(index, 1);
        localStorage.setItem("fav", JSON.stringify(state.favArr));
      }

      if (state.favArr.length < 1) {
        localStorage.clear("fav");
        state.isInFav = [];
        localStorage.clear("favIcon");
      }
    },
    setuser(state, user) {
      state.user = user;
    },

    setfav(state, payload) {
      state.favArr = payload;
    },
    setfavIcon(state, payload) {
      state.isInFav = payload;
    },
    setAuthenticated(state, value) {
      state.authenticated = value;
    },
  },
  actions: {
    loadBasketFromLocalStorage({ commit, state }) {
      if (process.client) {
        // const storedfav = JSON.parse(localStorage.getItem("fav")) || [];
        // const storedfavicon = JSON.parse(localStorage.getItem("favIcon")) || [];
        const userCookie = Cookies.get("user");
        const authCookie = Cookies.get("auth");
        const storedUser = userCookie ? JSON.parse(userCookie) : {};
        const storedAuth = authCookie ? JSON.parse(authCookie) : false;
        // commit("setfav", storedfav);
        // commit("setfavIcon", storedfavicon);
        commit("setuser", storedUser);
        commit("setAuthenticated", storedAuth);
      }
    },
  },
});
