import React from 'react';

import {useEffect, useState} from "react";
import "./users.css"

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, []);
    return (
        <div className={"container_users"}>
            {
                users.map(user =>

                    <h2 className={"users"} key={user.id}>{user.id}. {user.name}, {user.username} </h2>)
            }
        </div>
    );
};

export default Users;