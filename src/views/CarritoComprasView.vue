<template v-if="$store.state.carritoProductos">
  <div  class="container mt-5">
    <header-custom />
    <div id="divcart"
      v-for="productoAgregado in $store.state.carritoProductos"
      :key="productoAgregado.id"
    >
      <div class="card spacing">
        <div class="imgNomb">
          <img
            :src="productoAgregado.imageUrl"
            width="20%"
            class="imgProducto"
          />
          <h3 class="nombreProducto">{{ productoAgregado.nombre }}</h3>
        </div>
        <div class="botonesCantidad">
          <span class="btn btn-danger" @click="quitarUnidad(productoAgregado)"
            >-</span
          >
          <span class="cantProducto">{{ productoAgregado.cantidad }}</span>
          <span class="btn btn-success" @click="addACarrito(productoAgregado)"
            >+</span
          >
        </div>
        <div class="precio">
          <p>
            Precio: ${{ productoAgregado.precio * productoAgregado.cantidad }}
          </p>
        </div>
      </div>
    </div>
    <div class="total" v-if="total">
      <p>Total: ${{ total }}</p>
      <a class="btn btn-danger" @click="finalizarCompra(total)">Comprar</a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import HeaderCustom from "../components/HeaderCustom.vue";
export default {
  components: { HeaderCustom },

  computed: {
    ...mapState(["carritoProductos"]),
    total() {
      let total = 0;
      this.carritoProductos?.forEach((item) => {
        item.cantidad = item.cantidad || 1;
        total += (item.cantidad || 1) * item.precio;
      });

      return total;
    },
  },
  methods: {
    ...mapMutations([
      "REMOVE_PRODUCT",
      "AGREGAR_UNIDAD",
      "ADD_TO_CARRITO",
      "QUITAR_UNIDAD",
      "FINALIZAR_COMPRA",
    ]),
    quitarProducto(producto) {
      this.$store.commit("REMOVE_PRODUCT", producto);
    },
    agregarUnidad(producto) {
      this.$store.commit("AGREGAR_UNIDAD", producto);
    },
    quitarUnidad(producto) {
      this.$store.commit("QUITAR_UNIDAD", producto);
      if (producto.cantidad < 1) {
        this.quitarProducto(producto);
      }
    },
    addACarrito(producto) {
      this.$store.commit("ADD_TO_CARRITO", producto);
    },
    finalizarCompra(monto) {
      this.$store.commit("FINALIZAR_COMPRA", monto);
      this.$router.push("/productos");
    },
  },
};
</script>

<style scoped>

span,
h3 {
  width: 10%;
}

.cantProducto {
  font-weight: 700;
  font-size: 20px;
}

.nombreProducto {
  width: auto;
}

.botonesCantidad {
  display: flex;
  justify-content: space-evenly;
}

.spacing {
  margin: 2%;
}
</style>