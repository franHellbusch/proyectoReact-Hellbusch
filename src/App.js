import NavBar from './components/header/navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
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
        <Route path='/product/:productId' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;