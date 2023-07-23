import { auth } from "../../firebase";
import "./register.scss";
import React, { useRef, useState } from "react";

const RegisterPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const handelStart = () => {
    setEmail(emailRef.current.value);
  };

  const SignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        email,
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
    <div className="register">
      <div className="register_top">
        <img
          className="register_logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />
        <button>Sign In</button>
      </div>
      <div className="container">
        <div className="container_info">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="Email Address" ref={emailRef} />
              <button className="register_button" onClick={handelStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input
                type="password"
                placeholder="Enter Password"
                ref={passwordRef}
              />
              <button className="register_button" onClick={SignUp} >
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
