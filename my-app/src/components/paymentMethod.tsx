import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import CreditCard from "./payments/creditCard";

const PaymentMethod = ({
  handleNext,
  handleBack,
  handleChange,
  values: { payment },
  filedError,
  isError,
}) => {
  // const isEmpty = payment.length > 0;

  const validatePayment = () => {
    switch (payment) {
      case "credit":
        if (
          paymentData.cardHolder.length > 0 &&
          paymentData.cardNumber.length > 0 &&
          paymentData.cardExpire.length > 0 &&
          paymentData.cvv.length > 0
        ) {
          return true;
        } else {
          return false;
        }
      case "swish":
        return paymentData.swish.length > 0 ? true : false;
      case "paypal":
        return paymentData.paypalEPost.length > 0 ? true : false;
      default:
        return false;
    }
  };

  const handlePaymentData = (input) => ({ target: { value } }) => {
    setPaymentData({
      ...paymentData,
      [input]: value,
    });
  };

  const [paymentData, setPaymentData] = useState({
    cardHolder: "",
    cardNumber: "",
    cardExpire: "",
    cvv: "",
    swish: "",
    paypalEPost: "",
  });

  return (
    <div style={{ padding: 100, marginTop: 10, marginBottom: 10 }}>
      <Fragment>
        {/* <Payment /> */}

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            {/* <FormControlLabel htmlFor="gender">Gender /> */}
            <RadioGroup value={payment} onChange={handleChange("payment")}>
              <FormControlLabel
                value="credit"
                control={<Radio />}
                label="Credit Card"
              />
              {payment === "credit" && (
                <CreditCard handlePaymentData={handlePaymentData} />
              )}

              <FormControlLabel
                value="swish"
                control={<Radio />}
                label="Swish"
              />
              {payment === "swish" && (
                <TextField
                  label="Swish"
                  placeholder="Ditt telefonnummer"
                  onChange={handlePaymentData("swish")}
                  inputProps={{
                    minlength: 10,
                    maxlength: 10,
                  }}
                />
              )}

              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
              />
              {payment === "paypal" && (
                <TextField
                  label="E-post"
                  placeholder="E-post"
                  onChange={handlePaymentData("paypalEPost")}
                  inputProps={{
                    minlength: 10,
                    maxlength: 10,
                  }}
                />
              )}
            </RadioGroup>
          </FormControl>
        </Grid>

        <div
          style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
        ></div>

        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Button
            variant="contained"
            color="default"
            onClick={handleBack}
            style={{ marginRight: 20 }}
          >
            Tillbaka
          </Button>

          <Button
            variant="contained"
            disabled={!validatePayment() || isError}
            color="primary"
            onClick={handleNext}
          >
            Nästa
          </Button>
        </div>
      </Fragment>
    </div>
  );
};

export default PaymentMethod;
