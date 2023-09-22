import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  const navigate = useNavigate();

  const { logOut } = useAuth();

  function handleLogOut() {
    logOut();
  }

  return (
    <Container>
      <h1>Movies library</h1>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p onClick={() => navigate('/profile')}>Lucas Alves</p>
          <button type="button" onClick={handleLogOut}>
            sair
          </button>
        </div>
        <img src="https://github.com/lucasdoloh0v.png" alt="Usuário" onClick={() => navigate('/profile')} />
      </Profile>
    </Container>
  );
}
