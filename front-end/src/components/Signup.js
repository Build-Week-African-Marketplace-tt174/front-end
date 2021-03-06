import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { withFormik } from "formik";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import Nav from "./Nav"
import * as Yup from "yup";
import { axiosWithAuth } from '../utils/axiosWithAuth';


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

  const { push } = useHistory();

  const [newUser, setNewUser] = useState({
    company: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const signup = e => {
    e.preventDefault();

    axiosWithAuth().post(`https://test-deploy-sauti.herokuapp.com/api/auth/register`, {company: newUser.company, username: newUser.username, email: newUser.email, password: newUser.password})
      .then(res => {
        console.log("AM: Signup.js: signup res", res.data);

        push("/login");
      })
      .catch(err => {
        console.log(newUser);
        console.error("Could not signup: ", err.message)
      });
  };

    return (
      <div>
        <Nav />
        <FormWrapper onSubmit={signup}>
            <h1>Create an Account</h1>
            <TextField
            label="Company Name"
            type="company"
            placeholder="Company Name"
            name="company"
            value={newUser.company}
            onChange={handleChange}
            />
            <TextField
             label="Email"
             type="email"
             placeholder="Email"
             name="email"
             value={newUser.email}
             onChange={handleChange}
            />
            <TextField
            label="Username"
            type="username"
            placeholder="Username"
            name="username"
            value={newUser.username}
            onChange={handleChange}
            />
            <TextField
             label="Password"
             type="password"
             placeholder="Password"
             name="password"
             value={newUser.password}
             onChange={handleChange}
            />
            <ButtonWrapper>
          <Button variant="contained" type="submit" onClick={signup}>
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

const FormikApp = withFormik({
  mapPropsToValues({ companyname, email, username, password}) {
      return {
          companyname: companyname || "",
          email: email || "",
          username: username || "",
          password: password || ""
      };
  },
  validationSchema: Yup.object().shape({
      companyname: Yup.string("Company name is required")
      .required(),
      email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),
      username: Yup.string()
      .required("Username is required"),
      password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required()
  }),
  handleSubmit(values, { props }) {
      props.registerUser( values, props.history);
  }
})(Signup);


export default FormikApp