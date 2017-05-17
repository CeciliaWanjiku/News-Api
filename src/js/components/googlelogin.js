import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log({ accessToken: idToken });
  }

  render() {
    const clientId ='183978721876-rub1mcbdks8itvu3ckuupo70jo62v4e3.apps.googleusercontent.com';
    this.clientId = clientId
    const responseGoogle = (response) => {
      user.login(response);
      document.location.reload();
    };
    return (
      <div className="login">
        <GoogleLogin
          socialId="183978721876-rub1mcbdks8itvu3ckuupo70jo62v4e3.apps.googleusercontent.com"
          class="google-login"
          scope="profile"
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }

}

export default Login;
