import {FaFacebookF, FaGithub, FaLinkedinIn,FaTwitter} from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'

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
                        <li className="nav-item"><a href=""><FaGithub/></a></li>
                        <li className="nav-item"><a href=""><FaLinkedinIn/></a></li>
                        <li className="nav-item"><a href=""><FaTwitter/></a></li>
                    </ul>
                </div>
                <div className='hero-options'>
                    <button className='btn'>View Work</button>
                    <button className='btn'>Resume</button>
                </div>
           </div>
       </div>
   )
}

export default Hero