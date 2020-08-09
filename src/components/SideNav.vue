<template>
  <div>
    <div class="sidenav sidenav-fixed teal">
      <ul>
        <li class="pointer">
          <a class="white-text">
            <i class="material-icons white-text">local_offer</i>
            Vendas
          </a>
        </li>
        <li class="pointer">
          <a class="white-text">
            <i class="material-icons white-text">shopping_cart</i>
            Compras
          </a>
        </li>
        <li class="pointer">
          <a class="white-text">
            <i class="material-icons white-text">insert_chart</i>
            Resumo
          </a>
        </li>
        <li class="pointer">
          <a class="white-text">
            <i class="material-icons white-text">attach_money</i>
            Fluxo
          </a>
        </li>
      </ul>
    </div>
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
