import React, { useContext } from "react";
import Header from "./Header";
import CartContext from "../context/cartContext";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Button,
  TableFooter,
} from "@material-ui/core/";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { products } from "../products";
import { pathToFileURL } from "url";
import { useHistory, Link } from "react-router-dom";
import CartProducts from "./cart-products";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    maxWidth: 900,
    margin: "50px",
  },
});


const Cart = () => {

  return (
    <div>
      <StyledTableCell>
        <Header />
        <CartProducts />
        <div  style={{ textAlign: "right"}}>
                <Link to="/checkout">
                  <Button 
                    variant="contained"
                    color="secondary"
                    startIcon={<CloudUploadIcon />}
                  >
                    Checkout
                  </Button>
                </Link>
        </div>
      </StyledTableCell>
    </div>
  );
};

export default Cart;
