//import "./Header.css";
import { AspectRatio } from "@mui/icons-material";
import { Box  , useTheme } from '@mui/material';

interface HeaderProps {
    urlLogo: string; 
    children: React.ReactNode;
}
 // footer -> Box component = header 
 // header.css -> sx directement dans les balises 
 /* pq le div n'a pas ete remplace par un composant MUI ?
    Parce qu’il ne sert qu’à contenir du texte ou d’autres composants,
    et il n’a pas de style particulier à appliquer.
    Il n’a pas de couleur, pas de padding, pas de bordure, rien.
    Donc il n’est pas nécessaire d’utiliser un composant MUI (Box, Container, etc.) 
   juste pour ça.

 */ 
 
 
const Header = ( props: HeaderProps ) => {
    const theme = useTheme();
    return ( 
        <Box 
        component ="header"
        sx={{
            backgroundColor: theme.palette.primary.dark, 
            color: theme.palette.primary.contrastText,
        }}
        >

            <Box component="img" src={props.urlLogo} alt="logo" sx={{height: 50}} />

            <div>{props.children}</div>
        </Box>

        /*
        <footer className="header">
            <img src={props.urlLogo} alt="logo" className="logo"/>
            <div>{props.children}</div>
        </footer>*/
    );
};
export default Header;