import {FaFacebookF, FaGithub, FaLinkedinIn,FaTwitter} from 'react-icons/fa'

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <ul>
                    <li className="nav-item"><a href=""><FaFacebookF/></a></li>
                    <li className="nav-item"><a href=""><FaGithub/></a></li>
                    <li className="nav-item"><a href=""><FaLinkedinIn/></a></li>
                    <li className="nav-item"><a href=""><FaTwitter/></a></li>
                </ul>
                <div className='footer-text'>
                    <p>Created by Uma Selvaraj 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Footer