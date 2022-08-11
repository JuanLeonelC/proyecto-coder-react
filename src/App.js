import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart';
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
