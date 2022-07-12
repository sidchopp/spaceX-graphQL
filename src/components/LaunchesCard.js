import { useState, useEffect } from "react";
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
import { SiSpacex } from "react-icons/si";
import { GiSpaceShuttle } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";
import { FaWikipediaW } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";

import paginate from "../utils.js";
const LaunchesCard = ({ data, loading }) => {
  // const { loading, error, data } = useQuery(GET_LAUNCHES);
  const [launchData, setLaunchData] = useState(paginate(data));
  const [page, setPage] = useState(0);
  const [launches, setLaunches] = useState([]);
  // console.log(launchData[0]);

  useEffect(() => {
    if (!loading) return setLaunches(launchData[page]);
  }, [loading, page]);

  // console.log(launches);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > launchData.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = launchData.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {launches.map((launch) => (
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
                  image="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="random"
                /> */}
                <CardHeader
                  title={
                    <Typography gutterBottom variant="h7" component="h2">
                      <SiSpacex /> {launch.mission_name}
                    </Typography>
                  }
                  // subheader={
                  //   <Typography color="text.secondary" variant="body2">
                  //     {launch.launch_year}
                  //   </Typography>
                  // }
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* <Typography color="text.secondary">
                    <span className="icon">
                      <GiSpaceShuttle />
                    </span>
                    <span>
                      Launch Station: {launch.launch_site.site_name_long}
                    </span>
                  </Typography> */}
                  <Typography
                    gutterBottom
                    variant="caption"
                    display="block"
                    align="left"
                  >
                    <i>
                      <Grid container spacing={2}>
                        <Grid item xs>
                          - Rocket: {launch.rocket.rocket_name}
                        </Grid>
                        <Grid item xs>
                          - Launched in: {launch.launch_year}
                        </Grid>
                      </Grid>
                      <Grid container rowSpacing={1}>
                        <Grid item xs>
                          - Launch site: {launch.launch_site.site_name}
                        </Grid>
                      </Grid>
                    </i>
                  </Typography>
                  {launch.details ? (
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      color="text.secondary"
                    >
                      <span> {launch.details}</span>
                    </Typography>
                  ) : (
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      color="text.secondary"
                    >
                      Details Unavailable :(
                    </Typography>
                  )}
                </CardContent>
                <CardActions>
                  {launch.links.wikipedia ? (
                    <IconButton
                      size="large"
                      variant="contained"
                      color="primary"
                      href={launch.links.wikipedia}
                      target="_blank"
                    >
                      <FaWikipediaW />
                    </IconButton>
                  ) : (
                    <></>
                  )}
                  {launch.links.video_link ? (
                    <IconButton
                      size="large"
                      variant="contained"
                      color="primary"
                      href={launch.links.video_link}
                      target="_blank"
                    >
                      <IoLogoYoutube />
                    </IconButton>
                  ) : (
                    <></>
                  )}
                  {launch.links.article_link ? (
                    <IconButton
                      size="large"
                      variant="contained"
                      color="primary"
                      href={launch.links.article_link}
                      target="_blank"
                    >
                      <MdOutlineArticle />
                    </IconButton>
                  ) : (
                    <></>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="btn-container ">
        <IconButton
          size="medium"
          variant="contained"
          color="primary"
          onClick={prevPage}
          className="prev-btn"
        >
          <BsArrowLeftSquareFill />
        </IconButton>
        {launchData.map((item, index) => {
          return (
            <button
              key={index}
              className={` page-btn font ${
                index === page ? "active-btn" : null
              }`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <IconButton
          size="lmedium"
          variant="contained"
          color="primary"
          onClick={nextPage}
          className="next-btn"
        >
          <BsArrowRightSquareFill />
        </IconButton>
      </div>
    </div>
  );
};

export default LaunchesCard;
