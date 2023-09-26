import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useLoading } from '../../hooks/useLoading';

import avatarPlaceolder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  const navigate = useNavigate();

  const { setLoading } = useLoading();

  const { logOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceolder;

  function handleLogOut() {
    setLoading(true);
    navigate('/');
    logOut();
  }

  return (
    <Container>
      <h1>Movies library</h1>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p onClick={() => navigate('/profile')}>{user.name}</p>
          <button type="button" onClick={handleLogOut}>
            sair
          </button>
        </div>
        <img src={avatarUrl} alt="Usuário" onClick={() => navigate('/profile')} />
      </Profile>
    </Container>
  );
}
