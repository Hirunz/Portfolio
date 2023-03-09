import React from 'react';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
function Home() {
  return (
    <div id='home'>
      <Container>
        <Typography variant='h1'>Hello</Typography>

        <Row>
          <Col>
            {/* <Typography variant='h2' gutterBottom>
              Welcome to My App
            </Typography> */}
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            {/* <Typography variant='h5' gutterBottom>
              Hello, I'm Hirun Kodituwakku
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Software Engineering Intern
            </Typography>
            <Typography variant='body1' gutterBottom>
              Email: hirunz2000@gmail.com
            </Typography>
            <Typography variant='body1' gutterBottom>
              Phone: +94768452198
            </Typography>
            <Typography variant='body1' gutterBottom>
              Location: Galle, Sri Lanka
            </Typography> */}
          </Col>
          <Col md={6}>
            {/* Add an image of yourself here */}
            <img src='https://picsum.photos/400/600' alt='Hirun Kodituwakku' />
          </Col>
        </Row>
        <Button title='hello' variant='outlined' />
      </Container>
    </div>
  );
}

export default Home;
