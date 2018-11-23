import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute =
  ({
  component: Component,
  adminRoute = false,
  appState = null,
  onSongSelect,
  ...rest
  }) => {
  const admins = ['cknightjohnson@gmail.com', 'drmklong@gmail.com', 'tinyanthems@gmail.com'];
  const isAdmin = admins.includes(appState.email);
  const adminOrUser = adminRoute ? isAdmin : appState.uid;
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props =>
        adminOrUser ? (
          <Component {...props} onSongSelect={onSongSelect} appState={appState} />
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
