import React from 'react'
import './App.css'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Offers from './components/Offers/Offers'
import Popular from './components/Popular/Popular'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offers/>
      <About/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
