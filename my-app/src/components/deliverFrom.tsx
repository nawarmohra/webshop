import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

const deliverFrom = ({
  handleNext,
  handleBack,
  values: { firstName, lastName, adress, zip, city, email, phone, shipping, selected }
}) => {
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
          <ListItemText primary="Betalningssätt" secondary={selected} />
        </ListItem>

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
  )
}

export default deliverFrom;

