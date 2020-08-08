import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetching } from '../store/functions';

function User() {

    const { users, posts } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [user, setuser] = React.useState("");
    
    return (

        <div>
            <h1>User</h1>
            { users ? <>
                <input type="text" onChange={e => setuser(e.target.value)} />
                <br />
                <button type="button" onClick={() => fetching(dispatch, false, [...users, {id: users.length + 1, name: user}])} >Add New User</button>
            </> : "" }
            <br />
            { !users ? <button onClick={() => fetching(dispatch, 'users')}>Get Users</button> : "" }
            <hr />
            { users ? users.map((item, index) => {
                return <h3 key={index}>{index + 1}.{item.name}</h3>
            }) : <h2>No Data</h2>}

            <hr />

            <h1>POST</h1>
            <button type="button" onClick={() => fetching(dispatch, 'posts')}>Get posts</button>
            { posts ? posts.map((item, index) => {
                return <h3 index={index}>{item.id}{item.title}</h3>
            }) : "" }
        </div>
    )

};  

export default User;