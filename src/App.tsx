import './App.scss';

import Layout from './layouts/default';
import React, { Component } from 'react';
import Icon, { Stack } from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Paper, makeStyles, Theme, createStyles, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

const App: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();

    return (
      <Layout>


        
   
      </Layout>
    );
  
}

export default App;