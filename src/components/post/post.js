import React from 'react';

const Post = ({post: {title, body}}) => {
    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post;