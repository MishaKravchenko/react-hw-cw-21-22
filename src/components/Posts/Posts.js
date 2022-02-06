import React from 'react';
import {Link} from "react-router-dom";
import css from "./Posts.module.css"
const Posts = ({post}) => {
    const {id, title, userId, body} = post
    return (
        <div className={css.posts}>

            <div><b>{id}. {title}</b></div>
            <div>{userId}. {body}</div>
            <Link to={id.toString()} state={post}>
                <button>Post Details</button>
            </Link>
        </div>
    );
};

export default Posts;