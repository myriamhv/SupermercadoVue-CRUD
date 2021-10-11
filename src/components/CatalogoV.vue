<template>
  <div id="contImag">
    <div class="nombreProducto">
      <h4>{{ product.nombre }}</h4>
    </div>
    <v-card id="contCard" class="mx-auto" max-width="400">
      <v-img
        id="contImgn"
        class="white--text align-end"
        height="200px"
        contain
        v-bind:src="'imagenes_productos/' + product.imagen"
      >
        <v-card-title>Producto</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div class="descripcion">
          <b><span class="negrilla">Descripción: </span></b>
          {{ product.descripcion }}
        </div>

        <div class="peso">
          <b><span class="negrilla">Peso Neto: </span></b>
          {{ product.contNeto }}
        </div>
      </v-card-text>

      <v-card-actions class="cardActions">
        <div class="botones">
          <div class="btnEdit">
            <v-btn
              color="white"
              class="btnFondo botonesFooter"
              @click="DirEdit(product._id)"
              text
            >
              <v-icon left>mdi-pencil</v-icon>Editar
            </v-btn>
          </div>
          <div class="btnDelete">
            <v-btn
              color="white"
              class="btnFondo botonesFooter"
              @click="ActEliminar(product.codigo, product.nombre, product)"
              text
            >
              <v-icon left>mdi-delete</v-icon>Eliminar
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialog" max-width="480">
      <v-card>
        <v-card-title class="text-h6">
          Está seguro que desea eliminar el producto?
        </v-card-title>

        <v-card-text> Eliminar el producto: {{ this.NombProd }} </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>

          <v-btn color="green darken-1" text v-on:click="ConfirmEliminar">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  props: ["product"],
  data: () => {
    return {
      dialog: false,
      SelIdP: "",
      NombProd: "",
    };
  },
  methods: {
    DirEdit(idP) {
      store.dispatch("putDatEdit", idP).then(() => {
        this.$router.push("/editar");
      });
    },
    ActEliminar(Pid, Pnombre, objTest) {
      this.dialog = true;
      this.NombProd = Pnombre;
      this.SelIdP = Pid;
      this.objTest = objTest;
    },
    ConfirmEliminar() {
      const productoVO = [];
      productoVO.push(this.SelIdP, this.objTest);
      console.log("conf" + this.objTest);
      store.dispatch("deleteProduct", productoVO).then(() => {
        //realiza solicitud get al backend
        store.dispatch("getProductos");
      });
      this.dialog = false;
    },
    // deleteProduct(Pid){
    //   store.dispatch("deleteProduct", Pid);
    // }
  },
};
</script>

<style>
h1 {
  text-align: center;
  font-size: 2rem;
}

#contImag {
  margin-top: 35px;
  margin-bottom: 35px;
  font-family: "Open Sans", sans-serif;
}

.btnFondo {
  background-color: #724293;
}

.botonesFooter {
  height: 32px;
  width: 85%;
}

#contCard {
  height: 100%;
  width: 100%;
}

#contImgn {
  height: 30%;
  width: 100%;
  object-fit: contain;
}

.btnEdit {
  width: 50%;
  display: flex;
  justify-content: center;
}

.btnDelete {
  width: 80%;
  display: flex;
  justify-content: center;
}

.cardActions {
  display: flex;
  justify-content: left;
  width: 100%;
}

.botones {
  width: 100%;
  display: flex;
  justify-content: left;
}

.nombreProducto {
  display: flex;
  justify-content: center;
}
.peso {
  padding-left: 2px;
}

.descripcion {
  padding-left: 2px;
}

.botonesb {
  width: 100%;
  display: flex;
  justify-content: left;
}

.btnEditb {
  width: 50%;
  display: flex;
  justify-content: center;
}

.btnDeleteb {
  width: 80%;
  display: flex;
  justify-content: center;
}

.negrilla {
  font-weight: bold;
  font-size: 1rem;
}
</style>
