import { useQuery } from "@apollo/client";
import { GET_COMPANY } from "../queries/queries";
import { SiSpacex } from "react-icons/si";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//Components
import Loader from "./Loader";

const Launches = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);

  if (error) return <p>`Error :( ${error.message}`</p>;
  if (loading) {
    return <Loader />;
  }
  console.log(data);
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            SPACE{" "}
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
            {data.company.summary}
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
                  {data.company.ceo}
                </Typography>
                <Typography
                  align="left"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <i> CEO & Founder </i>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="right"
                  color="text.primary"
                >
                  {data.company.headquarters.state}
                </Typography>
                <Typography
                  align="right"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <i> Headquarter </i>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="left"
                  color="text.primary"
                >
                  {data.company.employees} +
                </Typography>
                <Typography
                  align="left"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <i> Employees </i>
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
                      spacex
                    </a>
                  </b>
                </Typography>
                <Typography
                  align="right"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <i> Official website </i>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </main>
  );
};

export default Launches;
