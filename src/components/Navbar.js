import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="span" position="static">
        <span className="navbar">
          <Toolbar>
            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Link to="/rockets">
                <Button variant="contained" color="inherit">
                  <span className="main-font"> Rockets</span>
                </Button>
              </Link>
              <Link to="/launches">
                <Button variant="contained" color="inherit">
                  <span className="main-font"> Launches </span>
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </span>
      </AppBar>
    </Box>
  );
}
