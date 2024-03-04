import { useGlobalContext } from "./Context";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SiSpacex } from "react-icons/si";
import { FaWikipediaW } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

const RocketsCard = ({ data }) => {
  const { showMore, setShowMore } = useGlobalContext();

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {data.rockets.map((rocket) => (
            <Grid item key={rocket.id} xs={12} sm={6} md={3} style={{ display: 'flex' }}>
              <div className="card">
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader
                    title={
                      <Typography variant="h5" component="div">
                        <SiSpacex />
                        <span className="main-font">{rocket.name}</span>
                      </Typography>
                    }
                    subheader={
                      <Typography
                        color="text.secondary"
                        variant="overline"
                        display="block"
                      >
                        <span className="main-font"> {rocket.country}</span>
                      </Typography>
                    }
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="caption"
                      display="block"
                      align="left"
                    >
                      <span className="main-font">
                        <i>
                          <Grid container spacing={1}>
                            <Grid item xs>
                              - Height: {rocket.height.feet} feet
                            </Grid>
                            <Grid item xs>
                              - Diameter: {rocket.diameter.feet} feet
                            </Grid>
                          </Grid>
                          <Grid container rowSpacing={1}>
                            <Grid item xs>
                              - Mass: {rocket.mass.kg} kg
                            </Grid>
                            <Grid item xs>
                              - Cost/launch: ${" "}
                              {+(rocket.cost_per_launch / 1000000).toFixed(1)} M
                            </Grid>
                          </Grid>
                        </i>
                      </span>
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      color="text.secondary"
                    >
                      <span className="main-font">
                        {showMore
                          ? rocket.description
                          : `${rocket.description.substring(0, 100)}...`}
                        <Button
                          size="small"
                          onClick={() => setShowMore(!showMore)}
                        >
                          <span className="main-font">
                            {showMore ? "Read less" : "Read more"}
                          </span>
                        </Button>
                      </span>
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
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RocketsCard;
