<template>
  <div>
    <router-link
      to="/carritoVacio"
      v-if="$store.state.carritoProductos.length === 0"
      ><img src="../assets/whitecart.png" alt="Carrito compras"
    /></router-link>
    <router-link to="/carrito" v-else
      ><img src="../assets/whitecart.png" alt="Carrito compras" />
      <span class="cantidadItems">{{
        $store.state.carritoProductos.length
      }}</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Carrito-Compra",
};
</script>

<style lang="scss" scoped>
img {
  width: 2vw;
  height: 4vh;
}
.cantidadItems {
  color: white;
  border-radius: 50%;
  border: none;
}

a {
  text-decoration: none !important;
}
</style>