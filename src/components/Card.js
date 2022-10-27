import React from 'react'

const Card = ({ img, name, followers, link }) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="card mb-3 text-center">
            <img className='card-img-top' src={img} alt="Github-Images" />
            <div className="card-body">
              <h5 className='card-title'>{name}</h5>
              <p className="card-text">{followers}</p>
              <button href={link} class="btn btn-primary mb-4">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card


    // <div className='container bg-secondary text-white m-4 p-3 text-center'>
    //   <div className="card">
    //     <div className="card-body">
    //       <img className=' card-img-top' src={img} alt="github_images" />
    //       <h4 className='card-title'>{name}</h4>
    //     </div>
    //   </div>
    //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    // </div>