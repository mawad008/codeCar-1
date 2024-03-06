const localePath = useLocalePath();
import Cookies from "js-cookie";
export default function () {
  const router = useRouter();

  const tokenCookie = Cookies.get("token");

  if (tokenCookie) {
    router.push(localePath("/"));
  }
}
