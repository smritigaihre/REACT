import React, {useEffect, useState} from 'react';

class Album extends React.Component{
    

    constructor(props){
        super(props)

    }

     onEditClickOperation =(item) => {
        item.name ="New Name"
        this.props.onEditClick(item.name)
    }
    

    render(){
        
        return(
            <>
            {
              this.props.Mylist?
            this.props.Mylist.map((item,index)=>
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
                        <button onClick={this.props.view}
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

}