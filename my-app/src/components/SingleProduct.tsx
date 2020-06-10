import React, { useContext } from "react";
import { products } from "../products";
import Header from "./Header";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import CartContext from "../context/cartContext";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SingleProduct = (props: {
  avatarSrc: string;
  title: string;
  subtitle: string;
  descrption: Text;
  imgSrc: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  let { id } = useParams();
  let product;
  product = products.find((product) => {
    return product.id == id ? product : null;
  });

  const { addCartItem } = useContext(CartContext);

  return (
    <div>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      ></Header>
      <Grid>
        <Grid
          style={{
            padding: 50,
            display: "grid",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Grid container spacing={2} style={{ marginBottom: 30 }}>
            <Grid item>
              <img
                style={{ height: 550, cursor: "pointer" }}
                src={product.image}
                alt={product.title}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Typography
              gutterBottom
              style={{ cursor: "pointer" }}
              variant="subtitle1"
            >
              {product.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              ${product.price}
            </Typography>
          </Grid>
          <Grid item xs style={{ marginBottom: 30 }}>
            <Button
              variant="contained"
              color="primary"
              data-id={product.id}
              onClick={(e) => {
                const id = e.currentTarget.dataset.id;
                addCartItem(id);
              }}
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleProduct;
