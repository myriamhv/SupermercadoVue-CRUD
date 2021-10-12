<template>
  <div id="contImag">
    <h4>{{ productB.nombre }}</h4>
    <v-card id="contCard" class="mx-auto" max-width="400">
      <v-img
        id="contImgn"
        class="white--text align-end"
        height="200px"
        contain
        :src="'imagenes_productos/' + productB.imagen"
      >
        <v-card-title>Producto</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div class="descripcion">
          <b><span class="negrilla">Descripción: </span></b>
          {{ productB.descripcion }}
        </div>

        <div class="peso">
          <b><span class="negrilla">Peso Neto: </span></b>
          {{ productB.contNeto }}
        </div>
      </v-card-text>

      <v-card-actions>
        <div class="botonesb">
          <div class="btnEditb">
            <v-btn
              color="white"
              class="btnFondo botonesFooter"
              v-on:click="DirEdit(productB._id)"
              text
            >
              <!-- <v-img src="../assets/Editar.png"> </v-img>Editar -->
              <v-icon left>mdi-pencil</v-icon>Editar
            </v-btn>
          </div>
          <div class="btnDeleteb">
            <v-btn
              color="white"
              class="btnFondo botonesFooter"
              @click="ActEliminar(productB.codigo, productB.nombre, productB)"
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
  props: ["productB"],
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
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Open Sans", sans-serif;
}

.btnFondo {
  background-color: #724293;
}

.botonesb {
  display: flex;
  justify-content: center;
  width: 100%;
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

.btnEditb {
  width: 40%;
  display: flex;
  justify-content: center;
}

.btnDeletb {
  width: 80%;
  display: flex;
  justify-content: center;
}
</style>