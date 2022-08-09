import CartContext from './context/CartContext'
import NavBar from './components/navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import FormContainer from './components/FormContainer/FormContainer';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryName' element={<ItemListContainer />}/>
          <Route path='/product/:productId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartContainer />}/>
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;