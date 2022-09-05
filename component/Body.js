import React from "react";
import Link from "next/link";
import Field from "../component/Label";
import Fbutton from "./Fbutton";
import Gbutton from "./Gbutton";
import FormContent from "./FormContent";
const Body = () => {
  return (
    <div className="app_content">
      <div className="form_loading">
        <div className="form_box">
          <div className="form_tabs">
            <div className="signup_tab">
              <Link href="/">
                <a>sign up</a>
              </Link>
            </div>
            <div className="second_tab">
              <Link href="/login">
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
            </div>{" "}
            <form>
              <Field label="First_Name" type="text" placeholder="First Name">
                {" "}
              </Field>
              <Field label="Last_Name" type="text" placeholder="Last Name">
                {" "}
              </Field>
              <Field
                label="Email_Id"
                type="text"
                placeholder="Email Address"
              ></Field>
              <Field
                label="password"
                type="password"
                placeholder="Password"
              ></Field>
              <div class="form-info" label="Terms of Service">
                <span>
                  By clicking "Sign up," you agree to our{" "}
                  <a href="https://www.udacity.com/legal/terms-of-service">
                    Terms of Use
                  </a>{" "}
                  and our
                  <a href="https://www.udacity.com/legal/privacy">
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>
              <div>
                <button className="form-button" type="button">
                  <span className="form-content">Sign up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
