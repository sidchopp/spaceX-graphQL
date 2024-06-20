import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "../queries/queries";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { RocketsCard } from "./RocketsCard";

//MUI
import { Grid, Button, Typography } from "@mui/material";

const RocketsDetails = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);

  if (error) return <p>`Error :( ${error.message}`</p>;

  if (loading) {
    return (
      <div>
        <h1>List of Rockets</h1>
        <Loader />
      </div>
    );
  }
  return (
    <div style={{ paddingTop: "1em" }}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography component="h1" variant="h5" align="left">
            <span className="main-font"> List of Rockets</span>
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
      <RocketsCard data={data} loading={loading} />
    </div>
  );
};

export { RocketsDetails };
