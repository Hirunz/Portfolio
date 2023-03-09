import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ExperienceModal from './ExperienceModal';

const ExperiencesPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <ExperienceModal />
        </Grid>
        <Grid xs={6} md={4}>
          <ExperienceModal />
        </Grid>
        <Grid xs={6} md={4}>
          <ExperienceModal />
        </Grid>
        <Grid xs={6} md={8}>
          <ExperienceModal />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperiencesPage;
