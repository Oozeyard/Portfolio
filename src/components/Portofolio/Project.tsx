import React, { Component, useState } from "react";
import line from '../../assets/line.svg'
import './portofolio.css'

export default function Project() {
    // Booleans
    const [Univ, setUniv] = useState(false);
    const [Perso, setPerso] = useState(false);
    // If the user click on University project => set display of univ to true and perso to false
    const handleUniv = () => {
        if (Perso == true) setPerso(false);
        setUniv(current => !current);

    }
    // same for perso
    const handlePerso = () => {
        if (Univ == true) setUniv(false);
        setPerso(current => !current);
    }

    // show Univ if true and Perso if true
    return (
        <div id="project">
            <hr/><h3>Mes Projets</h3>  <br/>
        <div id="pblock">
        <button onClick={handleUniv}>Universitaire</button>
        <button onClick={handlePerso}>Personnel</button>
        <div id="container">
        {Univ &&  (
        <div className="Project"> 
            <div className="grid">BetterFood</div>
            <div className="grid">DataViz</div>
            <div className="grid">EDP</div>
            <div className="grid">Graphe</div>
            <div className="grid">C</div>
            <div className="grid">Web</div>
        </div>
        )}
        {Perso && 
        <div className="Project">
            <div className="grid">Portofolio</div>
            <div className="grid">Advent of code</div>
            <div className="grid">Lua</div>
            <div className="grid">Python</div>
        </div>
        }
        </div>
        </div>
        </div>
    )
}

