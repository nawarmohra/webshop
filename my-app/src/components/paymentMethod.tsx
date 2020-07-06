import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import { FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core"
import CreditCard from './payments/creditCard'

const paymentMethod = ({
  handleNext,
  handleBack,
  handleChange,
  values: { selected },
  //, credit, swish, paypal, cardNumber, cvv 
  filedError,
  isError
}) => {

const isEmpty = 
selected.length > 0 
// && 
// credit.length > 0 && 
// swish.length > 0 && 
// paypal.length > 0 && 
// cardNumber.length > 0 && 

// cvv.length > 0 

return (
  <div style={{padding: 100, marginTop: 10, marginBottom: 10 }}>

  <Fragment>

      {/* <Payment /> */}

      <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            {/* <FormControlLabel htmlFor="gender">Gender /> */}
            <RadioGroup 
            value={selected} 
            
            onChange={handleChange("selected")}>

            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit Card"
            />
            {selected === 'credit' && <CreditCard />}

            <FormControlLabel 
            
            value="credit"
              control={<Radio />}
              label="Swish"
            />
            {selected === 'swish' && 
            <TextField
              label="Swish"   
              placeholder="Swish"
              inputProps={{
                minlength : 10,
                maxlength: 10
              }} />}

<FormControlLabel
              value="paypal"
              control={<Radio />}
              label="Paypal"
            />
            {selected === 'paypal' &&    
            <TextField
              label="E-post"   
              placeholder="Email"
              inputProps={{
                minlength : 10,
                maxlength: 10
              }} />}

          
              
            </RadioGroup>
          </FormControl>
        </Grid>
      
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      ></div>
      
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
