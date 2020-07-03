import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import CartProducts from './cart-products';

const deliverFrom = ({
  handleNext,
  handleBack,
  values: { firstName, lastName, adress, zip, city, email, phone, shipping, payment, cardName, cardNumber, cvv }
}) => {
  return (
    <Fragment>
      <List disablePadding>
 
      <CartProducts />
     
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Adress" secondary={adress} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Postnummer" secondary={zip} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Postort" secondary={city} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="E-postadress" secondary={email} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Telefonnummer" secondary={phone} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Frakt" secondary={shipping} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Betalningssätt" secondary={payment} />
        </ListItem>

        <Divider />

        <Divider />

        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone.length > 0 ? phone : "Not Provided"}
          />
        </ListItem>
      </List>

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Tillbaka
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleNext}
        >
          Bekräfta och fortsätt
        </Button>
      </div>
    </Fragment>
  )
}

export default deliverFrom;
