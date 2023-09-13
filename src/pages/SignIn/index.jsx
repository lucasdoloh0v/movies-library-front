import { BackgroundImg, Container, Login } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn() {
  return (
    <Container>
      <Login>
        <h1>Movies Library</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h3>Faça seu Login</h3>
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" type="password" />

        <Button title="Entrar" className="enterBtn" />
        <Button title="Criar conta" variant="text-button" className="createAccBtn" />
      </Login>
      <BackgroundImg />
    </Container>
  );
}
