import { useState } from "react";
import { Dialog, Box, TextField, Button } from "@mui/material";
import React from "react";
import { handleInputChange } from "../../../utils";
import { User } from "../../../types";
import userService from "../../../services/userService";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  setStartWeight: React.Dispatch<React.SetStateAction<number>>;
  setCurrentWeight: React.Dispatch<React.SetStateAction<number>>;
  setGoalWeight: React.Dispatch<React.SetStateAction<number>>;
  authUser: User;
  setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}
const EditWeightDialog = ({
  open,
  setOpen,
  startWeight,
  currentWeight,
  goalWeight,
  setStartWeight,
  setCurrentWeight,
  setGoalWeight,
  authUser,
  setAuthUser,
}: Props) => {
  const [startWeightInput, setStartWeightInput] = useState(startWeight);
  const [currentWeightInput, setCurrentWeightInput] = useState(currentWeight);
  const [goalWeightInput, setGoalWeightInput] = useState(goalWeight);

  const save = () => {
    const authUserClone = { ...authUser };
    authUserClone.startWeight = startWeightInput;
    authUserClone.currentWeight = currentWeightInput;
    authUserClone.goalWeight = goalWeightInput;

    userService
      .updateUser(authUserClone)
      .then((user) => {
        setAuthUser(user);
        setStartWeight(startWeightInput);
        setCurrentWeight(currentWeightInput);
        setGoalWeight(goalWeightInput);
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
          "& div": { marginBottom: "8px" },
        }}
      >
        <TextField
          variant="outlined"
          label="Start Weight"
          value={startWeightInput}
          onChange={handleInputChange(setStartWeightInput)}
        />
        <TextField
          variant="outlined"
          label="Current Weight"
          value={currentWeightInput}
          onChange={handleInputChange(setCurrentWeightInput)}
        />
        <TextField
          variant="outlined"
          label="Goal Weight"
          value={goalWeightInput}
          onChange={handleInputChange(setGoalWeightInput)}
        />
        <Button variant="contained" onClick={save}>
          Save
        </Button>
      </Box>
    </Dialog>
  );
};

export default EditWeightDialog;
