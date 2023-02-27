import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import Presentation from './components/Portofolio/Presentation'
import About from './components/Portofolio/About'
import Project from './components/Portofolio/Project'
import Contact from './components/Portofolio/Contact'

/*      <div>    
        <a href="https://reactjs.org" target="_blank">
         <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */

export function App() {

  return (
    <div className="App">
      <Header/>
      <h1>Bienvenue</h1>
      <Presentation/>
      <About/>
      <Project/>
      <Contact/>

    </div>
  )
}

export function Show() {
  const Slide = ['About', 'Project'];
  console.log("About");
}