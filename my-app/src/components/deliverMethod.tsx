import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CreditCard from './payments/creditCard'
import { TextField, FormHelperText, Typography } from '@material-ui/core';


let totalPrice = 0;
let PostNord = 0;
let DHL = 0;
let Schenker = 0;

export default class DeliverMethod extends Component {
    
    state = { selected: "" };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ selected: e.target.value });
    };
    render() {

        PostNord = totalPrice + 20;
        DHL = totalPrice + 100;
        Schenker = totalPrice + 200;
        const { selected } = this.state;
      return (
          
        <FormControl required component="fieldset" name="method-of-deliver">
          <RadioGroup onChange={this.handleChange} value={selected}>
            <FormControlLabel
              value="PostNord"
              control={<Radio />}
              label="PostNord, 62 timmar"
            />
             {this.state.selected === 'PostNord' && 
             <Typography>
                 Total Checkout : {PostNord} kr
                 </Typography>}

            <FormControlLabel 
            value="DHL Express" 
            control={<Radio />} 
            label="DHL Express, 24 timmar, 100kr" />
            {this.state.selected === 'DHL Express' && 
            <Typography>
                 Total Checkout : {DHL} kr
            </Typography>}

            <FormControlLabel
              value="Schenker"
              control={<Radio />}
              label="Schenker, 62 timmar"
            />
            {this.state.selected === 'Schenker' &&    
             <Typography>
             Total Checkout : {Schenker} kr
            </Typography>}
          </RadioGroup>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        
      
       
      );
    }
  }

