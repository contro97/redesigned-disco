import * as React from "react"
import NavButton from "./NavButton";
import './NavBar.css';

export function NavBar(){
    const homePage = "Home Page";
    const contact = "Contact";
    return(
    <div className='container'>
        <h3>Ciarán Mahon</h3>
        <NavButton buttonName = {homePage}/>
        <NavButton buttonName = {contact}/>
    </div>
    )
}

export default NavBar;