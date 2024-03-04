import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../queries/queries";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

//Components
import Loader from "./Loader";
import LaunchesCard from "./LaunchesCard";

const Launches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (error) return <p>`Error :( ${error.message}`</p>;

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div>
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
     {!loading &&  <LaunchesCard data={data.launchesPast } />}
    </div>
  );
};

export default Launches;
