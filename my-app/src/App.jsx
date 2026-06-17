import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Card from './components/Card'
import Project from './components/Project'
import CtaFooter from './components/CtaFooter'
import Contact from './components/Contact'
import Achieve from './components/Achieve'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css'


function App() {
  

  return (
    <>

    <BrowserRouter>
    <Navbar/>    
    <CtaFooter/>
   
    </BrowserRouter>
     
    

     
    </>
  )
}

export default App
