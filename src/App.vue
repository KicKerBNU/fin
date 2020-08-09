<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <Sidenav></Sidenav>
      <Vendas></Vendas>
    </div>
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

<style></style>
