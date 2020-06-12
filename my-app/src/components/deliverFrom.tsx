import React, { Component, useContext } from 'react'
//import "./MyForm.css"
import Button from '@material-ui/core/Button' 
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import Header from './Header'
import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import paymentMethod from './paymentMethod';

  
  export default function DeliverFrom() {
        return (
            <div>
                <FormControl required>
                    <Select
                    id="demo-customized-select-native"
                    value="0"
                    >
                        <option aria-label="None" value="" />
                        <option value={0}>Postnord 3-6 arbetsdagar </option>
                        <option value={100}>DHL Express 1-3 arbetsdagar </option>
                        <option value={100}>Bring 1-3 arbetsdagar</option>
                    </Select>
                </FormControl>
            </div>
    );
}

  
