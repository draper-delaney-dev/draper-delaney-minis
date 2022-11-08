import React from 'react';
import './App.css';
import Nav from './components/ui/Nav';
import Footer from './components/ui/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;