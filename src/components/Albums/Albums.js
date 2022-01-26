import React from 'react';
import {Link} from "react-router-dom";

const Albums = ({album}) => {
    const {id, title} = album;

    return (
        <div>
            <div>{id}. {title}</div>
            <Link to={id.toString()}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default Albums;