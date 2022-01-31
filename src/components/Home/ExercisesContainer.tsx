import { Box } from "@mui/material";
import DashboardGauge from "./DashboardGauge";
import ContainerHeading from "./ContainerHeading";
import { FeaturedExercises } from "../../types";
import React from "react";

interface Props {
  featuredExercises: FeaturedExercises;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExercisesContainer = ({ featuredExercises, setOpen }: Props) => {
  const nEmptyGauges = 3 - featuredExercises.length;
  const fillEmptyGauges = () =>
    [...Array(nEmptyGauges)].map(() => <DashboardGauge />);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 5px 2px",
        alignItems: "center",
        padding: "16px",
        marginBottom: "12px",
      }}
    >
      <ContainerHeading label="Best Exercises (kg)" setOpen={setOpen} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        {featuredExercises.map((exercise, index) => {
          if (exercise !== undefined) {
            return (
              <DashboardGauge
                key={
                  exercise._id ? (exercise._id.toString() as React.Key) : index
                }
                weight={exercise.sets[exercise.sets.length - 1].weight}
                label={exercise.name}
                reps={exercise.sets[exercise.sets.length - 1].reps}
              />
            );
          }
          return <DashboardGauge />;
        })}
        {fillEmptyGauges()}
      </Box>
    </Box>
  );
};

export default ExercisesContainer;
