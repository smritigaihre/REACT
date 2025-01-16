import React, { useEffect, useState } from 'react';
import NewTable from './NewTable';

const PostTable = () => {
    const [list, setList] = useState([]);
    const [comments, setComments] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [loading, setLoading] = useState(true); // State for loader
    const [commentsLoading, setCommentsLoading] = useState(false); // Loader for comments

    const fetchList = async () => {
        setLoading(true); // Show loader while fetching
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        setList(json.slice(0, 5));
        setOriginalList(json);
        setLoading(false); // Hide loader after fetching
    };

    useEffect(() => {
        fetchList();
    }, []);

    const onSearchTextChange = (ev) => {
        const value = ev.target.value;
        const filteredList = originalList.filter((item) => item.title.includes(value));
        setList(filteredList);
    };

    const rowClicked = async (item) => {
        setCommentsLoading(true); // Show loader for comments
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`);
        const json = await response.json();
        console.log(json);
        setComments(json);
        setCommentsLoading(false); // Hide loader after fetching comments
    };

    return (
        <div className='container'>
            <input
                onChange={onSearchTextChange}
                className="form-control form-control-lg m-4"
                type="text"
                placeholder="Type something to search"
                aria-label=".form-control-lg example"
            />
            {loading ? (
                <div className="spinner-border" role="status"></div>
            ) : (
                <table className='table table-striped table-hover table-bordered m-4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr
                                style={{ cursor: 'pointer' }}
                                onClick={() => rowClicked(item)}
                                key={item.id}
                            >
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {commentsLoading && (
                <div className="spinner-border" role="status"></div>
            )}
            <NewTable comments={comments} />
        </div>
    );
};

export default PostTable;

