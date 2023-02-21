import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

/*      <div>    
        <a href="https://reactjs.org" target="_blank">
         <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */

export function App() {

  return (
    <div className="App">
      <h1>Bienvenue</h1>
      <div className="presentation">
        <h2>Je m'appelle Mickaël Canhoto <br/>
        et je construit des choses sur internet</h2>
        <h3>Etudiant en informatique</h3>
    </div>
      <div id='about'>
      
      </div>
      <div id='project'>

      </div>
      <div id='contact'>

      </div>
      <footer></footer>
      <Panel/>
    </div>
  )
}

function Panel() {
  return (
      <div id="panel">
        <a href='#about'>A Propos</a>
        <a href='#project'>Projet</a> 
        <a href='#contact'>Contact</a>
      </div>
  )
}
