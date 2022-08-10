<template>
  <div>
    <h1>PANEL PEDIDOS</h1>
    <div class="row">
      <div
        class="card col-sm-6"
        v-for="pedido in listaPedidos"
        :key="pedido.id"
      >
        <div class="pedido d-flex flex-column">
          <p>Cliente: {{ pedido.cliente }}</p>
          <p class="productos">Pedido: {{ pedido.productos }}</p>
          <p>Monto: {{ pedido.monto }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"; 
export default {
  mounted(){
    this.$store.dispatch("obtenerListaPedidos");
  },
  computed:{
    ...mapState({listaPedidos:(state)=>state.pedidos})
  },
};
</script>

<style scoped>
</style>