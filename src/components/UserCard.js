import React from "react";
import { useQuery } from "react-query";
import { getUser, getUsers } from "../api";

const userDetails = (user) => (
    <div>
        <h2>{user.name}</h2>
        <span>{user.email}</span>
    </div>
);

const UserCard = () => {
    const user = useQuery("getUser", getUser);
    const users = useQuery("getUsers", getUsers);

    return (
        <div>
            {user.isLoading && <span>{"Loading..."}</span>}
            {user.data && userDetails(user.data)}
            {users.data && users.data.map((user) => userDetails(user))}
            {user.error && <span>{"Something went wrong :("}</span>}
        </div>
    );
};

export default UserCard;
