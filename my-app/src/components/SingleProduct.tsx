import React, { useContext } from "react";
import { products } from "../products";
import Header from "./Header";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import CartContext from "../context/cartContext";

const SingleProduct = () => {
  let { id } = useParams();
  const product = products.find((product) => product.id === id);

  const { addCartItem } = useContext(CartContext);

  return (
    <div>
      <Header />
      <Grid>
        <Grid
          style={{
            padding: 50,
            display: "grid",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          {product ? (
            <>
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
            </>
          ) : (
            <h2>This product does not exist....</h2>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleProduct;
