import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserInfo } from "../stores/userInfo";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../pages/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    component: () => import ("../components/Dashboard.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userInfo = useUserInfo();
  const isAutorized = userInfo.userInfo.token;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "/" });
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: "/dashboard" });
  } else {
    next();
  }
});

export default router;
