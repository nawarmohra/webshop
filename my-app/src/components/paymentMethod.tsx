import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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
  <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
          fullWidth
          label="Namn på kortet"
          name="cardName"
          placeholder="Ditt namn"
          defaultValue={cardName}
          onChange={handleChange("cardName")}
          margin="normal"
          error={filedError.cardName !== ""}
          helperText={filedError.cardName !== "" ? `${filedError.cardName}` : ""}
          required
        />
      </Grid>

      <Grid item xs={12}>
          <TextField
          fullWidth
          label="Kortnummer"
          name="cardNumber"
          placeholder="Kortnummer"
          defaultValue={cardNumber}
          onChange={handleChange("cardNumber")}
          margin="normal"
          error={filedError.cardNumber !== ""}
          helperText={filedError.cardNumber !== "" ? `${filedError.cardNumber}` : ""}
          required
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="CVV"
          name="cvv"
          placeholder="CVV"
          defaultValue={cvv}
          onChange={handleChange("cvv")}
          margin="normal"
          error={filedError.cvv !== ""}
          helperText={filedError.cvv !== "" ? `${filedError.cvv}` : ""}
          required
        />
      </Grid>

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
      </Grid>
      </Fragment>

)
};

export default paymentMethod;
