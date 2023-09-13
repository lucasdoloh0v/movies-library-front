import { FiLock, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';

export function SignInForm() {
  const navigate = useNavigate();

  return (
    <Container>
      <h3>Faça seu Login</h3>
      <Input icon={FiMail} placeholder="E-mail" />
      <Input icon={FiLock} placeholder="Senha" type="password" />

      <Button title="Entrar" className="enterBtn" />
      <Button title="Criar conta" variant="text-button" type="button" onClick={() => navigate('/register')} />
    </Container>
  );
}
