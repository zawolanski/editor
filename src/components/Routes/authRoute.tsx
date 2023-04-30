import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@hooks';

export const AuthRoute = () => {
  const { loggedIn, checkingStatus } = useAuth();

  if (checkingStatus) return <div>Loading...</div>;

  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};
