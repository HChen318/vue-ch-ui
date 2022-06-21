import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// import "../components/css/demo.scss";
// import "../components/css/card.scss";
// import Demo from "../components/lib/demo/index";
// import Card from "../components/lib/card/index";

// Vue.use(Demo); // Demo.install  > vue.component()
// Vue.use(Card); // Demo.install  > vue.component()

import 'vue-ch-ui/dist/css/index.css'
import VueComponents from "vue-ch-ui";
Vue.use(VueComponents);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
