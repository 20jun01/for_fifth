import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import AxiosPage from "./pages/AxiosPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import SignUpPage from "./pages/SignUpPage.vue";
import CityPage from "./pages/CityPage.vue";
import Home from "./pages/Home.vue";
import CountriesPage from "./pages/CountryPages.vue";
import Cities from "./pages/CitiesPage.vue";
import LogoutPage from "./pages/LogoutPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/axios", name: "axios", component: AxiosPage },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { isPublic: true },
  },
  { path: "/logout", name: "logout", component: LogoutPage },

  { path: "/home", name: "Home", component: Home },
  {
    path: "/signup",
    name: "signup",
    component: SignUpPage,
    meta: { isPublic: true },
  },
  { path: "/:path(.*)", component: NotFound },
  { path: "/city/:cityName", name: "city", component: CityPage, props: true },
  {
    path: "/countries",
    name: "countries",
    component: CountriesPage,
    props: true,
  },
  {
    path: "/countries/:countryCode",
    name: "cities",
    component: Cities,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to) => {
//   if (to.meta.isPublic) {
//     return true;
//   }
//   try {
//     await axios.get("/api/whoami");
//   } catch (_) {
//     if (to.meta.isPublic) {
//       return true;
//     }
//     return "/login";
//   }
//   return true;
// });

export default router;
