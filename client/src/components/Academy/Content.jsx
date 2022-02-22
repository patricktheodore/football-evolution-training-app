import { Container, Divider, Paper, Typography, Chip } from '@mui/material'
import React from 'react'

export default function Content() {
  return (
    <Container xs={12} lg={10} sx={{ justifyContent: 'center', textAlign: 'center'}}>
      <Divider>
        <Chip label="Welcome to the FET Academy!" sx={{ fontSize: '1rem', px: 3}}/>
      </Divider>
      <Container xs={12} md={10} lg={6}>
        <Typography>
            Hi There
        </Typography>    
      </Container>
      <Container xs={12} md={10} lg={6}>
        <Typography>
            Hi There
        </Typography>    
      </Container>        
    </Container>
  )
}
