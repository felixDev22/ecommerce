import './App.css';
import Hero from './components/hero/hero';
import Navbar from './components/Navbar/Navbar';
import DisplayMenu from './components/allMenus/DIsplayMenu';
import { useState } from 'react';
import MenuSection from './components/menuSection/menuSection';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Login from './components/login/login';
import Cart from './pages/cart/Cart';

function App() {
  const [category, setCategory] = useState('ALL');
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  return (
    <div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {location.pathname === '/' && (
        <div className="container">
          <MenuSection category={category} setCategory={setCategory} />
          <DisplayMenu category={category} />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
