import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import Presentation from './components/Portofolio/Presentation'
import Made from './components/Portofolio/Made'
import Project from './components/Portofolio/Project'
import Contact from './components/Portofolio/Contact'

export function App() {

  return (
    <div className="App">
      <Header/>
      <h1>Bienvenue</h1>
      <Presentation/>
      <Project/>
      <Made/>
      <Contact/>

    </div>
  )
}

export function Show() {
  const Slide = ['About', 'Project'];
  console.log("About");
}