import { createContext, useCallback, useEffect, useState } from 'react';

import { api } from '../services/api';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const getUser = useCallback(async () => {
    if (Object.keys(cookie).length) {
      api.defaults.headers.authorization = `Bearer ${cookie.accessToken}`;
      try {
        const userResponse = await api.get('/sessions');

        setUser(userResponse);
      } catch (error) {
        if (error.response.status === 401) {
          alert('Sua sessão expirou');
        }
      }
    }
  }, [cookie]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  async function signIn({ email, password }) {
    try {
      const {
        data: { token },
      } = await api.post('/sessions', { email, password });

      api.defaults.headers.authorization = `Bearer ${token}`;
      setCookie('accessToken', token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possivel fazer login');
      }
    }
  }

  async function logOut() {
    removeCookie('accessToken');
    setUser({});
  }

  return <AuthContext.Provider value={{ signIn, logOut, user }}>{children}</AuthContext.Provider>;
}
