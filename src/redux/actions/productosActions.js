import {
    AGREGRAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';

import clienteAxios from '../../config/axios'

//CREAR NUEVOS PRODUCTOS

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())

        try {
            //Insertar en la API
            await clienteAxios.post('/roductosf',producto);
            
            //si todo sale bien se actualiza el state
            dispatch(agregarProductoExito(producto));

        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true))
        }

    }
}
const agregarProducto = () => ({
    type: AGREGRAR_PRODUCTO
})

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


