import React from 'react';


const UserDetails = ({ user:{ id, name, username, email, phone, address },getPostId }) => {

    return (
        <div>
            <h3>{id}.{name}</h3>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>address: {address.suite}, {address.street}, {address.city}</p>
            <button onClick={() => getPostId(id)}>GetPosts</button>
        </div>
    );
};

export default UserDetails;