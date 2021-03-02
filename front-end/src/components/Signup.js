import React from 'react';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

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

const Banner = styled.div`
background-image: url('https://i.pinimg.com/originals/f4/72/15/f4721513f184bc30f9e6bebf679c431c.jpg');
background-size: cover;
background-position: center;
border-bottom: 3px solid black;
height: 280px;
`;

const Signup = props => {

    return (
      <div>
        <Banner />
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
        </div>
    );
};


export default Signup