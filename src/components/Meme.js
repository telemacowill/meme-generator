import React from "react";
import memesData from "./memesData"; 
import "./meme.css";


export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Texto Cabeçalho"/>
                <input className="form--input" type="text" placeholder="Texto Rodapé"/>
                <button className="form--button">Gerar Novo Meme</button>               
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
        
    );
} 