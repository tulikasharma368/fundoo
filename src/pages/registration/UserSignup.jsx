import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./signup.css";
import { validEmail, validPassword } from "../regex.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import imgsignup from "./assets/imgsignup.svg";
import { Snackbar, IconButton } from "@mui/material";
import Userservices from "../../services/Userservice";
const obj = new Userservices();

class Usersignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      username: "",
      password: "",
      confirmpass: "",
      fnameError: false,
      lnameError: false,
      usernameError: false,
      passwordError: false,
      confirmpassError: false,
      snackbaropen: false,
      snackbarmsg: "",
    };
  }

  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };

  checkValidation = () => {
    var isError = false;
    const errorsstate = this.state;

    errorsstate.fnameError = this.state.fname !== "" ? false : true;
    errorsstate.lnameError = this.state.lname !== "" ? false : true;
    errorsstate.usernameError = this.state.username !== "" ? false : true;
    // errorsstate.usernameError = validEmail.test(this.state.username)? false : true;
    // errorsstate.usernameError = this.state.username !== ''? (!validEmail.test(this.state.username)? "wrong" : false) : "empty";
    errorsstate.passwordError = this.state.password !== "" ? false : true;
    errorsstate.confirmpassError = this.state.confirmpass !== "" ? false : true;
    this.setState({
      ...errorsstate,
    });

    return (isError =
      errorsstate.fnameError ||
      errorsstate.lnameError ||
      errorsstate.usernameError ||
      errorsstate.passwordError ||
      errorsstate.confirmpassError);
  };

  next = () => {
    // console.log('inside checkValidation');
    var isValid = this.checkValidation();
    // console.log(isValid);
    if (!isValid) {
      console.log("validation done");
      let signupObj = {
        firstName: this.state.fname,
        lastName: this.state.lname,
        email: this.state.username,
        password: this.state.password,
        service: "advance",
      };
      console.log(signupObj);
      obj
        .Signup(signupObj)
        .then((response) => {
          console.log(response);
          this.setState({
            snackbaropen: true,
            snackbarmsg: "Signup Successfull!",
          });
          var timer = setTimeout(function () {
            window.location = "/";
          }, 1000);
        })
        .catch((error) => {
          this.setState({ snackbaropen: true, snackbarmsg: "Signup Failed!" });
          console.log(error);
        });
    }
  };

  change = (e) => {
    // this.next();
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="signup-page">
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message_id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              x
            </IconButton>,
          ]}
        />
        <div className="body-signup">
          <div className="main-signup">
            <p className="fundoo-logo">
              <span className="f">F</span>
              <span className="u">U</span>
              <span className="n">N</span>
              <span className="d">D</span>
              <span className="o">O</span>
              <span className="o2">O</span>
            </p>
            <h1 className="create-signup">Create your Fundoo account</h1>
            <p>Continue to Fundoo</p>
            <div className="name-signup">
              <div className="textfield">
                <TextField
                  id="firstName-signip"
                  type="text"
                  name="fname"
                  label="First name"
                  variant="outlined"
                  size="small"
                  onChange={(e) => this.change(e)}
                  // onInput={this.next}
                  error={this.state.fnameError}
                  helperText={
                    this.state.fnameError ? "First name is required" : ""
                  }
                />
              </div>
              <div className="textfield">
                <TextField
                  id="lastName-signup"
                  type="text"
                  name="lname"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  error={this.state.lnameError}
                  // onInput={this.next}
                  onChange={(e) => this.change(e)}
                  helperText={
                    this.state.lnameError ? "Last name is required" : ""
                  }
                />
              </div>
            </div>
            <div className="user-signup">
              <TextField
                id="user-signup"
                name="username"
                label="Username"
                variant="outlined"
                size="small"
                // endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                error={this.state.usernameError}
                onChange={(e) => this.change(e)}
                helperText={
                  this.state.usernameError ? "Username is required" : ""
                }
                // helperText={this.state.usernameError=="empty" ? 'Username is required' : (this.state.usernameError=="wrong" ? 'enter a proper username' : '')}
              />
            </div>
            <p className="user-text-signup">
              You can use letters, symbols and periods
            </p>
            <div className="password-signup">
              <div className="textfield">
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  error={this.state.passwordError}
                  onChange={(e) => this.change(e)}
                  helperText={
                    this.state.passwordError ? "Password is required" : ""
                  }
                />
              </div>
              <div className="textfield">
                <TextField
                  id="confirm"
                  name="confirmpass"
                  type="password"
                  label="Confirm"
                  variant="outlined"
                  size="small"
                  error={this.state.confirmpassError}
                  onChange={(e) => this.change(e)}
                  helperText={
                    this.state.confirmpassError
                      ? "Confirm password required"
                      : ""
                  }
                />
              </div>
            </div>
            <p className="password-condition">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
            <FormControlLabel
              className="show-password"
              control={<Checkbox />}
              label="Show password"
            />
            <div className="signup-end">
              <Link to="/" className="link-signup">
                <p className="instead-signup">Sign in instead</p>
              </Link>
              <button className="next-signup" onClick={this.next}>
                Next
              </button>
            </div>
          </div>
          <div className="image-div">
            <img src={imgsignup} className="img-signup" />
          </div>
        </div>
      </div>
    );
  }
}

export default Usersignup;
