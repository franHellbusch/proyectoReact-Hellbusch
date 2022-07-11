import NavBar from './components/header/navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer.js'
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer />}/>
        <Route path='/product/:productId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<CartContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;