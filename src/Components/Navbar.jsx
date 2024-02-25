import React, {useState, useEffect, useRef} from 'react';
import "../Styles/Navbar.css";
import menu from "../Assets/Icons/Menu.png";
import logo from "../Assets/Icons/SK_Logo.png";
import { MenuDropdown } from "./MenuDropdown";



export const Navbar = () => {
    const [open, setOpen] = useState(false);
const menuref = useRef();
const hamburgref = useRef();
window.addEventListener("click", (e) =>{
    if (e.target !== menuref.current && e.target !== hamburgref.current){
        setOpen(false);
    }
    // else{
    //     setOpen(false);
    // }
});
   


    return(
        <div className="Navbar-div">
            <img className="logo" src={logo} alt="logo"/>
            <img className="menu" src={menu} alt="Menu" onClick={()=>{setOpen(!open)}} ref={hamburgref}/>


            {
              open && <MenuDropdown ref={menuref}/>
            }

        </div>
    );
}