import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/global/Navbar'
import {Routes,Route,} from'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      {/* <Route path="/"element={<Home/>} />
      <Route path="/about"element={<About/>} />
      <Route path="/contact"element={<Contact/>} />
      <Route path="/services"element={<Services/>} />
      <Route path="/login" element={<Login/>}/> */}
      <Route path="/register" element={<Register/>}/>
    </Routes> 
    </>
  )
}

export default App
