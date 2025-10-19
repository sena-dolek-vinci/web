import type React from "react";
import "./Header.css";


interface HeaderProps {
    urlLogo: string ;
    children: React.ReactNode ;
}

const Header = (props: HeaderProps) =>{
    return (
        <header className="header">
            <img src={props.urlLogo} alt="logo" className="logo"/>
            <div>{props.children}</div> 
        </header>
    );
};
/* ajout de n'importe quel type de coontenu " pops.children
 * affichager dun log : "img src=...." */
export default Header;