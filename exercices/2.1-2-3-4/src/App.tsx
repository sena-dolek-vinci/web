interface CinemaProps {
  name : string; 
  movie1: Movie; 
  movie2: Movie;
}

interface PageTitleProps {
  titlre: string;
}

interface Movie {
  title: string; 
  director: string;
}

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name =" UGC DeBrouckère";
  const movie1 = {
    title: " HAIKY-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA", 
    director: "Mohamed Kordofani",
  };
  const cinema2Name = "UGC Toison d'Or";
  const movie3 = {
    title: "THE WATCHERS" , 
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE" , 
    director: "Adil El Arbi et Bilall Fallah",
  };

  
/*const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";
*/ 
/* return ( <strong> : balise qui sert a mettre du texte en valeur , en gras 
    <div> : element parent qui contient toute la page 
        <h1> : balise qui met u titre de niveau 1 
      <h1>{pageTitle}</h1>  : on insere la valeur de la variable pageTitle 

      <div> : sous-conteneur pour le cinema 1 
        <h2>{cinema1Name}</h2> : titre de niveau 2 pour le nom du cinema 1 
        <ul> : cad une liste non ordonnée  
          <li> : list item : element de la liste , sert a definir un seul element a l'intérieur 
          d'une liste ( liste a puces)
            <strong>{cinema1Movie1Title}</strong> - Réalisateur :{" "} : titre du film en gras
            puis {" “} : ajoute un espace 
            {cinema1Movie1Director} : nom du realisateur 
          </li>
          <li> 
            <strong>{cinema1Movie2Title}</strong> - Réalisateur :{" "}
            {cinema1Movie2Director}
          </li>
        </ul>
      </div>

      <div>
        <h2>{cinema2Name}</h2> : nom du deuxieme cinema 
        <ul>
          <li> idem pour le cinema 2 
            <strong>{cinema2Movie1Title}</strong> - Réalisateur :{" "}
            {cinema2Movie1Director}
          </li>
          <li>
            <strong>{cinema2Movie2Title}</strong> - Réalisateur :{" "}
            {cinema2Movie2Director}
          </li>
        </ul>
      </div>
    </div>
  );
};
*/ // le code precedent est pas propre car il n'est pas bien structure 
// enfaite tu as exactement la meme structure , juste avec des noms differents 
// et en developpment : repeter le meme code est un probleme car :
// si tu veux changer la mise en page , il faudra modifier deux fois
// si tu veux ajouter un troisieme cinema , tu dois copier-coller encore 
// le code devient long , dur a lire et difficile a maintenir  
// ce qu'on appelle du code dupliqué 
// SOLUTION : reutiliser du code avec des composants 
// react a justement ete invente pour eviter ca 
// tu crees un composant reutilisable ( Cinema ) qui contient une seule fois la structure html d'un cinema
// ensuite , tu l'appelles plusieurs fois avec des data differentes 


//ce qui faut affiche a l'ecran :  titre et les cinma 
/*return ( 
  <div>
    <PageTitle title={pageTitle}/> 

    <Cinema           
      name={cinema1Name}
      movie1Title={cinema1Movie1Title}
      movie1Director={cinema1Movie1Director}
      movie2Title={cinema1Movie2Title}
      movie2Director={cinema1Movie2Director}
    />
    <Cinema
    name ={cinema1Name}
    movie1Title={cinema2Movie1Title}
    movie1Director={cinema2Movie1Director}
    movie2Title={cinema2Movie2Title}
    movie2Director={cinema2Movie2Director}
    />
  </div>
);
};*/
// composant PageTitle : fonction fleche ( arrow)  
// fonction qui recoit un objet props qui contiznt un seul element : title de type string 
// et renvoi un titre html niveau 1 qui affiche la valeur recue 
return (
  <div>
    <PageTitle title={pageTitle} />

    <Cinema
      name={cinema1Name}
      movie1={movie1}
      movie2={movie2}
    />
    <Cinema
      name={cinema2Name}
      movie1={movie3}
      movie2={movie4}
    />

  </div>  
  );
};
const PageTitle = (props: { title: string}) => {
  return <h1>{props.title}</h1>;
}
// composant(fonction) Cinema : qui recoit plusieurs props : name , movie1title/movie1Director  , movie2title/movie2Director

const Cinema = (props: { 
  name:string;
  movie1: Movie;
  movie2: Movie;
}) => ( // et affichera  
  // nom di cinema 
  // cree une liste des films
  // chaque ligne a un film avec son realisateur a cote 
  // ex : UGC DeBrouckère
    // • Film 1 – DeBrouckère – Réalisateur : Director A
    // • Film 2 – DeBrouckère – Réalisateur : Director B
  <div> 
    <h2>{props.name}</h2>
    <ul>
      <li>
        <strong>{props.movie1.title}</strong> - Réalisateur : {" "}
        {props.movie1.director}
      </li>
      <li>
        <strong>{props.movie2.title}</strong> - Réalisateur : {" "}
        {props.movie2.director}
      </li>
    </ul>
  </div>
)
/* react sert a creer des pg web interactives 
mais au lieu d'ecrire tout le html d'un seul bloc --> on decoupe la page en ptt morceaux reutilisables ( = composants )
COMPOSANT = une fonction JS qui retourne du html pour qu'il soit affiché a l'ecran 
en react , chaque partie de l'ecran est un composant (une fonction qui "retourne" du html)
tu peux creer tes propres composants ( comme <PageTitle /> et <Cinema /> )
et les utiliser a l'interieur d'un autre ( comme <App />)
*/ 
/* props = les informations que tu send a un composant pour qu'il affcihe quelque chose de personnalisée 
 */

/** 2.2 : 
 * " qu'un type abtrait Movie soit cree" etc ..
 * "type abstrait" --> veut dire "definit un type en TS"
 * il existe 2 manieres en TS : soit tu utilises "interface" ou "type"
 * on doit cree des types pour decrire les data (films ...)
 * rendre le code plus propre et securise avec ts 
 * tu vas ajouter tes interfaces tout en haut 
 * 
 * / */
export default App;
