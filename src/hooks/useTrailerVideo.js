import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import {addTrailerVideo} from "../utils/movieSlice"

const useTrailerVideo=(movieId)=>{

    const dispatch=useDispatch();

    const trailerVideo=useSelector(store=>store.movies.trailerVideo);


    const getMovieTrailer= async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/" +movieId +"/videos?language=en-US",API_OPTIONS)
        const json=await data.json();
        console.log("trailer video",json);
        dispatch(addTrailerVideo(json));
    }

    useEffect(()=>{!trailerVideo && getMovieTrailer()},[])

}

export default useTrailerVideo;
