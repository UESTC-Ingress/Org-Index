import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

import VueShowdown from "vue-showdown";

Vue.use(VueShowdown, {
  flavor: "github"
});

axios.defaults.baseURL = "/";

Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
