import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { SyntheticEvent, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../context/UserContext";
import authService from "../../firebase/authService";
import { auth } from "../../firebase/config";
import { UserContextType } from "../../types";

interface Props {
  isVisible: boolean;
  toggleDrawer(event: SyntheticEvent): void;
}

const MenuDrawer = ({ isVisible, toggleDrawer }: Props) => {
  const history = useHistory();
  const btnLink = (path: string) => () => {
    history.push(path);
  };

  const { setAuthUser } = useContext(UserContext) as UserContextType;
  const logout = () => {
    authService.logout(auth);
    setAuthUser(null);
    history.push("/");
  };

  return (
    <Drawer
      anchor="right"
      open={isVisible}
      onClose={toggleDrawer}
      sx={{ width: 250 }}
    >
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem button onClick={btnLink("/")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={btnLink("/track-progress")}>
            <ListItemText primary="Track Progress" />
          </ListItem>
          <ListItem button onClick={btnLink("/routine-templates")}>
            <ListItemText primary="Workout Templates" />
          </ListItem>
          <ListItem button onClick={logout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
