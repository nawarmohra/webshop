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
            label="swish" />
            {this.state.selected === 'swish' && 
            <TextField
              label="Det telefonnummer"
              placeholder="telefonnummer"
              inputProps={{
                minlength : 10,
                maxlength: 10
              }} />}


            <FormControlLabel
              value="Paypal"
              control={<Radio />}
              label="Paypal"
            />
            {this.state.selected === 'Paypal' &&    
            <TextField
              label="Email"   
              placeholder="Email"
              inputProps={{
                minlength : 10,
                maxlength: 10
              }} />}

          </RadioGroup>
          <FormHelperText>Required</FormHelperText>
          
        </FormControl>
      
       
      );
    }
  }

