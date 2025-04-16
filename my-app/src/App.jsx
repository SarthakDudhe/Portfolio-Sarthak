import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Card from './components/Card'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Achieve from './components/Achieve'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css'


function App() {
  

  return (
    <>

    <BrowserRouter>
    <Navbar/>    
    <Footer/>
   
    </BrowserRouter>
     
    

     
    </>
  )
}

export default App
