import React from 'react'

const MovieCard = ({movie}) => {

  console.log("movie card ",movie);

  return (
    <div className=''>
      <div className='w-52 pr-3'>
        <img className='rounded-md' src={"https://image.tmdb.org/t/p/w500"+ movie?.poster_path}></img>
      </div>
        
      
    </div>
  )
}

export default MovieCard
