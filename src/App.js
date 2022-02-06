import React from 'react';
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";

import Layout from "./components/Layout/Layout";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import UserPostPage from "./pages/UserPostPage/UserPostPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";


const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<UserDetailsPage/>}>
                            <Route path={"posts"} element={<UserPostPage/>}/>
                        </Route>

                        <Route path={":id/albums"} element={<AlbumsPage/>}>
                            <Route path={":id"} element={<PhotosPage/>}/>
                        </Route>
                    </Route>


                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={":id"} element={<PostDetailsPage/>}>
                            <Route path={"comments"} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>

            </Routes>

        </>
    );
};

export default App;