import './App.css';
import Home from './pages/Home'
import About from './pages/About';
// import NotFound from './pages/NotFound';
import { BrowserRouter as Router , Route , Routes , Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path="*" element={<Navigate to="/" /> } />
      </Routes>
    </Router>
  );
}

export default App;
