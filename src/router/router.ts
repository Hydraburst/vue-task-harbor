import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../pages/LoginPage.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;
