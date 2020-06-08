import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

 const NavBar = () => {
  return (
    <div>
      <List>
          {['Home', 'Products', 'Cart'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 4 === 0 ? <InboxIcon />  :  <MailIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </div>
  )
}
export default NavBar