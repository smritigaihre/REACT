import React from 'react'

const NewTable=(props)=> {

    const {comments} =props
    console.log(comments)
  return (

    <table className='table table-striped table-hover table-bordered m-4'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {
                comments.map((item) => {
                    return (<tr style={{cursor:'pointer'}} key={item.id} >
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>)
                })
            }
        </tbody>
        <tfoot></tfoot>
    </table>

    

  )
}

export default NewTable;
