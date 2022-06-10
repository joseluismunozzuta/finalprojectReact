import './App.css';
import "./index.css";
import DaisyNavBar from './components/DaisyNavBar';
import "./bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';

function App() {

  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Welcome></Welcome>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>

  );
}

export default App;
