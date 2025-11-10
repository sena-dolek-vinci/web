import { type Movie } from "../types";
//import "./MovieCard.css";
import { 
  Box , 
  Card , 
  CardContent , 
  CardHeader , 
  CardMedia , 
  Typography
 } from "@mui/material";



interface MovieCardProps {
    movie: Movie
}
/// card = contenu principal , variant="outlined" : un style avec bordure 
// cardHeader : affiche un titre 
/*
{movie.imageUrl && (
        <CardMedia
          component="img"
          sx={{ width: 150, marginLeft: "1rem" }}
          image={movie.imageUrl}
          alt={movie.title}
        />
      )}
        on affiche l'image du film uniquement si elle xiste 
*/ 
// CardContent : contient tout le texte descriptig de la carte 
// chaque box regroupe une ligne d'info 
/*
{movie.budget && (
  <Box>
    <Typography variant="h6" display="inline">Budget :</Typography>
    <Typography display="inline" sx={{ fontStyle: "italic" }}>
      {` ${movie.budget} millions de dollars`}
    </Typography>
  </Box>
)}
  affiche ce bloc uniquement si movie.budget existe */ 

const MovieCard = ({movie}: MovieCardProps)=> {
    return (
      <Card variant="outlined" sx={{ width: "18rem" }}>
      <CardHeader title={movie.title}></CardHeader>
      {movie.imageUrl && (
        <CardMedia
          component="img"
          sx={{ width: 150, marginLeft: "1rem" }}
          image={movie.imageUrl}
          alt={movie.title}
        />
      )}
      <CardContent>

        <Box>
          <Typography variant="h6" display="inline">
            Réalisateur :
          </Typography>
          <Typography
            display="inline"
            sx={{
              fontWeight: "light",
              fontStyle: "italic",
              color: "text.secondary",
            }}
          >
            {` ${movie.director}`}
          </Typography>
        </Box>


        <Box>
          <Typography variant="h6" display="inline">
            Durée :
          </Typography>
          <Typography
            display="inline"
            sx={{
              fontWeight: "light",
              fontStyle: "italic",
              color: "text.secondary",
            }}
          >
            {` ${movie.duration} minutes`}
          </Typography>
        </Box>
        {movie.budget && (


          <Box>
            <Typography variant="h6" display="inline">
              Budget :
            </Typography>
            <Typography
              display="inline"
              sx={{
                fontWeight: "light",
                fontStyle: "italic",
                color: "text.secondary",
              }}
            >
              {` ${movie.budget} millions de dollars`}
            </Typography>
          </Box>
        )}
        {movie.description && (


          <Box>
            <Typography variant="h6" display="inline">
              Description :
            </Typography>
            <Typography
              display="inline"
              sx={{
                fontWeight: "light",
                fontStyle: "italic",
                color: "text.secondary",
              }}
            >
              {` ${movie.description}`}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>


     
        /*<div className="card">
         
          <div className="card-body">
            <h3 className="card-title">{movie.title}</h3>
            {movie.imageUrl && (
            <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
          )}
            <p className="card-text">
              <strong>Réalisateur :</strong> {movie.director}
            </p>
            <p className="card-text">
              <strong>Durée :</strong> {movie.duration} minutes
            </p>
            {movie.budget && (
              <p className="card-text">
                <strong>Budget :</strong> {movie.budget} millions de dollars
              </p>
            )}
            {movie.description && (
              <p className="card-text">
                <strong>Description :</strong> {movie.description}
              </p>
            )}
          </div>
        </div>*/
      );
};
export default MovieCard ; 