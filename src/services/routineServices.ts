import axios from "axios";
import { Routine } from "../types";
import { backendUrl } from "./servicesConstants";

const getAllRoutines = (id: string) =>
  axios.get(`${backendUrl}/api/users/${id}/routines`).then((res) => res.data);

const addRoutine = (id: string, routine: Routine) =>
  axios
    .post(`${backendUrl}/api/users/${id}/routines`, routine)
    .then((res) => res.data?.user?.routines);

const updateRoutine = (id: string, routine: Routine) =>
  axios
    .put(
      `${backendUrl}/api/users/${id}/routines/${routine._id ?? routine.id}`,
      routine
    )
    .then((res) => res.data?.user?.routines);

const routineServices = { addRoutine, getAllRoutines, updateRoutine };
export default routineServices;
