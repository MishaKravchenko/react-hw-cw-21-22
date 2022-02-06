import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/comment.service";
import Comment from "../../components/Comments/Comment";
import {useLocation} from "react-router-dom";

const PostCommentsPage = () => {

    const {state} = useLocation();
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        commentService.getCommentsById(state.id).then(value => setComments(value))
    }, []);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostCommentsPage;