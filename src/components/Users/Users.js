import React from 'react';
import {Link} from "react-router-dom";

const Users = ({user}) => {
    const {id, name} = user
    return (
        <div>
            <div>{id}.{name}</div>

            <Link to={id.toString() } state={user}>
                <button>User Details</button>
            </Link>

            <Link to={id.toString() + "/albums"} state={user}>
                <button>Photo Album</button>
            </Link>

        </div>
    );
};

export default Users;