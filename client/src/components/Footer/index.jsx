import { Container, Typography, Stack, Link, IconButton } from '@mui/material';
import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';

function Copyright(props) {
    return (
      <Typography color="white" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/" sx={{ textDecoration: 'none'}}>
          Football Evolution Training
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
    return (
        <Container maxWidth="xl" className='footer-container' align="center" sx={{ justifyContent: 'center', mt: 20, backgroundColor: "#11661f" }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, lg: 10 }}
                sx={{ justifyContent: "center", pt: 20, pb: 10}}
            >
                <IconButton onClick={() => window.open("https://www.facebook.com/footballevolutiontraining", "_blank")}>
                    <FacebookSharpIcon fontSize='large' htmlColor='white' />
                </IconButton>
                <IconButton onClick={() => window.open("https://www.youtube.com/c/footballevolutiontraining", "_blank")}>
                    <YouTubeIcon fontSize='large' htmlColor='white' />
                </IconButton>
                <IconButton onClick={() => window.open("https://www.instagram.com/footballevolutiontraining/", "_blank")}>
                    <InstagramIcon fontSize='large' htmlColor='white' />
                </IconButton>
                <IconButton onClick={() => window.open("https://twitter.com/fet2018", "_blank")}>
                    <TwitterIcon fontSize='large' htmlColor='white' />
                </IconButton>
            </Stack>
            <Copyright sx={{ mt: 8, pb: 4 }} /> 
        </Container>
    );
}
