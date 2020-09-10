import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Options from './Options';
import CountriesAPI from './CountriesAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
  section4:{
    alignContent:"center",
    margin: theme.spacing(4,0,0,4)
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1} >
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
             CLIENT REST - Propriedades dos Paises
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Please choose type that you want to convert
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type to Download
        </Typography>
      </div>
     <CountriesAPI></CountriesAPI>
    </div>

  );
}