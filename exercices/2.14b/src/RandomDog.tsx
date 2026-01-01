import { useEffect , useState } from "react";

interface Dog {
    message: string;
    status: string;
}


// composant ce qui s'affiche à l'ecran 
const RandomDog = () => {
    // creation d'une memoire : dog : image du chien actuelle , setDog : pour changer l'image 
    const [dog , setDog] = useState<Dog |  undefined>(undefined);
    const [isHovered , setIsHovered] = useState(false);// isHIvered : sert a arreter 
    // le rafraichissement qd la souris est dessus 
    //false au debut = pas survole 

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
*/    /*const fectDogImage = () => {
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
    };*/
    // fonction qui chercher une image depuis l'API 
    const fetchDogImage = async () => {
        try {
            const response = await fetch( "https://dog.ceo/api/breeds/image/random");
            //on attend la reponse de l'api , await bloque juste cette fonction , pas tout le programme 
            const doggy = await response.json(); 
            //on attt la conversion en json
            setDog({ /// mise a jour du dog 
                message: doggy.message ?? "No dog found",
                status: doggy.status ?? "Error",
            });
            // cas d'erreur 
        } catch (err) {
            console.error("Failed to fetch dog image", err);
            setDog({ message: "Failed to fetch dog image", status: "Error" })
        }
    }

    // lancer le fetch au chargement 
    useEffect(() => {
        //fectDogImage();
        fetchDogImage();

        // creation d'une intervalle pour rafraichir l'image toutes les 5 sec
        const intervalId = setInterval(()=> {
            // verifier si la souris est dessus 
            // si souris dessus isHovered==true
            // on suspend le changement automatique
            // image ne bouge pas pdt que tu regarde
            // si souirs oas desuss isHovered==false
            // on recharger une nouvelle image de chien  
            if(!isHovered) {

                fetchDogImage();
            }
        }, 5000);
        return () => clearInterval(intervalId); // Quand le composant est retiré de la page →
// on supprime l'intervalle (eviter les fuites de memoire ) 
    } , [isHovered]); //useEffect se relance qd isHovered change (true fals)
    // pq ? pour que l'arrete / redemarrage du refresh soit synchronise avec le hover  
    if(!dog) {
        return <p>Loading... </p>;
    }


    return (
        <div>
            <h3>Random dog</h3>
            <img src={dog.message} alt="Random dog" style={{maxHeight: 300}} 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    )
    // onMouseEnter || onMouseLeave : ce sont des evenements react qui detecte 
    // qd la souris entre dans un element 
}

export default RandomDog;