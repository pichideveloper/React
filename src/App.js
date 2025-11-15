import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Home from './paginitas/Home';
import Contacto from './paginitas/Contacto';
import Cards from './paginitas/Cards';
import Footer from './components/Footer';
import Cartatwo from './paginitas/Cartatwo';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="pb-5"></div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cartaAxio" element={<Cartatwo />} />
        <Route path="*" element={<h2 className="container mt-5">Error 404 </h2>} />
      </Routes>
      <br></br>
      <Footer> </Footer>
      
    </Router>
  );
}

export default App;