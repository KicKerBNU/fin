<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidenav></Sidenav>
    <Vendas></Vendas>
  </div>
</template>

<script>
import Sidenav from "./components/SideNav";
import Navbar from "./components/Navbar.vue";
import Vendas from "./components/Vendas.vue";
import M from "materialize-css";
export default {
  name: "App",
  components: {
    Vendas,
    Navbar,
    Sidenav,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
