import React, { Fragment } from 'react';
import { Inbox } from '@mui/icons-material';
import {
  Avatar,
  Card,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MyDivider } from '../../Atoms/Divider';
import { LargeCard } from '../../Atoms/LargeCard';
import { PageHeading } from '../../Atoms/PageHeading';

import { SVGIcon } from '../../Atoms/SVGIcon';

import html5 from '../../../assets/skillsPage/w3_html5-icon.svg';
import css from '../../../assets/skillsPage/w3_css-icon.svg';
import typescriptlang from '../../../assets/skillsPage/typescriptlang-icon.svg';
import tensorflow from '../../../assets/skillsPage/tensorflow-icon.svg';
import trello from '../../../assets/skillsPage/trello-icon.svg';
import systemsManager from '../../../assets/skillsPage/aaa.svg';
import stepFunctions from '../../../assets/skillsPage/stepFunctions.svg';
import sqlite from '../../../assets/skillsPage/sqlite-icon.svg';
import serverlessFramework from '../../../assets/skillsPage/serverlessFramework.svg';
import serverless from '../../../assets/skillsPage/serverless-ar21.svg';
import reactjs from '../../../assets/skillsPage/reactjs-icon.svg';
import rds from '../../../assets/skillsPage/rds.svg';
import pocoo_flask from '../../../assets/skillsPage/pocoo_flask-icon.svg';
import playFramework from '../../../assets/skillsPage/play-seeklogo.com.svg';
import nodejs from '../../../assets/skillsPage/nodejs-icon.svg';
import mongodb from '../../../assets/skillsPage/mongodb-icon.svg';
import material from '../../../assets/skillsPage/material-ui-1.svg';
import lambda from '../../../assets/skillsPage/lambda.svg';
import javascriptIcon from '../../../assets/skillsPage/javascript-icon.svg';
import java from '../../../assets/skillsPage/java-icon.svg';
import sql from '../../../assets/skillsPage/icons8-sql-64.png';
import filmora from '../../../assets/skillsPage/icons8-filmora-96.svg';
import photoshop from '../../../assets/skillsPage/icons8-adobe-photoshop-60.png';
import lightroom from '../../../assets/skillsPage/icons8-adobe-lightroom-60.png';
import graphql from '../../../assets/skillsPage/graphql-icon.svg';
import github from '../../../assets/skillsPage/github-icon.svg';
import git from '../../../assets/skillsPage/git-scm-icon.svg';
import getbootstrap from '../../../assets/skillsPage/getbootstrap-icon.svg';
import firebase from '../../../assets/skillsPage/firebase-icon.svg';
import figma from '../../../assets/skillsPage/figma-icon.svg';
import expressjs from '../../../assets/skillsPage/expressjs-icon.svg';
import codepipeline from '../../../assets/skillsPage/codepipeline.svg';
import atlassian_jira from '../../../assets/skillsPage/atlassian_jira-icon.svg';
import appsync from '../../../assets/skillsPage/appsync.svg';
import apple_xcode from '../../../assets/skillsPage/apple_xcode-icon.svg';
import angular from '../../../assets/skillsPage/angular-icon.svg';
import android from '../../../assets/skillsPage/android-tile.svg';

export const SkillsPage = () => {
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
};

const WebTechnologies = () => {
  type ListRowProps = {
    svg: string;
    text: string;
    fillColor?: boolean;
    disablePadding?: boolean;
  };

  const TechList = (props: {
    children: ListRowProps[];
    title: string;
    width?: string;
    minWidth?: string;
  }) => {
    return (
      <Card
        className='bg-dark px-3 mb-5'
        style={{
          width: props.width || '18%',
          minWidth: props.minWidth || '250px',
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemText>
              <Typography align='center'>{props.title}</Typography>
            </ListItemText>
          </ListItem>
          <MyDivider opacity={0.8} />
          {props.children.map((child, index) => {
            return (
              <ListItem key={index} disablePadding={child.disablePadding}>
                <ListItemIcon>
                  <SVGIcon
                    svg={child.svg}
                    size='sm'
                    alt={child.text}
                    fillColor={child.fillColor ? 'white' : ''}
                  />
                </ListItemIcon>
                <ListItemText>{child.text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Card>
    );
  };

  return (
    <div className='px-md-5 px-sm-3 mx-3 d-flex  flex-wrap justify-content-around '>
      <TechList
        title='Web'
        children={[
          { svg: html5, text: 'HTML' },
          { svg: javascriptIcon, text: 'JavaScript' },
          { svg: getbootstrap, text: 'Bootstrap' },
          { svg: reactjs, text: 'React' },
          { svg: angular, text: 'Angular' },
          { svg: material, text: 'Material UI' },
        ]}
      />
      <TechList
        title='Mobile'
        children={[
          { svg: android, text: 'Android' },
          { svg: apple_xcode, text: 'iOS' },
        ]}
      />

      <TechList
        title='Backend'
        children={[
          { svg: nodejs, text: 'NodeJS' },
          { svg: expressjs, text: 'ExpressJS', fillColor: true },
          { svg: playFramework, text: 'Play Framework' },
          { svg: pocoo_flask, text: 'Flask', fillColor: true },
        ]}
      />
      <TechList
        title='Database'
        children={[
          { svg: firebase, text: 'FireStore' },
          { svg: mongodb, text: 'MongoDB' },
          { svg: sql, text: 'SQL' },
          { svg: sqlite, text: 'SQLite' },
        ]}
      />
      <TechList
        title='Other Technologies'
        children={[
          { svg: typescriptlang, text: 'TypeScript' },
          { svg: git, text: 'Git' },
          { svg: github, text: 'Github' },
          { svg: tensorflow, text: 'TensorFlow' },
          { svg: graphql, text: 'GraphQL' },
        ]}
      />
      <TechList
        title='Cloud Computing Platforms'
        width='20%'
        minWidth='260px'
        children={[
          { svg: firebase, text: 'Firebase' },
          { svg: stepFunctions, text: 'AWS Step Functions' },
          { svg: stepFunctions, text: 'AWS State Machines' },
        ]}
      />
    </div>
  );
};
