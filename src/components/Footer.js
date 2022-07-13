import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="md" component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          gutterBottom
          color="primary"
        >
          Made with ❤️ and{" "}
          <Link href="https://api.spacex.land/graphql/" target="_blank">
            SpaceX GraphQL API
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <span className="font">
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
