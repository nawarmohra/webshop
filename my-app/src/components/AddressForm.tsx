import React, { Fragment, useContext } from "react";
import CartContext from "../context/cartContext";
import { products } from "../products";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Destructure props
// const FirstStep
const AddressForm = ({
  handleNext,
  handleChange,
  values: { firstName, lastName, adress, zip, city, email, phone, shipping },
  filedError,
  isError,
}) => {
  const isEmpty =
    firstName.length > 0 &&
    lastName.length > 0 &&
    adress.length > 0 &&
    zip.length > 0 &&
    city.length > 0 &&
    phone.length > 0 &&
    email.length > 0 &&
    shipping.length > 0;
  //payment.length > 0
  // cardName.length > 0 &&
  // cardNumber.length > 0 &&
  // cvv.length > 0

  // cardName, cardNumber, cvv
  const { state } = useContext(CartContext);
  let totalPrice = 0;
  let product;
  state.map((cartItem) => {
    product = products.find((product) => {
      if (product.id === cartItem.id) {
        totalPrice += product.price * cartItem.count;
      }
    });
  });

  const deliveryAt = () => {
    let currentData = new Date().getTime();
    switch (shipping) {
      case "PostNord":
        return new Date(currentData + 7 * 24 * 60 * 60 * 1000).toDateString();
      case "Schenker":
        return new Date(currentData + 2 * 24 * 60 * 60 * 1000).toDateString();
      case "DHL":
        return new Date(currentData + 4 * 24 * 60 * 60 * 1000).toDateString();
      default:
        return "Not Defined";
    }
  };
  // PostNord 20kr , 7 dager
  // DHL 100 kr, 4 dager
  //  Schenker 200kr , 2 dager
  const shippingFee = () => {
    switch (shipping) {
      case "PostNord":
        return "20kr";
      case "Schenker":
        return "200kr";
      case "DHL":
        return "100kr";
      default:
        return "Not Defined";
    }
  };

  // totalPrice += product.price * count;

  return (
    <div style={{ padding: 100, marginTop: 10, marginBottom: 10 }}>
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Adressuppgifter
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              //   required
              //   id="firstName"
              //   name="firstName"
              //   label="First name"
              //   fullWidth
              //   autoComplete="given-name"
              //   inputProps={{
              //       minlength : 5,
              //       required: true
              //   }}
              // />
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
              //   required
              //   id="lastName"
              //   name="lastName"
              //   label="Last name"
              //   fullWidth
              //   autoComplete="family-name"
              //   inputProps={{
              //       minlength : 5,
              //       required: true
              //   }}
              // />
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
              //   required
              //   id="address1"
              //   name="address1"
              //   label="Address line 1"
              //   fullWidth
              //   autoComplete="shipping address-line1"
              //   inputProps={{
              //       minlength : 5,
              //       required: true
              //   }}
              // />
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
              //   id="address2"
              //   name="address2"
              //   label="Address line 2"
              //   fullWidth
              //   autoComplete="shipping address-line2"
              //   inputProps={{
              //       minlength : 5,
              //       required: true
              //   }}
              // />
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
              //   required
              //   id="city"
              //   name="city"
              //   label="City"
              //   fullWidth
              //   autoComplete="shipping address-level2"
              //   inputProps={{
              //       minlength : 5,
              //       required: true
              //   }}
              // />
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
                helperText={
                  filedError.email !== "" ? `${filedError.email}` : ""
                }
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
                helperText={
                  filedError.phone !== "" ? `${filedError.phone}` : ""
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required margin="normal">
                <InputLabel htmlFor="shipping">Leveranssätt</InputLabel>
                <Select value={shipping} onChange={handleChange("shipping")}>
                  <MenuItem value={"PostNord"}>
                    PostNord 20kr , 7 dager
                  </MenuItem>
                  <MenuItem value={"DHL"}>DHL 100 kr, 4 dager</MenuItem>
                  <MenuItem value={"Schenker"}>
                    Schenker 200kr , 2 dager
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <List disablePadding>
              <ListItem>
                <ListItemText primary="delivery At" secondary={deliveryAt()} />
                <ListItemText primary="Frakt" secondary={shippingFee()} />
                <ListItemText
                  primary="Moms"
                  secondary={(totalPrice * 25) / 100}
                />
                <ListItemText primary="Varukostnad" secondary={totalPrice} />
                {/* Total Checkout : {totalPrice} */}
              </ListItem>
            </List>
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
    </div>
  );
};

export default AddressForm;
