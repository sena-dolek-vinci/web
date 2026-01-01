//Veuillez créer un composant React qui permette à 
//l'utilisateur de changer la couleur de fond d'une boîte 
//en cliquant sur un bouton.

import { useState } from "react";
import './ColorBox.css';


const colors = ["red","green", "blue","yellow", "purple"];

const ColorBox = () => {
    const [currentColorIndex , setCurrentColorIndex] = useState(0);

    return (
        <div
        className="color-box"
        style={{backgroundColor: colors[currentColorIndex]}}
        >
            <button className="color-box__button"
               onClick= {()=>{
                setCurrentColorIndex((currentColorIndex + 1)% colors.length);
               }}
               >
                {colors[(currentColorIndex+1)%colors.length]}
               </button>
               <h3>{colors[currentColorIndex]}</h3>
        </div>
    )
}
export default ColorBox;





