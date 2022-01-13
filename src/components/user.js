import React from 'react';


const User = ({user: {id, name, username},getUserId}) => {



    return (
        <div>
            <div>
                {id}. {name}, {username}
                <button onClick={getUserId}>GetDetails</button>
            </div>
        </div>
    );
};

export default User;