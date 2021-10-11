<template>
  <section>
    <div id="ContPrincE">
      <div id="ImgEdit">
        <div>
          <v-file-input
            :rules="rules"
            id="ImgUpload"
            type="file"
            @change="fileSelectedE"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Escoja la imagen"
          ></v-file-input>
        </div>
        <div id="recevImgE">
          <v-img
            max-height="500"
            max-width="600"
            contain
            :src="ResultImg"
          ></v-img>
        </div>
      </div>
      <div id="DatEdit">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            id="CampValid"
            ref="CampValid"
            v-model="ValidarCodigo"
            dense
            readonly
            disabled
          ></v-text-field>
          <v-text-field
            v-model="Codigo"
            label="Código"
            required
            outlined
            dense
            type="number"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="NombreProducto"
            label="Nombre producto"
            :rules="nameRules"
            :counter="50"
            required
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="Descripcion"
            label="Descripción"
            :rules="descRules"
            :counter="300"
            required
            outlined
            dense
          ></v-text-field>
          <v-select
            v-model="Tipo"
            :items="itemsTip"
            :rules="typeRules"
            label="Tipo"
            data-vv-name="Tipo"
            required
            outlined
            dense
          ></v-select>
          <v-text-field
            v-model="Sabor"
            label="Sabor"
            :rules="sabRules"
            :counter="50"
            required
            outlined
            dense
          ></v-text-field>
          <v-select
            v-model="Marca"
            :items="itemsMarc"
            :rules="markRules"
            label="Marca"
            data-vv-name="Marca"
            required
            outlined
            dense
          ></v-select>
          <v-text-field
            v-model="Presentacion"
            label="Presentación"
            :rules="presentRules"
            :counter="30"
            required
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="ContenidoNeto"
            label="Contenido Neto"
            :rules="contnetRules"
            :counter="20"
            required
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="Valor"
            label="Valor"
            :rules="valRules"
            required
            outlined
            dense
            type="number"
          ></v-text-field>
        </v-form>
      </div>
    </div>

    <div id="EditBT">
      <v-row class="d-flex justify-start mb-6" width="80">
        <v-col align="right">
          <v-btn id="BtForm" depressed color="white" text @click="Atras">
            Volver
          </v-btn>
        </v-col>
        <v-col align="left">
          <v-btn id="BtForm" depressed color="white" text @click="UpdateData">
            Actualizar Producto
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import store from "../store/index.js";
export default {
  data: () => {
    return {
      valid: true,
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      //datos de form imagen
      ResultImg: "imagenes_productos/" + store.state.editProduct.imagen,
      objImg: null,
      NombreImg: store.state.editProduct.imagen,
      //datos de form datos
      ValidarCodigo: "",
      Codigo: store.state.editProduct.codigo,
      NombreProducto: store.state.editProduct.nombre,
      Descripcion: store.state.editProduct.descripcion,
      Tipo: store.state.editProduct.tipo,
      itemsTip: ["Lácteos", "Gaseosas y jugos", "Despensa"],
      Sabor: store.state.editProduct.sabor,
      Marca: store.state.editProduct.marca,
      itemsMarc: ["Alpina", "Alquería", "Coca-cola", "Bimbo", "Saltinas", "Margarita"],
      Presentacion: store.state.editProduct.presentacion,
      ContenidoNeto: store.state.editProduct.contNeto,
      Valor: store.state.editProduct.valor,
      //reglas de form datos
      nameRules: [
        (v) => !!v || "Nombre es obligatorio",
        (v) => v.length <= 50 || "Nombre debe tener máximo 50 carácteres",
        (v) =>
          /^[A-Za-z ]+$/.test(v) ||
          "Nombre no debe contener carácteres especiales, ni números",
      ],
      descRules: [
        (v) => !!v || "Descripción es obligatorio",
        (v) =>
          v.length <= 300 || "Descripción debe tener máximo 300 carácteres",
      ],
      typeRules: [(v) => !!v || "Tipo es obligatorio"],
      sabRules: [
        (v) => !!v || "Sabor es obligatorio",
        (v) => v.length <= 50 || "Sabor debe tener máximo 50 carácteres",
      ],
      markRules: [(v) => !!v || "Marca es obligatorio"],
      presentRules: [
        (v) => !!v || "Presentación es obligatorio",
        (v) => v.length <= 30 || "Presentación debe tener máximo 30 carácteres",
      ],
      contnetRules: [
        (v) => !!v || "Contenido neto es obligatorio",
        (v) =>
          v.length <= 20 || "Contenido neto debe tener máximo 20 carácteres",
      ],
      valRules: [(v) => !!v || "Valor es obligatorio"],
    };
  },
  methods: {
    //funciones de form imagen
    fileSelectedE(evt) {
      this.NombreImg = evt.name;
      this.objImg = URL.createObjectURL(evt);
      this.ResultImg = this.objImg;
    },
    //Función de form datos
    //Función del botón Editar producto
    LeerDatE() {
      if (
        (this.Codigo == "") |
        (this.NombreProducto == "") |
        (this.Descripcion == "") |
        (this.Tipo == null) |
        (this.Sabor == "") |
        (this.Marca == null) |
        (this.Presentacion == "") |
        (this.ContenidoNeto == "") |
        (this.Valor == "")
      ) {
        alert("Hay campos vacíos y no se puede registrar el producto");
      } else if (
        (this.Codigo.length > 5) |
        (this.NombreProducto.length > 50) |
        (this.Descripcion.length > 300) |
        (this.Sabor.length > 50) |
        (this.Presentacion.length > 30) |
        (this.ContenidoNeto.length > 20)
      ) {
        alert("Exceso de carácteres y no se puede registrar el producto");
      } else {
        if ((this.NombreImg == "") | (this.NombreImg == null)) {
          alert("No ha seleccionado ninguna imagen");
        } else {
          if (this.$refs.form.validate()) {
            console.log(
              this.Codigo +
                "\n" +
                this.NombreProducto +
                "\n" +
                this.Descripcion +
                "\n" +
                this.Tipo +
                "\n" +
                this.Sabor +
                "\n" +
                this.Marca +
                "\n" +
                this.Presentacion +
                "\n" +
                this.ContenidoNeto +
                "\n" +
                this.Valor
            );
            console.log(this.NombreImg);

            alert("Producto Actualizado con éxito");
            this.$router.push("/home");
          } else {
            alert("hay datos inválidos y no se puede registrar el producto");
          }
        }
      }
    },

    UpdateData() {
      if (
        (this.Codigo == "") |
        (this.NombreProducto == "") |
        (this.Descripcion == "") |
        (this.Tipo == null) |
        (this.Sabor == "") |
        (this.Marca == null) |
        (this.Presentacion == "") |
        (this.ContenidoNeto == "") |
        (this.Valor == "")
      ) {
        alert("Hay campos vacíos y no se puede registrar el producto");
      } else if (
        (this.Codigo.length > 5) |
        (this.NombreProducto.length > 50) |
        (this.Descripcion.length > 300) |
        (this.Sabor.length > 50) |
        (this.Presentacion.length > 30) |
        (this.ContenidoNeto.length > 20)
      ) {
        alert("Exceso de carácteres y no se puede registrar el producto");
      } else {
        if ((this.NombreImg == "") | (this.NombreImg == null)) {
          alert("No ha seleccionado ninguna imagen");
        } else {
          if (this.$refs.form.validate()) {
            console.log(
              this.Codigo +
                "\n" +
                this.NombreProducto +
                "\n" +
                this.Descripcion +
                "\n" +
                this.Tipo +
                "\n" +
                this.Sabor +
                "\n" +
                this.Marca +
                "\n" +
                this.Presentacion +
                "\n" +
                this.ContenidoNeto +
                "\n" +
                this.Valor
            );
            console.log(this.NombreImg);

            let objProduct = {
              codigo: this.Codigo,
              nombre: this.NombreProducto,
              descripcion: this.Descripcion,
              tipo: this.Tipo,
              sabor: this.Sabor,
              marca: this.Marca,
              presentacion: this.Presentacion,
              contNeto: this.ContenidoNeto,
              valor: this.Valor,
              imagen: this.NombreImg,
            };
            const productoVO = [];
            productoVO.push(this.Codigo, objProduct);
            //Crear un producto; realiza solicitud post al backend
            store.dispatch("updateProduct", productoVO);

            alert("Producto Actualizado con éxito");
            this.$router.push("/home");
          } else {
            alert("hay datos inválidos y no se puede registrar el producto");
          }
        }
      }
    },
    //Función del botón inicio
    Atras() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
#ImgEdit{
    float: left;
    width: 40%;
    margin-top: 10px;
    padding-right: 20px;
    padding-left: 50px;
    background-color: #f4f4f4;
}

#DatEdit{
    float: right;
    width: 50%;
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 120px;
    background-color: #f4f4f4;
}

#ContPrincE{
    height: 660px;
    background-color: #f4f4f4;
}

#EditBT{
    padding-right: 250px;
    padding-left: 60px;
}

#CampValid{
    border-width: 0px;
    background-color: #f4f4f4;
    height: 15px;
    color: red;
}

#BtForm{
    background-color: #724293;
}
</style>