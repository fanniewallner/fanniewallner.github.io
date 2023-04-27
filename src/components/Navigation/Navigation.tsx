import React from "react";
import "./Navigation.scss";
import { FaHome,  } from "react-icons/fa";
import { FiUser, FiMail } from "react-icons/fi";
import { IoMdCodeWorking } from "react-icons/io";
import {Routes, Route, Link} from "react-router-dom"
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

function Navigation() {
  return (
    <>
    <nav className="desktop-menu">
        <span className="menu-item-text"><Link to="/LandingPage">{<FaHome/>}</Link></span>
        <span className="menu-item-text"><Link to="/LandingPage">{<FiUser/>}</Link></span>
        <span className="menu-item-text"><Link to="/LandingPage">{<IoMdCodeWorking/>}</Link></span>
        <span className="menu-item-text"><Link to="/LandingPage">{<FiMail/>}</Link></span>
    </nav>

<Routes>
    <Route path="/home" element={<LandingPage/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
        
</Routes>

    </>
  );
}

export default Navigation;




/*
function Navigation () {


    //const [isNavExpanded, setIsNavExpanded] = useState(false)


   return (
    <nav className="desktop-menu">
    <a href="#home" className="menu-item item1">
      <span className="menu-item-text">Home</span>
    </a>
    <a href="#about" className="menu-item item2">
      <span className="menu-item-text">About</span>
    </a>
    <a href="#services" className="menu-item item3">
      <span className="menu-item-text">Portfolio</span>
    </a>
    <a href="#contact" className="menu-item item4">
      <span className="menu-item-text">Contact</span>
    </a>
  </nav>
 )}

export default Navigation;
*/
