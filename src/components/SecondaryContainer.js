import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)

  if(!movies) return;
  return (
    <div className=' bg-black text-white relative top-[700px]'>
      <div className=''>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Popular Movies" movies={movies.popularMovies}/>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Popular Movies" movies={movies.popularMovies}/>
      </div>
      
      
    </div>
  )
}

export default SecondaryContainer
