import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./router/index.js";
import store from "./store/AppVuex.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
