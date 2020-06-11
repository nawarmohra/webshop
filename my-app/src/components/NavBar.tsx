import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from "react-router-dom";

const navigationRouteMapper = {
  Home: "/",
  Cart: "/cart",
};

const NavBar = () => {
  const history = useHistory();
  return (
    <div>
      <List>
        {["Home", "Cart"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              history.push(navigationRouteMapper[text]);
            }}
          >
            <ListItemIcon>
              {index % 4 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default NavBar;
