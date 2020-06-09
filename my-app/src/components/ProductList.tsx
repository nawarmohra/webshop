import React, { Component } from 'react'
import { product , products } from '../products';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {cartContext} from './context/cartContext';


export interface State{
  handleTextAreaUpdate: Function;
  textArea: any
}
const addToCart = () => {
  console.log("you clicked..");
  //Frida to do implemant later
  

}



export class ProductList extends Component<{}, State> {
  constructor (props: {}) {
    super(props)
  
  }  


    render() {
      return (
        <div>
            <Grid >
                {products.map((product) => {
                  return (
                    <Paper elevation={3} >
                      <Grid style={{ padding: 50 }}>
                        <Grid container spacing={2} style={{ marginBottom:30}}>
                            <Grid item>
                            <img style={{ height: 400 }} src={product.image} alt={product.title} />
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm container>
                          <Typography gutterBottom variant="subtitle1">
                            {product.title}
                          </Typography>
                          </Grid>
                          <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            ${product.price}
                          </Typography>
                          </Grid>
                          <Grid item xs style={{ marginBottom:30 }}>
                            <Button variant="contained" color="primary" onClick = {addToCart} >
                            Add to cart
                            </Button>
                          </Grid>
                      </Grid>
                    </Paper>
                  )
                })}
            </Grid>
        
        </div>
      )
    }
  
}


