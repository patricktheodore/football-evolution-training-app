import { Box, Container, Grid, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import Auth from '../utils/auth';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


export default function Memberships() {

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout() {
    const price = 99;


    getCheckout({
      variables: { price: price },
    });
  }

  return (
    <Container maxWidth="l">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} lg={10} textAlign="center" sx={{ my: 10 }}>
            <Typography variant='h4'>
              12 Month Subscription.
            </Typography>
            <Typography variant='h4' mb={4}>
              $99.00
            </Typography>
            <Typography variant='h5' mt={4} mb={4}>
              Access every session FET has to offer for an entire year, plus receive unlimited feedback from our elite coaches.
            </Typography>
            <Container>
              {Auth.loggedIn() ? (
                <Button variant="primary" sx={{
                  backgroundColor: '#404040',
                  color: 'white',
                  '&:hover': { backgroundColor: "#07c400", color: "white" },
                  height: '2rem',
                  width: '6rem'
                }} 
                onClick={submitCheckout}>BUY</Button >
              ) : (
                <span>(log in to check out)</span>
              )}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
