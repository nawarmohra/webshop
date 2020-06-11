import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import { products } from "../products";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export interface State {
  handleTextAreaUpdate: Function;
  textArea: any;
}

const ProductList = () => {
  const { addCartItem } = useContext(CartContext);
  const history = useHistory();
  return (
    <div>
      {products.map((product) => {
        return (
          <Paper elevation={3}>
            <Grid style={{ padding: 50 }}>
              <Grid container spacing={2} style={{ marginBottom: 30 }}>
                <Grid item>
                  <img
                    style={{ height: 400, cursor: "pointer" }}
                    src={product.image}
                    alt={product.title}
                    data-id={product.id}
                    onClick={(e) => {
                      const id = e.currentTarget.dataset.id;
                      history.push(`/product/${id}`);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm container>
                <Typography
                  gutterBottom
                  style={{ cursor: "pointer" }}
                  variant="subtitle1"
                  data-id={product.id}
                  onClick={(e) => {
                    const id = e.currentTarget.dataset.id;
                    history.push(`/product/${id}`);
                  }}
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
          </Paper>
        );
      })}
    </div>
  );
};

export default ProductList;
// }
