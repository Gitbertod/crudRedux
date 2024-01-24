import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


//ACTIONS DE REDUX
import { crearNuevoProductoAction } from '../redux/actions/productosActions'

const NuevoProducto = () => {

  //utilizar use dispatch y te crea una funcion

  const dispatch = useDispatch()
  
  //manda a llamar el action de procuctosActions
  const agregarProducto = () =>dispatch(crearNuevoProductoAction())
  
  //cuando el usuario haga submit
  const submitNuevoProducto = (e)=>{
    e.preventDefault();
    //validar formulario

    //si no hay errores

    //crear el nuevo producto
    agregarProducto()
  }
  
  
  
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Agregar nuevo Producto</h2>
            <form
            onSubmit={submitNuevoProducto}
            >
              <div className='form-group'>
                <label>Nombre Producto</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre Producto'
                  name='nombre'
                />
              </div>

              <div className='form-group'>
                <label>Nombre Producto</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre Producto'
                  nombre='precio'
                />
              </div>

              <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                Agregar
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NuevoProducto