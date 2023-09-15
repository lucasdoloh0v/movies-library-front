import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';

export function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/new-movie" element={} />
      <Route path="/movie-detail/:id" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
