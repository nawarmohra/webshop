import React from "react"
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles";
//import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
//import Divider from "@material-ui/core/Divider"
import StepForm from "./StepForm"
import Header from "./Header"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Checkout= ({ classes }) => {


  return (

    <div className="Checkout">
      
      <CssBaseline />
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {
              <div>
                <Header />
              </div>
              }


          </Typography>
          
        </Toolbar>
        <Typography variant="h4" align="center" style={{ marginTop: 80 }}>
          Checkout

        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          Observera att alla rader måste vara ifyllda
        </Typography>
        <div>
        <Paper>
        
          <StepForm />
       
        </Paper>
        </div>
    </div>
  )
}

export default Checkout
