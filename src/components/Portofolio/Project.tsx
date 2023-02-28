import React, { Component, useState } from "react";
import line from '../../assets/line.svg'

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
        <div id="Project">
            <hr/><h3>Mes Projets</h3>  <br/>
        <button onClick={handleUniv}>Universitaire</button>
        <button onClick={handlePerso}>Personnel</button>
        {Univ && (
            <table>
                <tr>
                    <td>Betterfood</td>
                    <td>DataViz</td>
                </tr>
                <tr>
                    <td>EDP</td>
                    <td>Graphe</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>Web</td>
                </tr>
            </table>
        )}
        {Perso && (
            <table>
                <tr>
                    <td>Portfolio</td>
                    <td>Advent of code</td>
                </tr>
                    <td>Python</td>
            </table>
        )}
        </div>
    )
}

