import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import StepForm from "./StepForm"
import Grid from "@material-ui/core/Grid"
import Header from "./Header"

const Checkout= () =>  {
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
        <Paper elevation={3}>
          <Grid style={{
            padding: 50,
            display: "grid",
            justifyContent: "center",
            marginTop: 30,
          }}>
            <Grid container spacing={2} 
              style={{ marginTop: 30, marginBottom: 30 }}>
              <Grid item >
                <StepForm />
       
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div> 
    </div>
  )
}

export default Checkout;
