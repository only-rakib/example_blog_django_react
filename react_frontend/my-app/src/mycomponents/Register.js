import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Nav from "./Nav";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      confirm_pass: null,
    };
  }
  register() {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("first_name", this.state.first_name);
    urlencoded.append("last_name", this.state.last_name);
    urlencoded.append("email", this.state.email);
    urlencoded.append("password", this.state.password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/auth/register/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div>
        <Nav/>
        <div className="container all-margin-top text-left minimum-height">
          <h1 className="mt-4 mb-3">
            Register 
            <small> Form</small>
          </h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Register</li>
          </ol>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>First Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      required
                      data-validation-required-message="Please enter your first name."
                      onChange={(event) => {
                        this.setState({ first_name: event.target.value });
                      }}
                    ></input>
                    <p className="help-block"></p>
                  </div>
                </div>
                <div className="controls">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    required
                    data-validation-required-message="Please enter your last name."
                    onChange={(event) => {
                      this.setState({ last_name: event.target.value });
                    }}
                  ></input>
                  <p className="help-block"></p>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Email*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email."
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    ></input>
                    <p className="help-block"></p>
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Password*</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      required
                      data-validation-required-message="Please enter your password."
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Confirm Password*</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirm_password"
                      id="confirm_password"
                      required
                      data-validation-required-message="Please confirm your password."
                      onChange={(event) => {
                        this.setState({ confirm_pass: event.target.value });
                      }}
                    ></input>
                  </div>
                </div>
                <div id="success"></div>

                <button
                  type="button"
                  onClick={() => {
                    this.register();
                  }}
                  className="btn btn-primary"
                  id="login-btn"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Register;
