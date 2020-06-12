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


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth: 900,
    margin: "80px auto",
  },
});

const Cart = () => {
  const history = useHistory();
  const { updateCartItem, removeCartItem, state } = useContext(CartContext);

  const classes = useStyles();

  let totalPrice = 0;

  const Product = (id, count) => {
    let product;
    product = products.find((product) => {
      return product.id === id ? product : null;
    });
    totalPrice += product.price * count;
    return (
      <StyledTableRow key={product.name}>
        <StyledTableCell component="th" scope="row">
          <img
            src={product.image}
            style={{ height: 80 }}
            alt={product.image}
          ></img>
        </StyledTableCell>
        <StyledTableCell align="right">{product.title}</StyledTableCell>
        <StyledTableCell align="right">{product.price}</StyledTableCell>
        <StyledTableCell align="right">
          <input
            type="number"
            // defaultValue={count}
            value={count}
            onChange={(e) => {
              let id = product.id;
              let count = parseInt(e.currentTarget.value);
              return count > 1
                ? updateCartItem({ id, count })
                : updateCartItem({ id, count: 1 });
            }}
          />
        </StyledTableCell>
        <StyledTableCell align="right">{count * product.price}</StyledTableCell>
        <StyledTableCell align="right">
          <IconButton
            onClick={() => {
              removeCartItem(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
    );
    
  };

  return (
    <div>
      <Header />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Count</StyledTableCell>
              <StyledTableCell align="right">Total Price</StyledTableCell>
              <StyledTableCell align="right">operation</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row) => Product(row.id, row.count))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <StyledTableCell
                colSpan={5}
                align="right"
                style={{ fontWeight: "bold" }}
              >
                Total Checkout : {totalPrice}
              </StyledTableCell>
            </TableRow>
            <TableRow>
            <StyledTableCell
                colSpan={5}
                align="right"
                style={{ fontWeight: "bold" }}
              >
            
              <Link to="/checkout">
                <Button 
                    variant="contained"
                    color="secondary"
                    startIcon={<CloudUploadIcon />}
                    >
                  Checkout
                </Button>
              </Link>

             </StyledTableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
