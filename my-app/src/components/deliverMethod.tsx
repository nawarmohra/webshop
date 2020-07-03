import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CreditCard from './payments/creditCard'
import { TextField, FormHelperText, Typography, Card, Button, Grid, Paper } from '@material-ui/core';
import CartContext from '../context/cartContext';



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

//I tried hard to do it but I get very sick so I could not have a chance to finish it, here the code and others in the contex.....


/* export interface Shipping {
  id: number,
  name: string,
  speed: number,
  cost: number
}

export const shippingAlternatives: Shipping[] = [
  {
      id: 1,
      name: 'Postnord',
      speed: 3,
      cost: 50
  },
  {
      id: 2,
      name: 'Parcel Select',
      speed: 2,
      cost: 100
  },
  {
      id: 3,
      name: 'Express Post',
      speed: 1,
      cost: 150
  },
];

export default class DeliverMethod extends Component {
    state = { selected: "" };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ selected: e.target.value });
    };
    render() {

      return (
          
        <CartContext>
                {({ selectedShipping, setSelectedShipping }) => (
                    <div>
                        <br />
                    
                        {shippingAlternatives.map((shipping) => {
                            return (
                                
                                    <Card key={shipping.id} actions={[]} >
                                        <TextField type="warning">Tid för leverans:{shipping.speed * 24} Timmer</TextField><br /><br />
                                        <TextField type="warning">Fraktkostnad:{shipping.cost} kr</TextField><br /><br />
                                        <TextField type="warning">Leveransdatum:</TextField>
                                        <Paper description={new Date(new Date().setDate(new Date().getDate() + shipping.speed)).toISOString().substring(0, 10)} />
                                        <br />

                                        <Button style={selectedShipping.id == shipping.id ? active : inactive} onClick={() => setSelectedShipping(shipping)}>{selectedShipping.id == shipping.id ? "Selected" : "Select Shipping"}</Button>

                                    </Card>
                               
                            )
                        })}
                        <div><h4>Shipping cost selected: {selectedShipping.cost}</h4></div>
                    </div>
                )}
            </CartContext>

        
      
       
      );
    }
  } */

