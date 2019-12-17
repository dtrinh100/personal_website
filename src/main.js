import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInfoCircle,
  faHome,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(
  faInfoCircle,
  faGithub,
  faHome,
  faExclamationTriangle,
  faGithubSquare,
  faLinkedin
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
