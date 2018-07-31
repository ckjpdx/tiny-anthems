import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  const admins = [
    process.env.REACT_APP_UIDJ,
    process.env.REACT_APP_UIDM
    ];
  return (
    <Route
      {...rest}
      render={props =>
        rest.appState.uid === admins[0] || admins[1] ? (
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
