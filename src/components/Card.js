import React from 'react'
import { Link } from 'react-router-dom'

function Card({ img, name }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card m-auto p-3 shadow border-1 text-center">
        <img className='card-img-top' src={img} alt="Github-Images" />
        <div className="card-body">
          <h5 className='card-title mb-3'><strong>{name}</strong></h5>
          <Link to={`/details/${name}`} className="btn btn-block btn-dark mb-4">More Info</Link>
        </div>
      </div>
    </div>
      
  )
}
export default Card