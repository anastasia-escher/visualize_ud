import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import{ Link as RouterLink} from "react-router-dom"
import * as React from "react";



function Footer() {

  const handlePageChangeGit = () => {
window.location.href="https://www.google.com"
}
const handlePageChangeLink = () => {
window.location.href="https://ch.linkedin.com/in/anastasia-escher-282a35211"
}

    return (
        <footer>
  <Container maxWidth="lg">
    <Box py={6} textAlign="center">

        <Box component="nav" m={4}  >
        <Link component={RouterLink} to='/' variant="body1" color="textSecondary" ml={4} style={{textDecoration: "none"}}>Home</Link>
        <Link component={RouterLink} to='/visualize' variant="body1" color="textSecondary" ml={4} style={{textDecoration: "none"}}>Visualize</Link>
        <Link component={RouterLink} to='/data-preparation'  variant="body1" color="textSecondary" ml={4} style={{textDecoration: "none"}}>Data Preparation</Link>
            <Link component={RouterLink} to='/about' variant="body1" color="textSecondary" ml={4} style={{textDecoration: "none"}}>About</Link>

      </Box>
      <Box mb={3}>

          <GitHubIcon onClick={handlePageChangeGit} />

          <LinkedInIcon onClick={handlePageChangeLink}/>
      </Box>
    </Box>
  </Container>
</footer>

    )
}

export default Footer;


