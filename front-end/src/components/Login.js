import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Nav from "./Nav";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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



const Login = () => {

  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth().post(`https://test-deploy-sauti.herokuapp.com/api/auth/login`, {username: credentials.username, password: credentials.password})
      .then(res => {
        console.log("AM: Login.js: login res", res);
        localStorage.setItem("token", res.data.token);
        push("/itemlist");
      })
  }

  return (
    <div>
      <Nav />
      <FormWrapper onSubmit={login} >
        <h1>Login</h1>
        <TextField
          label="username"
          variant="outlined"
          onChange={handleChange}
          type="username"
          placeholder="Username"
          name="username"
          value={credentials.username}
        />
        <TextField
          label="password"
          variant="outlined"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
        />{" "}
        <ButtonWrapper>
          <Button variant="contained" type="submit" onClick={login}>
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