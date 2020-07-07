import React, { Fragment, useContext, useEffect } from "react";
import cardContext from "../context/cartContext";
import Typography from "@material-ui/core/Typography";

const Success = () => {
  const { emptyCart } = useContext(cardContext);
  useEffect(emptyCart, []);
  return (
    <Fragment>
      <Typography variant="h2" align="center">
        Stort Tack!
      </Typography>
      <Typography component="p" align="center" style={{ marginTop: 40 }}>
        Du får ett bekräftelsemejl.
      </Typography>
    </Fragment>
  );
};

export default Success;
