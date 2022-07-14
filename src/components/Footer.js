import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="md">
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          gutterBottom
          color="primary"
        >
          <span className="main-font">
            {" "}
            Made with ❤️ &{" "}
            <Link href="https://api.spacex.land/graphql/" target="_blank">
              SpaceX GraphQL API
            </Link>
          </span>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <span className="main-font">
            {" "}
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}{" "}
            <Link href="https://sid-projects.netlify.app/" target="_blank">
              My Other Projects
            </Link>
          </span>
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
