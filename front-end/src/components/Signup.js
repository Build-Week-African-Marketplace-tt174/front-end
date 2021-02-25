import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Signup = props => {

    return (
      <div>
            <h1>Create an Account</h1>
            <TextField
            label="Company Name"
            type="companyname"
            placeholder="Company Name"
            name="companyname"
            />
            <TextField
             label="Email"
             type="email"
             placeholder="Email"
             name="email"
            />
            <TextField
            label="Username"
            type="username"
            placeholder="Username"
            name="username"
            />
            <TextField
             label="Password"
             type="password"
             placeholder="Password"
             name="password"
            />
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        <div>
        </div>
        </div>
    );
};


export default Signup