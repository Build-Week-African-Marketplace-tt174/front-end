import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../utils/axiosWithAuth";




const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundImage: `url(https://www.aryanint.com/wp-content/uploads/2017/06/Organic-spice_banner3.jpg)`,
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


  

export default function Nav(props) {
  const classes = useStyles();
  // const [search, setSearch] = useState('')

  const {push} = useHistory();

  
  const logout = e => {
    e.preventDefault();

    axiosWithAuth().get(`https://africanmarketplace-tt174.herokuapp.com/api/auth/logout`)
      .then(res => {
        console.log(res.data);
        push("/login");
      })
      .catch(err => console.error("Could not Logout: ", err.message));
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
              <RouterLink style={{ textDecoration: "none" }} to="/signup">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  Sign Up
                </Button>
              </RouterLink>
              <RouterLink style={{ textDecoration: "none" }} to="/login">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  Login
                </Button>
              <RouterLink style={{ textDecoration: "none"}} to="/login" >
                <Button onClick={logout} href="#" color="primary" variant="contained" className={classes.link}>
                  Logout
                </Button>
              </RouterLink>
              </RouterLink> 
              <RouterLink style={{ textDecoration: "none" }} to="/about">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  About
                </Button>
                </RouterLink>
                <RouterLink style={{ textDecoration: "none" }} to="/itemlist">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  Products
                </Button>
              </RouterLink>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}