import React from "react";
import { Show } from '../../App'
import './Header.css'

export default function Header() {
    return (
        <div id="panel">
          <button onClick={Show}>A Propos</button>
          <a href='#project'>Projet</a> 
          <a href='#contact'>Contact</a>
        </div>
    )
  }