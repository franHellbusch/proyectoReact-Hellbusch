import NavBar from './components/header/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="hola mundo"/>
    </>
  );
}

export default App;