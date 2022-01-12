import { Box, Button, TextField } from "@mui/material";
import { bgColor } from "../defaults";

const LoginPage = () => {
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
          sx={{ width: "90%" }}
          id="username"
          label="Username"
          variant="outlined"
        />
        <TextField
          sx={{ width: "90%" }}
          id="password"
          label="Password"
          variant="outlined"
        />
        <Button sx={{ width: "90%", marginBottom: "12px" }} variant="contained">
          Login
        </Button>
        <Button sx={{ width: "90%" }} variant="outlined" color="error">
          Forgot Password
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
