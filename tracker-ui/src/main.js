import "./assets/main.css";
import Vue3Toastify from "vue3-toastify";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, far);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.use(Vue3Toastify, {
  autoClose: 3000,
});

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
