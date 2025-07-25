import React from 'react'

const FoodCard = ({data}) => {
    let {name , cuisine, image, rating, difficulty} = data
  return (
    <div>
      <div className="card bg-slate-800 w-72 m-6 text-white cursor-pointer rounded-md">
  <figure>
    <img
    className='w-52'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Cuisine: {cuisine}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FoodCard