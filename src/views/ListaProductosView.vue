<template>
  <div class="container">
    <header-custom/>
    <div class="row mt-3">
      <h1>Nuestros productos!</h1>
      <div v-for="producto in listaProductos" :key="producto.id" class="card col-sm-6 presentacionProducto">
        <img class="card-img-top widthImg" :src=producto.imageUrl alt="Card image cap" height="100">
        <div class="card-body prueba">
          <h5 class="card-title">{{producto.nombre}}</h5>
          <div class="contenedor-botones d-flex justify-content-around">
            <router-link :to="{name:'detalleProducto',params:{id:producto.id,producto}}"><a class="btn boton btn-primary">Detalle</a></router-link>
            <a class="btn boton btn-danger" id="btnAgregar" @click="agregarProducto({...producto,cantidad:1})">Agregar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
import axios from 'axios';
import HeaderCustom from '../components/HeaderCustom.vue'
export default {
    name: "Lista-Productos",
    components:{HeaderCustom},

    mounted(){
      this.$store.dispatch("obtenerListaProductos");
    },

    computed:{
      ...mapState({listaProductos:(state)=>state.listaProductos},
      'carritoProductos'
      )
      
    },

    async created(){
      let url = "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos";

      await axios.get(url).then((response)=>(this.listaProductos = response.data));
    },
  
  methods:{
    ...mapMutations([
      'ADD_PRODUCT',
      'AGREGAR_UNIDAD'
    ]),
    agregarProducto(producto){
          this.$store.commit('ADD_PRODUCT',producto);
    },
    agregarUnidad(producto){
      this.$store.commit('AGREGAR_UNIDAD',producto);
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 40%;
  padding: 2%;
}
  .widthImg{
    width: 40%;
    height: 100%;
    margin: auto;
    padding: 0%;
  }

  .presentacionProducto{
        width: 40%;
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(214,184,3,0.23853291316526615) 100%);
        border: 2px solid rgba(13, 13, 14, 0.719); 
        box-sizing: border-box;
        box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.603);
  }

  //0-460
  @media (max-width: 460px){
    .contenedor-botones{
      flex-direction: column !important;
      width: 100%;
    }

  }



  .contenedor-botones{
    display:flex;
    position:relative;
    flex-direction: row;
    justify-content: space-evenly;

  }
  .btn-danger{
    background: linear-gradient(135deg, orange 60%, cyan);
    border: 1px solid black;
  }
  .btn-primary{
    background: linear-gradient(135deg, orange 60%, cyan);
    border: 1px solid black;
  }
</style>
