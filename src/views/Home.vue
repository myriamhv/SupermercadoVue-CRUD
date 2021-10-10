<template>
  <div id="CtP">
    <div id="contBT">
      <CatalogoBt/>
    </div>
    <div id="contenedor">
      <div v-for="objProduct in products" :key="objProduct.codigo">
        <CatalogoV :product="objProduct" />
      </div>
    </div>
  </div>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import store from "../store/index.js";
  import CatalogoBt from '../components/CatalogoBt'
  import CatalogoV from '../components/CatalogoV'

  export default {
    name: 'Home',

    components: {
      CatalogoV,
      CatalogoBt,
    },
    data: ()=>{
        return{
            
        }
    },
    created: () => {
        store.dispatch("getProductos");
    },
    computed: {
        products: () => {
          return store.state.products;
        }
    }
  }
</script>

<style>
#contenedor{
    background-color: #f4f4f4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

#CtP{
  background-color: #f4f4f4;
}
</style>
