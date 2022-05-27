import logo from '../../assets/img/logo.png'
function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-brand">
                <a href=""><img className="logo" src={logo} alt="logo"/></a>
            </div>
            <div>
                <ul className='nav-items'>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Project</li>
                    <li className='nav-link'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar