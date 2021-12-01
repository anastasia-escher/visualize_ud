import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material";



export default  function About() {

    return(
        <>
            <Container maxWidth="md" style={{marginTop: '100px'}} >

                <Typography variant="h4" component="h3" gutterBottom={true}>About</Typography>

                <Typography variant="body1" gutterBottom>
                    The application is developed at the
                    <Link style={{textDecoration: 'none'}} href='https://www.slav.uzh.ch/de.html'>  Slavisches Seminar of the University of Zurich</Link>.
                </Typography>
                <Typography variant="body1" gutterBottom>

                We use of the <Link style={{textDecoration: 'none'}} href='https://github.com/pierpo/react-archer'> react-archer </Link>
                package in order to illustrate syntactic relations between sentence elements in a hierarchical tree-like plot and provides several
                frequency tables based on the imported data. </Typography>
                <Typography variant="body1" gutterBottom>
                This is an open source project.
                    Anyone can download the code and make any changes for their own use.
                </Typography>
                <Typography variant="h5" gutterBottom component="h6">Data policy</Typography>
                <Typography variant="body1" gutterBottom>
                    The application does not collect any user data.
                    All entered queries are deleted after processing and not available for other purposes.
                </Typography>

            </Container>

        </>

    )
}