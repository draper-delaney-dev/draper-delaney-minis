import React from 'react';
import './App.css';
import Nav from './components/ui/Nav';
import Footer from './components/ui/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import MenuPage from './components/MenuItems/MenuPage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;