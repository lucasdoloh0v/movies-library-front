import { createContext, useState } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  async function signIn({ email, password }) {
    try {
      const {
        data: { token, user },
      } = await api.post('/sessions', { email, password });

      api.defaults.headers.authorization = `Bearer ${token}`;
      document.cookie = `accessToken=${token};`;
      setUser(user);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possivel fazer login');
      }
    }
  }

  return <AuthContext.Provider value={{ signIn, user }}>{children}</AuthContext.Provider>;
}
