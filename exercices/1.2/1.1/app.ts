import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmRouter from "./routes/films";
import { requestCounterMiddleware } from "./utils/counter";

const app = express();

// middleware : middleware dit a express : 
//" si une requete contient du JSON , decole-la et mets le resultat dans req.body
// pour que je puisse l'utiliser"
// en effet qd on fait une requete post avec du json : 
/*
POST /films
Content-Type: application/json

{
  "title": "Matrix",
  "director": "Wachowski"
}
  le serveur le recoit le coprs de la requete (req.body) en brut : 
  "{ \"title\": \"Matrix\", \"director\": \"Wachowski\" }"
mais probleme express ne comprend pas !!!!
alors le app.use(express.json()) le transforme en Objet js utilisable dans req.body
et donc ca devient : 
{
  title: "Matrix",
  director: "Wachowski"
}

*/
app.use(express.json());

// middlexare qui sert a lire les dtata envoyees par un formulaire  HTML
app.use(express.urlencoded({ extended: false }));
// ces deux precedents sont des middlewares integere (le 4type dans le site) 
// fournie par Express  

// middleware qui compte le nombre de requete GET faites a votre API : 
/*let requestCount = 0;
app.use((req, _res , next)=>{
  if(req.method==="GET"){ 
    requestCount++;
    console.log(`GET counter : ${requestCount}`);
  }
  next();
})*/

// challenge 1.2 : 
app.use(requestCounterMiddleware);

// routes principales : 
app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films" , filmRouter);


//“rends disponible mon application Express (app) pour que d’autres 
//fichiers (comme server.ts) puissent l’utiliser et démarrer le serveur.”
export default app;
