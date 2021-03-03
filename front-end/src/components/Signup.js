import React from 'react';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Nav from "./Nav"

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-left: 33%;
  text-align: center;
  margin-top: 20px;
  padding: 4px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Back = styled.div`
text-align: center;
margin-left: -15px;
margin-top: 15px
text-decoration: none;
`;

const Signup = props => {

    return (
      <div>
        <Nav />
        <FormWrapper>
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
            <ButtonWrapper>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
          </ButtonWrapper>
          </FormWrapper>
          <Back>
      <Link to='/'>
        Back
      </Link>
      </Back>
        </div>
    );
};


export default Signup