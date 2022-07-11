import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "../queries/queries";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { SiSpacex } from "react-icons/si";
import { GiSpaceShuttle } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";
import { FaWikipediaW } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import IconButton from "@mui/material/IconButton";

const RocketsCard = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {data.rockets.map((rocket) => (
            <Grid item key={rocket.id} xs={12} sm={6} md={3}>
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
                  image="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="random"
                /> */}
                <CardHeader
                  title={
                    <Typography variant="h7" component="h2">
                      <SiSpacex /> {rocket.name}
                    </Typography>
                  }
                  subheader={
                    <Typography color="text.secondary" variant="body2">
                      {rocket.country}
                    </Typography>
                  }
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography color="text.secondary">
                    <span className="icon">
                      <IoMdRocket />
                    </span>
                    <span> {rocket.description}</span>
                  </Typography>
                  <Typography>
                    <ul>
                      <li>Height: {rocket.height.feet} feet</li>
                      <li>Diameter: {rocket.diameter.feet} feet</li>
                      <li>Mass: {rocket.mass.kg} kg</li>
                      <li>Mass: {rocket.mass.kg} kg</li>

                      <li>
                        Cost per Launch: ${" "}
                        {+(rocket.cost_per_launch / 1000000).toFixed(1)} Million
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    size="large"
                    variant="contained"
                    color="primary"
                    href={rocket.wikipedia}
                    target="_blank"
                  >
                    <FaWikipediaW />
                  </IconButton>
                  {/* <IconButton
                    size="large"
                    variant="contained"
                    color="primary"
                    href={launch.links.video_link}
                    target="_blank"
                  >
                    <IoLogoYoutube />
                  </IconButton> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RocketsCard;
