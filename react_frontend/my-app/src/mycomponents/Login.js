import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import {
  Redirect
} from "../../../node_modules/react-router-dom";
class Login extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      email: null,
      password: null,
      login: false,
      store: null,
    };
  }

  login() {
    
    var formdata = new FormData();
    formdata.append("email", this.state.email);
    formdata.append("password", this.state.password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/token/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        
        if(result.access){
          //console.warn("results", result);
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              store: result.access,
              email:this.state.email,
            })
          );
          console.log("ok");
          this.setState({login:true})
          return <Redirect to="/posts" />;

        }
        else
        {
          alert(result)
        }
        
        
      })
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div className="container all-margin-top minimum-height">
        <div className="mt-5"></div>
        <h1 className="mt-5 mb-3 text-left">
          Login
          <small> Form</small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Login</li>
        </ol>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <form name="sentMessage" id="contactForm" className="text-left">
              <div className="control-group form-group">
                <div className="controls">
                  <label>Email*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
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
                    id="password"
                    onChange={(event) => {
                      this.setState({ password: event.target.value });
                    }}
                  ></input>
                </div>
              </div>
              <div id="success"></div>

              <button
                type="button"
                onClick={() => {
                  this.login();
                }}
                className="btn btn-primary"
                id="login-btn"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
