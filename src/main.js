import { createApp } from "vue";
import "../src/scss/styles.scss";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

const app = createApp(App);
app 
    .use(router)
    .use(createPinia())
    .mount("#app");
