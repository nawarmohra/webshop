import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CreditCard from './payments/creditCard'
import { TextField, FormHelperText } from '@material-ui/core';
 


export default class Payment extends Component {
    
    state = { selected: "" };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ selected: e.target.value });
    };
    render() {
       
      const { selected } = this.state;
      return (
          
        <FormControl required component="fieldset" name="method-of-payment">
          <RadioGroup onChange={this.handleChange} value={selected}>
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit Card"
            />
             {this.state.selected === 'credit' && <CreditCard/>}
            <FormControlLabel 
            value="swish" 
            control={<Radio />} 
            label="Pay directly from bank account" />
            {this.state.selected === 'swish' && 
            <TextField
              label="Your ID"
               
              placeholder="personal number"
              inputProps={{
                minlength : 10,
                maxlength: 10
              }} />}

            <FormControlLabel
              value="cash"
              control={<Radio />}
              label="Cash"
            />
            {this.state.selected === 'cash' && <p>Pay by cash when you recieve the order</p>}


          </RadioGroup>
          <FormHelperText>Required</FormHelperText>
          
        </FormControl>
      
       
      );
    }
  }

