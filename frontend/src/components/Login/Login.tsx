import React from "react";
import "./Login.css";
import logo from "../../assets/images/42_Logo.svg";

function Login() {
  const redirectToIntra = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const intraAuthUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = intraAuthUrl;
  };

  return (
    <div className="login">
      <button onClick={redirectToIntra}>
        <div className="logo-container">
          <img src={logo} alt="logo 42" className="logo" />
          <span className="sign-in">Login</span>
        </div>
      </button>
    </div>
  );
}

export default Login;
