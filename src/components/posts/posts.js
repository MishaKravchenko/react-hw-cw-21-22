import React from 'react';

import {useEffect, useState} from "react";
import "./posts.css"

function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })
    }, []);

    return (
        <div className={"container_posts"}>
            {
                posts.map(post=>
                    <p className={"post"} key={post.id}>{post.id}.{post.title} </p>
                )
            }
        </div>
    );
}

export default Posts;