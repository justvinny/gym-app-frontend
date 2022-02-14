import { ObjectId } from "mongodb";
import React from "react";

export interface UserContextType {
  authUser: User;
  setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface User {
  _id?: ObjectId;
  id?: string,
  name: string;
  age: number;
  height: number;
  aboutMe: string;
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  featuredExercises: Exercise[];
  routines: Routine[];
}

export interface Routine {
  _id?: ObjectId;
  id?: string;
  name: string;
  workouts: Workout[];
}

export interface Workout {
  _id?: ObjectId;
  day: string;
  exercises: Exercise[];
}

export interface Exercise {
  _id?: ObjectId;
  name: string;
  sets: WorkSet[];
}

export interface WorkSet {
  _id?: ObjectId;
  weight: number;
  reps: number;
}

export interface RoutineTemplate {
  name: string;
  content: Day[];
}

export interface Day {
  day: number;
  name: string;
  exercises: string[];
}

export enum SelectType {
  ROUTINE,
  WORKOUT,
  EXERCISE,
}
