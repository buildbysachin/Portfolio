import React from 'react'
import Navbar from './component/Navbar'
import Logo from './component/logo'
import Main from './component/Main'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import Skill from './Pages/Skill'
import Service from './Pages/Service'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Skill' element={<Skill/>}/>
        <Route path='/Service' element={<Service/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App