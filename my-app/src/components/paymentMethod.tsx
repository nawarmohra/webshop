import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Payment from "./payment"

const paymentMethod = ({
  handleNext,
  handleBack,
  handleChange,
  values: { cardName, cardNumber, cvv },
  filedError,
  isError
}) => {

const isEmpty = 
cardName.length > 0 && 
cardNumber.length > 0 && 
cvv.length > 0 


return (
  <div style={{padding: 100, marginTop: 10, marginBottom: 10 }}>

  <Fragment>

      <Payment />
      
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
