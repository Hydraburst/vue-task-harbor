import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserInfo } from "../stores/userInfo";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../pages/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../components/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userInfo = useUserInfo();
  const isAutorized = userInfo.userInfo.token;

  if (to.meta.requiresAuth && !isAutorized) {
    next({ name: "/" });
  } else if (isAutorized) {
    next({ name: "/dashboard" });
  } else {
    next();
  }
});

export default router;
