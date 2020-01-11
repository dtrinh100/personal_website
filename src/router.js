/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import BaseHome from "@/components/BaseHome";
import BaseNotFound from "@/components/BaseNotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: BaseHome
    },
    {
      path: "/portfolio/:id",
      name: "portfolioItem",
      component: () =>
        import(
          /* webpackChunkName: "portfolioItem" */ "@/components/BasePortfolioItem.vue"
        )
    },
    { path: "*", component: BaseNotFound }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
