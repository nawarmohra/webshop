import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { Typography, Radio } from "@material-ui/core"

const paymentMethod = ({
  handleNext,
  handleBack,
  handleChange,
  values: { cardName, cardNumber, cvv , DeliverMethod , Payment },
  filedError,
  isError
}) => {

  const isEmpty = 
  Payment.length > 0 && 
  DeliverMethod.length > 0 




return (
  <div style={{padding: 100, marginTop: 10, marginBottom: 10 }}>

  <Fragment>
     <Typography variant="h6" gutterBottom>
     Leveranssätt
    </Typography>
    <Grid>
      <DeliverMethod />
    </Grid>
    <Typography variant="h6" gutterBottom>
    Betalningsmetod
    </Typography>
    <Grid>
      <Payment />
    </Grid>
      
  <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 20 }}>
          Tillbaka
        </Button>

        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}>
          Nästa
        </Button>
  </div>
      
  </Fragment>
  </div>
)
};

export default paymentMethod;
