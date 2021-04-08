import axios from "axios";

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

export const getUser = async (userId) => await axios.get(usersUrl + `/${userId}`).then((res) => res.data);

export const getUserPosts = async (userId) => await axios.get(usersUrl + `/${userId}/posts`).then((res) => res.data);

export const getUsers = async () => await axios.get(usersUrl).then((res) => res.data);
export const getPhotos = async () => await axios.get(photosUrl).then((res) => res.data);
