import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AuthenticatedRoutes } from './athenticated.routes';

export function AppRoutes() {
  const { user } = useAuth();
  return <BrowserRouter>{user ? <AuthenticatedRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
