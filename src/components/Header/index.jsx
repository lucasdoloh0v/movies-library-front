import { useNavigate } from 'react-router-dom';

import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Movies library</h1>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile onClick={() => navigate('/profile')}>
        <div>
          <p>Lucas Alves</p>
          <button>sair</button>
        </div>
        <img src="https://github.com/lucasdoloh0v.png" alt="Usuário" />
      </Profile>
    </Container>
  );
}
