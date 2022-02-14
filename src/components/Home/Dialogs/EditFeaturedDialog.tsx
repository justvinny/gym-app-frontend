import { SyntheticEvent, useState } from "react";
import {
  Dialog,
  Box,
  Button,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import {
  Exercise,
  Workout,
  Routine,
  SelectType,
  User,
} from "../../../types";
import FeaturedExercisesTable from "./FeaturedExercisesTable";
import FeaturedExercisesSelectors from "./FeaturedExercisesSelectors";
import userService from "../../../services/userService";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  featuredExercises: Exercise[];
  setFeaturedExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
  routines: Routine[];
  authUser: User;
  setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const EditFeaturedDialog = ({
  open,
  setOpen,
  featuredExercises,
  setFeaturedExercises,
  routines,
  authUser,
  setAuthUser,
}: Props) => {
  const [routineSelected, setRoutineSelected] = useState("");
  const [workoutSelected, setWorkoutSelected] = useState("");
  const [exerciseSelected, setExerciseSelected] = useState("");
  const [currentRoutine, setCurrentRoutine] = useState<Routine | undefined>(
    undefined
  );
  const [currentWorkout, setCurrentWorkout] = useState<Workout | undefined>(
    undefined
  );
  const [currentExercise, setCurrentExercise] = useState<Exercise | undefined>(
    undefined
  );

  const handleChange =
    (
      setState: React.Dispatch<React.SetStateAction<string>>,
      selectType: SelectType
    ) =>
    (event: SelectChangeEvent) => {
      const selected = event.target.value;
      switch (selectType) {
        case SelectType.ROUTINE:
          clearChoices();
          setCurrentRoutine(findRoutine(selected));
          break;
        case SelectType.WORKOUT:
          clearExerciseSelected();
          setCurrentWorkout(findWorkout(selected));
          break;
        case SelectType.EXERCISE:
          setCurrentExercise(findExercise(selected));
      }
      setState(selected);
    };

  const clearChoices = () => {
    clearWorkoutSelected();
    clearExerciseSelected();
  };

  const clearWorkoutSelected = () => {
    if (workoutSelected) setWorkoutSelected("");
  };

  const clearExerciseSelected = () => {
    if (exerciseSelected) setExerciseSelected("");
  };

  const findRoutine = (selected: string) => {
    let routine;
    if (selected.length === 0) {
      routine = undefined;
    } else {
      routine = routines.find(
        (routine) => routine.name.localeCompare(selected) === 0
      );
    }
    return routine;
  };

  const findWorkout = (selected: string) => {
    let workout;
    if (selected.length === 0) {
      workout = undefined;
    } else {
      workout = currentRoutine?.workouts.find(
        (workout) => workout.day.localeCompare(selected) === 0
      );
    }
    return workout;
  };

  const findExercise = (selected: string) => {
    let exercise;
    if (selected.length === 0) {
      exercise = undefined;
    } else {
      exercise = currentWorkout?.exercises.find(
        (exercise) => exercise.name.localeCompare(selected) === 0
      );
    }
    return exercise;
  };

  const getRoutineChoices = () => {
    if (routines === undefined) return <></>;
    return routines.map((routine) => (
      <MenuItem value={routine.name}>{routine.name}</MenuItem>
    ));
  };

  const getWorkoutChoices = () => {
    if (currentRoutine === undefined) return <></>;
    return currentRoutine.workouts.map((workout) => (
      <MenuItem value={workout.day}>{workout.day}</MenuItem>
    ));
  };

  const getExerciseChoices = () => {
    if (currentWorkout === undefined) return <></>;
    return currentWorkout.exercises.map((exercise) => (
      <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
    ));
  };

  const addExercise = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isFeaturedExercisesFull()) {
      alert("Featured exercises are full. Please delete one first.");
      return;
    } else {
      const clone = [...featuredExercises, currentExercise] as Exercise[];
      setFeaturedExercises(clone);
    }
  };

  const isFeaturedExercisesFull = () => featuredExercises?.length >= 3;

  const deleteExercise = (index: number) => (event: SyntheticEvent) => {
    event.preventDefault();
    const clone = featuredExercises.filter((_, _index) => index !== _index);
    setFeaturedExercises(clone);
  };

  const save = () => {
    const authUserClone = { ...authUser };
    authUserClone.featuredExercises = [...featuredExercises];
    setAuthUser(authUserClone);
    userService
      .updateUser(authUserClone)
      .then((user) => {
        setAuthUser(user);
        setOpen(false);
      })
      .catch((error) => alert(`Failed to save: ${error}`));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          width: "300px",
          "> div,button": { marginBottom: "8px" },
        }}
      >
        <FeaturedExercisesTable
          featuredExercises={featuredExercises}
          deleteExercise={deleteExercise}
        />
        <FeaturedExercisesSelectors
          routineSelected={routineSelected}
          workoutSelected={workoutSelected}
          exerciseSelected={exerciseSelected}
          setRoutineSelected={setRoutineSelected}
          setWorkoutSelected={setWorkoutSelected}
          setExerciseSelected={setExerciseSelected}
          getRoutineChoices={getRoutineChoices}
          getWorkoutChoices={getWorkoutChoices}
          getExerciseChoices={getExerciseChoices}
          handleChange={handleChange}
        />
        <Button variant="contained" onClick={addExercise}>
          Add
        </Button>
        <Button variant="outlined" onClick={save}>
          Save and Close
        </Button>
      </Box>
    </Dialog>
  );
};

export default EditFeaturedDialog;
