import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import Users from "../../components/Users/Users";
import {Outlet} from "react-router-dom";
import css from "./UsersPage.module.css"

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={css.userDetails}>
            <div className={css.userDetailsItem1}>
                <h1>Users</h1>
                {users.map(user => <Users key={user.id} user={user}/>)}
            </div>

            <div className={css.userDetailsItem2}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;