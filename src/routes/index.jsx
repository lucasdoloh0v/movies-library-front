import { BrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './auth.routes';
// import { AuthenticatedRoutes } from './athenticated.routes';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      {/* <AuthenticatedRoutes /> */}
    </BrowserRouter>
  );
}
