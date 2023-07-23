import { Link } from "react-router-dom";
import "./login.scss";
import React, { useRef } from "react";
import { auth } from "../../firebase";
const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_top">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
      </div>

      <div className="container">
        <form className="login_form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Enter Email" ref={emailRef} />
          <input
            type="password"
            placeholder="Enter Password"
            ref={passwordRef}
          />
          <button className="login_button" onClick={SignIn}>Sign In</button>

          <div className="login_more_info">
            <span>
              <input type="checkbox" /> Remember me
            </span>
            <p>Need help?</p>
          </div>

          <div className="more_info">
            <p className="login_sign_up">
              New to Netflix? <span>Sign up now.</span>
            </p>

            <p className="login_desc">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
