import PageTitle from "../PageTitle";
import { useOutletContext } from "react-router-dom";
import { type MovieContext } from "../../types";
import  MovieTitleList from "../MovieTitleList";





const HomePage = () => {
    const { movies } : MovieContext= useOutletContext();
    return (
        <div>
            <PageTitle title = "myMovies" />
            <p>Welcome to myMovies , a site where you can find info about cinemas, movie...</p>

            <h4>My favorites movies</h4>
            <MovieTitleList movies={movies} />
        </div>
    );
};

export default HomePage;