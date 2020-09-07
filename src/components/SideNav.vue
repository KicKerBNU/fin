<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed teal">
      <li class="pointer">
        <a>
          <router-link to="/" class="white-text">Vendas</router-link>
          <i class="material-icons white-text">local_offer</i>
        </a>
      </li>
      <li class="pointer">
        <a>
          <router-link to="/compras" class="white-text">Compras</router-link>
          <i class="material-icons white-text">shopping_cart</i>
        </a>
      </li>
      <li class="pointer">
        <a>
          <router-link to="/resumo" class="white-text">Resumo</router-link>
          <i class="material-icons white-text">insert_chart</i>
        </a>
      </li>
      <li class="pointer">
        <a>
          <router-link to="/fluxo" class="white-text">Fluxo</router-link>
          <i class="material-icons white-text">attach_money</i>
        </a>
      </li>
    </ul>
    <a data-target="slide-out" class="sidenav-trigger pointer grey-text">
      <i class="material-icons">menu</i>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidenav-fixed {
  top: 64px;
  width: 200px;
  box-shadow: unset;
}
.sidenav li > a {
  font-weight: normal;
}
.pointer {
  cursor: pointer;
}
</style>
