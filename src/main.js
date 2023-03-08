import { createApp } from "vue";
import router from "./router";
import "normalize.css";
import "./style.css";
import "vue-final-modal/style.css";

import App from "./App.vue";
import { createVfm } from "vue-final-modal";

const vfm = createVfm();

createApp(App).use(router).use(vfm).mount("#app");
