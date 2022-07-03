import './App.css';
import Home from './pages/home/Home'
import { Routes, Route} from "react-router-dom";
import About from "./pages/about/About";
import Solutions from './pages/solutions/Solutions';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';




function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        
      </Routes> 
  );
}

export default App;
