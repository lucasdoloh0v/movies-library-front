import { BrowserRouter } from 'react-router-dom';

import { AuthenticatedRoutes } from './athenticated.routes';
// import { AuthRoutes } from './auth.routes';

export function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <AuthenticatedRoutes />
    </BrowserRouter>
  );
}
