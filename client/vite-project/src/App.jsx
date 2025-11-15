import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import SignUp from './pages/signup.jsx'
import SignIn from './pages/signin.jsx'
const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      
     
    </Routes>


  </BrowserRouter>
  )
}

export default App
