import './App.css';
import Conclusion from './components/Conclusion';
import Experiences from './components/Experiences';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="website">
      <Navbar />
      <Hero />
      <Experiences />
      <Conclusion />
    </div>
  );
}

export default App;
