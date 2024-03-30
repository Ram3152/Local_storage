import React from "react";
import { NavLink } from "react-router-dom";

const Header=()=>{
    return(<> 
   <div className="header">
   <NavLink to={'/'}>Input</NavLink>
    <NavLink to={'/display'}>Display</NavLink>
   </div>
    </>);
}
export default Header;