<template>
  <div>
    <header-custom />
    <div class="container">
      <div class="carritoVacio">
        <h1>El carrito está vacio</h1>
        <img
          src="../assets/empty-cart-icon.svg"
          alt="Carrito Vacio"
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCustom from "../components/HeaderCustom.vue";
export default {
  components: { HeaderCustom },
};
</script>

<style scoped>
img {
  width: 30%;
}

.carritoVacio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  padding-bottom: 2vh;
}
</style>