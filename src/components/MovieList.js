import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import rightIcon from '../caret-right.svg'
import leftIcon from '../caret-left.svg'

const MovieList = (props) => {
  const {title,movies}=props;
  console.log("movieList",movies)
  const ref=useRef();
  const scrollLeft=()=>{
    ref.current.scrollLeft +=60;

  }
  const scrollRight=()=>{
    ref.current.scrollLeft -=60;

  }
  return (
    
    <div className=' font-bold'>
      <div className='text-xl mb-2'>{title}</div>
      <div>
      <button className='bg-transparent relative top-44 w-16 float-left' onClick={()=>{scrollRight()}}><img src={leftIcon}/></button>
      
      <button className='bg-transparent relative top-44 w-16 float-right' onClick={()=>{scrollLeft()}}><img src={rightIcon}/></button>
      
        </div> 
      <div className='flex overflow-hidden' ref={ref}>
      { movies?.results?.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
      </div>
      
      
    </div>
  )
}

export default MovieList
