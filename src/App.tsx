import { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@mui/material";
import TopAppBar from "./components/MenuNavigation/TopAppBar";
import RoutineTemplates from "./pages/RoutineTemplates";
import TrackProgress from "./pages/TrackProgress";
import HomePage from "./pages/HomePage";
import makeServer from "./mock/mockServer";
import routineServices from "./services/routineServices";

const App = () => {
  useEffect(() => {
    routineServices
    .getAllRoutines()
    .then(data => {
      console.log(data);
    });
  }, []);

  if (process.env.REACT_APP_CURRENT_ENV === "development") {
    makeServer();
  }

  return (
    <div className="App">
      <Router>
        <TopAppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/track-progress">
              <TrackProgress />
            </Route>
            <Route path="/routine-templates">
              <RoutineTemplates />
            </Route>
          </Switch>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ fontSize: "body1.fontSize" }}>
            &copy; Copyright 2021 by Vinson Beduya. All rights reserved.
          </Box>
        </Box>
      </Router>
    </div>
  );
};

export default App;
