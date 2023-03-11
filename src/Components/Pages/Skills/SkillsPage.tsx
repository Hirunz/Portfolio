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
import { useTranslation } from 'react-i18next';
import { LargeCard } from '../../Atoms/LargeCard';
import { PageHeading } from '../../Atoms/PageHeading';

function Contact() {
  const { t, i18n } = useTranslation();

  const getTranslationKey = (key: String) => {
    console.log(key);
    console.log(t(`ABOUT.${key}`));
    return t(`SKILLS.${key}`);
  };

  return (
    <div id='skills' className='d-flex flex-column align-items-center'>
      <PageHeading title={getTranslationKey('TITLE')} />

      <LargeCard children={<WebTechnologies />}></LargeCard>
    </div>
  );
}

const WebTechnologies = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText>hello</ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText>hello</ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
};

export default Contact;
