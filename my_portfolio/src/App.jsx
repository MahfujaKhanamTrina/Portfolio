import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AboutMe from './Components/AboutMe'
import { HashRouter } from 'react-router-dom'



export default function App(){
  return(
    <>
    <HashRouter>
    <div className="w-ful">
        {/* Navbar */}
        <div className="">
            <Navbar />
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
        </div>



        {/* Experience */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutMe />
        </div>

        {/* Skills */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skills />
        </div>

        {/* Projects */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Project />
        </div>

        {/* Contact */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Footer />
        </div>
    </div>

    </HashRouter>
</>
  )

}
