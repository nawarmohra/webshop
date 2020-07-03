import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




// Destructure props
// const FirstStep
const AddressForm  = ({
  handleNext,
  handleChange,
  values: { firstName, lastName, adress, zip, city, email, phone, shipping, payment },
  filedError,
  isError
}) => {
  const isEmpty =
    firstName.length > 0 &&
    lastName.length > 0 &&
    adress.length > 0 &&
    zip.length > 0 &&
    city.length > 0 &&
    phone.length > 0 &&
    email.length > 0 
    // cardName.length > 0 && 
    // cardNumber.length > 0 && 
    // cvv.length > 0 

    // cardName, cardNumber, cvv

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Adressuppgifter
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField

          fullWidth
            label="Förnamn"
            name="firstName"
            placeholder="Ditt förnamn"
            defaultValue={firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            error={filedError.firstName !== ""}
            helperText={
              filedError.firstName !== "" ? `${filedError.firstName}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
            label="Efternamn"
            name="lastName"
            placeholder="Ditt efternamn"
            defaultValue={lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            error={filedError.lastName !== ""}
            helperText={
              filedError.lastName !== "" ? `${filedError.lastName}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
            label="Adress"
            name="adress"
            placeholder="Din adress"
            defaultValue={adress}
            onChange={handleChange("adress")}
            margin="normal"
            error={filedError.adress !== ""}
            helperText={
              filedError.adress !== "" ? `${filedError.adress}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
            label="Postnummer"
            name="zip"
            placeholder=" xxx xx"
            defaultValue={zip}
            onChange={handleChange("zip")}
            margin="normal"
            error={filedError.zip !== ""}
            helperText={filedError.zip !== "" ? `${filedError.zip}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
            label="Postort"
            name="city"
            placeholder="Din postort"
            defaultValue={city}
            onChange={handleChange("city")}
            margin="normal"
            error={filedError.city !== ""}
            helperText={filedError.city !== "" ? `${filedError.city}` : ""}
            required
          />
          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="E-post"
            name="email"
            placeholder="Din e-postaddress"
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            fullWidth
            label="Telefonnummer"
            name="phone"
            placeholder="Format: xxx-xxxxxxx"
            defaultValue={phone}
            onChange={handleChange("phone")}
            margin="normal"
            error={filedError.phone !== ""}
            helperText={filedError.phone !== "" ? `${filedError.phone}` : ""}
            required
          />
        </Grid>

      
      </Grid> 
      
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
          >
          Nästa
        </Button>
        
      </div>
    </Fragment>
  )
};

export default AddressForm;
