import {FaHtml5, FaCss3,FaSass, FaBootstrap,FaReact,FaNode,FaGitAlt,FaGithub} from 'react-icons/fa'
import {SiRedux,SiMongodb,SiTailwindcss,SiJavascript} from 'react-icons/si'
function Skills() {
    return (
        <div className="skills" id="skills">
            <h3 className="title-text">Skills</h3>
             <span className='line'></span>
             <div className="skills-container">
                <div><FaHtml5/></div>
                <div><FaCss3/></div>
                <div><FaSass/></div>
                <div><FaBootstrap/></div>
                <div><SiJavascript/></div>
                <div><FaReact/></div>
                <div><SiRedux/></div>
                <div><FaNode/></div>
                <div><SiMongodb/></div>
                <div><SiTailwindcss/></div>
                <div><FaGitAlt/></div>
                <div><FaGithub/></div>
             </div>
        </div>
    )
}

export default Skills