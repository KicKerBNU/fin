<template>
  <div class="container">
    <h5 class="center">{{ titulo }}</h5>
    <div class="content">
      <div class="row">
        <div class="input-field col s12 m6 l3">
          <input id="data_caixa" type="text" class="validate" v-model="venda.data" />
          <label for="data_caixa">Data</label>
        </div>
        <div class="input-field col s12 m6 l3">
          <input id="valor_inverno" type="text" class="validate" v-model="venda.valorInverno" />
          <label for="valor_inverno">Valor venda inverno</label>
        </div>
        <div class="input-field col s12 m6 l3">
          <input id="valor_verao" type="text" class="validate" v-model="venda.valorVerao" />
          <label for="valor_verao">Valor venda verao</label>
        </div>
        <div class="input-field col s12 m6 l3">
          <input id="valor_caixa" type="text" class="validate" v-model="venda.valorTotal" />
          <label for="valor_caixa">Valor Total</label>
        </div>
      </div>
      <div class="right-align col s12">
        <p>
          <a class="btn-flat" @click="limparVenda()">Limpar</a>
          <a @click="adicionarVenda()" class="btn waves-effect waves-light">Confirmar</a>
        </p>
      </div>
    </div>
    <div class="container">
      <table class="highlight" v-show="listaVenda.length">
        <thead>
          <tr>
            <th>DATA</th>
            <th>VALOR TOTAL</th>
            <th>VALOR INVERNO</th>
            <th>VALOR VERAO</th>
          </tr>
        </thead>

        <tbody v-for="venda in listaVenda" :key="venda.id">
          <tr>
            <td>{{ venda.data }}</td>
            <td>{{ venda.valor }}</td>
            <td>{{ venda.valorInverno }}</td>
            <td>{{ venda.valorVerao }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container">
      <div class="row center">
        <div class="col s12 m6 l6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Valor total inverno</span>
              <p>{{ vendasSomadasInverno }}</p>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l6">
          <div class="card grey darken-3">
            <div class="card-content white-text">
              <span class="card-title">Valor total verao</span>
              <p>{{ vendasSomadasVerao }}</p>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l6">
          <div class="card blue-grey darken-4">
            <div class="card-content white-text">
              <span class="card-title">Comissao inverno</span>
              <p>{{ comissaoInverno }}</p>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l6">
          <div class="card blue-grey lighten-2">
            <div class="card-content white-text">
              <span class="card-title">Comissao verao</span>
              <p>{{ comissaoVerao }}</p>
            </div>
          </div>
        </div>

        <div class="col s12 center">
          <div class="card teal darken-4">
            <div class="card-content white-text">
              <span class="card-title">Valor total acumulado</span>
              <p>{{ vendasSomadas }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Materialize from "materialize-css";

export default {
  name: "Vendas",
  data() {
    return {
      mesAtual: null,
      anoAtual: null,
      titulo: "Lançamento de vendas",
      listaVenda: [],
      vendasSomadas: null,
      vendasSomadasInverno: null,
      vendasSomadasVerao: null,
      comissaoVerao: null,
      comissaoInverno: null,
      venda: {
        id: Materialize.guid(),
        data: null,
        valorTotal: null,
        valorInverno: null,
        valorVerao: null,
      },
    };
  },
  mounted() {
    this.atualizarValores();
    Materialize.updateTextFields();
  },
  computed: {
    valorTotal() {
      return this.venda.valorInverno + this.venda.valorVerao;
    },
  },

  methods: {
    limparVenda() {
      this.venda.data = null;
      this.venda.valorTotal = null;
      this.venda.valorInverno = null;
      this.venda.valorVerao = null;
    },
    adicionarVenda() {
      var venda = {
        data: this.venda.data,
        valor: parseInt(this.venda.valorTotal),
        valorInverno: parseInt(this.venda.valorInverno),
        valorVerao: parseInt(this.venda.valorVerao),
      };
      axios
        .post(
          "https://my-json-server.typicode.com/KicKerBNU/fin/vendas&" +
            this.mesAtual +
            "&" +
            this.anoAtual,
          venda
        )
        .then((resposta) => {
          if (!resposta) return;
          Materialize.toast({
            html: "Venda adicionada com sucesso",
            classes: "green darken-4",
          });
        });

      this.listaVenda.push(venda);
      this.limparVenda();
    },
    removerVenda() {},
    atualizarValores() {
      var d = new Date();
      var dia = String(d.getDate()).padStart(2, "0");
      var mes = String(d.getMonth() + 1).padStart(2, "0");
      var ano = String(d.getFullYear());

      this.venda.data = dia + "/" + mes + "/" + ano;
      this.mesAtual = mes;
      this.anoAtual = ano;

      axios
        .get(
          "https://my-json-server.typicode.com/KicKerBNU/fin/vendas&" +
            mes +
            "&" +
            ano
        )
        .then((resposta) => {
          this.listaVenda = resposta.data;

          this.vendasSomadas = this.listaVenda.reduce(vendasSomadas, 0);
          function vendasSomadas(total, item) {
            return total + item.valor;
          }

          this.vendasSomadasInverno = this.listaVenda.reduce(
            vendasSomadasInverno,
            0
          );
          function vendasSomadasInverno(total, item) {
            return total + item.valorInverno;
          }

          this.vendasSomadasVerao = this.listaVenda.reduce(
            vendasSomadasVerao,
            0
          );
          function vendasSomadasVerao(total, item) {
            return total + item.valorVerao;
          }

          this.comissaoVerao = this.vendasSomadasVerao * 0.13;
          this.comissaoInverno = this.vendasSomadasInverno * 0.13;
        });
    },
  },
};
</script>

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
.row {
  margin-top: 36px;
}
</style>
