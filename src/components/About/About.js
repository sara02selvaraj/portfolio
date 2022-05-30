import ProfileImg from '../../assets/img/profilephoto.jpg'

function About() {
    return (
        <div>
            <div>
                <h3 className="title--text">About Me</h3>
            </div>
            <div className="about--container">
                <div><img className="about--img" src={ProfileImg} alt="profilepic"/></div>
                <div></div>
            </div>
        </div>
    )
}
export default About