import axios from "axios";
import { Routine } from "../types";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const getAllRoutines = () => {
  return axios.get(`${backendUrl}/api/routines`).then((res) => res.data);
};

const addRoutine = (routine: Routine) => {
  return axios.post(`${backendUrl}/api/routines`, routine).then((res) => res.data);
};

const updateRoutine = (routine: Routine) => {
  return axios
    .put(`${backendUrl}/api/routines/${routine._id}`, routine)
    .then((res) => res.data);
};

const routineServices = { addRoutine, getAllRoutines, updateRoutine };
export default routineServices;
