import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Navbar from './pages/Navbar'
// import NotFound from './pages/NotFound';
import { BrowserRouter as Router , Route , Routes , Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path="*" element={<Navigate to="/" /> } />
      </Routes>
    </Router>
  );
}

export default App;
