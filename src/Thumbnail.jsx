import React from 'react'
import { AlbumList } from './AlbumList'




export const Thumbnail = () => {
    const list = [1,2,3,'Smriti']

    const editClick= (item) => {
      alert('click Visited' + item);
    }

    const editView =() => {
      alert('Click view Visited')
    }

  
  return (
    
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
          <AlbumList Mylist={list} 
          edit={editClick}
          view= {editView} />
         
        </div>
      </div>
    </div>
  )
}
