import {
    AGREGRAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
}   from '../types/index'

//CREAR NUEVOS PRODUCTOS

export function crearNuevoProductoAction (producto){
    return (dispatch)=>{
        dispatch(agregarProducto())

        try {
            dispatch(agregarProductoExito(producto))

        } catch (error) {
            dispatch(agregarProductoError(true))
        }
    }
}

const agregarProducto = () =>({
    type:AGREGRAR_PRODUCTO 
})

const agregarProductoExito = (producto) =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
    
const agregarProductoError = ()=>({

})