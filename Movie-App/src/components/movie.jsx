import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Movie.css'
import axios from "axios"
const Movie= ()=> {

    const[movies, setMovies]= useState([]);


    const fetchMovieData = async () => {
    
        const json = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=923957623adda598d87bf801866141fb');
       // const json = await response.json();
        console.log(json.data);
        setMovies(json.data.results)
    }

    useEffect(()=>{
        fetchMovieData()
    },[])

    // const mItem ={
    //     color:'white',
    //     fontSize:'20px',
    //     flex:'1',
    //     border:'1px solid #eee'

    
    // }


  return (
    <div className='m_container'>
      {
      movies.map((movie) => {
        return <div className='m_item' key ={movie.id}>{/* use style={mItem} if you want to do inline css */}

         <img src ={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <br/>
            
            {movie.title}
        <br/>
            <span>{movie.release_date}</span>
            
      
            </div>

      })}

    </div>
  )
}

export default Movie;