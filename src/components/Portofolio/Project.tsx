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
            <hr/><h2>Mes Projets</h2>  <br/>
        <div id="pblock">
        <button onClick={handleUniv}>Universitaire</button>
        <button onClick={handlePerso}>Personnel</button>
        <div id="container">
        {Univ &&  (
        <div className="Project"> 
            <div className="grid"><h3>BetterFood</h3><br/>BetterFood est un projet développé en TypeScript (Front-end) et en Java (Back-end). C'est une application web qui permet à un utilisateur d’obtenir des informations sur un produit alimentaire.
            Pour communiquer le produit, l’utilisateur peut saisir le numéro du code barre du produit, sélectionner une photo d’un code barre ou alors se servir de la webcam de son ordinateur pour montrer le code.
            Ensuite, la page web affiche les informations correspondantes au produit (marque, nutriments …) depuis le site OpenFoodFact, ou alors en cas d'échec, un message d’erreur est affiché. <br/><button onClick={() => {window.open("https://github.com/joniboy74prog/projet","_blank");}}>Github</button></div>
            <div className="grid"><h3>DataViz</h3><br/>DataViz est une étude de l'évolution du prix du carburant en france de 1992 à 2022. Développé en Python, nous montrons a l'aide d'un graphique et de fonction mathématiques, les changements de prix et les raisons possibles. <br/><button onClick={() => {window.open("https://github.com/WhiLe4ent/DataViz","_blank");}}>Github</button></div>
            <div className="grid">EDP</div>
            <div className="grid">Graphe</div>
            <div className="grid">e-commerce</div>
            <div className="grid">Web</div>
        </div>
        )}
        {Perso && 
        <div className="Project">
            <div className="grid">Advent of code</div>
            <div className="grid">Serveur Jeu</div>
            <div className="grid">BH</div>
            <div className="grid">Tuteur</div>
        </div>
        }
        </div>
        </div>
        </div>
    )
}

