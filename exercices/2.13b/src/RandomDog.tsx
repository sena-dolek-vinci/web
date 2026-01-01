import { useEffect , useState } from "react";

interface Dog {
    message: string;
    status: string;
}


const RandomDog = () => {
    const [dog , setDog] = useState<Dog |  undefined>(undefined);

// pourquoi separer le fetch du useEfect?
/*On sépare la logique du fetch dans une fonction principalement parce qu’on va l’appeler à deux moments différents :
📍 1️⃣ Au chargement du composant (dans useEffect)
→ pour afficher la première image automatiquement
📍 2️⃣ Quand l’utilisateur clique sur un bouton
→ pour recharger une nouvelle image
Sans séparer :
Tu aurais le fetch seulement dans useEffect, donc tu ne pourrais pas refaire la requête sans copier-coller tout le code.
useEffect(() => {
  fetch(...)
}, []);
Comment tu le fais depuis un bouton ?
→ Tu serais obligée de refaire la requête dans le onClick → duplication → mauvais code.
Avec la fonction séparée :
tu peux l'utilsier dans le useEffect et dans un bouton 
    // fonction qui va chercher l'image 
*/    const fectDogImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json();
        })
        .then((data)=> {
            setDog({
                message: data.message ?? "No dog found",
                status: data.status ?? "Error",
            });
        });
    };

    // lancer le fetch au chargement 
    useEffect(() => {
        fectDogImage();
    } , []);
    if(!dog) {
        return <p>Loading... </p>;
    }


    return (
        <div>
            <h3>Random dog</h3>
            <img src={dog.message} alt="Random dog" style={{maxHeight: 300}} />
        </div>
    )
}

export default RandomDog;