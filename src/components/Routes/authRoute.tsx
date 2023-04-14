import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';

const AuthRoute = () => {
  const { loggedIn, checkingStatus } = useAuth();

  if (checkingStatus) return <div>Loading...</div>;

  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;
