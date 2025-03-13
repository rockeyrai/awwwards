import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import Features from './components/Features'

const App = () => {
  return (
<main className='relatice min-h-screen w-screen overflow-x-hidden'>
  <NavBar/>
  <Hero/>
  <About/>
  <Features/>
</main>
  )
}

export default App
