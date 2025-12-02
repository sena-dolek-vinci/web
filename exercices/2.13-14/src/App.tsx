import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

//import { response } from 'express';

// pq creer une interface joke? Quand tu récupères des données d’une API, tu obtiens un objet dont tu ne contrôles pas la structure.
                     //Créer une interface te permet de dire à TypeScript :
                     //"Voici la forme des données que j’attends."
interface Joke {
  joke: string; 
  category: string;
}


const App = () => {
  // useState : sert à créer une variable que React va garder en mémoire et re-render quand elle change.
  //joke: valeur actuelle , setJoke() : fonction pour modifier la valeur
  // useState<Joke | undefined> : du ts , veut dire joke peut etre de deux types 
  // joke qd on a recuperer la blague 
  // undefined au debut avant d'avoir les data 
  // pq car au moment ou la page s'affiche , on n'a pas encore recu la reponse du fetch donc joke est vide 
  // (undefined) : juste l'etat de depart 
  const [joke , setJoke] = useState<Joke | undefined>(undefined);
  //const [count, setCount] = useState(0)


  const fetctJoke = () => {
    //demande a l'api JokeApi : "envoi-moi une blague unique , n'importe quelle categorie"
    // a ce stade , pas encore de données n tu as une promise 
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response)  => { // recuperer la reponse brute
      // response = reponse http ( blague pas lisible )
      return response.json(); // convertit le flux en objet js lisible
    }) // on fait un return pour envoyer ce resultat au porchain then()
    .then((data) => { //utilisation des données
      // data est mtn un objet js 
      setJoke({ // setJoke met a jour l'etat pour react affiche la blague 
        // les ?? servent a gerer les valeurs manquantes(fallback) 
        // si data.joke existe -> on affiche sinon -> "No joke found"
        joke: data.joke ?? "No joke found",
        category: data.category ?? "Unknown",
      });
    });
  }


  // s'execute une fois qd la page est affichée grave au []
  useEffect(() => {
    // si on n'affiche une premier blague (enlever fetctJoke() , la page reste vide)
    fetctJoke(); // charge une premier blague des le debut 
    setInterval(fetctJoke , 10000);// toutes les 10 sec , il recharger automatiquement une nouvelle blague 

    
  } , [] ); //s'execute une seule fois au chargement du composant
  if(!joke) {
    return <p>Loading...</p>;
  }

//<blockquote> : elment html pour citer un texte ou une citation
//cite=... : url vers la source de cette citationx paas afficher sur le cite 
// <cite>: balise html qui afficher le nom ou source d'une oeuvre 

  return (
    <div>
      <h3>Random joke</h3>
      <h4>{joke.category}</h4>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>
              {joke.joke}
            </p>
      </blockquote>
      <p>
      <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </div>
  )
}

export default App
