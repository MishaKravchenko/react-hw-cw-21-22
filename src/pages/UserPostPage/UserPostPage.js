import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useLocation, useParams} from "react-router-dom";
import Posts from "../../components/Posts/Posts";
import css from "./UserPostPage.module.css"

const UserPostPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postService.getPostsById(id).then(value => setPosts([...value]))
    }, [id, state]);


    return (
        <div className={css.userPostPage}>
            <div className={css.userPostPageItem}>
            <h1>Posts</h1>
            {posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default UserPostPage;