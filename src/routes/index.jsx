import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AuthenticatedRoutes } from './athenticated.routes';

export function AppRoutes() {
  const { user } = useAuth();
  return <BrowserRouter>{Object.keys(user).length ? <AuthenticatedRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
