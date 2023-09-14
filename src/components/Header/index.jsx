import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <h1>Movies library</h1>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p>Lucas Alves</p>
          <button>sair</button>
        </div>
        <img src="https://github.com/lucasdoloh0v.png" alt="Usuário" />
      </Profile>
    </Container>
  );
}
