import * as React from "react"
import NavButton from "./NavButton";
import './NavBar.css';

export function NavBar(){
    const homePage = "Home Page";
    const contact = "Contact";
    return(
    <div className="container">
        <div className="flex-child">test1</div>
        <div className="flex-child">test2</div>
        <NavButton buttonName = {homePage} className="flex-child"/>
        <NavButton buttonName = {contact} className="flex-child"/>
    </div>
    )
}

export default NavBar;