import CartContext from './context/CartContext'
import NavBar from './components/navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import AuthCustomProvider from './context/AuthContext';
import Register from './components/LoginAndRegister/Register'
import Login from './components/LoginAndRegister/Login';
import ProtectedRoute from './components/LoginAndRegister/ProtectedRoute';
import RecoverPassword from './components/LoginAndRegister/RecoverPassword';

function App() {
  return (
    <BrowserRouter>
      <AuthCustomProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recover-password' element={<RecoverPassword />}/>
          <Route path='*' element={
            <ProtectedRoute>
              <CartContext>
                <NavBar />
                <Routes>
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path='/category/:categoryName' element={<ItemListContainer />} />
                  <Route path='/product/:productId' element={<ItemDetailContainer />} />
                  <Route path='/cart' element={<CartContainer />} />
                </ Routes>
              </CartContext>
            </ProtectedRoute>
          } />
        </Routes>
      </AuthCustomProvider>
    </BrowserRouter>
  );
}

export default App;