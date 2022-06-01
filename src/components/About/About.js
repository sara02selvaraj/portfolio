import ProfileImg from '../../assets/img/profilephoto.jpg'

function About() {
    return (
        <div className='about' id="about">
            <h3 className="title-text">About Me</h3>
             <span className='line'></span>
            <div className="container">
                <img className="about-img" src={ProfileImg} alt="profilepic"/>
                <div className='col-2'>
                    <p className='about-intro'>I am <span className='text-accent'>Uma Selvaraj</span></p>
                    <p className='about-subtitle'>Web Developer</p>
                    <p className='about-content'>Front-End Web Developer passionate about creating interactive applications and experiences on the web.
                    Strong professional with a positive attitude willing to be an asset for an organization.</p>

                </div>
            </div>
        </div>
    )
}
export default About