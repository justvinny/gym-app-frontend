import { useEffect, useState } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@mui/material";
import TopAppBar from "./components/MenuNavigation/TopAppBar";
import RoutineTemplates from "./pages/RoutineTemplates";
import TrackProgress from "./pages/TrackProgress";
import HomePage from "./pages/HomePage";
import makeServer from "./mock/mockServer";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { UserContext } from "./context/UserContext";
import Loading from "./components/Loading";

const App = () => {
  if (process.env.REACT_APP_CURRENT_ENV === "development") {
    makeServer();
  }

  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : authUser === null ? (
        <LoginPage setLoading={setLoading} />
      ) : (
        <UserContext.Provider value={authUser}>
          <Box sx={{ marginTop: "100px" }}>
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
          </Box>
        </UserContext.Provider>
      )}
    </div>
  );
};

export default App;
