import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CountriesAPI from './CountriesAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
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
        Por favor, escolha o tipo que deseja converter
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
            <div>
              <img id="imaToChange" width="100" height="50" src="" alt="Selecione o link"></img>
            </div>
      </div>
     <CountriesAPI></CountriesAPI>
    </div>

  );
}