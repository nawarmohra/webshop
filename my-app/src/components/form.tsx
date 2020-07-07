import React, { Component, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ChangeEvent } from "react";
import { EnterHandler } from "react-transition-group/Transition";
import { maxHeight, lineHeight } from "@material-ui/system";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  adress: "",
  price: 0,
  redirect: false,
};

export class checkoutInfo extends Component {
  state = initialState;
  handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.currentTarget;
    this.setState(
      {
        ...this.state,
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect)
      return (
        <Redirect
          to={{
            pathname: "/Receipt",
            state: {
              ...this.state,
            },
          }}
        />
      );
    else
      return (
        <div>
          <form autoComplete="on" onSubmit={this.handleSubmit.bind(this)}>
            <h1>Check out</h1>
            <TextField
              label="First name"
              name="firstName"
              variant="outlined"
              onChange={this.handleChange}
              inputProps={{
                minlength: 3,
                required: true,
              }}
            />
            <TextField
              label="Last name"
              name="lastName"
              onChange={this.handleChange}
              variant="outlined"
              inputProps={{
                minlength: 3,
                required: true,
              }}
            />

            <TextField
              label="Email"
              type="email"
              id="filled-size-small"
              name="email"
              variant="outlined"
              onChange={this.handleChange}
              inputProps={{
                minlength: 3,
                required: true,
              }}
            />
            <TextField
              label="Phone number"
              type="tel"
              name="phone"
              onChange={this.handleChange}
              variant="outlined"
              inputProps={{
                minlength: 3,
                required: true,
              }}
            />
            <TextField
              label="Adress"
              name="adress"
              onChange={this.handleChange}
              variant="outlined"
              inputProps={{
                minlength: 3,
                required: true,
              }}
            />
            <div>
              <Button
                variant="contained"
                size="small"
                color="primary"
                type="submit"
              >
                submit
              </Button>
            </div>
          </form>
        </div>
      );
  }
}
