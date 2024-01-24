import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto'
import NuevoProducto from './components/NuevoProducto'
import { NotFound } from './components/NotFound'

//REDUX
import { Provider } from 'react-redux'
import store from './redux/store'




function App() {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />

          <Routes>
            <Route path='/' element={<Productos />}></Route>
            <Route path='/productos/nuevo' element={<NuevoProducto />}></Route>
            <Route path='/productos/editar/:id' element={<EditarProducto />}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>

        </Provider>
      </BrowserRouter>
    </>



  )
}

export default App
