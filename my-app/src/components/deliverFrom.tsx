import React, { Component, useContext, useState } from "react";
//import "./MyForm.css"
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import { FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import paymentMethod from "./paymentMethod";

export default function DeliverFrom() {
  const [deliveryType, setdeliveryType] = useState("Postnord");

  const deliveryTypeChanged = function (deliveryType) {
    setdeliveryType(deliveryType);
  };

  return (
    <div>
      <FormControl required>
        <Select
          id="demo-customized-select-native"
          value={deliveryType}
          onChange={(deliveryType) => {
            deliveryTypeChanged(deliveryType.target.value);
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Postnord"}>Postnord 3-6 arbetsdagar </option>
          <option value={"DHL Express"}>DHL Express 1-3 arbetsdagar </option>
          <option value={"Bring"}>Bring 1-3 arbetsdagar</option>
        </Select>
        {(deliveryType == "Bring" || deliveryType == "DHL Express") && (
          <p>{deliveryType} will costs 100kr</p>
        )}
      </FormControl>
    </div>
  );
}
