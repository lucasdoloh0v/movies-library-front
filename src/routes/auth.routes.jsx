import { Route, Routes } from 'react-router-dom';
import { UnauthenticatedHome } from '../pages/UnauthenticatedHome';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UnauthenticatedHome />} />
      <Route path="/register" element={<UnauthenticatedHome />} />
    </Routes>
  );
}

export default AuthRoutes;
