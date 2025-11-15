import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
     
    </Routes>


  </BrowserRouter>
  )
}

export default App
