import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Userinfo from './pages/Userinfo'
import Error from './pages/Error'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/userinfo' element={<Userinfo/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App
