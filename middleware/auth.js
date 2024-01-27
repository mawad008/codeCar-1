

import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store/index"; // Adjust the path based on your project structure
const store = useStore;
const localePath = useLocalePath();

export default function () {
  const route = useRoute();
  const router = useRouter();

  const { authenticated } = store.state; // Get the state from the store
  if (process.client) {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  
    if (token) {
      store.state.authenticated = true; // Update the state to authenticated
    }
  
    // If token exists and the route is /login, redirect to the homepage
    if (token && route.name === "auth") {
      router.push(localePath("/"));
    }
  
    // If token doesn't exist and the route is not /login, redirect to login
    if (!token && route.name !== "auth") {
      router.push(localePath("auth"));
        }
    
  }
    

}
