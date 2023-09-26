import { createContext, useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { api } from '../services/api';
import { useLoading } from '../hooks/useLoading';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
  const { setLoading } = useLoading();

  const getUser = useCallback(async () => {
    if (Object.keys(cookie).length) {
      api.defaults.headers.common['Authorization'] = `Bearer ${cookie.accessToken}`;
      try {
        const { data } = await api.get('/sessions');

        setUser(data.user);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          alert('Sua sessão expirou');
        }
      }
    } else {
      setUser({});
      setLoading(false);
    }
  }, [cookie, setLoading]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  async function signIn({ email, password }) {
    try {
      const {
        data: { token },
      } = await api.post('/sessions', { email, password });

      api.defaults.headers.common['Authorization'] = `Bearer ${cookie.accessToken}`;

      setCookie('accessToken', token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possivel fazer login');
      }
    }
  }

  function logOut() {
    removeCookie('accessToken');
  }

  async function updateProfile(userUpdated, avatarFile) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);

        user.avatar = response.data.avatar;
      }

      await api.put('/users', userUpdated);

      setUser((prev) => ({ ...prev, ...userUpdated }));
      alert('Perfil atualizado');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possivel atualizar o perfil');
      }
    }
  }

  return <AuthContext.Provider value={{ signIn, logOut, updateProfile, user }}>{children}</AuthContext.Provider>;
}
