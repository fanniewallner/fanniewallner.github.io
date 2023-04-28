import './App.scss'
import './index.scss'
import './components/Navigation/Navigation.scss'
import LandingPage from './components/LandingPage/LandingPage'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FiMail, FiUser } from 'react-icons/fi'
import { IoMdCodeWorking } from 'react-icons/io'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'


function App() {


  return (
    <>
    
    
    <nav className="desktop-menu">
      <div className='menu-item'>
      <span className="menu-item-text"><Link to="/LandingPage">{<FaHome/>}</Link></span>
      </div>
      <div className='menu-item'>
        <span className="menu-item-text"><Link to="/About">{<FiUser/>}</Link></span>
        </div>      
        <div className='menu-item'>
        <span className="menu-item-text"><Link to="/Portfolio">{<IoMdCodeWorking/>}</Link></span>
        </div>
        <div className='menu-item'>
        <span className="menu-item-text"><Link to="/Contact">{<FiMail/>}</Link></span>
        </div>
    </nav> 

<Routes>
  <Route path="/" element={<Navigate to="/LandingPage" />} />
  <Route path="/LandingPage" element={<LandingPage/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Portfolio" element={<Portfolio/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>  
</Routes>
    </>
  )
}

export default App
