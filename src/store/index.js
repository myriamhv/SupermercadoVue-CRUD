import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editProduct: {}
  },
  mutations: {
    setProductos(state, payload){
      state.products = payload;
    },
    setDatEdit(state, payload){
      state.editProduct = payload;
    },
    // settest(state, payload){
    //   state.editProduct = payload;
    // },

  },
  actions: {
    async getProductos({commit}){
      const peticionP = await fetch('http://localhost:3000/producto', {method: 'GET'});
      const dataProd = await peticionP.json();
      console.log(dataProd);
      commit('setProductos', dataProd); 
    },
    async createProduct({commit}, objProduct){
      console.log("objProduct:" + JSON.stringify(objProduct));
      const peticion = await fetch('http://localhost:3000/producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objProduct)
      });
    },
    async eliminarProduct({commit}, obj){
      const peticion = await fetch('http://localhost:3000/producto', {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
    },
    async putDatEdit({commit}, idP){
      const peticionP = await fetch('http://localhost:3000/producto/'+idP, {method: 'GET'});
      const listProd = await peticionP.json(); 
      commit('setDatEdit', listProd);
    }, 
    async updateProduct({commit}, productoVO){
      const peticion = await fetch('http://localhost:3000/producto/'+ productoVO[0], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productoVO[1])
      });
    },

    async deleteProduct({commit}, productoVO){
      const peticion = await fetch('http://localhost:3000/producto/'+productoVO[0], {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productoVO[1])
      });
    }
    // async deleteProduct({commit}, productoVO){
    //   console.log("Delete"+ productoVO[0]);
    //   let jj = "{\"User\":[]}";
    //   console.log(jj);
    //   const peticion = await fetch('http://localhost:3000/producto/'+productoVO[0], {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({x:[]})
    //   });
    // }
  },
  modules: {
  }
})
