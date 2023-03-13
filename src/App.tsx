import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Presentation from './components/Portofolio/Presentation'
import Skill from './components/Portofolio/Skill'
import Project from './components/Portofolio/Project'
import Contact from './components/Portofolio/Contact'

export function App() {

  return (
    <div id="main">
    <Sidebar/>
    <div id="App">
      <h1>Bienvenue</h1>
      <Presentation/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>
    </div>
  )
}

export function Show() {
  const Slide = ['About', 'Project'];
  console.log("About");
}