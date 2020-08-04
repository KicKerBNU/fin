<template>
  <div class="hello container">
    <h3>{{ msg }}</h3>
    <div class="row">
      <div class="input-field col s3">
        <input id="data_caixa" type="text" class="validate" />
        <label for="data_caixa">Data</label>
      </div>
      <div class="input-field col s3">
        <input id="valor_caixa" type="text" class="validate" />
        <label for="valor_caixa">Valor Total</label>
      </div>
      <div class="input-field col s3">
        <input id="valor_inverno" type="text" class="validate" />
        <label for="valor_inverno">Valor venda inverno</label>
      </div>
      <div class="input-field col s3">
        <input id="valor_verao" type="text" class="validate" />
        <label for="valor_verao">Valor venda verao</label>
      </div>
      <div>
        <a class="btn disabled">Cancelar</a>
        <a
          class="btn waves-effect waves-light white-text"
          type="submit"
          name="action"
        >
          Confirmar
          <i class="material-icons right">send</i>
        </a>
      </div>
    </div>

    <table class="striped">
      <thead>
        <tr>
          <th>DATA</th>
          <th>VALOR</th>
          <th>VALOR INVERNO</th>
          <th>VALOR VERAO</th>
        </tr>
      </thead>

      <tbody v-for="venda in listaVenda" :key="venda.valor">
        <tr>
          <td>{{ venda.data }}</td>
          <td>{{ venda.valor }}</td>
          <td>{{ venda.valorInverno }}</td>
          <td>{{ venda.valorVerao }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container">
      <div class="row">
        <div class="col s5">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Valor total inverno</span>
              <p>
                12000
              </p>
            </div>
          </div>
        </div>

        <div class="col s5">
          <div class="card grey darken-3">
            <div class="card-content white-text">
              <span class="card-title">Valor total verao</span>
              <p>
                12000
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s5">
          <div class="card blue-grey darken-4">
            <div class="card-content white-text">
              <span class="card-title">Comissao total inverno</span>
              <p>
                12000
              </p>
            </div>
          </div>
        </div>

        <div class="col s5">
          <div class="card  blue-grey lighten-2">
            <div class="card-content white-text">
              <span class="card-title">Comissao total verao</span>
              <p>
                12000
              </p>
            </div>
          </div>
        </div>

        <div class="col s10">
          <div class="card teal darken-4">
            <div class="card-content white-text">
              <span class="card-title">Valor total acumulado</span>
              <p>
                12000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Lançamento de vendas",
        listaVenda: [
          {
            data: "03/08/2020",
            valor: 100,
            valorInverno: 50,
            valorVerao: 50,
          },
        ],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
