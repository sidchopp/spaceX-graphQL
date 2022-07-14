import { useQuery } from "@apollo/client";
import { GET_COMPANY } from "../queries/queries";
import { SiSpacex } from "react-icons/si";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//Components
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Launches = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);

  if (error) return <p>`Error :( ${error.message}`</p>;
  if (loading) {
    return <Loader />;
  }
  // console.log(data);
  return (
    <main>
      <Box
        sx={{
          // bgcolor: "background.paper",
          pt: 1,
          pb: 1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // backgroundImage: `url(https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`,
        }}
      >
        <Container maxWidth="xl">
          {/* Component import */}
          <Navbar />
          {/* *** */}

          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <span className="main-font">SPACE </span>
            <span className="spacex-icon">
              <SiSpacex />
            </span>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <span className="main-font"> {data.company.summary}</span>
          </Typography>
          <Container maxWidth="md">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="left"
                  color="text.primary"
                >
                  <span className="main-font">{data.company.ceo}</span>
                </Typography>
                <Typography
                  align="left"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    {" "}
                    <i> CEO & Founder </i>
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="right"
                  color="text.primary"
                >
                  <span className="main-font">
                    {" "}
                    {data.company.headquarters.state}
                  </span>
                </Typography>
                <Typography
                  align="right"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    {" "}
                    <i> Headquarter </i>
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="left"
                  color="text.primary"
                >
                  <span className="main-font"> {data.company.employees} +</span>
                </Typography>
                <Typography
                  align="left"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    {" "}
                    <i> Employees </i>
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="right"
                  color="text.primary"
                >
                  <b>
                    <a href={data.company.links.website} target="_blank">
                      <span className="main-font">SpaceX</span>
                    </a>
                  </b>
                </Typography>
                <Typography
                  align="right"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    {" "}
                    <i> Official website </i>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
        {/* Component import */}
        <Footer />
        {/* *** */}
      </Box>
    </main>
  );
};

export default Launches;
