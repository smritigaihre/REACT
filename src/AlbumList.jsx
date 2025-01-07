import React, { useEffect, useState } from 'react'

export const AlbumList = (props) => {
  const[list, setList]= useState([]);

  useEffect(() =>{
    const fetchPostList =() =>{
      fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((json) => console.log(json));
    
    }
    fetchPostList()
  },[])

  const {Mylist, edit} = props;

  const onEditClickOperation=(item) => {
    item = 'New Name'
    edit(item)
  }

  return (
    <>
    {
      props.Mylist?
    props.Mylist.map((item,index)=>
      ( <div key={index} className="col">
        <div className="card shadow-sm">
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height={225}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
          <div className="card-body">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button onClick={props.view}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button onClick={()=>onEditClickOperation(item)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>)
    )
    : <h2>List is not defined</h2>
   }
  
  
  </>
  )
}
