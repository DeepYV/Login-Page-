import React, { useState, useEffect } from "react";
import FormContent from "../component/FormContent";
import Label from "../component/Label";
import Link from "next/link";
import Header from "../component/Header";
import Fbutton from "../component/Fbutton";
import Gbutton from "../component/Gbutton";
import Router from "next/router";

import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const _onClickHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status == "200") {
       
          localStorage.setItem("token", response.data.token);
        
          Router.push("/dashboard");
        }
        else 
        {
          alert("invalid creditional")
        
        }
    
      })
      .catch(function (error) {
     
    
        alert("wrong creditionals");
      
      });
  };

  return (
    <div>
      <Header />
      <div className="app_content">
        <div className="form_loading">
          <div className="form_box">
            <div className="form_tabs">
              <div className="second_tab">
                <Link href="/">
                  <a>sign up</a>
                </Link>
              </div>
              <div className="signin_tab">
                <Link href="/sign">
                  <a>sign in</a>
                </Link>
              </div>
            </div>
            <div className="center_content">
              <FormContent />
              <div className="gfbutton container">
                <Gbutton /> <Fbutton />
              </div>
              <div className="container">
                <div className="or-separator">
                  <p className="or-separator-or">or</p>
                </div>
              </div>
              <Label
                main_class="main_class"
                sub_class="sub_class"
                label="Email_Address"
                type="text"
                placeholder="Email Address"
                setEm={(...args) => setEmail(args[0])}
              ></Label>
              <Label
                main_class="main_class"
                sub_class="sub_class"
                label="Password"
                type="password"
                placeholder="Password"
                setPass={(...args) => setPassword(args[0])}
              ></Label>
              <div className="form-info" label="Terms of Service">
                <span>
                  By clicking &quot; Sign up,&quot; you agree to our
                  <a href='https://www.udacity.com/legal/terms-of-service'>
                    Terms of Use
                  </a>
                  and our
                  <a href="https://www.udacity.com/legal/privacy">
                   
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>
              <div>
         <button
                  className="form-button"
                  type="button"
                  onClick={_onClickHandler}
                >
                  <span className="form-content">Sign in</span>
                </button>
                <div className="container">
                  <div className="forgetpassword">Forget your Password</div>
                </div>
                <div className="container">
                  <div className="or-separator">
                    <p className="or-separator-or">or</p>
                  </div>
                </div>
                <div className="container">
                  <div className="forgetpassword">
                    Sign in with your organization.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
