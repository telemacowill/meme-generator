import React from 'react'
import './header.css'

export default function Header() {
    return (
        <header className="header">
            <img src="./images/troll-face.png" className="header--image"></img>
            <h2 className="header--title"> Gerador de Meme</h2>
            <h4 className="header--subtitle"> React Project </h4>
        </header>
        
    );
}