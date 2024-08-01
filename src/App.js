import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '';

function App() {
  return (
    <Router basename={basename}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/NewPortfolio" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
