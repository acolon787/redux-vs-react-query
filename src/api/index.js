import axios from "axios";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const getUser = async () => await axios.get(usersUrl + "/1").then((res) => res.data);

export const getUsers = async () => await axios.get(usersUrl).then((res) => res.data);
