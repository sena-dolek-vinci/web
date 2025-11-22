interface Movie {
    id:number
    title: string;
    director: string; 
    duration: number;
    imageUrl?: string;
    description?: string; 
    budget?: number;
}
interface MovieContext {
    movies: Movie[];
    onMovieAdded: (newMovie: Movie) => void;
}

type NewMovie = Omit<Movie, 'id'>;
// veut dire : Crée un type NewMovie identique à Movie, mais SANS la propriété id.

export type { Movie , MovieContext , NewMovie};