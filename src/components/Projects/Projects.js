import Card from '../card/Card'
import MovieImg from '../../assets/img/movie1.png'
import QuizImg from '../../assets/img/quiz.png'

export const projectDetails = [
    {
        id: 1,
        title: 'Movie WatchList App',
        img: MovieImg,
        content: 'Find the latest trending movies and add it to wishlist to binge watch on your weekend.'
    },
    {
         id: 2,
         title: 'Quizzical App',
         img: QuizImg,
         content: 'Fun Quizzical app to flex your brain with various category and get instant results.'
     },
]


function Projects() {
    return (
        <div className='projects' id="projects">
            <h3 className="title-text">Projects</h3>
             <span className='line'></span>
            <div className="projects-container">
                {
                    projectDetails.map((item) => (
                        <Card key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects