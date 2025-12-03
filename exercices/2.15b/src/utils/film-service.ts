import {type  Movie,  type NewMovie } from "../types";
/** pq creer un fichier fils-services ? Parce qu’on ne veut pas mettre le désordre dans App.tsx.
 * app.tsx -> afficher les films
 * films-services.tsx -> va chercher les films 
 * ce fichier contient 
 * une focntion pour lire tous les filmes
 * une fonction pour ajouter un film 
 */


// retourns une lifte de films 
const fetchMovies = async () : Promise<Movie[]> => {
    try {
        //fetch qui s’occupe d’envoyer la demande pour obtenir les films.
        const response = await fetch("/api/films"); // tu demandes au proxy : va chercher la liste des films
        // dans mon API backend (sur localhost:3000/films)
        // le nav pense que tu reste sur localhost:5173
        if(!response.ok){ // verification si reponse ets ok 
            throw new Error ("Erreur lors de la récupération des films");
        }
        const data = await response.json();
        // data = liste des films (un tableau d'objets) 
        if(!data || !Array.isArray(data)){ // verification si data n'est pas null ou si il ets bien un tableau 
            throw new Error ("Invamid data ");
        }
        return data; 
    } catch (error) {
        console.error(error);
        throw error;
    }
}; 



//tu lui envoies un formulaire, elle te renvoie le film ajouté par l’API.
const addMovie = async ( movie : NewMovie) : Promise<Movie> => { 
    try {
        //
        const response = await fetch("/api/films", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(movie),
        });

        if(!response.ok){
            throw new Error ("Erreur lors de l'ajout du film");
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error (error);
        throw error;
    }
} ;


const deleteMovie = async (movie : Movie) : Promise<void> => {
    try {
        const response = await fetch(`/api/films/${movie.id}`, {
            method: "DELETE",
        });
        if(!response.ok){
            throw new Error ("Erreur lors de la suppression du film");
        }
        
    } catch (error) {
        console.error (error);
        throw error;
    }
}



export { fetchMovies , addMovie , deleteMovie };