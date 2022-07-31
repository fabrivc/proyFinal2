<template>
  <div class="container mt-4 w-50 p-3">
    <header-custom />
    <router-link to="/productos" class="cerrar">X</router-link>
    <div >
      <div class="card col-sm-12 col presentacionProducto">
        <img
          class="card-img-top"
          :src="$route.params.producto.imageUrl"
          alt="Card image cap"
        />
        <div class="card-body col">
          <h5 class="card-title">{{ $route.params.producto.nombre }}</h5>
          <h5 class="card-title">{{ $route.params.producto.descripcion }}</h5>
        </div>
        <div class="contenedorBotones col d-flex justify-content-around">
          <h3>${{ $route.params.producto.precio }}</h3>
          <a
            class="btn btn-primary btn-danger"
            @click="agregarProducto({ ...$route.params.producto, cantidad: 1 })"
            >Agregar</a
          >
        </div>
      </div>
    </div>
  </div>

  <!--
      <v-row justify="space-around">

    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="info"
            v-bind="attrs"
            v-on="on"
          >Detalle</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
  -->
</template>

<script>
import { mapMutations, mapState } from "vuex";
import HeaderCustom from "../components/HeaderCustom.vue";
export default {
  components: { HeaderCustom },
  computed: {
    ...mapState(["carritoProductos"]),
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT"]),
    agregarProducto(producto) {
      this.$store.commit("ADD_PRODUCT", producto);
    },
  },
};
</script>

<style>


.widthImg {
  width: 30%;
  height: 100%;
  margin: auto;
  padding: 3%;
}

.cerrar {
  position: absolute;
  display: block;
  float: left;
  margin-left: 4%;
  margin-top: 1%;
  font-size: xx-large;
  text-decoration-line: none;
  cursor: pointer;
  color: red;
}

.presentacionProducto {
  width: 75%;
  margin: 2vh auto;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(216, 190, 43, 0.239) 100%);
  border: 6px solid rgba(13, 13, 14, 0.5);
  box-sizing: border-box;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
}
</style>