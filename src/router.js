import Home from "./views/Home/Home.vue";
import Shop from "./views/Shop/Shop.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Home },
  { path: "/shops/:id", component: Shop, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function pushRoute(url) {
  router.push(url);
}
export default router;
