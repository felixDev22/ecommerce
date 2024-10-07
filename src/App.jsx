import './App.css';
import Hero from './components/hero/hero';
import Navbar from './components/Navbar/Navbar';

import DisplayMenu from './components/DisplayMenu/DIsplayMenu';
import { useState } from 'react';
import MenuSection from './components/menuSection/menuSection';

function App() {
  const { category, setCategory } = useState('All');

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <MenuSection />
          <DisplayMenu category={category} />
        </div>
      </div>
    </>
  );
}

export default App;
