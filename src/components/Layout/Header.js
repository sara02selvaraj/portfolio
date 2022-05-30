import Navbar from './Navbar';
import {FaFacebookF,FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'

function Header() {
    return (
        <header>
            <Navbar/>
           <div className='header-text'>
                <h3 className='header--title'>Hi I'm <span className='text-accent'>Uma</span></h3>
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
                <div className="icons">
                    <FaFacebookF/>
                    <FaGithub/>
                    <FaLinkedinIn/>
                    <FaTwitter/>
                </div>
                <div className='header-options'>
                    <button className='btn'>View Work</button>
                    <button className='btn'>Resume</button>
                </div>
            </div>
        </header>
    )
}

export default Header