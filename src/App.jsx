import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto'
import NuevoProducto from './components/NuevoProducto'
import { NotFound } from './components/NotFound'


function App() {


  return (
    <>
      <BrowserRouter>

      <Header></Header>

        <Routes>
          <Route path='/' element={<Productos />}></Route>
          <Route path='/productos/nuevo' element={<NuevoProducto />}></Route>
          <Route path='/productos/editar/:id' element={<EditarProducto/>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        
        
      </BrowserRouter>
    </>



  )
}

export default App
