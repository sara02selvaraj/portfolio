import Navbar from './Navbar';
import {FaFacebookF,FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'

function Header() {
    return (
        <header>
            <Navbar/>
           <div className='header-text'>
                <p>Hi I'm Uma</p>
                <div className='typewriter-text'>
                    <ReactTypingEffect
                        className="typewriter-text-1"
                        text={[
                        "FrontEnd Developer",
                        "Enthusiastic Dev",
                        "React Developer"
                        ]}
                        speed={100}
                        eraseSpeed={100}
                        typingDelay={600}
                        eraseDelay={600}
                    />
                </div>
                <diV className="icons">
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaLinkedinIn/>
                    <FaTwitter/>
                </diV>
            </div>
        </header>
    )
}

export default Header