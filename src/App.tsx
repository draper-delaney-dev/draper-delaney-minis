import React from 'react';
import './App.css';
import Main from './components/ui/Main';
import Nav from './components/ui/Nav';
import Footer from './components/ui/Footer';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
      <Nav />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;