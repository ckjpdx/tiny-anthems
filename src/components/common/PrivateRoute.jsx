import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, adminRoute = false, appState = null, ...rest }) => {
  const admins = ['cknightjohnson@gmail.com', 'drmklong@gmail.com', 'tinyanthems@gmail.com'];
  let isAdmin = false;
  admins.forEach(each => {
    if (appState.email === each) {
      isAdmin = true;
    }
  });
  const adminOrUser = adminRoute ? isAdmin : appState.uid;
  return (
    <Route
      {...rest}
      render={props =>
        adminOrUser ? (
          <Component {...props} appState={appState} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
