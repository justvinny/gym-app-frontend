import { Box, CircularProgress } from "@mui/material";

const Loading = () => (
  <Box sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }}>
    <CircularProgress size={100} />
  </Box>
);

export default Loading;
