import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'

const App = () => {
  return (
<main className='relatice min-h-screen w-screen overflow-x-hidden'>
  <NavBar/>
  <Hero/>
  <About/>
  <Features/>
  <Story/>
</main>
  )
}

export default App
