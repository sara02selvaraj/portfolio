import { useState } from 'react'
import {Link} from 'react-scroll'
import logo from '../../assets/img/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(prevStat => !prevStat)
    const closeMenu = () => setClick(false)
    return (
        <div className='header'>
            <nav className='navbar'>
                <Link href="/" className='logo'>
                    <img src={logo} alt="logo"/>
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color: '#fff'}}/>) 
                    : (<FaBars size={30} style={{color: '#fff'}}/>) }
                    
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}
                         className="nav-link" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} 
                        className="nav-link" onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="skills" spy={true} smooth={true} offset={-150} duration={500}
                        className="nav-link" onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}
                         className="nav-link" onClick={closeMenu}>Projects</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar