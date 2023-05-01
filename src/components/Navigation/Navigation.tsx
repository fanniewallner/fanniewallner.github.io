
import "./Navigation.scss";
import { FaHome,  } from "react-icons/fa";
import { FiUser, FiMail } from "react-icons/fi";
import { IoMdCodeWorking } from "react-icons/io";
import { Link} from "react-router-dom"
function Navigation() {
  return (
    <>
    <nav className="desktop-menu">
<span className="menu-item"><Link to="/" className="menu-item-text">{<FaHome/>}</Link></span>

  <span className="menu-item"><Link to="/about" className="menu-item-text">{<FiUser/>}</Link></span>
     

  <span className="menu-item"><Link to="/portfolio" className="menu-item-text">{<IoMdCodeWorking/>}</Link></span>


  <span className="menu-item"><Link to="/contact" className="menu-item-text">{<FiMail/>}</Link></span>

</nav> 
    {/* <nav className="desktop-menu">
            <span className="menu-item-text">
            <Link to="/">{<FaHome/>}</Link>
            </span>
            <span className="menu-item-text">
            <Link to="/about">{<FiUser/>}</Link>
            </span>
            <span className="menu-item-text">
            <Link to="/portfolio">{<IoMdCodeWorking/>}</Link>
            </span>
            <span className="menu-item-text">
            <Link to="/contact">{<FiMail/>}</Link>
            </span> */}
        {/* <span className="menu-item-text"></span>
        <span className="menu-item-text"><Link to="/LandingPage">{<FiUser/>}</Link></span>
        <span className="menu-item-text"><Link to="/LandingPage">{<IoMdCodeWorking/>}</Link></span>
        <span className="menu-item-text"><Link to="/LandingPage">{<FiMail/>}</Link></span> */}


{/* <Routes>
    <Route path="/home" element={<LandingPage/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
        
</Routes> */}

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


