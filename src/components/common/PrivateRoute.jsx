import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute =
  ({
  component: Component,
  adminRoute = false,
  appState = null,
  onSongSelect, songSelected,
  ...rest
  }) => {
  const admins = ['cknightjohnson@gmail.com', 'drmklong@gmail.com', 'tinyanthems@gmail.com'];
  const isAdmin = admins.includes(appState.email);
  const adminOrUser = adminRoute ? isAdmin : appState.uid;

  return (
    <Route
      {...rest}
      render={props =>
        adminOrUser ? (
          <Component {...props}
            songSelected={songSelected}
            onSongSelect={onSongSelect}
            appState={appState} />
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
