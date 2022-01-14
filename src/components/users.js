import React, {useEffect, useState} from 'react';

import User from "./user";
import UserDetails from "./userDetails";
import {userService} from "../services/user.service";
import {postService} from "../services/post.service";
import Post from "./post";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, []);

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    }

    const  getPostId = (id) => {
        postService.getById(id)
            .then(value => setPosts(value))
    }

    return (
        <div>
            <div>
                {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}
            </div>

            <div>
                {user && <UserDetails  user={user} getPostId={getPostId}/>}
            </div>

            <div>
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default Users;