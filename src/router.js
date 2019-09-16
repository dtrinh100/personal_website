/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import BaseHome from "@/components/BaseHome";

Vue.use(Router);

export default new Router({
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
    }
  ]
});
