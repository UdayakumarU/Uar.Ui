import { useState } from "react";
import { useNavigate } from "react-router";
import { CONSTANTS } from "../../constant";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const navbarItems = [
  { id: 1, label: CONSTANTS.HOME.NAME, route: CONSTANTS.HOME.ROUTE },
  { id: 2, label: CONSTANTS.CAMPAIGN.NAME, route: CONSTANTS.CAMPAIGN.ROUTE },
  {
    id: 3,
    label: CONSTANTS.IDENTITY_RESPOSITORY.NAME,
    route: CONSTANTS.IDENTITY_RESPOSITORY.ROUTE,
  },
  { id: 4, label: CONSTANTS.JOBS.NAME, route: CONSTANTS.JOBS.ROUTE },
  // {
  //   id: 5,
  //   label: CONSTANTS.SYSTEM_CONNECTIONS.NAME,
  //   route: CONSTANTS.SYSTEM_CONNECTIONS.ROUTE,
  // },
  // {
  //   id: 6,
  //   label: CONSTANTS.ADMIN_FUNCTIONS.NAME,
  //   route: CONSTANTS.ADMIN_FUNCTIONS.ROUTE,
  // },
  { id: 7, label: CONSTANTS.DASHBOARD.NAME, route: CONSTANTS.DASHBOARD.ROUTE },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [activeNavbar, setActiveNavbar] = useState(CONSTANTS.HOME.NAME);

  const handleClick = (label: string, route: string) => {
    setActiveNavbar(label);
    navigate(route);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {navbarItems.map(({ id, label, route }) => (
            <ListItem key={id}>
              <ListItemButton
                onClick={() => handleClick(label, route)}
                selected={label === activeNavbar}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Navbar;
