import React from "react";

export default function Contact() {
    return(
        <div id='contact'>
            <h3>Contact</h3>
            <button onClick={() => {window.open("https://github.com/Oozeyard","_blank");}}>Github</button>
            <button onClick={() => (window as Window).location = "mailto:mcanhoto@protonmail.com"}>Mail</button>
      </div>
    )
}