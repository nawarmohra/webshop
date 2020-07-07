import React, { Fragment, useContext } from "react";
import CartContext from "../context/cartContext";
import { products } from "../products";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const DeliverFrom = ({
  handleNext,
  handleBack,
  values: {
    firstName,
    lastName,
    adress,
    zip,
    city,
    email,
    phone,
    shipping,
    payment,
  },
}) => {
  const { state } = useContext(CartContext);
  let totalPrice = 0;
  let product;
  state.map((cartItem) => {
    console.log(cartItem);
    product = products.find((product) => {
      if (product.id === cartItem.id) {
        totalPrice += product.price * cartItem.count;
      }
    });
  });
  const shippingFee = () => {
    switch (shipping) {
      case "PostNord":
        return 20;
      case "Schenker":
        return 200;
      case "DHL":
        return 100;
      default:
        return 0;
    }
  };
  return (
    <Fragment>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="Förnamn" secondary={firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Efternamn" secondary={lastName} />
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

        <Divider />

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

        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone.length > 0 ? phone : "Not Provided"}
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary=" Totalpris ink moms "
            secondary={(totalPrice * 125) / 100 + shippingFee()}
          />
        </ListItem>
      </List>

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
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
  );
};

export default DeliverFrom;
