import React from 'react';

const Comment = ({comment}) => {
    const {id, body} = comment
    return (
        <div>
            <div>{id}</div>
            <div>{body}</div>

        </div>
    );
};

export default Comment;