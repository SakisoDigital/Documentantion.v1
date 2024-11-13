import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarPage from './Pages/Navbar';
import FooterPage from './Pages/Footer';



function App() {
  return (
    <Router>
      <div className="text-red-500">
        <Routes>
          <Route path="/" element={<Navigate to="/navbar" />} /> {/* Redirect "/" to "/navbar" */}
          <Route path="/navbar" element={<NavbarPage />} />
          <Route path="/footer" element={<FooterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
