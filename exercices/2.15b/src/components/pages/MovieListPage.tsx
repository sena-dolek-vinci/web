import { useState } from "react";
import AddMovieForm from "../AddMovieForm";
import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { type Movie, type MovieContext } from "../../types";
import e from "express";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
   const { movies , onMovieDeleted }: MovieContext = useOutletContext();

      /* const [movies , setMovies] = useState(defaultMovies);

        const onMovieAdded = ( newMovie: Movie ) => {
            console.log("Movie added:", newMovie);
            setMovies([ ...movies , newMovie ]);
        };
*/
        return (
            <div>
                <PageTitle title="My favorite movies" />
                <MovieListView movies={movies} onMovieDeleted={onMovieDeleted} />
                
                <br />
                <br />
                <br />
                <br />
            </div>
        );
};
export default MovieListPage;