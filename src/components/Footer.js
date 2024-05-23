import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="md">
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          gutterBottom
          color="text.secondary"
        >
          <span className="main-font">
            Made with ❤️ &{" "}
            <a
              href="https://spacex-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="heading-info"> SpaceX GraphQL API </span>
            </a>
          </span>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <span className="main-font">
            {"Copyright © "} 2022 -{new Date().getFullYear()}
            {"."}{" "}
            <a
              href="https://sid-chopra.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="heading-info"> My Other Projects</span>
            </a>
          </span>
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
