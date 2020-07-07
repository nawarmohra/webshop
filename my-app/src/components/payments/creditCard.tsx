import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

interface creditCardInterface {
  handlePaymentData: any;
}

export class creditCard extends Component<creditCardInterface> {
  // handleChange=(  e: React.ChangeEvent<HTMLInputElement>)=> {
  //     const { name, value } = e.currentTarget;
  //     this.setState({

  //          ...this.state,
  //          [ name]: value

  //       }, ()=>{console.log(this.state)});
  // };
  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            label="Namn på kortet"
            type="text"
            onChange={this.props.handlePaymentData("cardHolder")}
            inputProps={{
              minlength: 3,
              required: true,
            }}
          />
          <TextField
            label="Kortnummer"
            name="cardNumber"
            onChange={this.props.handlePaymentData("cardNumber")}
            inputProps={{
              required: true,
              minlength: 16,
              maxlength: 16,
            }}
          />
          <TextField
            label="Utgångsdatum"
            type="month"
            defaultValue="2020-05"
            onChange={this.props.handlePaymentData("cardExpire")}
            inputProps={{
              required: true,
            }}
          />
          <TextField
            label="CVC/CVV"
            defaultValue="000"
            onChange={this.props.handlePaymentData("cvv")}
            inputProps={{
              minlength: 3,
              maxlength: 3,
              required: true,
            }}
          />
        </form>
      </div>
    );
  }
}

export default creditCard;
