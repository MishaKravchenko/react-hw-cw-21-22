import React from 'react';
import AddressComponent from "./AddressComponent";
import CompanyComponent from "./CompanyComponent";

function UserComponent({ users }) {
    return (
        <div className={"container_users"}>
            {users.map((user) => (
                <div className={"container_user"} key={user.id}>
                    <h3>{user.id}. U S E R</h3>
                    <p>name - {user.name}</p>
                    <p>username - {user.username}</p>
                    <p>email - {user.email}</p>
                    <p>phone - {user.phone}</p>
                    <p>website - {user.website}</p>
                    <p>name - {user.name}</p>
                    <p>name - {user.name}</p>
                    <p>name - {user.name}</p>

                    <AddressComponent address={user.address} />
                    <CompanyComponent company={user.company} />
                </div>
            ))}
        </div>
    );
}

export default UserComponent;