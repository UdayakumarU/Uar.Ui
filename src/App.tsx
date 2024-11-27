import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./shared/components/header";
import Navbar from "./shared/components/navbar";
import Toolbar from "@mui/material/Toolbar";
import AppRouter from "./shared/components/app-router";

const App = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <AppRouter />
        </Box>
      </Box>
    </>
  );
};

export default App;
