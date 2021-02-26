import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Login = props => {
 
  return (
    <div className="Login">
       <h1>Login to Your Account</h1>
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
            Login
          </Button>
    </div>  
  );
}

export default Login;