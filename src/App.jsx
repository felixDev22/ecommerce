import './App.css';
import Hero from './components/hero/hero';
import Navbar from './components/Navbar/Navbar';
import DisplayMenu from './components/DisplayMenu/DisplayMenu';
import { useState } from 'react';
import MenuSection from './components/menuSection/menuSection';

function App() {
  const [category, setCategory] = useState('ALL');

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <MenuSection category={category} setCategory={setCategory} />
          <DisplayMenu category={category} />
        </div>
      </div>
    </>
  );
}

export default App;
