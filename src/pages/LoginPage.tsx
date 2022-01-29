import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Loading from "../components/Loading";
import { bgColor } from "../defaults";
import authService from "../firebase/authService";
import { auth } from "../firebase/config";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setLoading(true);
    await authService.login(auth, email, password);
    setLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: bgColor,
        height: "100vh",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            width: "300px",
            bgcolor: "#fff",
            borderRadius: "8px",
            "& *": {
              marginBottom: "4px",
              fontSize: "12px",
            },
          }}
        >
          <Box sx={{ fontSize: "30px !important", fontFamily: "Impact" }}>
            Gym App
          </Box>
          <TextField
            sx={{ width: "90%", marginBottom: "4px" }}
            id="username"
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            sx={{ width: "90%", marginBottom: "4px" }}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            sx={{
              width: "90%",
              bgcolor: bgColor,
              marginBottom: "8px",
              ":hover": { bgcolor: bgColor, opacity: 0.9 },
            }}
            variant="contained"
            size="small"
            onClick={login}
          >
            Login
          </Button>
          <Button
            sx={{ width: "90%" }}
            variant="outlined"
            size="small"
            color="error"
          >
            Forgot Password
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;
