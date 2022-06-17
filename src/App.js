import './App.css';
import "./index.css";
import "./bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {

  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>

  );
}

export default App;
