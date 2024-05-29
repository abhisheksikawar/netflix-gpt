import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
