import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  const admins = ['cknightjohnson@gmail.com', 'drmklong@gmail.com'];
  let isAdmin = false;
  admins.forEach(each => {
    if (rest.appState.email === each) {
      isAdmin = true;
    }
  });
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? (
          <Component {...props} appState={rest.appState} />
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

export default AdminRoute;
