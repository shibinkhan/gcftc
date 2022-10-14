import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header.js';
import Home from './pages/Home/Home.js';
import Footer from './pages/Footer/Footer.js';
import NotFound from './pages/NotFound/NotFound.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
