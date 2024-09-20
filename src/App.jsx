import './App.css';
import Hero from './components/hero/hero';
import Navbar from './components/Navbar/Navbar';
import MenuSection from './components/menuSection/MenuSection';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <MenuSection />
      </div>
    </>
  );
}

export default App;
