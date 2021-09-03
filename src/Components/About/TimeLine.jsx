import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BuildIcon from '@material-ui/icons/Build';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  paper: {
        padding: '6px 16px',
        textAlign: "center",
        background:"#4deff5e2"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


const TimeLine = () => {
     const classes = useStyles();
    return (
        <div style={{
    color:"#fcfcfc",margin:"50px 0"}}>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">
            2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Full Stack Web Development
            </Typography>
            <Typography>Masai School</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">
            2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              MTech In Thermal Engineering
            </Typography>
            <Typography>G.H.Raisoni University</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent>
          <Typography variant="body1">
            2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" >
            < BuildIcon/>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              B.E. In Mechanical Engineering
            </Typography>
            <Typography>Sipna C.O.E.T, Amravati</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent>
          <Typography variant="body1">
            2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AccountBalanceIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Diploma In Mechanical Engineering
            </Typography>
            <Typography>M.S.B.T.E Mumbai</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </div>
    )
}

export default TimeLine
