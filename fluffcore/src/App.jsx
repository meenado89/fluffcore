import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';
import "./components/Fluff.css";
import Booking from './components/Booking'
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Article from './components/Article';
import About from './components/About';
import AboutSlider from './components/AboutSlider';




// import FluffCoreBackground from './components/FluffCoreBackground';
function App() {
  return (
    <>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/About" element={<About />} />
         <Route path="/AboutSlider" element={<AboutSlider />} />
      </Routes>

    </>
  )
}

export default App