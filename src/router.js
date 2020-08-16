import Vue from "vue";
import Router from "vue-router";
import Compras from "./components/Compras.vue";
import Fluxo from "./components/Fluxo.vue";
import Vendas from "./components/Vendas.vue";
import Resumo from "./components/Resumo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Vendas,
    },
    {
      path: "/compras",
      name: "compras",
      component: Compras,
    },
    {
      path: "/fluxo",
      name: "fluxo",
      component: Fluxo,
    },
    {
      path: "/resumo",
      name: "resumo",
      component: Resumo,
    },
  ],
});
