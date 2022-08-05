import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
