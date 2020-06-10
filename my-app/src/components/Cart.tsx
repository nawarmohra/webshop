import React, { useContext } from "react";
import Header from "./Header";
import CartContext from "../context/cartContext";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { products } from "../products";

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

const Product = (id, count) => {
  let product;
  product = products.find((product) => {
    return product.id == id ? product : null;
  });
  return (
    <StyledTableRow key={product.name}>
      <StyledTableCell component="th" scope="row">
        <img src={product.image} style={{ height: 80 }}></img>
      </StyledTableCell>
      <StyledTableCell align="right">{product.title}</StyledTableCell>
      <StyledTableCell align="right">{product.price}</StyledTableCell>
      <StyledTableCell align="right">{count}</StyledTableCell>
      <StyledTableCell align="right">{count * product.price}</StyledTableCell>
    </StyledTableRow>
  );
};

const Cart = () => {
  const { state } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      ></Header>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Count</StyledTableCell>
              <StyledTableCell align="right">Total Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row) => Product(row.id, row.count))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
