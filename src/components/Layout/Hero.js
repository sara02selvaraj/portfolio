import {FaFacebookF, FaGithub, FaLinkedinIn,FaTwitter} from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'
import {Link} from 'react-scroll'

function Hero() {
   return(
       <div className='hero' id="hero">
           <div className='content'>
           <h3 className='hero-title'>Hi I'm <span className='text-accent'>Uma</span></h3>
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
                    <ul>
                        <li className="nav-item"><a href=""><FaFacebookF/></a></li>
                        <li className="nav-item"><a href="https://github.com/sara02selvaraj"><FaGithub/></a></li>
                        <li className="nav-item"><a href="https://www.linkedin.com/in/uma-saranya-58709363"><FaLinkedinIn/></a></li>
                        <li className="nav-item"><a href=""><FaTwitter/></a></li>
                    </ul>
                </div>
                <div className='hero-options'>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                    <button className='btn'>View Work</button></Link>
                    <a href="Uma Saranya Selvaraj Resume.PDF" download="Uma Saranya Selvaraj Resume.PDF">
                    <button className='btn'>Resume</button>
                    </a>
                </div>
           </div>
       </div>
   )
}

export default Hero