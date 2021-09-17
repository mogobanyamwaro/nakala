import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useGlobalContext } from '../context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useGlobalContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default PrivateRoute;
