import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import pic from './pic.png';


let rootData = {tokens: [{token: 'spodobil', annot1: 'Verb', annot2: '_', annot3: '_', ud: 'root', numberInSent: 3, numberOfParent: 0}],
    children: [{token: 'vi', annot1: 'Pronomen', annot2: '_', annot3: '_', ud: 'obj', numberInSent: 1, numberOfParent: 3},
    {token: 'Bog', annot1: 'Noun', ud: 'nsubj', numberInSent: 2, numberOfParent: 3},
        {token: 'crstvo', annot1: 'Noun', ud: 'obl', numberInSent: 5, numberOfParent: 3}
    ]};

    let dataLayers = [{tokens: [{token: 'vi', annot1: 'Pronoun', annot2: '_', annot3: '_', ud: 'obj', numberInSent: 1, numberOfParent: 3},
    {token: 'Bog', annot1: 'Noun', annot2: '_', annot3: '_', ud: 'nsubj', numberInSent: 2, numberOfParent: 3},
        {token: 'crstvo', annot1: 'Noun', annot2: '_', annot3: '_', ud: 'obl', numberInSent: 5, numberOfParent: 3}],
    children: [{token: 'vo', annot1: 'Preposition', annot2: '_', annot3: '_', ud: 'case', numberInSent: 4, numberOfParent: 5},
    {token: 'svoe', annot1: 'Adjective', annot2: '_', annot3: '_', ud: 'amod', numberInSent: 6, numberOfParent: 5},
        {token: 'nebesnoe', annot1: 'Adjective', annot2: '_', annot3: '_', ud: 'amod', numberInSent: 7, numberOfParent: 5}]
    }, {tokens: [{token: 'vo', annot1: 'Preposition', annot2: '_', annot3: '_', ud: 'case', numberInSent: 4, numberOfParent: 5},
    {token: 'svoe', annot1: 'Adjective', annot2: '_', annot3: '_', ud: 'amod', numberInSent: 6, numberOfParent: 5},
        {token: 'nebesnoe', annot1: 'Adjective', annot2: '_', annot3: '_', ud: 'amod', numberInSent: 7, numberOfParent: 5}]}];

export default function Home() {

    const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
          <Box py={8} textAlign="center">
      <Typography variant="h3" component="h2" gutterBottom={true}>Visualize Universal Dependencies</Typography>
      <Typography variant="h5" color="textSecondary" paragraph={true}>
          This is a site for visualizing syntactic relations within sentences
          using <a href='https://universaldependencies.org/' style={{textDecoration: 'none'}} target='_blank'>universal dependencies</a> annotation.

      </Typography>
      <Box m={4} >
        <Button variant="text"
                sx={{color: '#BB4A4A'}}
                onClick={()=>navigate("/visualize")}

        >Try It Out</Button>
      </Box>
    </Box>

          <Box sx={{ mx: "auto", width: 500, height: 430 }} textAlign="center">

            <img style={{ width: '300px', height: '360px', margin: "auto" }}
            src={pic}
                    />
              </Box>
            </Container>

    </>
  );
}

// <Visualize rootData={rootData} dataLayers={dataLayers} comment='' color="#BB4A4A" width="1"
//                            line='curve'
//                            dash=''/>