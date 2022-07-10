import { useGlobalContext } from "./Context";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../queries/queries";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//Components
import Loader from "./Loader";

const Launches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  console.log(data);
  if (error) return <p>`Error :( ${error.message}`</p>;

  //To show last  launches
  const showPastLaunches = () => {
    // if data is not fetched,show loader
    if (loading) {
      return <Loader />;
    } else {
      return data.launchesPast.map((launch) => {
        return <li key={launch.id}>{launch.mission_name}</li>;
      });
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Space X Launches</h1>
      {/* <ul>{showPastLaunches()}</ul> */}
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {data.launchesPast.map((launch) => (
            <Grid item key={launch.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                /> */}
                <CardHeader
                  title={
                    <Typography gutterBottom variant="h7" component="h2">
                      {launch.mission_name}
                    </Typography>
                  }
                  subheader={` ${launch.launch_date_local} `}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h7" component="h4">
                    Launched from:
                    <Typography>{launch.launch_site.site_name_long}</Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Launches;
