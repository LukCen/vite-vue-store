import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";
import Error from "./pages/Error.vue";
import UserPage from "./pages/UserPage.vue";
import Basket from "./pages/Basket.vue";
import About from "./pages/About.vue";


const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: Product },
  { path: '/404', component: Error },
  { path: '/about', component: About },
  { path: '/profile', component: UserPage },
  { path: '/basket', component: Basket }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
