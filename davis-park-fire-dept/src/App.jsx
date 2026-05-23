import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Navigation from './components/NavigationComponent'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
    
      <Home />
      <Footer />

    </>
  )
}

export default App
