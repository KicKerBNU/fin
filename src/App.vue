<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
      <router-link to="/">Home</router-link>
      <router-link to="/fluxo">Fluxo</router-link>
      <router-link to="/resumo">Resumo</router-link>
    </div>
    <router-view />
    <div class="container">
      <Sidenav></Sidenav>
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

<style></style>
