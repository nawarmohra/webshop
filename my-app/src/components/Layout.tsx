import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import ProductList from "./ProductList";
import Grid from "@material-ui/core/Grid";

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
  })
);

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
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
