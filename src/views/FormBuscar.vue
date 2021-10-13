<template>
  <section>
    <div id="filtroBuscar">
      <div id="ContFiltro">
        <v-row class="d-flex justify-start mb-6" width="80">
          <v-col>
            <v-text-field
              id="Codigo"
              v-model="Codigo"
              label="Código"
              :rules="codeRules"
              :counter="5"
              outlined
              dense
              type="number"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              v-model="Tipo"
              :items="itemsTip"
              label="Tipo"
              data-vv-name="Tipo"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="Marca"
              :items="itemsMarc"
              label="Marca"
              data-vv-name="Marca"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <div id="ContBot">
        <v-btn
          depressed
          class="btnFondo"
          color="white"
          @click="getBusqueda"
          text
        >
          Buscar Producto
        </v-btn>
      </div>
    </div>
    <div>
      <div id="ResultBusqueda">
        <div v-for="objProductB in productsB" :key="objProductB.codigo">
          <FormBuscarDatosV :productB="objProductB" />
        </div>
      </div>
    </div>
    <v-col align="right">
      <v-btn id="BtForm" depressed color="white" text @click="Atras">
        Volver
      </v-btn>
    </v-col>
  </section>
</template>

<script>
import store from "../store/index.js";
import FormBuscarDatosV from "../components/FormBuscarDatosV";
export default {
  components: {
    FormBuscarDatosV,
  },
  data: () => {
    return {
      productsB: [],
      Codigo: "",
      Tipo: "",
      itemsTip: ["", "Lácteos", "Gaseosas y jugos", "Despensa"],
      Marca: "",
      itemsMarc: ["", "Alpina", "Alquería", "Coca-cola", "Bimbo", "Saltinas"],
      //reglas de form datos
      codeRules: [(v) => v.length <= 5 || "Código debe tener máximo 5 dígitos"],
    };
  },
  methods: {
    Atras() {
      this.$router.push("/home");
    },
    getBusqueda() {
      let LProd = store.state.products;

      if (this.Codigo != "") {
        let xid;
        var existencia = "False";
        this.productsB = [];
        for (xid of LProd) {
          if (this.Codigo == xid.codigo) {
            this.productsB.push(xid);
            existencia = "True";
          }
        }
        if (existencia == "False") {
          alert("No hay producto con ese código");
        }
      } else if ((this.Tipo != "") & (this.Marca == "")) {
        let xid;
        this.productsB = [];
        for (xid of LProd) {
          if (this.Tipo == xid.tipo) {
            this.productsB.push(xid);
          }
        }
      } else if ((this.Tipo == "") & (this.Marca != "")) {
        let xid;
        this.productsB = [];
        for (xid of LProd) {
          if (this.Marca == xid.marca) {
            this.productsB.push(xid);
          }
        }
      } else if ((this.Tipo != "") & (this.Marca != "")) {
        let xid;
        this.productsB = [];
        for (xid of LProd) {
          if ((this.Tipo == xid.tipo) & (this.Marca == xid.marca)) {
            this.productsB.push(xid);
          }
        }
      }
    },
  },
};
</script>

<style>
#filtroBuscar {
  /*background-color: #aed269;*/
  width: 100%;
  height: 140px;
  margin-top: 0px;
  background-color: #f4f4f4;
  padding: 45px;
}

#ContFiltro {
  width: 60%;
  float: left;
  height: 50%;
  background-color: #f4f4f4;
}

.btnFondo {
  background-color: #724293;
}

#ContBot {
  width: 40%;
  float: right;
  text-align: center;
  background-color: #f4f4f4;
}

#ResultBusqueda {
  /*padding: 30px;*/
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
#BtForm {
  background-color: #724293;
}
</style>