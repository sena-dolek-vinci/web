// ce dossier util est un dossier ou on met du code reutilisnale et n'appartient pas 
// directement au routes ou aux modeles de données
//des outils, des petites fonctions pratiques, des middlewares
// qui ne dépendent pas d’une seule partie du projet


import { RequestHandler } from "express";
// request handler fourni par express = middlewre qui 
// dit que ma fonction est bien un middleware Express

const stats : Record<string , number> = {}; // le meme bail que map cle valeur
//  on cree un objet vide stats ou chaqu ecle est une string et 
//chaque valeur est un number 

const requestCounterMiddleware: RequestHandler = (req , _res , next) =>{
    /* on cree une fonction requetsCounterMiddleware et on mui onne le type RequestHandleer
    ==> garantit que cette fonction est bien un middelware et recoit (req , req, next) 
    */
    const currentOperation = `${req.method} ${req.path}`;
    // on fabrique une chaine de caractere avec la methode http et le chemin demandé 

    const currentOperationCounter = stats[currentOperation];
    // on stocke la valeur de cette methode , donc on recupere le nombre de fois qu'on appele
    // cette methode http 

    if(currentOperationCounter===undefined ) stats[currentOperation] = 0; 
    // si c'est undefined cela veut dire cette methode http n pas encore teait appeler 
    // alors on initialise le count a 0 

    stats[currentOperation] += 1;
    // on incremente le count de 1 
    const statsMessage = `Request counter : \n${Object.keys(stats)
        // le obkect.keys(stats ) recupere tout les keys de l'objet donc toute la phrase 
        // " GET /pizza" 
        .map((operation) => `-${operation} : ${stats[operation]}`)
        // transforle chaque key en une ligne de texte comme 
        // -GET /pizza : 3
        .join("\n")}
        `; //assemble toutes ces lignes avec un retour a la ligne 
    console.log(statsMessage);
    next();
};

export { requestCounterMiddleware };