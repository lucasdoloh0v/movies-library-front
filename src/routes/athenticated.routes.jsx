import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';
import { NewMovie } from '../pages/NewMovie';

export function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new-movie" element={<NewMovie />} />
      {/* <Route path="/movie-detail/:id" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
