<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
      <router-link to="/">Vendas</router-link>
      <router-link to="/compras">Compras</router-link>
      <router-link to="/fluxo">Fluxo</router-link>
      <router-link to="/resumo">Resumo</router-link>
    </div>
    <div class="conteudo">
      <Sidenav></Sidenav>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidenav from "./components/SideNav";
import Navbar from "./components/Navbar.vue";
import M from "materialize-css";
export default {
  name: "App",
  components: {
    Navbar,
    Sidenav,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
@media screen and (min-width: 980px) {
  .conteudo {
    margin-left: 80px;
  }
}
</style>
