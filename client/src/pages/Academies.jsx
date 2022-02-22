import React from 'react';
import { QUERY_ACADEMIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Container } from '@mui/material';
import AcademiesContent from '../components/Academy';


export default function Academies() {
  return (
        <AcademiesContent />
  )
}

