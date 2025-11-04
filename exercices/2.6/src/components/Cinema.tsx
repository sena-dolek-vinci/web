import type { Movie } from "../types";
import MovieItem from "./MovieItem";


interface CinemaProps {
    name : string; 
    movies: Movie[]; 
    
  }
  const Cinema = (props: CinemaProps) => ( // et affichera  
    // nom di cinema 
    // cree une liste des films
    // chaque ligne a un film avec son realisateur a cote 
    // ex : UGC DeBrouckère
      // • Film 1 – DeBrouckère – Réalisateur : Director A
      // • Film 2 – DeBrouckère – Réalisateur : Director B
    <div> 
      <h2>{props.name}</h2>
      <ul>
          {props.movies.map((movie ) => (
           <MovieItem key={movie.title} movie={movie}/>
          ))}
      </ul>
    </div>
  );

  export default Cinema; 
   