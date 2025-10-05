import { Router } from "express";
import { Film, NewFilm } from "../types";


const router = Router();


const defaultFilms: Film[] = [
    {
        id: 1,
        title: "Shang-Chi and the Legend of the Ten Rings",
        director: "Destin Daniel Cretton",
        duration: 132,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
        description:
          "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
        budget: 150,
      },
      {
        id: 2,
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        duration: 136,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        description:
          "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        budget: 63,
      },
      {
        id: 3,
        title: "Summer Wars",
        director: "Mamoru Hosoda",
        duration: 114,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
        description:
          "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
        budget: 18.7,
      },
      {
        id: 4,
        title: "The Meyerowitz Stories",
        director: "Noah Baumbach",
        duration: 112,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
        description:
          "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
      },
      {
        id: 5,
        title: "her",
        director: "Spike Jonze",
        duration: 126,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
        description:
          "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        budget: 23,
      },
];

// read all films , filtered by minimum-duration if the query param exits : 
router.get("/" , (req, res)=>{
  if(req.query["minimum-duration"]===undefined){ // si pas de filtre on rnevoi all films
    return res.send(defaultFilms);
  }
  // sinon on stocke le filtre 
  const minDuration = Number(req.query["minimum-duration"]);
  // on verifie si c'est un nombre valable : 
  if(isNaN(minDuration) || minDuration<=0){
    res.sendStatus(400);
  }
  const filteredFilms = defaultFilms.filter((film) => film.duration >= minDuration);

    return res.send(filteredFilms)
});

// Read a film by id : 
router.get("/:id" , (req , res) => {
  const id  = Number(req.params.id);
  if(isNaN(id) ) return res.sendStatus(400);
  const film = defaultFilms.find((film) => film.id===id);
  if(film===undefined) return res.sendStatus(404);
  return res.json(film);
})


// Create a new films : 
router.post("/" , (req , res) => {
  const body : unknown = req.body; 
  // au depart on ne sait pas le tyde de body donc pour cela on donne unknown
  
  // verification : 
  if (
    !body ||
    typeof body !=="object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) || 
    typeof body.title !== "string" ||
    typeof body.director !== "string" || 
    typeof body.duration !== "number"||
    !body.title.trim() || 
    !body.director.trim() || 
    body.duration <=0 || 
    ("budget" in body && (typeof body.budget !== "number" || body.budget <=0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  const newFilm = body as NewFilm ; 
  const nextId = defaultFilms.reduce((acc , film ) => (film.id > acc ? film.id : acc) , 0 )+1 ; 
  const addedFilm: Film = { id : nextId , ...newFilm}; 
  defaultFilms.push(addedFilm);
  return res.json(addedFilm);
});


// delete a film by id : 
router.delete("/:id" , (req , res ) => {
  const id = Number(req.params.id); // recovery of the id = recuperation de l'id 
  if(isNaN(id)) return res.sendStatus(400); // bad id 
  const index = defaultFilms.findIndex((film) => film.id === id); // recovery index of film 
  if(index=== -1) return res.sendStatus(404); // film not found 
  const deletedFilm = defaultFilms[index]; // recovery of the film to delete to return 
  defaultFilms.splice(index , 1) // remove 
  return res.send(deletedFilm);
});

// update on or multiple props pf a film : 
router.patch("/:id" , (req , res) =>{
  const id = Number(req.params.id); // recovery of the id 
  if(isNaN(id)) return res.sendStatus(400); // bad id 
  const filmToUpdate = defaultFilms.find((film) => film.id ===id); // recovery of the film to update 
  if(filmToUpdate===undefined) return res.sendStatus(404); // film not found 
  
  const body : unknown = req.body; // recovery of the body 
  
  if (
    !body ||
    typeof body !== "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400); // bad request 
  }
  const updatedFilm = { ...filmToUpdate , ...body};
  /*  ... sert à copier les propriétés d’un objet dans un autre.
      Et quand tu enchaînes plusieurs ..., ça fait une fusion d’objets.
   *  { ...filmToUpdate } 
      {
         id: 1,
         title: "Inception",
         director: "Christopher Nolan",
         duration: 120
      } ca copie toutes les proprietes du film existant 
   *  { ...body } : copie ce que l'user a envoyé 
      {
         "duration": 150
      }
      { ...filmToUpdate, ...body } → fusion 
       On commence par mettre toutes les propriétés de filmToUpdate,
       puis on ajoute celles de body → ce qui a le même nom est écrasé.
   */
  defaultFilms[defaultFilms.indexOf(filmToUpdate)] = updatedFilm;
  /*
    defaultFilms.indexOf(filmToUpdate) -> trouve la position du film modifie 
    defaultFilms[...] = updatedFilm -> remplace le film a cette position par le film modifie
  */ 
  return res.send(updatedFilm);
})

// Update a film only if all properties are given or create 
// it if it does not exist and the id is not existant
router.put("/:id" , (req , res) =>{
  const body: unknown = req.body; // 
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400); // bad request 
  }
  const id = Number(req.params.id) ; 
  if(isNaN(id)) return res.sendStatus(400); // bad id 
  const indexOfFilmToUpdate = defaultFilms.findIndex((film)=> film.id===id); // chercher le film 
  if(indexOfFilmToUpdate<0){ // si le film a modifier n'existe pas alors on le cree 
    const newFilm = body as NewFilm ; 
    //On prend le contenu du body (validé juste avant) et on dit à TypeScript :
     // “C’est un objet de type NewFilm (donc sans id)”
    const nextId = defaultFilms.reduce((acc, film) => (film.id > acc ? film.id : acc), 0 ) +1;
//reduce parcourt tous les films pour trouver le plus grand id existant, puis on ajoute 1.

    const addedFilm = { id: nextId , ...newFilm};// fusion l'id qu'on vient de generer et 
    // les proprietes envoye par le client 
    defaultFilms.push(addedFilm);
    return res.json(addedFilm);
  }
  // update the film : 
  const uptadedFilm = {...defaultFilms[indexOfFilmToUpdate] , ...body} as Film; 
  defaultFilms[indexOfFilmToUpdate] = uptadedFilm;
  return res.send(uptadedFilm);
})




export default router;