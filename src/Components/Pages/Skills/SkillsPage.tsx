import { Inbox } from '@mui/icons-material';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { TestBR } from '../../Temp/ScrollTest';

function Contact() {
  return (
    <div
      id='skills'
      className='d-flex flex-column bg-dark'
      style={{ paddingTop: '6vh' }}
    >
      <Typography> Skills Page</Typography>

      <div className='bg-dark'>
        <p>Welcome to the skills page</p>

        <WebTechnologies />
      </div>
    </div>
  );
}

const WebTechnologies = () => {
  return (
    <List>
      {/* <ListItem disablePadding>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText>hello</ListItemText>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText>hello</ListItemText>
      </ListItem>
      <Divider /> */}
    </List>
  );
};

export default Contact;
