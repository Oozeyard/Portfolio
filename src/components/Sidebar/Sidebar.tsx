import React from "react";
import { Show } from '../../App'
import './Sidebar.css'
import contactSVG from '../../assets/contact.svg'
import presentationSVG from '../../assets/presentation.svg'
import projectSVG from '../../assets/project.svg'
import skillSVG from '../../assets/skill.svg'

export default function Header() {
    return (
      <div id="Sidebar" onMouseEnter={() => toggleSidebar(true)} onMouseLeave={() => toggleSidebar(false)}>
      <a href="#presentation"><img src={presentationSVG}></img>Présentation</a><br/>
      <a href="#project"><img src={projectSVG}></img>Projets</a><br/>
      <a href="#skill"><img src={skillSVG}></img>Compétences</a><br/>
      <a href="#contact"><img src={contactSVG}></img>Contact</a>
    </div>
    )
  }

function toggleSidebar(bool : boolean) {
  if (bool) {
      console.log("opening sidebar");
      document.getElementById("Sidebar")!.style.width = "250px";
      document.getElementById("App")!.style.marginLeft = "250px";
  } else {
      console.log("closing sidebar");
      document.getElementById("Sidebar")!.style.width = "85px";
      document.getElementById("App")!.style.marginLeft = "85px";
  }
}