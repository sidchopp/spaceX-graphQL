import { useState, useEffect } from "react";
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
import { IoLogoYoutube } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { MdOutlineArticle } from "react-icons/md";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

import {paginate, scrollToTop} from "../utils.js";

const LaunchesCard = ({ data }) => {
  const { showMore, setShowMore } = useGlobalContext();
  const launchData = paginate({ launchesPast: data });
  const [page, setPage] = useState(0);
  const [launches, setLaunches] = useState([]);
   
  useEffect(() => {
   setLaunches(launchData[page]);
  }, [ page]);

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
            <Grid item key={launch.id} xs={12} sm={6} md={3} style={{ display: 'flex' }}>
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
                      <Typography gutterBottom variant="h7" component="h2">
                        <SiSpacex />
                        <span className="main-font">{launch.mission_name}</span>
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
                          <Grid container spacing={2}>
                            <Grid item xs>
                              - Rocket: {launch.rocket.rocket_name}
                            </Grid>
                            <Grid item xs>
                              - Launched in: {launch.launch_year}
                            </Grid>
                          </Grid>
                          {launch.launch_site && <Grid container rowSpacing={1}>
                            <Grid item xs>
                              - Launch site: {launch.launch_site.site_name}
                            </Grid>
                          </Grid>}
                        </i>
                      </span>
                    </Typography>
                    {launch.details && (
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                        color="text.secondary"
                      >
                        <span className="main-font">
                          {showMore
                            ? launch.details
                            : `${launch.details.substring(0, 150)}...`}
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
                    )}
                  </CardContent>
                  <CardActions>
                    {launch.links.wikipedia && (
                      <IconButton
                        size="large"
                        variant="contained"
                        color="primary"
                        href={launch.links.wikipedia}
                        target="_blank"
                      >
                        <FaWikipediaW />
                      </IconButton>
                    ) }
                    {launch.links.video_link && (
                      <IconButton
                        size="large"
                        variant="contained"
                        color="primary"
                        href={launch.links.video_link}
                        target="_blank"
                      >
                        <IoLogoYoutube />
                      </IconButton>
                    ) }
                    {launch.links.article_link && (
                      <IconButton
                        size="large"
                        variant="contained"
                        color="primary"
                        href={launch.links.article_link}
                        target="_blank"
                      >
                        <MdOutlineArticle />
                      </IconButton>
                    ) }
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>

        <div className="btn-container">
        <IconButton
          size="medium"
          variant="contained"
          color="primary"
          onClick={() => { 
            prevPage(); 
            scrollToTop();
          }}
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
              onClick={() => {
                handlePage(index); 
                scrollToTop();
              }}
            >
              {index + 1}
            </button>
          );
        })}
       <IconButton
          size="medium"
          variant="contained"
          color="primary"
          onClick={() => { 
            nextPage(); 
            scrollToTop();
          }}
          className="next-btn"
        >
          <BsArrowRightSquareFill />
        </IconButton> 
      </div>
      </Container>
    </div>
  );
};

export default LaunchesCard;
