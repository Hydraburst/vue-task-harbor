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
    name: "dashboard",
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "work",
        name: "work",
        component: () => import("../pages/WorkPage.vue"),
      },
      {
        path: "project",
        name: "project",
        component: () => import("../pages/ProjectsPage.vue"),
      },
      {
        path: "teams",
        name: "teams", 
        component: () => import ("../pages/TeamsPage.vue")
      },
    ],
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
