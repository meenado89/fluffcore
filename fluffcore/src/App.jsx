import { Routes, Route } from 'react-router-dom'
import Blog from './components/Blog';
import "./components/Fluff.css";
import Booking from './components/Booking'
import NavBar from './components/NavBar';
// import FluffCoreBackground from './components/FluffCoreBackground';
function App() {
  return (
    <>
    <NavBar/>
     <Routes>        
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Booking" element={<Booking />} />
    </Routes>
    
    </>
  )
}

export default App