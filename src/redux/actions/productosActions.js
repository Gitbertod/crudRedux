import {
    AGREGRAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';

import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2';

//CREAR NUEVOS PRODUCTOS

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())

        try {
            //Insertar en la API
            await clienteAxios.post('/Fproductos',producto);
            
            //si todo sale bien se actualiza el state
            dispatch(agregarProductoExito(producto));

            //Alerta usando sweetAlert
            Swal.fire({
                title: "Correcto!",
                text: "Producto agregado con éxito!",
                icon: "success"
              });


        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true))
            
            //alerta de error
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salio mal...",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
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


