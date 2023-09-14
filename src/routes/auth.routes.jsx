import { Route, Routes } from 'react-router-dom';

import { UnauthenticatedHome } from '../pages/UnauthenticatedHome';
import { NotFound } from '../pages/NotFound';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UnauthenticatedHome />} />
      <Route path="/register" element={<UnauthenticatedHome />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
