import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const popularMovies=useSelector(store=> store.movies.popularMovies);

    const getPopularMovies=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=2",API_OPTIONS);
        const json=await data.json();
        dispatch(addPopularMovies(json));
    }

    useEffect(()=>{!popularMovies && 
        getPopularMovies()},[]);

}

export default usePopularMovies;