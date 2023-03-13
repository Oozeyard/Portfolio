import React from "react";
import Reacticon from "../../assets/react.svg"
import Viteicon from "../../assets/vite.svg"
import TSicon from "../../assets/ts.svg"

export default function Contact() {
    return(
        <div id="skill">
            <hr/> <br/>
            <h2>Je Maîtrise</h2>
            <br/>
            Le Site a été crée avec : <br/>
            <a href="https://fr.reactjs.org">
            <img src={Reacticon}></img>
            </a>
            <a href="https://vitejs.dev/">
            <img src={Viteicon}></img>
            </a>
            <a href="https://www.typescriptlang.org/">
            <img src={TSicon}></img>
            </a>
            <br/>
            React Vite Typescript
            <hr/>
        </div>
    )
}