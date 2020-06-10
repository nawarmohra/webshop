import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

// import { Cartprovider } from "./context/cartProvider";

import ProductList from "./ProductList";
import Grid from "@material-ui/core/Grid";
import { findByLabelText } from "@testing-library/react";
import { inherits } from "util";
import { Container } from "@material-ui/core";
import { products } from "../products";
import Header from "./Header";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      ></Header>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {/* <Cartprovider> */}
        <Grid
          container
          direction="row"
          item
          xs={4}
          spacing={3}
          style={{ margin: "auto" }}
        >
          <ProductList />
        </Grid>
        {/* </Cartprovider> */}
      </main>
    </div>
  );
}
