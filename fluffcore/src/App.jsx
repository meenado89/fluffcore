import { Routes, Route } from 'react-router-dom'
import Blog from './components/Blog';
import "./components/Fluff.css";
import FluffCoreBackground from './components/FluffCoreBackground';
function App() {
  return (
     <Routes>
        <Route path="/" element={<Blog />} />
    </Routes>
  )
}

export default App