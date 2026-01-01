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
    res.json("Wrong minimum duration");
  }
  const filteredFilms = defaultFilms.filter((film) => film.duration >= minDuration);

    return res.json(filteredFilms)
});

// Read a film by id : 
router.get("/:id" , (req , res) => {
  const id  = Number(req.params.id);
  if(isNaN(id) ) return res.json("Wrong id");
  const film = defaultFilms.find((film) => film.id===id);
  if(film===undefined) return res.json("Film not found");
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
    return res.json("Wrong body format");
  }
  const newFilm = body as NewFilm ; 
  const nextId = defaultFilms.reduce((acc , film ) => (film.id > acc ? film.id : acc) , 0 )+1 ; 
  const addedFilm: Film = { id : nextId , ...newFilm}; 
  defaultFilms.push(addedFilm);
  return res.json(addedFilm);
});









export default router;