import React from 'react';
import { QUERY_ACADEMIES } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Container } from '@mui/material';
import Header from './Header';
import Content from './Content';


export default function Academies() {

  const type = 'academy'

  console.log(type)

  const { data } = useQuery(QUERY_ACADEMIES, {
    variables: {
      type: type,
    }
  });

  if (data) {
    console.log(data);
  }

  // have a banner image with logo and title
  // blurb about what it is etc. 
  // query that returns and displays all academies on offer
  // if user is logged in : link to more info ? link to login/signup

  // info located https://www.footballevolutiontraining.com/academy

  // can repeat this format for camps, tournaments, epl



  return (
    <Container sm={12} lg={10} sx={{ justifyContent: 'center' }}>
        <Header />
        <Content />
        
    </Container>
  )
}

