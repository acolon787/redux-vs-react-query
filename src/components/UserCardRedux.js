import React, { useState } from "react";
import { getUser, getUserPosts } from "../api";

const userDetails = (user) => (
    <div>
        <h2>{user.name}</h2>
        <span>{user.email}</span>
    </div>
);
const postDetails = (post) => (
    <div>
        <h2>{post.id}</h2>
        <span>{post.title}</span>
    </div>
);

const UserCard = () => {
    const [selectedUser, setUser] = useState("");
    const user = useQuery(["getUser", selectedUser], () => getUser(selectedUser));
    const posts = useQuery(["getUserPosts", user.data?.id], () => getUserPosts(user.data.id), { enabled: !!user.data?.id});

    return (
        <div>
            <input type="text" onChange={(e) => setUser(e.target.value)} />
            {user.isLoading && <span>{"Loading..."}</span>}
            {user.data && userDetails(user.data)}
            {posts.data && posts.data.map((post) => postDetails(post))}
            {user.error || posts.error && <span>{"Something went wrong :("}</span>}
        </div>
    );
};

export default UserCard;
