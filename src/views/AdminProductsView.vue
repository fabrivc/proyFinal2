<template>
  <div class="row">
    <h1 class="mt-5">PANEL PRODUCTOS</h1>
    <span class="col-sm-11"></span>
    <form action="" class="datosProducto">
      <div class="container formProducto">
        <label for="nombre">Nombre</label
        ><input type="text" v-model="nombre" />
        <label for="descripcion">Descripcion</label
        ><input type="text" v-model="descripcion" />
        <label for="precio">Precio</label
        ><input type="text" v-model="precio" />
        <label for="imageUrl">Imagen</label
        ><input type="text" v-model="imageUrl" />
        <button
          v-if="!productoExistente"
          type="submit"
          class="btn btn-success mt-2"
          @click.prevent="agregarProducto()"
        >
          Aceptar
        </button>

        <button
          v-else
          type="submit"
          class="btn btn-success mt-2"
          @click.prevent="editarProducto(productoEditable)"
        >
          Aceptar
        </button>
      </div>
    </form>
    <table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in listaProductos" :key="producto.id">
          <td>
            <img :src="producto.imageUrl" alt="imagen producto" width="50" />
          </td>
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precio }}</td>
          <td>{{ producto.descripcion }}</td>
          <td>
            <button
              class="btn btn-primary m-2"
              @click="productoAEditar(producto)"
            >
              Editar
            </button>
            <button class="btn btn-danger" @click="eliminarProducto(producto)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex"; 

export default {
  data() {
    return {
      id: Number,
      nombre: "",
      descripcion: "",
      precio: null,
      imageUrl: "",
      productoExistente: false,
      productoEditable: {},
    };
  },

  mounted(){
    this.$store.dispatch("obtenerListaProductos");
  },

  computed:{
    ...mapState({listaProductos:(state)=>state.listaProductos})
  },

  methods: {
    agregarProducto() {
      const producto = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        imageUrl: this.imageUrl,
      };
      if(producto.imageUrl.length===0){
        producto.imageUrl = 'data:image/png;base64,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';
      }
      axios
        .post(
          "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos",
          producto
        )
        .then(() => {
          this.$store.dispatch("obtenerListaProductos");
          this.resetValues();
        });
    },

    productoAEditar(producto) {
      this.productoExistente = true;
      this.id = producto.id;
      this.nombre = producto.nombre;
      this.descripcion = producto.descripcion;
      this.precio = producto.precio;
      this.imageUrl = producto.imageUrl;
    },

    editarProducto(producto) {
      producto.id = this.id;
      producto.nombre = this.nombre;
      producto.descripcion = this.descripcion;
      producto.precio = this.precio;
      producto.imageUrl = this.imageUrl;
      axios
        .put(
          `https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos/${producto.id}`,
          producto
        )
        .then(() => {
          this.$store.dispatch("obtenerListaProductos");
          this.resetValues();
        });
    },

    eliminarProducto(producto) {
      axios
        .delete(
          `https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos/${producto.id}`
        )
        .then(() => {
          this.$store.dispatch("obtenerListaProductos");
        });
    },

    resetValues() {
      this.productoExistente = false;
      this.id = null;
      this.nombre = "";
      this.descripcion = "";
      this.precio = null;
      this.imageUrl = "";
    },
  },
};
</script>

<style scoped>
table {
  table-layout: fixed;
  margin-top: 2%;
}
#btnAgregar {
  width: 10%;
}

input {
  border: 1px solid black;
  width: 95%;
}

.formProducto {
  border: 1px solid rgb(0, 0, 0);
  max-width: 900px !important;
}
</style>