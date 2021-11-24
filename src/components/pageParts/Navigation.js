import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import{ Link as RouterLink} from "react-router-dom"
import './pageParts.css'

export default function Navigation() {



  return (
    <Box  >
      <AppBar position="static" id='appBar'  >
        <Toolbar  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
            backgroundColor: 'white',

      }}>
           <Link component={RouterLink} to='/' underline="none"  sx={{ m: 2, color: '#BB4A4A', fontSize: '1.1rem' }}>Home</Link>
           <Link component={RouterLink} to='/data-preparation' underline="none"  sx={{ m: 2, color: '#BB4A4A', fontSize: '1.1rem' }}>Data Preparation</Link>
           <Link component={RouterLink} to='/visualize' underline="none"  sx={{ m: 2, color: '#BB4A4A', fontSize: '1.1rem' }}>Visualize</Link>
            <Link component={RouterLink} to='/about' underline="none"  sx={{ m: 2, color: '#BB4A4A', fontSize: '1.1rem' }}>About</Link>


        </Toolbar>
      </AppBar>
    </Box>
  );
}