import { auth, provider } from "./firebase.js";
import React from "react";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider.js";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1920px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook_logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook_text_logo"
        />
      </div>
      <button type="submit" onClick={signIn}>
        SIGN IN
      </button>
    </div>
  );
}

export default Login;
