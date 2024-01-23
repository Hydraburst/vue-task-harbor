import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserInfo } from "../stores/userInfo";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../pages/LoginPage.vue"),
    meta: {
      requiresGuest: true,
    },
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
  const isAuthorized = userInfo.userInfo.token;

  if (to.meta.requiresAuth && !isAuthorized) {
    next({ name: "/" });
  } else if (to.meta.requiresGuest && isAuthorized) {
    next({ name: "/dashboard" });
  } else {
    next();
  }
});

export default router;
