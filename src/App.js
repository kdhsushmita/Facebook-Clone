import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { Box, Stack, ThemeProvider, createTheme, } from "@mui/material";
import RightBar from "./Components/RightBar";
import Feeds from "./Components/Feeds";
import AddPost from "./Components/AddPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <SideBar mode={mode} setMode={setMode} />
          <Feeds />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider >
  );
}

export default App;
