<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
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
