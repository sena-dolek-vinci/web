import React from "react"; // pour utiliser JSX(<div>)
import ReactDOM from "react-dom/client"; // sert a afficher ton app dans le nav
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
//1 : active le systeme de navigation dans l'app , 2: permet de definir les pages du site 
import HomePage from "./components/pages/HomePage";
import App from "./components/App";
import CinemaPage from "./components/pages/CinemaPage";
import MovieListPage from "./components/pages/MovieListPage";
//import AddMovieForm from "./components/AddMovieForm";
import AddMoviePage from "./components/pages/AddMoviePage";
import MoviePage from "./components/pages/MoviePage";

// createBrowserRouter : fonction qui declare toutes les pages (routes) de ton app
 // on cree une liste de routes : c comme une carte qui dit : " quelle url = quelle page "
const router = createBrowserRouter([
  {
    // route parent : 
    path: "/", // url racine 
    element: <App />, // page parent (layout general)
    children: [ // les routes internes afficher dans outlet 
      // route enfants : 
      { // homme 
        path: "",
        element: <HomePage />,
      },
      { // cinemas 
        path: "cinema",
        element: <CinemaPage />,
      },
      { // Movies
        path: "movie-list",
        element: <MovieListPage />,
      },
      {
        path: "add-movie",
        element: <AddMoviePage />
      },
      {
        path: "movies/:id",
        element: <MoviePage />,
      },

    ],
  }, 
  
]);
// affichage de l'app 
ReactDOM.createRoot(document.getElementById("root")!).render(
  // on dit a react d'afficher l'app dans la balise 
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  //<RouterProvider router={router}/> : active le systeme de navigation  
  //<React.StrictMode> ... </React.StrictMode> : sert a prevenur des erreurs , detecter 
  //des mauvaises pratique et activer des warnings  
 

);