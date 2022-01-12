import React from 'react';

import {useEffect, useState} from "react";
import "./comments.css"

function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })
    }, []);

    return (
        <div className={"container_comments"}>
            {
                comments.map(comment =>
                    <p className={"comment"} key={comment.id}>{comment.id}. {comment.body}</p>
                )
            }
        </div>
    );
}

export default Comments;