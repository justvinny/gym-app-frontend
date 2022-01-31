import axios from "axios";
import { User } from "../types";
import { backendUrl } from "./servicesConstants";

const getAllUsers = () =>
  axios.get(`${backendUrl}/api/users`).then((res) => res.data?.users);

const getUser = (id: string) =>
  axios.get(`${backendUrl}/api/users/${id}`).then((res) => res.data?.user);

const updateUser = (user: User) =>
  axios
    .put(`${backendUrl}/api/users/${user.id}`, user)
    .then((res) => res.data?.user);

const userService = { getAllUsers, getUser, updateUser };
export default userService;
