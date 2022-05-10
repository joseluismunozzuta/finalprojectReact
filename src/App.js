import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import ItemCount from './components/ItemCount';
import "./bootstrap/dist/css/bootstrap.min.css";
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <DaisyNavBar/>
      <ItemCount stock='7' initial='1'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
