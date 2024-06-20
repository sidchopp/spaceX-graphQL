import { Link } from "react-router-dom";

//MUI
import { AppBar, Box, Toolbar, Button, Stack, Divider } from "@mui/material";

const Navbar = () => {
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
};

export { Navbar };
