import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

const Header = () => {
  return (
    
    
      <nav style={{ display: "flex", justifyContent:"space-around",alignItems:"center",background:"black",color:"white", height:"4rem"}}>
        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" alt=""  height="40rem" />
        <NavLink to="/" className="navlinks">Home</NavLink>
        <NavLink to="/about" className="navlinks" >About</NavLink>
        <NavLink to="/userinfo" className="navlinks">User Info</NavLink>
        <NavLink></NavLink>
      </nav>

  );
};

export default Header;
