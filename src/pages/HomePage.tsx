import { useContext, useState } from "react";
import { Grid } from "@mui/material";
import InfoContainer from "../components/Home/InfoContainer";
import WeightContainer from "../components/Home/WeightContainer";
import ExercisesContainer from "../components/Home/ExercisesContainer";
import RecentWorkoutContainer from "../components/Home/RecentWorkoutContainer";
import {
  Routine,
  FeaturedExercises,
  UserContextType,
} from "../types";
import EditInfoDialog from "../components/Home/Dialogs/EditInfoDialog";
import EditWeightDialog from "../components/Home/Dialogs/EditWeightDialog";
import EditFeaturedDialog from "../components/Home/Dialogs/EditFeaturedDialog";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
  // User object
  const { authUser, setAuthUser } = useContext(UserContext) as UserContextType;

  // Basic Info
  const [name, setName] = useState<string>(authUser?.name ?? "");
  const [age, setAge] = useState<number>(authUser?.age ?? 0);
  const [height, setHeight] = useState<number>(authUser?.height ?? 0);
  const [aboutMe, setAboutMe] = useState<string>(authUser?.aboutMe ?? "");

  // Weight goals
  const [startWeight, setStartWeight] = useState<number>(
    authUser?.startWeight ?? 0
  );
  const [currentWeight, setCurrentWeight] = useState<number>(
    authUser?.currentWeight ?? 0
  );
  const [goalWeight, setGoalWeight] = useState<number>(
    authUser?.goalWeight ?? 0
  );

  // Best exercises
  // TODO: Might need to rethink schema for featured exercises when backend is built.
  const [featuredExercises, setFeaturedExercises] = useState<FeaturedExercises>(authUser.featuredExercises as FeaturedExercises);

  // Latest workout
  // TODO: Need a proper method to get latest workout after backend is built.
  const [lastWorkout] = useState(authUser.routines[0].workouts[0]);

  // Modal
  const [openEditInfo, setOpenEditInfo] = useState(false);
  const [openEditWeight, setOpenEditWeight] = useState(false);
  const [openEditFeatured, setOpenEditFeatured] = useState(false);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          width: "90vw",
          bgcolor: "#fff",
          maxWidth: { xs: "650px", lg: "1100px" },
          marginTop: "8px",
          marginBottom: "8px",
          marginLeft: "0px",
        }}
      >
        <InfoContainer
          name={name}
          age={age}
          height={height}
          aboutMe={aboutMe}
          setOpen={setOpenEditInfo}
        />
        <Grid item xs={12} lg={7} sx={{ padding: "0px !important" }}>
          <WeightContainer
            startWeight={startWeight}
            currentWeight={currentWeight}
            goalWeight={goalWeight}
            setOpen={setOpenEditWeight}
          />
          <ExercisesContainer
            featuredExercises={featuredExercises}
            setOpen={setOpenEditFeatured}
          />
        </Grid>
        <RecentWorkoutContainer lastWorkout={lastWorkout} />
      </Grid>
      {/* Edit Dialogs */}
      <EditInfoDialog
        open={openEditInfo}
        setOpen={setOpenEditInfo}
        name={name}
        age={age}
        height={height}
        aboutMe={aboutMe}
        setName={setName}
        setAge={setAge}
        setHeight={setHeight}
        setAboutMe={setAboutMe}
        authUser={authUser}
        setAuthUser={setAuthUser}
      />
      <EditWeightDialog
        open={openEditWeight}
        setOpen={setOpenEditWeight}
        startWeight={startWeight}
        currentWeight={currentWeight}
        goalWeight={goalWeight}
        setStartWeight={setStartWeight}
        setCurrentWeight={setCurrentWeight}
        setGoalWeight={setGoalWeight}
        authUser={authUser}
        setAuthUser={setAuthUser}
      />
      <EditFeaturedDialog
        open={openEditFeatured}
        setOpen={setOpenEditFeatured}
        featuredExercises={featuredExercises}
        setFeaturedExercises={setFeaturedExercises}
        routines={authUser?.routines as Routine[]}
        authUser={authUser}
        setAuthUser={setAuthUser}
      />
    </>
  );
};

export default HomePage;