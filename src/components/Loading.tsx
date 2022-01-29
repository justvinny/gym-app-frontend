import { Box, CircularProgress } from "@mui/material";
import { bgColor } from "../defaults";

const Loading = () => (
  <Box sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: bgColor,
    height: "100vh",
  }}>
    <CircularProgress size={100} />
  </Box>
);

export default Loading;
