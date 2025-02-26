import './App.css';
import Conclusion from './components/Conclusion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="website">
      <Navbar />
      <Hero />
      <Conclusion />
    </div>
  );
}

export default App;
