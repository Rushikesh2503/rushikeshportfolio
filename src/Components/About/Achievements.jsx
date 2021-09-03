import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 650,
    margin: `30px auto`,
    padding: theme.spacing(2),
    background: "none",
    border:"2px solid #ebbd5a",
    textAlign: "center",
    color:"#ebbd5a"
  },
  round: {
    background:"black"
  }
}));
const Achievements = () => {
    const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.round} >
              <i class="fas fa-medal"></i>
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Token of appreciation award in National level FKDC 2017 (Organized by F.M.A.E.) at Bangalore</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.round} >
              <i class="fas fa-medal"></i>
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Best Publicity Coordinatorin Vidyotan 2018 Techfest.</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.round} >
              <i class="fas fa-plus-square"></i>
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Event coordinator in Techfest ScrapShop (2016-17)</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.round} >
              <i class="fas fa-plus-square"></i>
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Team-Member in an eventContraption.(Techfest)</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Achievements
