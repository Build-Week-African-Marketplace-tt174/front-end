import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundImage: `url(https://suindependent.com/wp-content/uploads/2018/11/cranberries.jpg)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    },
    toolbarTitle: {
      flexGrow: 1,
      fontWeight: 900,
      color: "#333453"
    },
    link: {
      margin: theme.spacing(6, 1.5)
    }
  }));

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
  border: 2px solid black;
  padding: 5px;
  background-color: white;
`;

const Banner = styled.div`
background-image: url('http://krishnacanvassers.com/images/beans-banner.jpg');
background-size: cover;
background-position: center;
border-bottom: 3px solid black;
border-top: 3px solid black;
height: 280px;
`;

const Login = styled.div`
text-align: center;
display: inline-flex;
text-decoration: none;
`

const NewLink = styled.div`
text-align: center;
display: inline-flex;
text-decoration: none;
`

function WelcomePage() {
    const classes = useStyles();

  return (
    <div className="welcome">
       <div className="title">
        <h1>Sauti Marketplace</h1>
        </div>
      <Banner />
      <FormWrapper>
        <ButtonWrapper>
          <h1>Sauti Africa empowers small business owners to improve their business and economic opportunities. </h1>
        </ButtonWrapper>
        <Link to='/signup'>
            <Button
                color="primary"
                variant="contained"
                className={classes.link}
             >
            Signup
            </Button>
            </Link>
            <div>
          <Login>
        <p>Already a member?</p>
        </Login>
        </div>
        <div>
          <NewLink>
        <Link to="/login">
          <p>Login</p>
        </Link>
        </NewLink>
        </div>
      </FormWrapper>
    </div>
  );
};

export default WelcomePage