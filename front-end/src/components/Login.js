import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Nav from "./Nav";

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



const Login = ({ handleChange }) => {
  return (
    <div>
      <Nav />
      <FormWrapper>
        <h1>Login</h1>
        <TextField
          label="username"
          variant="outlined"
          onChange={handleChange}
          type="username"
          placeholder="Username"
          name="username"
        />
        <TextField
          label="password"
          variant="outlined"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />{" "}
        <ButtonWrapper>
          <Button variant="contained" type="submit">
            Login
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

export default Login;