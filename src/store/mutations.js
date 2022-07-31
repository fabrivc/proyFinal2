//metodo acción y mutación
import axios from 'axios';
export const ADD_PRODUCT = (state,producto)=>{
    let productoEnCarrito = state.carritoProductos.find(item => {
        return item.id == producto.id;
    })

    if(!productoEnCarrito)
        state.carritoProductos = [...state.carritoProductos,producto];
};


export const ADD_TO_CARRITO = (state, producto) => {
    
    let productoEnCarrito = state.carritoProductos.find(item => {
        return item.id == producto.id;
    })

    if(productoEnCarrito){
        productoEnCarrito.cantidad ++;
        return
    } else
        state.carrito.push({
            producto
        });
    
}

export const REMOVE_PRODUCT = (state,producto)=>{
    state.carritoProductos = state.carritoProductos.filter(prod=>{
        return prod.id != producto.id;
    });
};


export const AGREGAR_UNIDAD = (state, producto) => {
    let productoBuscado = state.carritoProductos.find(prod => {
        return prod.id == producto.id;
    })

    let productoOriginal = state.productos.find(prod => {
        return prod.id == producto.id;
    })
    if(productoBuscado){
        productoBuscado.precio = productoOriginal.precio * productoBuscado.cantidad;
        productoBuscado.cantidad ++;  
    }
    
}

export const QUITAR_UNIDAD = (state, producto) => {
    let productoEnCarrito = state.carritoProductos.find(item => {
        return item.id == producto.id;
    })

    if(productoEnCarrito){
        productoEnCarrito.cantidad --;
        return
    }
    if(productoEnCarrito.cantidad==0){
        state.carritoProductos.filter(prod=>{
            return productoEnCarrito.id == prod.id;
        })
    }
}

export const TOTAL_CARRITO = (state)=>{
    state.carritoProductos.forEach(prod => {
        return state.total+=prod.precio;
    });
}

export const FINALIZAR_COMPRA = (state,total)=>{
    let pedido = {
        cliente: '',
        productos: [],
        monto: 0
    }
    state.carritoProductos.forEach(producto=>{
        pedido.productos.push(producto.nombre);
    });
    pedido.cliente = state.user.username;
    pedido.monto+=total;
    axios.post("https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/pedidos",pedido);
    alert(`Gracias por tu compra ${state.user.username}`);
    return state.carritoProductos = [];
}

export const LISTA_PRODUCTOS = (state,payload) =>{
    state.listaProductos = payload;
}

export const LISTA_PEDIDOS = (state,payload)=>{
    state.pedidos = payload;
}

export const LOGOUT =(state) => {
    state.user = {};
}
