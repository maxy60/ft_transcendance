import React from "react";
import './Login.css';
import logo from '/mnt/nfs/homes/lsalin/ft_transcendance/frontend/src/assets/images/42_Logo.svg';

function	Login()
{
	const	redirectToIntra = () =>
	{
		const	intraAuthUrl = "https://intra.42.fr/oauth/authorize?client_id=u-s4t2ud-d73ae5d41fb1e973ad2df622868f6641c621b3c78fb8a03dc5f70cb70ab23cf4D&redirect_uri=https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-d73ae5d41fb1e973ad2df622868f6641c621b3c78fb8a03dc5f70cb70ab23cf4&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback&response_type=code&response_type=code";
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