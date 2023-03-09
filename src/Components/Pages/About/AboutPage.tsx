import React from 'react';
import { TestBR } from '../../Temp/ScrollTest';
import { Grid, Card } from '@mui/material';

function About() {
  return (
    <section id='about'>
      <h2>About Page</h2>
      <p>Welcome to the about page</p>

      <Grid item spacing={2}>
        <Grid xs={8}>
          <Card>xs=8</Card>
        </Grid>
        <Grid xs={4}>
          <Card>xs=4</Card>
        </Grid>
        <Grid xs={4}>
          <Card>xs=4</Card>
        </Grid>
        <Grid xs={8}>
          <Card>xs=8</Card>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
