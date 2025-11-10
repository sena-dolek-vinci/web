import { type Movie } from "../types";
import MovieCard from "./MovieCard";
//import "./MovieListView.css";
import { Box } from "@mui/material";


interface MovieListViewProps {
    movies: Movie[];
}

const MovieListView = ( { movies }: MovieListViewProps) => {
    return (
        <Box
        display="flex"
        sx={{flexDirection:"row" , flexWrap: "wrap" , gap: "1rem"}}
        >
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </Box>
        /*<div>
            <ul className="movie-list-view">
                {movies.map((movie) => (
                    <MovieCard key={movie.title} movie={movie}/>
                ))}
            </ul>
        </div>*/
    );
};

export default MovieListView;