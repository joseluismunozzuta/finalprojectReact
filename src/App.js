import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemCount from './components/ItemCount';
import "./bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetail from './components/ItemDetail';
import ItemUniqueId from './components/ItemUniqueId';

function App() {

  return (


<BrowserRouter>
    <DaisyNavBar></DaisyNavBar>

    <Routes>
      <Route path='/' element={<ItemDetailContainer stock='10' initial='1'/>}/>
      <Route path='/item/:productId' element={<ItemUniqueId/>}/>
    </Routes>
</BrowserRouter>

  );
}

export default App;
