
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import Blog from '../pages/Blog'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
  )
}

export default Router
