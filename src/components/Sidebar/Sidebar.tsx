import React from "react";
import { Show } from '../../App'
import './Sidebar.css'
import contactSVG from '../../assets/contact.svg'
import presentationSVG from '../../assets/presentation.svg'
import projectSVG from '../../assets/project.svg'
import skillSVG from '../../assets/skill.svg'

export default function Header() {
    return (
      <div id="sidebar" onMouseEnter={() => toggleSidebar(true)} onMouseLeave={() => toggleSidebar(false)}>
      <a href="#presentation"><img src={presentationSVG}></img><span>Présentation</span></a><br/>
      <a href="#project"><img src={projectSVG}></img><span>Projets</span></a><br/>
      <a href="#skill"><img src={skillSVG}></img><span>Compétences</span></a><br/>
      <a href="#contact"><img src={contactSVG}></img><span>Contact</span></a>
    </div>
    )
  }

function toggleSidebar(bool : boolean) {
  if (bool) {
      document.getElementById("sidebar")!.style.width = "12rem";
      document.getElementById("App")!.style.marginLeft = "12rem";
  } else {
      document.getElementById("sidebar")!.style.width = "3.6rem";
      document.getElementById("App")!.style.marginLeft = "3.6rem";
  }
}