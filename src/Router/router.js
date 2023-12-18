import { createRouter, createWebHistory } from "vue-router";
const LoginPage = () => import("../pages/LoginPage.vue");

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: LoginPage }],
});
