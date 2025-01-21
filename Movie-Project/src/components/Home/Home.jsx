import React, {useState,useEffect} from 'react'
import LoadMore from '../LoadMore/LoadMore';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import './home.css'
import HeadingComponent from '../Header/HeadingComponent';
import { useNavigate } from 'react-router-dom';
const Home=() =>{
  const navigate = useNavigate();
  const[movies, setMovies]= useState([]);
    const [page, setPage]= useState(1)

    const [search, setSearch] = useState('')


    const fetchMovieData = async () => {

      let url ='https://api.themoviedb.org/3/movie/popular'
      if(search !== '') {
        url = 'https://api.themoviedb.org/3/search/movie'
      }

      console.log(search)
    
        const json = await axios.get(url,{params:{
          api_key: '923957623adda598d87bf801866141fb',
          page:page,
          query: search
         }});
       // const json = await response.json();
        // console.log(json.data);
        if(search == '')
        setMovies([...movies,...json.data.results])
      else 
        setMovies([...json.data.results])
    }

    useEffect(()=>{
        fetchMovieData()
    },[])

    useEffect(()=>{
      fetchMovieData()
  },[search])

    // const mItem ={
    //     color:'white',
    //     fontSize:'20px',
    //     flex:'1',
    //     border:'1px solid #eee'

    
    // }

    const onButtonNameClick =() =>{
      setPage(page =>page+1)
      fetchMovieData()
    }

    const onSeachText = (data) => {
      setSearch(data)
      console.log(data)

     // fetchMovieData()
    };

    const onMovieClick = (movie) => {
      navigate(`/MovieDetails/${movie.id}`)
    }

    return (
      <>
      <HeadingComponent/>
          <SearchBar onTextChange={onSeachText}/>
          <div className='m_container'>
            
            {
            movies.map((movie) => {
              return <div onClick={(ev)=> onMovieClick(movie)} className='m_item' key ={movie.id}>{/* use style={mItem} if you want to do inline css */}
      
               <img src ={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                  <br/>
                  
                  {movie.title}
              <br/>
                  <span>{movie.release_date}</span>
                  
            
                  </div>
      
            })}
      
         <LoadMore onButtonNameClick = {onButtonNameClick}/>
      
          </div>
          </>
          
        )
}
export default Home;
