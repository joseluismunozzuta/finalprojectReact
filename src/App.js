import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import ItemCount from './components/ItemCount';
import "./bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <div className="App">
      <DaisyNavBar/>
      <ItemListContainer>
        <Item name='Laptop ASUS' price='1000'/>
        <Item name='Laptop MSI' price='1500'/>
      </ItemListContainer>
      <ItemCount stock='7' initial='1'/>
    </div>
  );
}

export default App;
