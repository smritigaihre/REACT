import React from 'react'
import { useParams } from 'react-router-dom'
import HeadingComponent from '../Header/HeadingComponent';

const MovieDetails=()=> {
  const {id}=useParams();
  return (
    <div>
            <HeadingComponent/>


      MovieDetails page for {id}</div>
  )
}
export default MovieDetails;