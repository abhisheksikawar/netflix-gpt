import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/Constants';
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux';

const VideoBackground = (props) => {

    const {movieId}=props;

    const videos=useSelector(store=>store.movies.trailerVideo)
    useTrailerVideo(movieId);
    console.log("videos",videos);


    if(!videos) return;

    const videoTrailer=videos.results.filter(t=>t.type==="Trailer")
    const finalTrailer=videoTrailer.length? videoTrailer[0]:videos.results[0];
    console.log("final trailer",finalTrailer);


  return (
    <div className='absolute'>
<iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+finalTrailer?.key+"?&autoplay=1&mute=1&controls=0"}
 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>

      
    </div>
  )
}

export default VideoBackground
