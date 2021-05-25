import { useState, useRef, useContext } from "react";

import AuthContext from "../../context/auth-context";
import classes from "./Login.module.css";
import { useRouter } from "next/router";

const AuthForm = () => {
  //   const history = useHistory();
  const router = useRouter();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isExistingEmailError, setIsExistingEmailError] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isEmailNotFound, setIsEmailNotFound] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4FVnX8rTEyF9TvOU_dV7adztD7p-HcW8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4FVnX8rTEyF9TvOU_dV7adztD7p-HcW8";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          router.push("/user-profile");
          return res.json();
        } else {
          return res.json().then((data) => {
            if (data.error.message.includes("WEAK_PASSWORD")) {
              setIsPasswordError(true);
            }
            if (data.error.message === "EMAIL_EXISTS") {
              setIsExistingEmailError(true);
            }
            if (data.error.message === "INVALID_PASSWORD") {
              setIsInvalidPassword(true);
            }
            if (data.error.message === "EMAIL_NOT_FOUND") {
              setIsEmailNotFound(true);
            }

            setTimeout(() => {
              setIsPasswordError(false);
              setIsExistingEmailError(false);
              setIsInvalidPassword(false);
              setIsEmailNotFound(false);
            }, 5000);

            let errorMessage = "Authenication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        console.log(data.localId);
      })
      .catch((err) => {});
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
        {isPasswordError && (
          <div className={classes.error}>
            <p>Weak Password!</p>
            <p>Password should be at least 6 characters</p>
          </div>
        )}
        {isExistingEmailError && (
          <div className={classes.error}>
            <p>{emailInputRef.current.value}</p>
            <p> already exists.</p>
          </div>
        )}
        {isInvalidPassword && (
          <div className={classes.error}>
            <p> Invalid password.</p>
          </div>
        )}
        {isEmailNotFound && (
          <div className={classes.error}>
            <p> Email not found.</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default AuthForm;
