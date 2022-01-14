import React from 'react';

const User = ({user: {id, name, username}, getUserId}) => {
    return (
        <div className={"user"}>
            <div>{id}. {name}, {username}</div>
            <button onClick={() => getUserId(id)}>GetDetails</button>
        </div>
    );
};

export default User;