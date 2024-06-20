import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../queries/queries";
import { Loader, LaunchesCard } from "../components";

//MUI
import { Grid, Button, Typography } from "@mui/material";

const LaunchesDetails = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (error) return <p>`Error :( ${error.message}`</p>;

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ paddingTop: "1em" }}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography component="h1" variant="h5" align="left">
            <span className="main-font"> Past Launches</span>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography component="h1" variant="h5" align="right">
            <Link to="/">
              <Button size="small" variant="contained">
                <span className="main-font"> Back</span>
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
      {!loading && <LaunchesCard data={data.launchesPast} />}
    </div>
  );
};

export { LaunchesDetails };
