import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import{ Link as RouterLink} from "react-router-dom"

export default function Navigation() {



  return (
    <Box  >
      <AppBar position="static"   >
        <Toolbar  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
            backgroundColor: '#BB4A4A',
      }}>
           <Link component={RouterLink} to='/' underline="none"  sx={{ m: 2, color: 'white', fontSize: '1.1rem' }}>Home</Link>
           <Link component={RouterLink} to='/data-preparation' underline="none"  sx={{ m: 2, color: 'white', fontSize: '1.1rem' }}>Data Preparation</Link>
           <Link component={RouterLink} to='/visualize' underline="none"  sx={{ m: 2, color: 'white', fontSize: '1.1rem' }}>Visualize</Link>
            <Link component={RouterLink} to='/about' underline="none"  sx={{ m: 2, color: 'white', fontSize: '1.1rem' }}>About</Link>


        </Toolbar>
      </AppBar>
    </Box>
  );
}