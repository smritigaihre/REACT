import React, { useEffect, useState } from 'react';

  import NewTable from './NewTable';

const PostTable = () => {
    const [list, setList] = useState([])
    const[comments, setComments] =useState([])
    const [orignalList, setOriginalList] = useState([])
    

    const fetchList = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()
        setList(json.slice(0,5))
        setOriginalList(json)
    }

    useEffect(() => {
        fetchList()
    }, [])

    const onSearchTextChange = (ev) => {
        const value = ev.target.value
        const filteredList = orignalList.filter(item => {
            if (item.title.includes(value)) {
                return item
            }
        })
        setList(filteredList)
    }

    const rowClicked = async(item) => {
        // alert('Row Clicked '+ item.id)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
        const json = await response.json()
        console.log(json); //data list --> map --> table
        setComments(json)

    }

    return (
        <div className='container'>
            <input onChange={onSearchTextChange} className="form-control form-control-lg m-4" type="text" placeholder="Type something to search" aria-label=".form-control-lg example" />
            <table className='table table-striped table-hover table-bordered m-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item) => {
                            return (<tr style={{cursor:'pointer'}} onClick={(ev)=>rowClicked(item) }key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
            <div class="spinner-border" role="status"></div>
            <NewTable comments={comments}/>
        </div>
    );
};

export default PostTable;

