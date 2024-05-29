
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const movies=useSelector(store=>store.movies.nowPlayingMovies);
  console.log("main continer",movies);


    if(!movies) return;
  
  return (
    <div className='relative'>
        <VideoBackground movieId={movies?.results[2]?.id}/>
        <VideoTitle movieInfo={movies?.results[2]}/>
      
    </div>
  )
}

export default MainContainer
