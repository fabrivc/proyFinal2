import axios from 'axios';

export const agregarProducto = ({commit},producto) => {
    commit('ADD_PRODUCT', producto);
}

export const quitarProducto = ({commit},producto) => {
    commit('REMOVE_PRODUCT', producto);
}

export const agregarUnidad = ({commit},producto)=>{
    commit('AGREGAR_UNIDAD',producto);
}

export const quitarUnidad = ({commit},producto)=>{
    commit('QUITAR_UNIDAD',producto);
}

export const login = ({commit},user)=>{
    commit("LOGIN",user);
}

export const logout = ({commit})=>{
    commit("LOGOUT");
}

export const obtenerListaProductos = async (context)=>{
    await axios
        .get("https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/productos", {})
        .then((rpta) => {
          if (rpta.status == 201 || rpta.status == 200) {
            context.commit("LISTA_PRODUCTOS", rpta.data)
          }
        })
        .catch((error) => {
          console.info(error.response.status + ": " + error.message);
        });
}

export const obtenerListaPedidos = async (context)=>{
    await axios
        .get("https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/pedidos", {})
        .then((rpta) => {
          if (rpta.status == 201 || rpta.status == 200) {
            context.commit("LISTA_PEDIDOS", rpta.data)
          }
        })
        .catch((error) => {
          console.info(error.response.status + ": " + error.message);
        });
}