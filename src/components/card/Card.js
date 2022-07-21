
function Card({item}) {
    console.log('item', item)
  return (
    <>
    <div className="card">
        <div className="card-header">
          <img className="card-img" src={item.img} alt="project-image" />
        </div>
        <div className="card-body">
          <p className="card-title">{item.title}</p>
          <p>
            {item.content}
          </p>
        </div>
        <div className="card-footer">
          <button className='btn-secondary'><a href={item.demoLink} target="blank">Demo</a></button>
          <button className='btn-secondary'><a href={item.codeLink} target="blank">Github</a></button>
        </div>
      </div>
      {/* <div className="card">
        <div className="card-header">
          <img className="card-img" src={MovieImg} alt="project-image" />
        </div>
        <div className="card-body">
          <p className="card-title">Movie WatchList App</p>
          <p>
            Find the latest trending movies and add it to wishlist to binge watch on your weekend.
          </p>
        </div>
        <div className="card-footer">
          <button className='btn-secondary'><a href="#">Demo</a></button>
          <button className='btn-secondary'><a href="#">Github</a></button>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img className="card-img" src={QuizImg} alt="project-image" />
        </div>
        <div className="card-body">
          <p className="card-title">Quizzical App</p>
          <p>
            Fun Quizzical app to flex your brain with various category and get instant results.
          </p>
        </div>
        <div className="card-footer">
          <button className='btn-secondary'><a href="#">Demo</a></button>
          <button className='btn-secondary'><a href="#">Github</a></button>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        aut hic odit, reprehenderit modi nobis sit architecto voluptatibus
        impedit quod itaque, obcaecati veritatis blanditiis explicabo labore qui
        neque fuga ab?
      </div> */}
    </>
  );
}

export default Card