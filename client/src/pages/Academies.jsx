import React from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_ACADEMIES } from '../utils/queries';
import { useMutation, useQuery } from '@apollo/client';

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
    <div>Academies</div>
  )
}

