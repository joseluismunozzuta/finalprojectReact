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
      <Route path='/counter' element={<ItemCount stock='7' initial='1'/>}/>
      <Route path='/' element={<ItemDetailContainer/>}/>
      <Route path='/item/:productId' element={<ItemUniqueId/>}/>
    </Routes>
</BrowserRouter>

  );
}

export default App;
