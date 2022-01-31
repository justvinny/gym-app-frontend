import axios from "axios";
import { backendUrl } from "./servicesConstants";

const getAllUsers = () => {
  return axios.get(`${backendUrl}/api/users`).then((res) => res.data?.users);
};
const getUser = (id: string) => {
  return axios
    .get(`${backendUrl}/api/users/${id}`)
    .then((res) => res.data?.user);
};

const userService = { getAllUsers, getUser };
export default userService;
