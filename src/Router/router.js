import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue"

export default createRouter({
    history: createWebHistory(),
    routes : [
        {path: '', component: LoginPage}
    ]
})