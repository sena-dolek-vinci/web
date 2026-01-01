import "./ClickCounter.css"
import { useState  } from "react";
// useState : fonction qui permete a ton composant de memoriser une donne ( boolean )


// props ( parametre ) que tu composant recevra
interface ClickCounterProps {
    title: string; 
    on10ClickMessage?: string;  // optionnelle 
    onMouseOverMessage?: string; // optionnelle 
}



const ClickCounter = ({
    title , 
    on10ClickMessage = "10 click" , 
    onMouseOverMessage = "Asy clique afou!" ,
}: ClickCounterProps ) => {
    const [count, setCount] = useState(0);
    const [isHovered , setIsHovered] = useState(false); 
    // isHovered = vrai ou fauc selon si la souris est sur le bouton 
    // setIsHivered = fonction pour changer cet etat 

    return ( 
        <div className="card">
            <h4>
                {title}
            </h4>
            {isHovered ? <p>{onMouseOverMessage}</p> : null }
            <button
                onMouseEnter={() => setIsHovered(true)}
                onClick={() => setCount((count) => count+1)} // 3 evenements 
                onMouseLeave={() => setIsHovered(false)}
                >
                count is {count}
            </button>
            {count >= 10 ? <p>{on10ClickMessage}</p> : null }
        </div>
    );
};

export default ClickCounter;