import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import User from './User';

class FacebookLogin extends Component {
  constructor(props){
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
  }
  handleResponse = (data) => {
    console.log(data);
    this.props.onFacebookLogin(data.profile.id, data.profile.name)
  }
  handleError = (error) => {
    console.error(error);
  }
  render() {
    let displaySwitch = 'default';
    const facebookLoginDisplay =
      <FacebookProvider appId="202716210312589">
        <Login
        scope="email"
        onResponse={this.handleResponse}
        onError={this.handleError}>
          <div className="facebook-button">Login via Facebook</div>
        </Login>
      </FacebookProvider>;
    const userComponentDisplay = <User />;
    if (!this.props.userAccount.userId) {
      displaySwitch = facebookLoginDisplay;
    } else {
      displaySwitch = <User userAccount={this.props.userAccount}/>;
    }
    return (
      <div>
        {displaySwitch}
      </div>
    );
  }
}

export default FacebookLogin
