import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header.js';
import Home from './pages/Home/Home.js';
import Footer from './pages/Footer/Footer.js';
import NotFound from './pages/NotFound/NotFound.js';
import WebDevelopment from './pages/Services/AllService/WebDevelopment/WebDevelopment';
import SignIn from './pages/Firebase/Login/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webDev" element={<WebDevelopment />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
