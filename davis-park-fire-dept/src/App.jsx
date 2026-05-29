import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "./App.css"
import Navigation from './components/NavigationComponent'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import NewsEvents from './components/NewsEvents'
import { Routes, Route, NavLink } from "react-router-dom";
import NewsEventsItem from './components/NewsEventsItem';
import Membership from './components/Membership';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      
      <Navigation />
      
      {/* 2. Wrap your Routes in a semantic <main> tag with 'flex-grow-1' so it forces itself to expand */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/NewsEvents" element={<NewsEvents />} />
          <Route path="/NewsEventsItem" element={<NewsEventsItem />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />

    </div>
  )
}

export default App
