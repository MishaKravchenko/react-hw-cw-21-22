import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import css from "./UserDetailsPage.module.css"

const UserDetailsPage = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);
    const {state} = useLocation()
    const {name, username, address, email, phone, website} = state;

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        userService.getAll().then(value => setUser({...value}))
    }, [id, state])
    return (
        <div>
            {
                user && (
                    <div className={css.singleUserPage}>
                        <h1>User Details</h1>
                        <div>{id}. {name}</div>
                        <div>{username}</div>
                        <div>{email}</div>
                        <div>{address.street}</div>
                        <div>{address.suite}</div>
                        <div>{address.city}</div>
                        <div>{address.zipcode}</div>
                        <div>{phone}</div>
                        <div>{website}</div>
                        <Link to={'posts'} state={state}>
                            <button>Users Posts</button>
                        </Link>
                    </div>
                )}
            <Outlet/>
        </div>

    );
};

export default UserDetailsPage;