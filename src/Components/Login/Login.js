import React from "react";
import { loginUrl } from "../../spotify";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      {/* <h1>This is the Login page</h1> */}
      {/* Spotify logo */}
      <div className="login__logo">
        <img
          className="login__image"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <div className="login__detail">
        {/* Login with Spotify  button */}
        <p className="login__text">To continue, log in to Spotify.</p>
        <button
          type="button"
          class="btn btn-primary rounded-pill facebook__button"
        >
          CONTINUE WITH FACEBOOK
        </button>
        <button
          type="button"
          class="btn btn-primary rounded-pill bg-dark text-white apple__button"
        >
          CONTINUE WITH APPLE
        </button>
        <a
          type="button"
          href={loginUrl}
          class="btn btn-outline-primary rounded-pill google__button"
        >
          CONTINUE WITH GOOGLE
        </a>
        <button
          type="button"
          class="btn btn-outline-primary rounded-pill phoneNumber__button"
        >
          CONTINUE WITH PHONE NUMBER
        </button>
      </div>

      <div className="login__demark__hr">
        <hr className="login__hr" />
        <span className="login__or">or</span>
        <hr className="login__hr" />
      </div>

      <div className="login__form">
        <form className="form-inline login__form__main">
          <div class="form-group first__input__field">
            <label for="exampleInputEmail1">Email address or username</label>
            <input
              type="email"
              class="form-control login__form__main"
              placeholder="Email address or username"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control login__form__main"
              placeholder="Password"
              id="exampleInputPassword1"
            />

            {/* eslint-disable-next-line */}
            <a className="login__ancho" href="#">
              Forgot your password?
            </a>
          </div>
          <div class="form-group form-check form__check">
            <span>
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label px-2 mb-2" for="exampleCheck1">
                Remember me
              </label>
              <button
                type="submit"
                class="btn btn-primary text-white rounded-pill form__button"
              >
                LOG IN
              </button>
            </span> 
          </div>
        </form>
      </div>

      <div className="signup">
        <hr className="signup__line" />
        <p className="signup__text">Don't have an account?</p>
        <button
          type="button"
          class="btn btn-outline-primary rounded-pill google__button"
        >
          <p>SIGN UP FOR SPOTIFY</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
