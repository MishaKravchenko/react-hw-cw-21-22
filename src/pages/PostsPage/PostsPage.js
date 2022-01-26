import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Posts from "../../components/Posts/Posts";
import {Outlet} from "react-router-dom";
import css from "./PostPage.module.css"

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={css.postPage}>
            <div className={css.postPageItem}>
            <h1>Posts</h1>
            {posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
            <div className={css.postPageItem}><Outlet/></div>
        </div>
    );
};

export default PostsPage;