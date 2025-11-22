import { Link } from "react-router-dom";
// Link sert a faire une lien sur lequel je peux 
//cliquer pour changer de page sans recharger le site 
//
import "./Navbar.css";

// creation d'un composant 
const NavBar = () => (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cinema">Cinemas</Link>
        <Link to="/movie-list">My favorite movies</Link>
    </nav>
);
export default NavBar;
