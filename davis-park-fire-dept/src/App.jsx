import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Navigation from './components/NavigationComponent'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
